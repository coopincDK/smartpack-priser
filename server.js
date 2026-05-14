const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3030;
const DATA_FILE = path.join(__dirname, 'data', 'prices.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function readData() { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8')); }
function writeData(d) { fs.writeFileSync(DATA_FILE, JSON.stringify(d, null, 2)); }

// GET all
app.get('/api/prices', (req, res) => {
  try { res.json(readData()); } catch(e) { res.status(500).json({ error: 'Laesefejl' }); }
});

// PUT hourly rate + recalc
app.put('/api/prices/hourlyRate', (req, res) => {
  try {
    const data = readData();
    const rate = Number(req.body.hourlyRate);
    if (!rate || rate < 1) return res.status(400).json({ error: 'Ugyldig timepris' });
    data.hourlyRate = rate;
    data.categories.forEach(cat =>
      cat.tasks.forEach(task => {
        if (task.minutes) task.price = Math.round((rate / 60) * task.minutes);
      })
    );
    writeData(data);
    res.json({ ok: true, data });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// PUT update task fields
app.put('/api/prices/task/:taskId', (req, res) => {
  try {
    const data = readData();
    let found = false;
    data.categories.forEach(cat => {
      const task = cat.tasks.find(t => t.id === req.params.taskId);
      if (task) { found = true; Object.assign(task, req.body); }
    });
    if (!found) return res.status(404).json({ error: 'Ikke fundet' });
    writeData(data);
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// DELETE task
app.delete('/api/prices/task/:taskId', (req, res) => {
  try {
    const data = readData();
    let found = false;
    data.categories.forEach(cat => {
      const idx = cat.tasks.findIndex(t => t.id === req.params.taskId);
      if (idx !== -1) { found = true; cat.tasks.splice(idx, 1); }
    });
    if (!found) return res.status(404).json({ error: 'Ikke fundet' });
    writeData(data);
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// POST add task to category
app.post('/api/prices/category/:catId/task', (req, res) => {
  try {
    const data = readData();
    const cat = data.categories.find(c => c.id === req.params.catId);
    if (!cat) return res.status(404).json({ error: 'Kategori ikke fundet' });
    const id = req.params.catId + '_' + Date.now();
    const task = { id, name: req.body.name || 'Ny opgave', desc: '', minutes: 15, price: data.hourlyRate / 4, guideUrl: null, ...req.body };
    cat.tasks.push(task);
    writeData(data);
    res.json({ ok: true, task });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// PUT move task to another category (and reorder)
app.put('/api/prices/task/:taskId/move', (req, res) => {
  try {
    const data = readData();
    const { toCatId, toIndex } = req.body;
    let task = null;
    // Remove from source
    data.categories.forEach(cat => {
      const idx = cat.tasks.findIndex(t => t.id === req.params.taskId);
      if (idx !== -1) { [task] = cat.tasks.splice(idx, 1); }
    });
    if (!task) return res.status(404).json({ error: 'Ikke fundet' });
    const toCat = data.categories.find(c => c.id === toCatId);
    if (!toCat) return res.status(404).json({ error: 'Malkategori ikke fundet' });
    toCat.tasks.splice(toIndex ?? toCat.tasks.length, 0, task);
    writeData(data);
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// PUT reorder within same category
app.put('/api/prices/category/:catId/reorder', (req, res) => {
  try {
    const data = readData();
    const cat = data.categories.find(c => c.id === req.params.catId);
    if (!cat) return res.status(404).json({ error: 'Kategori ikke fundet' });
    const { orderedIds } = req.body;
    cat.tasks = orderedIds.map(id => cat.tasks.find(t => t.id === id)).filter(Boolean);
    writeData(data);
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

app.listen(PORT, () => {
  console.log(`\n  SmartPack Prisoversigt => http://localhost:${PORT}`);
  console.log(`  Admin-panel          => http://localhost:${PORT}/admin.html\n`);
});
