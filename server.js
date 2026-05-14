const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3030;
// docs/ er kilden til sandheden - bruges bade lokalt og paa GitHub Pages
const DATA_FILE = path.join(__dirname, 'docs', 'data', 'prices.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'docs')));
app.use('/admin.html', express.static(path.join(__dirname, 'admin', 'admin.html')));

function readData() { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8')); }
function writeData(d) { fs.writeFileSync(DATA_FILE, JSON.stringify(d, null, 2)); }

app.get('/api/prices', (req, res) => {
  try { res.json(readData()); } catch(e) { res.status(500).json({ error: 'Laesefejl' }); }
});

app.put('/api/prices/hourlyRate', (req, res) => {
  try {
    const data = readData();
    const rate = Number(req.body.hourlyRate);
    if (!rate || rate < 1) return res.status(400).json({ error: 'Ugyldig timepris' });
    data.hourlyRate = rate;
    data.categories.forEach(cat =>
      cat.tasks.forEach(task => { if (task.minutes) task.price = Math.round((rate / 60) * task.minutes); })
    );
    writeData(data);
    res.json({ ok: true, data });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

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

app.post('/api/prices/category/:catId/task', (req, res) => {
  try {
    const data = readData();
    const cat = data.categories.find(c => c.id === req.params.catId);
    if (!cat) return res.status(404).json({ error: 'Kategori ikke fundet' });
    const id = req.params.catId + '_' + Date.now();
    const task = { id, name: req.body.name || 'Ny opgave', desc: '', minutes: 15, price: Math.round(data.hourlyRate / 4), guideUrl: null, ...req.body };
    cat.tasks.push(task);
    writeData(data);
    res.json({ ok: true, task });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/prices/task/:taskId/move', (req, res) => {
  try {
    const data = readData();
    const { toCatId, toIndex } = req.body;
    let task = null;
    data.categories.forEach(cat => {
      const idx = cat.tasks.findIndex(t => t.id === req.params.taskId);
      if (idx !== -1) { [task] = cat.tasks.splice(idx, 1); }
    });
    if (!task) return res.status(404).json({ error: 'Ikke fundet' });
    const toCat = data.categories.find(c => c.id === toCatId);
    if (!toCat) return res.status(404).json({ error: 'Kategori ikke fundet' });
    toCat.tasks.splice(toIndex ?? toCat.tasks.length, 0, task);
    writeData(data);
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

app.listen(PORT, () => {
  console.log(`\n  Prisoversigt  => http://localhost:${PORT}`);
  console.log(`  Admin-panel   => http://localhost:${PORT}/admin.html\n`);
  console.log('  Aendringer gemmes direkte i docs/data/prices.json');
  console.log('  git push => GitHub Pages opdateres automatisk\n');
});
