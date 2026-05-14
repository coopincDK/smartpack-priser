# SmartPack Admin — Komplet Leksikon

> \*\*Format:\*\* Hvert emne er en selvstændig artikel med fuldt format. Brug Ctrl+F til at søge.
> \*\*Kilde:\*\* Live system · support.smartpack.dk · Word-kvikguider · Domæneviden
> \*\*Version:\*\* SmartPack v1.34.0.0

\---

## Indholdsfortegnelse

**DEL 1 — LOGIN OG ADGANG**

* Login (Admin)
* Glemt kodeord
* Opret / Rediger medarbejder
* Roller og rettigheder
* Supportchat — adgang

**DEL 2 — DASHBOARD**

* Dashboard — oversigt og KPI-tiles
* Dashboard Builder
* Employee Performance Dashboard

**DEL 3 — ORDRER**

* Ordreliste — oversigt og søgning
* Ordredetaljer — alle felter og tidslinje
* Opret manuel ordre
* Klon / Gensend ordre
* Opret label uden ordre (LabelOnly)
* Sæt ordrelinjer on hold
* Opdel ordre (Tillad Delvis Levering)
* Gensend afsendelsesmail
* Genudskriv følgeseddel
* Genudskriv fragtlabel (pakket ordre)
* Dropshipping — to metoder
* Annullér ordre
* Prioritering og pause af ordrer
* Afsendelse og Waybill / End-of-day

**DEL 4 — PRODUKTER**

* Produktoversigt
* Produkttyper — Normal
* Produkttyper — Normal + Ekstra pluk
* Produkttyper — Kollektions
* Produkttyper — Virtuel
* Produkttyper — Bundle
* Produktdata — alle felter
* Stregkoder på produkter
* Kolli-stregkoder
* Produktflags (FIFO, batch, serienr, farliggods m.fl.)
* Foretrukken placering (Preferred Placement)
* Warehouse Weight (lager-specifik vægt)
* Lagerhistorik på produkt
* Kostpris vs. Lageromkostning

**DEL 5 — INDKØB**

* Indkøbsordrer — kladde, åbne, afsluttede
* Leverandøroversigt og prislister
* Forecasting og ABC-analyse
* Presell (forudsalg)

**DEL 6 — LAGER**

* Lager — Status og reguleringer
* Revisionszoner og løbende optælling
* Lager økonomi-oversigt

**DEL 7 — LAGERDESIGNER**

* Lagerdesigner — introduktion
* Optegning af lager (trin-for-trin)
* Reol og placeringsstruktur
* Refill-lokationer og sektioner
* Test af historiske plukkeruter
* Lagertegning er blank (fejl)

**DEL 8 — PLUKKEPROFILER**

* Introduktion til plukkeprofiler
* Generelle indstillinger
* Rute og listeindstillinger
* Pakkeindstillinger
* Produktprioritet
* Ordrefiltrering
* Postnummer, lande og kundenummer
* Produktfiltrering
* Kunder / Shops
* Leveringsmetoder
* Lokationer og lagersektioner
* Ekskluder profiler
* Eksklusive plukkeprofiler
* Plukkeprofil til transfer ordre
* Eget lagerflyt

**DEL 9 — SORTERINGSZONER**

* Sorteringszoner — komplet guide

**DEL 10 — LEVERINGSMETODER**

* Leveringsmetoder — opsætning
* Leveringspris konfiguration
* Shop Checkout konfiguration

**DEL 11 — MEDARBEJDERE**

* Medarbejderadministration
* Arbejdsplaner

**DEL 12 — KUNDER (3PL)**

* Kundeoversigt
* Valutakurs — overstyring
* 3PL Prissætning

**DEL 13 — RAPPORTER**

* Lagerrapporter og historikvisninger
* Batchsporing
* Serienummersporing

**DEL 14 — STAMDATA**

* Totes og plukkekasser
* Emballage og pakketyper
* Vogne
* Printere
* Enhedstyper

**DEL 15 — RETURPORTAL**

* Returportal — opsætning
* Alternativ returadresse
* Returårsager og -handlinger

**DEL 16 — WORKFLOWS**

* Workflows — komplet guide

**DEL 17 — E-MAILS OG SKABELONER**

* Email-skabeloner — komplet opsætning
* Følgeseddel-skabeloner
* Stregkode-/labelskabeloner
* SMTP-opsætning

**DEL 18 — SYSTEMINDSTILLINGER**

* Systemindstillinger — oversigt
* Genstart SmartPack
* Lokationer
* CSV-separator (CultureInfo)
* Flush DNS
* API-adgang
* WooCommerce integration
* POS / Kasse Flow

**DEL 19 — ANKOMST (ADMIN)**

* Ankomstoversigt og afsendelse

**DEL 20 — FORECASTING**

* Forecasting og ABC-analyse (komplet)

\---

# DEL 1 — LOGIN OG ADGANG

\---

## Login (Admin)

### Hvad er det

Login til SmartPack Admin-panelet.

### Adgang

Browser → `https://ditlager.smartpack.dk/Admin`

### Anbefalede browsere

* Google Chrome (PC + Mac) — anbefalet
* Microsoft Edge (PC) — anbefalet
* Safari (Mac) — understøttet

### Bemærk om Lagerdesigner

Lagerdesigneren virker **ikke** i Chrome på Windows 8 eller ældre. Brug Edge eller Windows 10+.

### Relaterede emner

→ Se: Opret / Rediger medarbejder
→ Se: Glemt kodeord

\---

## Glemt kodeord

### Hvad er det

Procedure for nulstilling af kodeord til SmartPack Admin eller Terminal.

### Trin-for-trin (Admin)

1. Admin → Medarbejdere
2. Find medarbejderen
3. Tryk **Rediger** (blyantikon)
4. Feltet **Kode** → skriv ny kode
5. Gem

### Trin-for-trin (Terminal)

1. Medarbejder er låst ude: Admin → Medarbejdere → rediger → ny kode
2. Alternativ: Send medarbejder en ny QR-kode

### Relaterede emner

→ Se: Opret / Rediger medarbejder

\---

## Opret / Rediger medarbejder

### Hvad er det

Administration af medarbejderkonti i SmartPack.

### Sti

Admin → Medarbejdere → Tilføj medarbejder / Rediger (blyantikon)

### Alle felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Fornavn**|Medarbejderens fornavn|Tekst|
|**Efternavn**|Medarbejderens efternavn|Tekst|
|**Brugernavn**|Unikt login-navn|Tekst|
|**Kode**|Adgangskode (vises ikke)|Tekst|
|**QR-kode**|Print QR-kode til hurtig login|Knap|
|**Billede**|Profilbillede til identifikation|Upload|
|**Email**|Email-adresse — kræves til supportchat|Email|
|**Superbruger**|Giver adgang til supportchat|✅ / ☐|
|**Rolle**|Terminal / Admin / Begge|Valgmenu|
|**Aktiv**|Om konto er aktiv|✅ / ☐|
|**Max vægt**|Skånehensyn: max løftevægt per pluk|kg|
|**Max plukke-højde**|Skånehensyn: max hyldehøjde|m|
|**Tilladt IP**|Begræns login til specifikke IP-adresser|IP-liste|
|**Arbejdsplan**|Tilknyt arbejdsplan|Valgmenu|
|**Lager**|Begræns til specifikt lager (3PL)|Valgmenu|

### QR-kode

Print medarbejderens QR-kode → medarbejderen scanner den for hurtig login.

### Relaterede emner

→ Se: Roller og rettigheder
→ Se: Supportchat — adgang

\---

## Roller og rettigheder

### Hvad er det

System til at styre hvad medarbejdere kan se og gøre i SmartPack.

### Roller

|Rolle|Adgang|
|-|-|
|**Terminal**|Kun terminal-apps|
|**Admin**|Kun admin-panelet|
|**Begge**|Terminal + Admin|
|**Superbruger**|Admin + supportchat + udvidede rettigheder|

### Granulær adgangsstyring

Inden for Admin kan der konfigureres rettigheder per modul:

|Modul|Kan indstilles til|
|-|-|
|Ordrer|Vis / Rediger / Annullér|
|Produkter|Vis / Rediger / Opret|
|Lager|Vis / Regulér|
|Indstillinger|Ingen / Læs / Skriv|
|Rapporter|Vis / Eksportér|
|Medarbejdere|Vis / Administrér|

### Skånehensyn

* **Max vægt**: Medarbejdere med begrænsning tildeles kun pluk under grænsen
* **Max plukke-højde**: Medarbejdere med begrænsning tildeles ikke pluk over grænsen

### Relaterede emner

→ Se: Opret / Rediger medarbejder

\---

## Supportchat — adgang

### Hvad er det

SmartPack har en integreret supportchat i Admin-panelet. Chat-ikonet vises i Admin.

### Krav for adgang

1. Medarbejderens **email** er udfyldt korrekt i brugerindstillingerne
2. Medarbejderen er markeret som **Superbruger**

   * Håndteres af SmartPack-teamet ved anmodning
   * Anmod: send email til support@smartpack.dk

### Vigtig info

* Teamet svarer hurtigst muligt — ikke øjeblikkeligt
* **Sofia** (SmartPack AI) er tilgængelig 24/7 og svarer øjeblikkeligt på de fleste spørgsmål
* Sofia er trænet på SmartPack-dokumentation

### Relaterede emner

→ Se: Opret / Rediger medarbejder
→ Se: Support (kontakt)

\---

# DEL 2 — DASHBOARD

\---

## Dashboard — Oversigt og KPI-tiles

### Hvad er det

Dashboard er Admin-forsidens kontrolcenter. Det viser realtids-KPI'er, aktivitetsgrafer og systemstatus.

### Sti

Admin → Dashboard

### KPI-tiles (øverste række)

|Tile|Viser|Periode|
|-|-|-|
|**Ordrer i dag**|Antal ordrer modtaget|Dags dato|
|**Ordrer i gang**|Ordrer under behandling|Live|
|**Pakkede**|Pakket og klar til afsendelse|Dags dato|
|**Afsendte**|Afsendte forsendelser|Dags dato|
|**Til pluk**|Ordrer der afventer pluk|Live|
|**Retur**|Returordrer til behandling|Live|
|**Lager alerts**|Varer under min.-beholdning|Live|

### Grafer

|Graf|Viser|
|-|-|
|**Ordreflow**|Ordrer per time/dag/uge|
|**Plukhastighed**|Pluk per medarbejder per time|
|**Leveringspunktlighed**|OTD-procent|
|**Lagerbeholdning**|Total lagerværdi og enheder|

### Relaterede emner

→ Se: Dashboard Builder
→ Se: Employee Performance Dashboard

\---

## Dashboard Builder

### Hvad er det

Tilpasseligt dashboard-system der lader dig sammensætte din egen oversigt med widgets.

### Sti

Admin → `/Admin/dashboardBuilder`

### Tilgængelige widgets

|Widget|Beskrivelse|
|-|-|
|**Ordretæller**|Antal ordrer i valgt status/periode|
|**Varetæller**|Antal varelinjer/enheder|
|**Returtæller**|Antal returordrer|
|**Periodeliste**|Tabelvisning af ordrer/varer over periode|
|**Stablet søjlediagram**|Visuel sammenligning over tid|
|**Seneste varer**|Live feed af senest modtagne/afsendte varer|
|**Indkøbsordreliste**|Åbne og kommende indkøbsordrer|
|**Ur**|Analogt/digitalt ur (til storskærm)|
|**Billede**|Indsæt logo eller grafik|
|**Brugerdefineret kode**|Tilpasningsbar HTML/widget|
|**Medarbejderpræstation**|Performance-data per medarbejder|

### ⚠️ KRITISK: Layout gemmes ikke automatisk

Klik **diskette-ikonet ("Gem grid")** efter arrangering af widgets.
Glemmer du at gemme: layout mistes ved næste login.

### Live mode

Præsentationsvisning uden admin-navigation. Opdaterer hvert minut. Egnet til storskærm på lageret.

### Relaterede emner

→ Se: Employee Performance Dashboard
→ Se: Dashboard — Oversigt

\---

## Employee Performance Dashboard

### Hvad er det

Detaljeret produktivitetsanalyse per medarbejder med benchmarks og sammenligning.

### Sti

Admin → Employee Performance

### Hvad vises

|Metric|Beskrivelse|Benchmark|
|-|-|-|
|**Pakker per time**|Antal pakker pakket|40/time|
|**Pluk per time**|Antal varelinjer plukket|110/time|
|**Modtagelser per time**|Antal varer modtaget|100/time|
|**Flytninger per time**|Antal lagerbevægelser|50/time|
|**Revisioner per time**|Antal lagerrevisioner|100/time|
|**Palle-scans per time**|Antal pakker scannet til palle|100/time|
|**Fejlrate**|Andel af fejlplukkede/forkert pakkede|< 0,5%|

### Filtre

|Filter|Muligheder|
|-|-|
|**Medarbejder**|Alle / Specifik medarbejder|
|**Periode**|Dato-interval, skifttype|
|**Aktivitetstype**|Pluk / Pak / Modtagelse / Flytning|

### Relaterede emner

→ Se: Dashboard Builder



\---

# DEL 3 — ORDRER

\---

## Ordreliste — Oversigt og søgning

### Hvad er det

Admin-ordrelisten er det centrale sted for at overvåge og administrere alle ordrer. Den viser alle indkomne ordrer med status, filtre og søgning.

### Sti

Admin → Kunder → Ordrer

### Kolonner i ordrelisten

|Kolonne|Beskrivelse|
|-|-|
|**Ordrenummer**|Unikt identifikator — klikbart|
|**Shop**|Hvilken webshop/kilde ordren kommer fra|
|**Status**|Aktuelt stadie|
|**Ordredato**|Hvornår ordren kom ind|
|**Leveringsmetode**|Transportør og service|
|**Modtager**|Kundenavn|
|**Antal varelinjer**|Antal produkter i ordren|
|**Ikoner**|Advarsler og notater|

### Ordrestatusser

|Status|Beskrivelse|
|-|-|
|**Modtaget**|Ordren er importeret til SmartPack|
|**Til pluk**|Klar til pluk|
|**Under pluk**|En plukliste er aktiv|
|**Plukket**|Alt plukket, afventer pakning|
|**Pakket**|Pakket og label printet|
|**Afsendt**|Label skannet til transportør|
|**On Hold**|Ordren afventer manuelt|
|**Missing Items**|Varer mangler på lager|
|**Problem**|Manuel håndtering kræves|
|**Annulleret**|Ordren er annulleret|

### Søg og filtrer

|Filter|Muligheder|
|-|-|
|**Fritekst**|Ordrenummer, modtager, SKU|
|**Status**|Alle statusser ovenfor|
|**Dato**|Fra / Til|
|**Shop**|Alle / Specifik shop|
|**Leveringsmetode**|Alle / Specifik metode|
|**Tags**|Brugerdefinerede tags|

### Relaterede emner

→ Se: Ordredetaljer

\---

## Ordredetaljer — Alle felter og tidslinje

### Hvad er det

Den komplette visning af én ordre inkl. alle data, tidslinje og tilgængelige handlinger.

### Åbn ordredetaljer

Klik på ordrenummeret i ordrelisten.

### Sektioner

**Ordrehoved:**

|Felt|Beskrivelse|
|-|-|
|Ordrenummer|Unikt ID|
|Ekstern ordre-ID|ID fra webshop|
|Ordredato|Dato og tid for modtagelse|
|Status|Aktuelt stadie|
|Leveringsmetode|Transportør og service|
|Shop / Kilde|Hvilken integration ordren kom fra|
|Afsendernavn|Bruges ved ERP/DanDomain med flere afsendere|

**Modtagerdata:**

|Felt|Beskrivelse|
|-|-|
|Navn|Fuldt navn|
|Adresse linje 1|Gadenavn og husnummer|
|Adresse linje 2|Etage, lejlighed (valgfrit)|
|By||
|Postnummer||
|Land|Alpha-2 kode (DK, DE, SE...)|
|Email|Til afsendelsesmail og returportal|
|Telefon|Kræves af visse transportører|
|Leveringsinstrukser|Kundens besked til leverandøren|

**Varelinjer:**

|Kolonne|Beskrivelse|
|-|-|
|SKU|Varenummer|
|Navn|Produktnavn|
|Antal|Bestilt antal|
|Leveret|Faktisk leveret antal|
|Pris|Enhedspris|
|On Hold|Sæt linje i venteposition|

**Forsendelseskasse:**

|Element|Beskrivelse|
|-|-|
|Tracking|Track \& trace nummer|
|Label|Download PDF|
|Resend mail|Send afsendelsesmail igen|
|PDF-knap (lilla)|Genudskriv følgeseddel|

**Tidslinje:**
Viser alle hændelser kronologisk: importeret → plukket → pakket → afsendt med bruger, tidsstempel og data.

### Relaterede emner

→ Se: Ordreliste
→ Se: Gensend afsendelsesmail

\---

## Opret manuel ordre

### Hvad er det

Oprettelse af en ordre direkte i SmartPack uden at den importeres fra en webshop.

### Sti

Admin → Kunder → Ordrer → **Opret ordre**

### Felter

|Felt|Beskrivelse|Påkrævet|
|-|-|-|
|**Modtagernavn**|Fuldt navn|✅|
|**Adresse**|Fuld leveringsadresse|✅|
|**Email**|Modtagerens email|Anbefalet|
|**Telefon**|Modtagerens telefon|Anbefalet|
|**Leveringsmetode**|Vælg transportør og service|✅|
|**Varelinjer**|Søg og tilføj produkter|✅|
|**Antal**|Antal per varelinje|✅|
|**Pris**|Pris per enhed|Valgfrit|
|**Ordrenote**|Intern note|Valgfrit|
|**Kundernote**|Note til kunden|Valgfrit|
|**Tags**|Brugerdefinerede tags|Valgfrit|

### Relaterede emner

→ Se: Opret label uden ordre (LabelOnly)
→ Se: Klon / Gensend ordre

\---

## Klon / Gensend ordre

### Hvad er det

Mulighed for at skabe en kopi af en eksisterende ordre — typisk brugt ved bortkomne forsendelser.

### Hvornår bruges det

Kunden har ikke modtaget sin pakke og den er bortkommet hos transportøren.

### Trin-for-trin

1. Find den originale ordre
2. Tryk **Clone**
3. En ny ordre oprettes med samme varer og modtagerdata
4. Behandl den nye ordre normalt (pluk, pak, afsend)
5. **Håndter original ordre:** Brug "Hurtig retur" med årsagen **"Bortkommet"**

### Systemlogik

Klonning kopierer alle ordrelinjer og modtagerdata. Ordrenummeret er nyt. Klon-ordren er uafhængig af originalen.

### Relaterede emner

→ Se: Opret manuel ordre
→ Se: Retur — Modtagelse (Terminal)

\---

## Opret label uden ordre (LabelOnly)

### Hvad er det

Mulighed for at generere en fragtlabel uden at der er varer tilknyttet — typisk til returlabels eller emballageforsendelser.

### Hvornår bruges det

* Opret returlabel til en kunde
* Send en tom pakke med specifik label
* Intern forsendelse uden ordrelinjer

### Trin-for-trin

1. Admin → Kunder → Ordrer → **Opret ordre**
2. Udfyld afsender- og modtageradresser
3. Lad **ordrelinjerne stå tomme**
4. Sæt ordretype til **`LabelOnly`** → gem
5. Fra ordrelisten: tryk **Etiketter/Labels**
6. Angiv vægt
7. Vælg fragtmetode
8. Tryk **"Opret etiket"**

### Systemlogik

LabelOnly-ordrer genererer en label men udløser ikke noget pluk-flow. De afvikles helt uden om normale lagerprocesser.

### Relaterede emner

→ Se: Opret manuel ordre

\---

## Sæt ordrelinjer on hold

### Hvad er det

Mulighed for at sætte individuelle ordrelinjer i venteposition mens resten af ordren behandles normalt.

### Hvornår bruges det

Én vare på en ordre er udsolgt men resten er tilgængeligt — send det tilgængelige nu, rest-linjen afventer.

### Trin-for-trin

1. Admin → Kunder → Ordrer → find ordren
2. Tryk **Rediger** (blyantikonet)
3. Find den ønskede varelinje
4. I kolonnen **On Hold**: sæt flueben
5. Tryk **Gem**
6. I ordrelisten vises ⚠️-ikonet (gult trekant) = **"Lines on Hold"**

### Systemlogik

Ordren som helhed behandles normalt. Kun de markerede linjer springes over i pluk og pakning. Systemet plukker og pakker de linjer der ikke er on hold.

### Shopify V2

On Hold synkroniseres automatisk fra Shopify-admin — behøver ikke indstilles manuelt her.

### Relaterede emner

→ Se: Opdel ordre (Tillad Delvis Levering)

\---

## Opdel ordre (Tillad Delvis Levering)

### Hvad er det

Mulighed for at sende tilgængelige varer nu mens resten afventer lager.

### Hvornår bruges det

En ordre indeholder varer der ikke er på lager endnu — kunden vil gerne modtage det der er tilgængeligt med det samme.

### Trin-for-trin

1. Admin → Kunder → Ordrer → rediger ordren (blyantikon)
2. Aktivér **"Allow Partial Delivery / Tillad Delvis levering"**
3. Tryk **Gem**
4. Kun varer på lager plukkes — varer der mangler forbliver på ordren
5. Betaling hæves **kun** når alle varer er afsendt

### Systemlogik

Delvis levering opretter ikke automatisk en ny ordre. Den originale ordre bevares med de resterende varelinjer til de er på lager.

### Relaterede emner

→ Se: Sæt ordrelinjer on hold
→ Se: Presell (forudsalg)

\---

## Gensend afsendelsesmail

### Hvad er det

Genfremsendelse af afsendelsesmail (med tracking) til kunden.

### Trin-for-trin

1. Admin → Kunder → Ordrer → find ordren
2. Rul til **Shipments**-boksen
3. Tryk **"Resend mail"**

### Edge cases

DanDomain-integration: fakturamail kan **kun sendes én gang** — verificér email-adresse inden afsendelse.

### Relaterede emner

→ Se: Ordredetaljer
→ Se: Email-skabeloner — komplet opsætning

\---

## Genudskriv følgeseddel

### Hvad er det

Genudskrivning af en eksisterende følgeseddel for en ordre.

### Trin-for-trin

1. Åbn ordren
2. Scroll til forsendelseskassen
3. Tryk den **lilla knap** (PDF-ikon)
4. Følgesedlen sendes til den valgte A4-printer

### Relaterede emner

→ Se: Ordredetaljer
→ Se: Genudskriv fragtlabel

\---

## Genudskriv fragtlabel (pakket ordre)

### Hvad er det

Genudskrivning af fragtlabel for en ordre der allerede er pakket og afsluttet.

### ⚠️ KRITISK FORSKEL

|Knap|Effekt|
|-|-|
|**"Udskriv igen"**|Genbruger original label — samme sporingsnummer|
|**Grøn Print-knap**|Genererer **NY** label med nyt sporingsnummer|

**Brug normalt "Udskriv igen"** — transportøren forventer det originale nummer.

### Trin-for-trin (fra Admin)

1. Admin → Kunder → Ordrer
2. Find ordren
3. Tryk **Labels/Etiketter**
4. Tryk **"Udskriv igen"**

### Trin-for-trin (fra Terminal)

1. Pak Ordrer → ur-ikon (historik)
2. Find ordren
3. Tryk **"Udskriv igen"**

### Relaterede emner

→ Se: Labelprint — Fejl og løsninger (Terminal)

\---

## Dropshipping — To metoder

### Hvad er det

Håndtering af varer der sendes direkte fra leverandøren til slutkunden uden at passere dit lager.

### Metode 1 — Udenom SmartPack (anbefales ved ren dropshipping)

1. Sæt varetype til **`DontImport`** → importeres ikke til SmartPack
2. Slå **"Manage External Stock"** fra

⚠️ Begrænsning: Returvarer fra dropshipping kan **ikke** lagerføres i SmartPack med denne metode.

### Metode 2 — Via SmartPack (manuel håndtering)

1. Markér vare med **"Tillad dropshipping"** i produktindstillinger
2. Når varen ikke er på lager → markeres til dropshipping (blå bar i ordrelisten)
3. Tryk **"Create Dropshipping"** i ordren
4. Vælg: indsæt trackingnummer **ELLER** generér label til leverandør

### Systemlogik

Dropshipping-ordrer følger ikke det normale pluk/pak-flow. De markeres og behandles separat.

### Relaterede emner

→ Se: Produktflags
→ Se: Email-skabeloner (Dropshipping-type)

\---

## Annullér ordre

### Hvad er det

Procedure for at annullere en ordre der er kommet ind i SmartPack.

### Situationer

|Situation|Handling|
|-|-|
|Annulleret i shop men ikke i SmartPack|Kør pakkeprocessen baglæns (→ Se Terminal artikel)|
|Annullér fra Admin|Admin → Ordren → Annullér|

### Systemlogik

Ordren kan kun annulleres hvis den ikke er under aktiv pakning. Er pakning påbegyndt: kør baglæns-procedure fra terminalen.

→ Se: Fejlhåndtering — Ordre annulleret i shop (Terminal)

\---

## Afsendelse og Waybill / End-of-day

### Hvad er det

Afslutning af arbejdsdagen — generering af waybill-lister til transportøren og End-of-day rapporter.

### Sti

Admin → Afsendelse

### Waybill-liste

|Trin|Handling|
|-|-|
|1|Admin → Afsendelse|
|2|Vælg transportør|
|3|Vælg dato|
|4|Tryk **"Generér waybill"**|
|5|PDF genereres|
|6|Print og medsend chaufføren|

### End-of-day

Visse transportører kræver End-of-day scanning. SmartPack genererer den nødvendige fil/rapport automatisk.

### Relaterede emner

→ Se: Scan til Palle (Terminal)



\---

# DEL 4 — PRODUKTER

\---

## Produktoversigt

### Hvad er det

Den centrale liste over alle produkter i SmartPack med søgning, filtrering og eksport.

### Sti

Admin → Produkter

### Kolonner i oversigten

|Kolonne|Beskrivelse|
|-|-|
|**SKU**|Varenummer|
|**Type**|Produkttype (Normal, Bundle, Virtuel m.fl.)|
|**Producent**|Fabrikant|
|**Stregkode**|Primær EAN/GTIN|
|**Vægt**|Gram|
|**Lagerantal**|Fysisk lager|
|**Reserveret**|Reserveret til aktive ordrer|
|**På vej hjem**|På indkøbsordre|
|**Tilgængelig**|Lager − Reserveret|
|**Lagerkostpris**|Beregnet gennemsnitlig kostpris|
|**Total værdi**|Lagerantal × Lagerkostpris|

### Handlinger fra oversigten

|Handling|Beskrivelse|
|-|-|
|**Eksportér CSV**|Download produktliste|
|**Importér CSV**|Masseopdatering via CSV|
|**Tilføj produkt**|Opret ny vare manuelt|
|**Søg**|Filtrer på SKU, navn, stregkode|

### Relaterede emner

→ Se: Produkttyper
→ Se: Produktdata — alle felter

\---

## Produkttyper — Normal

### Hvad er det

Standard enkelt-vare. Den mest brugte produkttype.

### Hvornår bruges det

Alle ordinære fysiske varer der ikke er bundter, virtuelle eller samlede produkter.

### Nøglefunktioner

* FIFO-styring
* Batch/LOT-sporing
* Serienummersporing
* Farliggods-flag
* Udløbsdatostyring

### Relaterede emner

→ Se: Produktdata — alle felter
→ Se: Produktflags

\---

## Produkttyper — Normal + Ekstra pluk

### Hvad er det

En Normal vare med tilknyttede ekstra produkter der automatisk inkluderes ved plukning.

### Hvornår bruges det

Varer der altid pakkes med medfølgende produkter.

**Eksempel:** En stol sælges altid med stoleben → stol-SKU oprettes med stoleben som ekstra plukpunkt.

### Konfiguration

Admin → Produkt → Type: Normal + Ekstra pluk → tilføj ekstra plukpunkter i sektionen herunder.

### Systemlogik

Plukkeren ser det primære produkt + alle ekstra plukpunkter i listen. Alt registreres som del af samme ordre.

### Relaterede emner

→ Se: Produkttyper — Normal

\---

## Produkttyper — Kollektions

### Hvad er det

Et produkt der bruges til produktionsordrer og/eller kolli-salg. Består af komponentvarer.

### Hvornår bruges det

* Kitting og produktionsordrer (saml X komponenter til ét produkt)
* Kolli-salg (sæt af varer sælges som ét produkt)

### Nøgleindstillinger

|Indstilling|Beskrivelse|
|-|-|
|**Tillad samling**|Komponentvarer kan samles til kollektions-produktet|
|**Tillad adskillelse**|Færdigt produkt kan adskilles til komponenter|
|**Inkluder indhold i lager**|Komponenterne tæller med i samlet lagersaldo|

### Relaterede emner

→ Se: Produktion (Terminal)
→ Se: Produkttyper — Bundle

\---

## Produkttyper — Virtuel

### Hvad er det

Et ikke-fysisk produkt — service, abonnement, downloadbart indhold.

### Hvornår bruges det

Salg af services der ikke kræver lagerføring, pluk eller pakning.

### Nøgleindstillinger — Opfyldning

|Indstilling|Effekt|
|-|-|
|**Opfyld straks**|Ordren markeres som opfyldt øjeblikkeligt ved modtagelse|
|**Opfyld med første**|Opfyldes med første fysiske forsendelse i ordren|
|**Opfyld med sidste**|Opfyldes med den sidste fysiske forsendelse i ordren|

### Systemlogik

Virtuelle produkter kræver ikke pluk, pak eller lager. Systemet markerer dem automatisk som opfyldt.

\---

## Produkttyper — Bundle

### Hvad er det

En kombination af eksisterende produkter der sælges som ét samlet produkt.

### Hvornår bruges det

Salgspakker der ikke produceres fysisk — systemet beregner tilgængelighed ud fra komponenternes individuelle lagerbeholdning.

### Nøgleindstillinger

|Indstilling|Beskrivelse|
|-|-|
|**Tilføj enheder**|Vælg komponenter og antal per bundle|
|**Håndtering ved manglende lager**|Hvad sker der hvis en komponent mangler|

### Håndteringsmuligheder ved manglende lager

|Indstilling|Beskrivelse|
|-|-|
|**Ignorer men fullfill med første**|Send bundlen med de tilgængelige varer|
|**Ignorer men fullfill med sidste**|Vent til alle er klar, send derefter|
|**Ignorer men fullfill straks**|Fullfill øjeblikkeligt uanset lager|
|**Importer ikke**|Importer ikke denne bundle fra shop|

### Systemlogik

Bundle-lager = laveste fællesnævner af komponenternes lagerantal.

**Eksempel:** Bundle = 2× SKU-A + 1× SKU-B. Lager: A=10, B=3 → Max bundle = 3 (begrænset af B).

### ⚠️ KRITISK REGEL

Modtag **aldrig** bundle-SKU'en direkte ved ankomst — modtag altid komponenterne.

→ Se: Ankomst — Bundles (Terminal)

\---

## Produktdata — Alle felter

### Hvad er det

Komplet liste over alle felter der kan udfyldes på et produkt i SmartPack.

### Identifikation

|Felt|Beskrivelse|Type|
|-|-|-|
|**SKU**|Unikt varenummer|Tekst|
|**Eksternt ID**|Varens ID i den tilsluttede webshop/ERP|Tekst|
|**Produktnavn**|Fuldt produktnavn|Tekst|
|**Variant**|Variantbeskrivelse (størrelse, farve)|Tekst|
|**Billedesti**|URL til produktbillede|URL|
|**Tags**|Brugerdefinerede søgekategorier|Tekst-liste|
|**Fabrikant**|Producent/mærke|Tekst|
|**Leverandøre**|Tilknyttede leverandører|Liste|
|**Leverandørnummer**|Leverandørens varenummer|Tekst|
|**Modelnr.**|Modelidentifikator|Tekst|
|**UN nr.**|FN-varenummer for farligt gods|Tal|
|**Gruppering / Selection / Style**|Variantgruppe-ID|Tekst|
|**Produkt identitet**|Intern klassifikation|Tekst|
|**Gruppe navn**|Visningsnavn for gruppen|Tekst|
|**Gruppe identitet**|Gruppe-ID|Tekst|

### Fysiske mål

|Felt|Beskrivelse|Enhed|
|-|-|-|
|**Vægt**|Nettovægt|Gram|
|**Vægt inkl. emballage**|Bruttovægt|Gram|
|**Bredde**|Bredde|mm|
|**Højde**|Højde|mm|
|**Dybde**|Dybde|mm|
|**Warehouse Weight**|Lager-specifik vægt (overskriver normal vægt)|Gram|

### Stregkoder

|Felt|Beskrivelse|
|-|-|
|**Primær stregkode**|Hoved-EAN/GTIN|
|**Tilføj flere stregkoder**|Alle alternative EAN-koder for varen|
|**Kolli-stregkoder**|Stregkode der registrerer X antal ved scanning|

### Priser

|Felt|Beskrivelse|
|-|-|
|**Normal pris**|Vejledende udsalgspris|
|**Udsalgspris**|Aktiv kampagnepris|
|**Kostpris**|Indkøbspris (synkroniseret fra integration)|
|**Lagerkostpris**|Beregnet gennemsnitskostpris inkl. fragt og told|

### Genopfyldning

|Felt|Beskrivelse|Type|
|-|-|-|
|**Refill limit**|Minimumsgrænse der udløser genopfyldning|Tal|
|**Max refill**|Maksimal genopfyldningsmængde|Tal|
|**Max forskellige placeringer**|Max antal lagerpladser for denne vare|Tal|

### Enhedstype

|Enhedstype|Beskrivelse|
|-|-|
|**Stk**|Salges i hele antal (standard)|
|**Ltr**|Kan sælges i 0,1-intervaller|
|**Meter**|Kan sælges i 0,1-intervaller|

### Underretninger

|Felt|Hvornår vises|
|-|-|
|**Underretning til plukker**|Vises på terminalen under plukning|
|**Underretning til pakker**|Vises på terminalen under pakning|

### Logistik flags (se separat artikel)

→ Se: Produktflags

### Eksportdata

|Felt|Beskrivelse|
|-|-|
|**Oprindelsesland**|Produktionsland (Alpha-2)|
|**Tarifkode**|Toldtarifnummer|
|**Lande-tarifkoder**|Landespecifikke tarifkoder|
|**Kategorier**|Produktkategorier til eksport|

### Placeringsindstillinger

|Felt|Beskrivelse|
|-|-|
|**Importer placeringsnavne**|Importer placeringer fra ekstern kilde|
|**Foretrukken placering**|Sæt ikke / Sæt ved første modtagelse / Flyt til seneste modtagelse|

### Relaterede emner

→ Se: Produktflags
→ Se: Foretrukken placering
→ Se: Warehouse Weight

\---

## Stregkoder på produkter

### Hvad er det

Administration af alle stregkoder tilknyttet et produkt.

### Typer

|Type|Beskrivelse|
|-|-|
|**Primær stregkode**|Hoved-EAN — bruges ved alle scans|
|**Sekundær stregkoder**|Ældre eller alternative EAN-koder — genkendes alle|
|**Kolli-stregkode**|Registrerer X antal ved én scan|

### Tilføj stregkode

Admin → Produkt → Stregkoder → **Tilføj stregkode** → scan eller skriv EAN → gem.

Eller direkte fra terminalen: Produktinfo → scan ny stregkode → tilknyttes automatisk.

### Relaterede emner

→ Se: Kolli-stregkoder

\---

## Kolli-stregkoder

### Hvad er det

En stregkode der repræsenterer et bestemt antal enheder. Én scan registrerer automatisk X stk.

### Eksempel

Kolli-stregkode på 12-pak øl = 12 stk. per scan. Modtageren scanner kassen én gang — systemet registrerer 12 stk.

### Opret kolli-stregkode

Admin → Produkt → Stregkoder → Tilføj kolli-stregkode → angiv EAN + antal per scan.

### Relaterede emner

→ Se: Stregkoder på produkter
→ Se: Produktinfo (Terminal)

\---

## Produktflags

### Hvad er det

Boolske indstillinger der aktiverer særlig håndtering af en vare.

### Oversigt over alle flags

|Flag|Beskrivelse|Effekt i system|
|-|-|-|
|**Tillad dropshipment**|Varen kan sendes direkte fra leverandør|Aktiverer dropshipping-flow|
|**Skrøbelig**|Markér som skrøbelig|Advarsel vises under pakning|
|**Farliggods**|Særlig håndtering kræves|Særlig dokumentation ved forsendelse; kræver UN nr.|
|**Udløbsdato**|Varen er udløbsfølsom|Kræver dato ved modtagelse; FEFO aktiv|
|**Tving FIFO**|FIFO håndhæves strengt|Kan ikke plukkes fra nyere partier hvis ældre er tilgængelige|
|**Registrer serie nr**|Serienummer registreres|Kræver scan af serienummer under pakning|
|**Brug batch nr**|Batchnummer påkrævet|Kræver batchnummer ved modtagelse og pluk|
|**Tillad blanding af batch nr**|Blanding af batches i placering|Ellers: én batch per placering|
|**Administrer eksternt lager**|Ekstern lagerstyring|Lager styres udenfor SmartPack|

### Relaterede emner

→ Se: Ankomst — Batch/LOT-sporing (Terminal)
→ Se: Lagerrevision — LOT/Batch håndtering (Terminal)

\---

## Foretrukken placering (Preferred Placement)

### Hvad er det

Indstilling der definerer hvilken hyldeplads en vare foretrækkes placeret på ved genopfyldning.

### Opsætning

|Indstilling|Effekt|
|-|-|
|**Don't set**|Ingen foretrukken placering — angiv manuelt|
|**First Arrival**|Sæt ved første modtagelse (ændres ikke herefter)|
|**Last Arrival**|Opdatér til seneste modtagelsesplacering|

### Prioriteringsrækkefølge ved genopfyldning

1. Foretrukken placering
2. Eksisterende placeringer med varen
3. Tomme placeringer
4. Frie placeringer

### Troubleshooting — foretrukken placering bruges ikke

|Tjek|Detalje|
|-|-|
|**FreeCm3**|Er der volumen-plads på placeringen?|
|**MaxItemsPrLocation**|Er max antal SKU'er nået for placeringen?|

### Via API

Feltet hedder `PreferredStockPlacementId`.

### Begrænsning

Foretrukken placering gælder **ikke** for totes eller refill-zoner — kun faste hyldeplaceringer.

### Relaterede emner

→ Se: Flyt Lager — Genopfyldningsliste (Terminal)
→ Se: Lagerdesigner

\---

## Warehouse Weight (Lager-specifik vægt)

### Hvad er det

En separat vægt per produkt der bruges til interne lager- og forsendelsesfunktioner — uafhængigt af den normale produktvægt.

### Regler

|Regel|Beskrivelse|
|-|-|
|Warehouse Weight > 0|Bruges frem for normal produktvægt|
|Warehouse Weight = 0|Systemet bruger normal produktvægt|
|Enhed|Angives i **gram**|
|Import|Via CSV|

### Hvornår bruges det

* Produkter med speciel emballage der ændrer vægten på lageret
* Varer der vejer forskelligt under transport vs. på lager

### Relaterede emner

→ Se: Produktdata — alle felter

\---

## Lagerhistorik på produkt

### Hvad er det

Komplet historik over alle lagerændringer for ét specifikt produkt.

### Adgang

Admin → Produkter → Klik på et produkt → fanen **Historik**

### Hvad vises

|Data|Beskrivelse|
|-|-|
|**Tidsstempel**|Dato og tid for ændringen|
|**Årsag**|Årsagskode (pluk, ankomst, revision...)|
|**Antal**|Ændring i antal (+ eller −)|
|**Placering**|Hvilken hyldeplads|
|**Bruger**|Hvem foretog handlingen|
|**Ordre**|Tilknyttet ordrenummer hvis relevant|

### Andre faner på produktkortet

|Fane|Indhold|
|-|-|
|**Placeringer**|Alle hyldepladser med antal, LOT, udløbsdato|
|**Lagre**|Oversigt per lager/lokation|
|**Ordreflyt**|Alle ordrebevægelser|
|**Reservationer**|Aktive reservationer og mangler|

### Relaterede emner

→ Se: Produktoversigt
→ Se: Batchsporing (Rapporter)

\---

## Kostpris vs. Lageromkostning

### Hvad er det

To separate priskoncepter der bruges til forskellige formål i systemet.

### Sammenligning

||**Kostpris**|**Lageromkostning**|
|-|-|-|
|**Kilde**|Synkroniseret fra e-handelsplatform|Beregnet fra indkøbsordrer|
|**Opdatering**|Synkroniseret fra integration|Automatisk, vægtet gennemsnit|
|**Inkluderer**|Ren indkøbspris|Indkøbspris + fragt + told + finansiering|
|**Primær brug**|Fallback ved ankomst uden PO|Lagerværdi og snapshots|

### Kostpris bruges som fallback ved

1. Ankomst uden tilknyttet indkøbsordre
2. Varelinje med pris 0 kr. på indkøbsordren

### ⚠️ Tip til gratis varer

Brug `0,01 kr.` på gratis varer i indkøbsordren hvis korrekt lagerværdi skal registreres.

### Relaterede emner

→ Se: Lager økonomi-oversigt
→ Se: Indkøbsordrer



\---

# DEL 5 — INDKØB

\---

## Indkøbsordrer — Kladde, åbne, afsluttede

### Hvad er det

SmartPacks indkøbsmodul til oprettelse og administration af indkøbsordrer til leverandører.

### Sti

Admin → Indkøb

### Sektioner

|Sektion|Beskrivelse|
|-|-|
|**Kladde-ordrer**|Ordrer under udarbejdelse — ikke sendt|
|**Åbne ordrer**|Sendte ordrer der afventer levering|
|**Afsluttede ordrer**|Fuldt modtagne ordrer|

### Opret indkøbsordre

Alle felter i en indkøbsordre:

|Felt|Beskrivelse|Type|
|-|-|-|
|**Varer**|Søg og tilføj varer|Liste|
|**Leverandør**|Vælg eller opret leverandør|Valgmenu|
|**Modtager lokation**|Hvilken lagerlokation modtager varerne|Valgmenu|
|**Reference**|Internt referencenummer|Tekst|
|**Valuta**|Valgfri valuta per ordre|Valgmenu|
|**Ordredato**|Dato for ordreafgivelse|Dato|
|**Forventet levering**|Forventet ankomstdato|Dato|
|**Tillad underlevering**|Acceptér færre varer end bestilt|✅ / ☐|
|**Tillad overlevering**|Acceptér flere varer end bestilt|✅ / ☐|
|**Kostpris pr. produkt**|Angiv kostpris for denne ordre|Tal per linje|
|**Toldsats**|Toldsats for toldberegning|Procent|
|**Leveringsomkostninger**|Fragtomkostninger|Beløb|
|**Notat**|Intern note|Tekst|
|**Tillad forudsalg**|Varerne kan sælges allerede nu (presell)|✅ / ☐|

### Presell-aktivering

Sæt flueben i **"Tillad forudsalg"** per linje → tilgængeligt antal på shoppen inkluderer det bestilte antal.

→ Se: Presell (forudsalg)

### Relaterede emner

→ Se: Leverandøroversigt
→ Se: Ankomst — Opret ny (tilknyt indkøbsordre) (Terminal)

\---

## Leverandøroversigt og prislister

### Hvad er det

Administration af leverandørdata og prislister i SmartPack.

### Sti

Admin → Indkøb → Leverandører

### Leverandørdata

|Felt|Beskrivelse|
|-|-|
|**Navn**|Leverandørens navn|
|**Kontaktoplysninger**|Adresse, email, telefon|
|**Forventet levering**|Standard leveringstid (dage)|
|**Minimum bestilling**|Minimumsordrestørrelse|
|**Valuta**|Faktureringsvaluta|

### Prisliste-import

Admin → Indkøb → Leverandører → **Upload prisliste**
Importer leverandørens prisliste i CSV-format. SmartPack matcher SKU og opdaterer kostpriser.

### Relaterede emner

→ Se: Indkøbsordrer
→ Se: Forecasting og ABC-analyse

\---

## Forecasting og ABC-analyse

### Hvad er det

Indkøbsforslaget er et prognose- og optimeringsværktøj der hjælper med at beslutte hvad og hvornår der skal købes ind.

### Sti

Admin → Indkøb → Indkøbsforslag

### Indkøbsforslagets kolonner

|Kolonne|Beskrivelse|
|-|-|
|**Status**|Udsolgt / Lav beholdning / OK / For meget på lager|
|**Lager**|Nuværende lagerantal|
|**Tilgængelig**|Fri lagerbeholdning + på vej hjem − reserveret|
|**Anbefalet lager**|Optimalt niveau ift. bindingsperiode|
|**Potentielt tab af omsætning**|Estimeret tabt salg ved udsolgt|
|**Potentielt tab af indtjening**|Estimeret tabt profit|
|**Anbefalet indkøb**|Foreslået antal at bestille|

### Filtre

|Filter|Muligheder|
|-|-|
|**Kategori**|Filtrer til produktkategori|
|**Producent**|Filtrer til mærke|
|**Leverandør**|Filtrer til specifik leverandør|
|**ABC-kategori**|A / B / C|

### Forecasting-indstillinger

|Indstilling|Beskrivelse|
|-|-|
|**Analyseperiode**|Antal dage bagud der analyseres|
|**Analyse af historik fra året før**|Sæsonkorrektion — sammenlign med samme periode sidste år|
|**Ønsket lager-bindingsperiode**|Antal dage lager ønskes dækket|
|**OBS ved over X dages lagerbindingsperiode**|Advarselstærskel|
|**ABC fordeling i %**|Definer A/B/C grænser (standard: A=5%, B=10%, C=15%)|
|**Offset ift. vækst og tilbagegang**|Juster forecast op/ned med procent|

### ABC-analyse definition

|Kategori|Definition|Standard|
|-|-|-|
|**A-varer**|Bedste X% af omsætningsværdi|Øverste 5%|
|**B-varer**|Næste X%|Næste 10%|
|**C-varer**|Næste X%|Næste 15%|
|**D-varer**|Resten|Alt øvrigt|

### Planlagte funktioner (roadmap)

* Tag højde for udsolgte perioder i historikanalysen
* Separat analyse af B2B og B2C salg

### Relaterede emner

→ Se: Indkøbsordrer
→ Se: Presell (forudsalg)

\---

## Presell (forudsalg)

### Hvad er det

Mulighed for at sælge varer der endnu ikke er ankommet til lageret. Det bestilte antal fra en indkøbsordre indgår i det tilgængelige antal på shoppen.

### Aktivering

Indkøbsordre → per varelinje: sæt flueben i **"Tillad forudsalg"**

### Effekt

`Tilgængeligt antal = Fri lagerbeholdning + Presell-antal`

### Ordrestatusser ved presell

|Status|Beskrivelse|
|-|-|
|**Missing Items**|Varer mangler endnu — ikke på lager|
|**Purchased**|Indkøbsordre oprettet, varer på vej|
|**Purchased Delayed**|Forventet leveringsdato er overskredet|
|**Ready for Packing**|Alle varer modtaget — klar til pak|

### Shopify — leveringsdatoer som metafields

Leveringsdatoer kan sendes til Shopify via:
`smartpack.next\_po\_deliverydate\_{location}`

### Relaterede emner

→ Se: Indkøbsordrer
→ Se: Forecasting og ABC-analyse

\---

# DEL 6 — LAGER

\---

## Lager — Status og reguleringer

### Hvad er det

Oversigt over og godkendelse af alle manuelle lagerreguleringer.

### Sti

Admin → Lager / Status → Reguleringer

### Kolonner i reguleringsoversigten

|Kolonne|Beskrivelse|
|-|-|
|**Tid**|Hvornår reguleringen fandt sted|
|**Årsag**|Årsagskode|
|**Beskrivelse**|Tekstbeskrivelse|
|**Placering**|Hvilken hyldeplads|
|**Før**|Antal inden regulering|
|**Efter**|Antal efter regulering|
|**Bruger**|Hvem foretog reguleringen|
|**Rettelse**|Hvad der rettedes|

### Handlinger

|Handling|Beskrivelse|
|-|-|
|**Godkend**|Godkend afventende regulering|
|**Se godkendte**|Historik over godkendte reguleringer|

### Konfiguration

Kræver reguleringer godkendelse af admin? → indstilles under Systemindstillinger.

### Relaterede emner

→ Se: Lagerrevision (Terminal)
→ Se: Revisionszoner og løbende optælling

\---

## Revisionszoner og løbende optælling

### Hvad er det

Konfiguration af automatisk løbende optælling — regler der udløser optælling under pluk.

### Sti

Admin → Lager / Status → Revisionszoner → **Tilføj**

### Alle indstillingsfelter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Regelens navn til intern identifikation|Tekst|
|**Tæl alder fra dato**|Starttidspunkt for alderberegning|Dato|
|**Inkluder refill lager**|Medtag genopfyldningsplaceringer|✅ / ☐|
|**Åben automatisk status job**|Kør automatisk på skema|✅ / ☐|
|**Trigger dato ved gennemsnittsalder over**|Udløs revision når gns. lagersalder overskrider X dage|Tal|
|**Udløsningsregel**|Antal der udløser popup under pluk|Tal|
|**Udløser i alt lagermængde**|Kun udløs ved total lager-total, ikke per placering|✅ / ☐|
|**Max revisionsalder**|Minimumsinterval mellem revisioner (dage)|Tal|
|**Medarbejder cooldown**|Min. pause per medarbejder (minutter)|Tal|
|**Sektioner/Haller**|Inkluder/Ekskluder specifikke lagerafsnit|Liste|
|**Aktiv**|Er reglen aktiv|✅ / ☐|

### Relaterede emner

→ Se: Løbende optælling (Terminal)
→ Se: Lager — Status og reguleringer

\---

## Lager økonomi-oversigt

### Hvad er det

Finansielle oversigter over lagerets samlede værdi og bevægelser.

### Sti

Admin → Produkter → Lager økonomi

### Visninger

|Visning|Beskrivelse|
|-|-|
|**Samlet lagerværdi**|Total værdi af hele lageret|
|**Oversigt pr. dato**|Salgsomkostninger, indkøb, lagerværdireguleringer, revisioner, reserveret, lagerværdi|
|**Inventar og lagerplads**|Enheder, placeringer, total M², tomme placeringer (%), frie placeringer, frie M²|

### Relaterede emner

→ Se: Kostpris vs. Lageromkostning
→ Se: Lagerrapporter (Rapporter)



\---

# DEL 7 — LAGERDESIGNER

\---

## Lagerdesigner — Introduktion

### Hvad er det

Et visuelt kortlægningsværktøj der giver SmartPack et præcist kort over dit lagerlayout. Grundlag for ruteoptimering via A\*-algoritmen.

### Sti

Admin → Lagerdesigner

### ⚠️ Browser-krav

Lagerdesigneren virker **ikke** i Chrome på Windows 8 eller ældre. Brug Microsoft Edge eller Windows 10+.

### Hvad defineres i designeren

|Element|Beskrivelse|
|-|-|
|**Haller/Sektioner**|Overordnede zoner i lageret|
|**Gangveje**|Passager mellem reolrækker|
|**Reolrader**|Rækker af reoler|
|**Placeringer**|Individuelle hyldepladser|
|**Refill-lokationer**|Baglagerpladser til genopfyldning|
|**Blokeringer**|Vægge, søjler, forhindringer|

### Relaterede emner

→ Se: Optegning af lager (trin-for-trin)
→ Se: Reol og placeringsstruktur

\---

## Optegning af lager (Trin-for-trin)

### Hvad er det

Komplet guide til at tegne lageret op i Lagerdesigneren.

### Trin-for-trin

1. Admin → Lagerdesigner
2. Tryk **Ny hal** → angiv navn og dimensioner
3. Tegn **ydervægge** ved at klikke og trække
4. Placer **gangveje** — definerer plukkeveje
5. Tilføj **reolrader** — drag-and-drop
6. Definer **placeringer** per reol:

   * Kolonnenavn (A, B, C...)
   * Rækkens navn (01, 02, 03...)
   * Niveau/etage (01=bund, 02=midterste, 03=top)
7. Sæt **dimensioner** per placering (bredde × højde × dybde cm)
8. Sæt **Max items per placering** (max antal SKU'er)
9. Gem designet
10. Test med **"Test historiske plukkeruter"**

### Video-guide

https://www.youtube.com/watch?v=GVhC5Y9kmVU

### Relaterede emner

→ Se: Reol og placeringsstruktur
→ Se: Test af historiske plukkeruter

\---

## Reol og placeringsstruktur

### Hvad er det

Navngivningskonvention og strukturen for placeringer i lagerdesigneren.

### Navngivning

Et placeringsnavne bygges op som: `\[Hal]-\[Reol]-\[Kolonne]-\[Niveau]`

Eksempel: `A-01-01` = Hal A, Reol 1, Niveau 01 (bund)

### Niveauer

Niveau 01 = bund (lettest at plukke fra)
Niveau 02 = midterste
Niveau 03 = top

### Attributter per placering

|Attribut|Beskrivelse|Type|
|-|-|-|
|**Navn**|Unikt placeringsid|Tekst|
|**Bredde**|cm|Tal|
|**Højde**|cm|Tal|
|**Dybde**|cm|Tal|
|**Max Items**|Max antal SKU'er på placeringen|Tal|
|**Max Cm3**|Maksimal volumen|Tal|
|**Refill**|Er dette en genopfyldningsplacering|✅ / ☐|
|**Sektion**|Tilhørende lagersektion|Tekst|

### Relaterede emner

→ Se: Lagerdesigner — Introduktion

\---

## Refill-lokationer og sektioner

### Hvad er det

Specielle placeringer der fungerer som baglagerpladser — fyldes op og bruges til at genopfylde aktive plukpladser.

### Opsætning

Admin → Lagerdesigner → Placering → sæt **Refill = ✅**

### Sektioner

Sektioner er logiske grupper af placeringer (fx "Hal A", "Frys", "Køl"). Bruges til at filtrere plukkeprofiler.

### Relaterede emner

→ Se: Reol og placeringsstruktur
→ Se: Flyt Lager (Terminal)

\---

## Test af historiske plukkeruter

### Hvad er det

Funktion i Lagerdesigneren til at simulere og visualisere plukkeveje baseret på historiske ordrer.

### Hvornår bruges det

* Validér at lagerdesignet er korrekt optegnet
* Optimer reol-layout for at minimere gangtid
* Fejlfinding ved uoptimale ruter

### Trin-for-trin

1. Admin → Lagerdesigner
2. Tryk **"Test historiske plukkeruter"**
3. Vælg datointerval for analysen
4. Systemet visualiserer ruternes faktiske længder

### Relaterede emner

→ Se: Lagerdesigner — Introduktion
→ Se: Pluk Ordrer — Generer plukliste (Terminal)

\---

## Lagertegning er blank (Fejl)

### Hvad er det

En fejlsituation hvor Lagerdesigneren åbner men viser en tom/blank skærm.

### Årsag

Typisk browserproblem — ikke en serverfejl.

### Løsning

1. Ryd browser-cache (Ctrl+Shift+Del i Chrome/Edge)
2. Prøv en anden browser (Edge anbefales)
3. Kontrollér at Windows-version er 10 eller nyere

### Relaterede emner

→ Se: Lagerdesigner — Introduktion
→ Se: Browser-kompatibilitet

\---

# DEL 8 — PLUKKEPROFILER

\---

## Introduktion til plukkeprofiler

### Hvad er det

Plukkeprofiler er skabeloner der bestemmer hvordan pluklisterne genereres — hvilke ordrer der medtages, hvilken rute der beregnes, hvor mange ordrer der plukkes ad gangen, og meget mere.

### Sti

Admin → Plukkeprofiler → **Tilføj profil**

### Hvornår bruges det

Hver gang der genereres en plukliste vælger medarbejderen en profil. Systemet bruger profilens indstillinger til at udvælge og sortere ordrer.

### Eksempler på profiler

|Profil|Typisk opsætning|
|-|-|
|**Multipluks Ordre**|Op til 16 ordrer, totes, TSP-rute|
|**Runner**|1-linje ordrer, ingen totes|
|**Masseprint**|Identiske ordrer, batch-print|
|**Priority**|Hasteliste, max prioritet|
|**Pickup**|Afhentningsordrer|
|**Transfer**|Interne overførsler|
|**3PL-Kunde A**|Eksklusiv profil for specifik 3PL-kunde|

### Profil-sektioner (fanerne)

|Fane|Indhold|
|-|-|
|**Generelle indstillinger**|Navn, lager, prioritet, eksklusivitet|
|**Rute og liste**|Algoritme, max ordrer, totes|
|**Pakkeindstillinger**|Auto-print, følgeseddel, mål|
|**Produktprioritet**|Sortér pluk efter produkt-attributter|
|**Ordrefiltrering**|Filtrer ordrer der indgår|
|**Postnummer**|Filtrer på destination|
|**Produktfiltrering**|Filtrer på specifikke varer|
|**Kunder / Shops**|Filtrer på webshop/kilde|
|**Leveringsmetoder**|Filtrer på transportør|
|**Lokationer**|Filtrer på lagersektioner|
|**Ekskluder**|Ekskluder andre profiler|

### Relaterede emner

→ Se: Eksklusive plukkeprofiler

\---

## Plukkeprofil — Generelle indstillinger

### Hvad er det

Grundlæggende indstillinger for profilen — navn, prioritet og eksklusivitet.

### Alle felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Synligt navn på terminalen|Tekst|
|**Aktiv**|Er profilen tilgængelig|✅ / ☐|
|**Lager**|Tilknyttet lagerlokation|Valgmenu|
|**Prioritet**|Rækkefølge ved automatisk tildeling|Tal|
|**Eksklusiv**|Fanger ordrer der matches — ses ikke på andre profiler|✅ / ☐|
|**Ordretype**|Standard / TransferOrder / POS|Valgmenu|
|**Tillad genopfyldningspluk**|Inkluder genopfyldningsvarer|✅ / ☐|
|**Prime plukliste**|Markér som høj prioritet i UI|✅ / ☐|
|**Manuel filter**|Medarbejder vælger specifikke ordrer|✅ / ☐|
|**Automatisk generering**|Generer automatisk på skema|✅ / ☐|
|**Notifikation**|Send notifikation ved specifikke hændelser|✅ / ☐|

### Relaterede emner

→ Se: Eksklusive plukkeprofiler
→ Se: Plukkeprofil til transfer ordre

\---

## Plukkeprofil — Rute og listeindstillinger

### Hvad er det

Indstillinger der styrer ruteberegning og listeopbygning.

### Alle felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Plukkealoritme**|Punkter / Slange / TSM (Shortest Path)|Valgmenu|
|**Max ordrer per liste**|Maximalt antal forsendelser per plukliste|Tal|
|**Max varer per liste**|Max antal plukpunkter|Tal|
|**Max vægt**|Begrænset af medarbejder-max eller konfigureret grænse|Gram|
|**Max kubik**|Volumbegrænsning|Cm³|
|**Max højde**|Max plukke-højde|Cm|
|**Brug totes**|Aktiver tote-scanning under pluk|✅ / ☐|
|**Max totes**|Max antal totes per liste|Tal|
|**Tillad delte totes**|Tillad at én tote bruges til flere ordrer|✅ / ☐|
|**Prioritér ordrer**|Sorteringsregler for ordreudvælgelse|Valgmenu|
|**Deadlines**|Tag hensyn til leverings-deadlines|✅ / ☐|
|**Prioritér gamle ordrer**|Ældste ordrer vælges først|✅ / ☐|

### Plukkealgoritmer

|Algoritme|Beskrivelse|
|-|-|
|**Punkter**|Besøg hvert plukpunkt i fast rækkefølge|
|**Slange**|Gå frem og tilbage ad rækkerne (slange-mønster)|
|**TSM (Shortest Path)**|Optimal rute beregnet via TSP-algoritme — kortest mulig vej|

### Relaterede emner

→ Se: Pluk Ordrer — Generer plukliste (Terminal)

\---

## Plukkeprofil — Pakkeindstillinger

### Hvad er det

Indstillinger der styrer hvad der sker i pakningsprocessen for ordrer fra denne profil.

### Alle felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Auto-print label**|Print fragtlabel automatisk|✅ / ☐|
|**Auto-print følgeseddel**|Print følgeseddel automatisk|✅ / ☐|
|**Kræv dimensioner**|Mål skal indtastes|✅ / ☐|
|**Kræv vægt**|Vægt skal indtastes|✅ / ☐|
|**Fast Pack**|Aktivér Fast Pack-modus|✅ / ☐|
|**Afslut pakke (forsinkelse)**|Sekunder inden auto-afslutning|0–5 sek.|
|**Pakkestation**|Tilknyt til specifik pakkestation|Valgmenu|
|**Scanbekræftelse**|Kræv scan af vare ved pakning|✅ / ☐|

### Relaterede emner

→ Se: Pakningsprocessen (Terminal)

\---

## Plukkeprofil — Produktprioritet

### Hvad er det

Indstillinger der styrer i hvilken rækkefølge produkter plukkes — fx FIFO, udløbsdato eller brugerdefineret.

### Felter

|Felt|Beskrivelse|
|-|-|
|**Produktprioritet**|Sortér pluk: Ingen / Udløbsdato / Ankomstdato / Brugerdefineret|
|**Prioritét-attribut**|Specificér attribut ved brugerdefineret sortering|

### Relaterede emner

→ Se: Ankomst — Batch/LOT-sporing (Terminal)

\---

## Plukkeprofil — Ordrefiltrering

### Hvad er det

Regler der bestemmer hvilke ordrer der indgår i pluklister fra denne profil.

### Filtreringsregler

|Felt|Beskrivelse|Type|
|-|-|-|
|**Ordretyper**|Standard / POS / Transfer|Flervalg|
|**Minimum ordrealder**|Ordren skal være X timer gammel|Timer|
|**Maximum ordrealder**|Ordren må ikke være ældre end X timer|Timer|
|**Minimum antal linjer**|Ordren skal have mindst X linjer|Tal|
|**Maximum antal linjer**|Ordren må ikke have mere end X linjer|Tal|
|**Minimum antal enheder**|Totalt minimum antal produkter|Tal|
|**Maximum antal enheder**|Totalt maximum antal produkter|Tal|
|**Inkluder tags**|Ordren skal have dette tag|Tekst|
|**Ekskluder tags**|Ordren må ikke have dette tag|Tekst|
|**Trigger udtryk**|C# Lambda-filter på ordredata|C# Kode|

### Relaterede emner

→ Se: Plukkeprofil — Produktfiltrering

\---

## Plukkeprofil — Postnummer, lande og kundenummer

### Hvad er det

Geografiske og kunderelaterede filtre.

### Felter

|Felt|Beskrivelse|
|-|-|
|**Inkluder postnumre**|Komma-separeret liste af postnumre|
|**Ekskluder postnumre**|Postnumre der aldrig medtages|
|**Inkluder lande**|Alpha-2 landekoder|
|**Ekskluder lande**|Lande der ikke medtages|
|**Inkluder kundenumre**|Specifikke kundenumre|
|**Ekskluder kundenumre**|Kundenumre der ikke medtages|

### Eksempler

```
# Kun til Danmark og Sverige
Inkluder lande: DK, SE

# Kun til butik
Inkluder kundenumre: BUTIK

# Alle undtagen business-kunder
Ekskluder tags: B2B
```

### Relaterede emner

→ Se: Plukkeprofil — Ordrefiltrering

\---

## Plukkeprofil — Produktfiltrering

### Hvad er det

Filtre der bestemmer hvilke produkter der inkluderes eller ekskluderes.

### Felter

|Felt|Beskrivelse|
|-|-|
|**Inkluder SKU'er**|Kun ordrer med disse produkter|
|**Ekskluder SKU'er**|Ordrer med disse produkter medtages ikke|
|**Inkluder tags**|Produkter med disse tags|
|**Ekskluder tags**|Produkter med disse tags ekskluderes|
|**Inkluder kategorier**|Produktkategorier der medtages|

### Relaterede emner

→ Se: Plukkeprofil — Ordrefiltrering

\---

## Plukkeprofil — Kunder / Shops

### Hvad er det

Filtrer pluklisten til specifikke webshops eller 3PL-kunder.

### Felter

|Felt|Beskrivelse|
|-|-|
|**Inkluder shops**|Kun ordrer fra disse shops|
|**Ekskluder shops**|Ordrer fra disse shops medtages ikke|

### Typisk brug (3PL)

Opret én profil per 3PL-kunde med kundens shop som eksklusivt filter.

### Relaterede emner

→ Se: Eksklusive plukkeprofiler

\---

## Plukkeprofil — Leveringsmetoder

### Hvad er det

Filtrer pluklisten til specifikke transportører og services.

### Felter

|Felt|Beskrivelse|
|-|-|
|**Inkluder leveringsmetoder**|Kun ordrer med disse metoder|
|**Ekskluder leveringsmetoder**|Ordrer med disse metoder medtages ikke|

### Eksempel

En profil til udelukkende GLS pakkeshop-ordrer:
`Inkluder leveringsmetoder: gls\_private\_droppoint`

### Relaterede emner

→ Se: Leveringsmetoder — opsætning

\---

## Plukkeprofil — Lokationer og lagersektioner

### Hvad er det

Begræns pluk til specifikke lagersektioner eller haller.

### Felter

|Felt|Beskrivelse|
|-|-|
|**Inkluder sektioner**|Pluk kun fra disse sektioner|
|**Ekskluder sektioner**|Pluk aldrig fra disse sektioner|
|**Inkluder lokationer**|Specifikke placeringer|
|**Ekskluder lokationer**|Placeringer der aldrig plukkes fra|

### Relaterede emner

→ Se: Lagerdesigner — Refill-lokationer og sektioner

\---

## Plukkeprofil — Ekskluder profiler

### Hvad er det

Angiv andre profiler der ikke må indeholde de samme ordrer som denne profil.

### Felter

|Felt|Beskrivelse|
|-|-|
|**Ekskluder profiler**|Liste af profiler der ekskluderer ordrer der er i denne profil|

### Bemærk

Brug **Eksklusive plukkeprofiler** frem for denne mekanisme — det er den anbefalede tilgang.

### Relaterede emner

→ Se: Eksklusive plukkeprofiler

\---

## Eksklusive plukkeprofiler

### Hvad er det

System hvor profiler evalueres i prioritetsrækkefølge og "fanger" matchende ordrer — disse ses ikke på profiler med lavere prioritet.

### Systemlogik

1. Alle eksklusive profiler sorteres: **højeste prioritet øverst**
2. Én ordre evalueres mod profil med højeste prioritet
3. Matcher: ordren **fanges** — vises kun på denne profil
4. Matcher ikke: evalueres mod næste profil
5. Profiler uden eksklusivitet viser altid alle ikke-fangede ordrer

### Opsætning

Admin → Plukkeprofil → Generelle indstillinger → **Eksklusiv = ✅**

### Eksempel

|Profil|Prioritet|Eksklusiv|Resultat|
|-|-|-|-|
|Singlelines (max 1 linje)|90|✅|Fanger 70 af 100 ordrer|
|Alle ordrer|0|Nej|Viser de resterende 30|

### Best practice

Brug eksklusive profiler frem for manuelle ekskluderinger — lettere at vedligeholde og mere forudsigeligt.

### Relaterede emner

→ Se: Introduktion til plukkeprofiler
→ Se: Plukstrategi — Eksklusive profiler (Terminal)

\---

## Plukkeprofil til transfer ordre

### Hvad er det

En særlig plukkeprofil konfigureret specifikt til interne lageroverførsler.

### Konfiguration

|Felt|Værdi|
|-|-|
|**Ordretype**|TransferOrder|
|**Kildelokation**|Vælg kildelokation|
|**Destinationslokation**|Vælg modtagerlokation|

### Relaterede emner

→ Se: Transfer ordre — komplet guide
→ Se: Eget lagerflyt

\---

## Eget lagerflyt

### Hvad er det

Opsætning af en leveringsmetode til interne lagerflytninger.

### Opsætning (kræves én gang)

1. Opret leveringsmetode:

   * Udbyder: `template`
   * Nøgle: `Eget Lagerflyt`
2. Opret plukkeprofil med ordretype **TransferOrder** og kildelokation

### Relaterede emner

→ Se: Transfer ordre — komplet guide
→ Se: Leveringsmetoder — opsætning



\---

# DEL 9 — SORTERINGSZONER

\---

## Sorteringszoner — Komplet guide

### Hvad er det

Sorteringszoner automatiserer sortering af pakker til rigtig transportør/afhentningszone baseret på regler. En pakke evalueres mod regler og tildeles en zone.

### Sti

Admin → Indstillinger → Sorteringszoner

### Hvad en sorteringszone indeholder

|Element|Beskrivelse|
|-|-|
|**Zonenavn**|Visningsnavn (vises på terminal)|
|**Prioritet**|Evalueringsrækkefølge (lavest = højest prioritet)|
|**Regler**|Betingelser der skal opfyldes for tildeling|
|**Deadline**|Seneste tidspunkt for afsendelse fra zonen|
|**Cut-off**|Seneste tidspunkt for modtagelse af ordrer til zonen|

### Regler — alle typer

|Regeltype|Beskrivelse|Eksempel|
|-|-|-|
|**Leveringsmetode**|Match på transportør/service|`gls\_private\_droppoint`|
|**Land**|Modtagerland (Alpha-2)|`DK`, `SE`, `DE`|
|**Postnummer**|Specifikt postnummer eller interval|`2300`, `1000-1999`|
|**Varevægt**|Ordrevægt over/under grænse|`< 5000g`|
|**Tag**|Ordretag|`B2B`|
|**Tidspunkt**|Ordren modtaget inden/efter klokkeslæt|`< 14:00`|
|**Ordretype**|Standard / POS / Transfer|`Standard`|

### Regelevaluering

Reglerne evalueres med **AND-logik** inden for en zone: ALLE regler skal matche.
Flere zoner evalueres i **prioritetsrækkefølge** — første match vinder.

### Deadlines og cut-off

|Begreb|Beskrivelse|
|-|-|
|**Deadline**|Seneste afsendelsestidspunkt fra zonen (fx 14:30)|
|**Cut-off**|Seneste ordremodtagelse til at nå deadline (fx 14:00)|
|**Over deadline**|Ordren markeres — bør håndteres manuelt|

### Eksempel: Komplet sorteringszoneopsætning

```
Zone: GLS Pakkeshop DK
  Prioritet: 10
  Regler:
    - Leveringsmetode = gls\_private\_droppoint
    - Land = DK
  Deadline: 14:30
  Cut-off: 14:00

Zone: GLS Erhverv DK
  Prioritet: 20
  Regler:
    - Leveringsmetode = gls\_business\_delivery
    - Land = DK
  Deadline: 15:00
  Cut-off: 14:30

Zone: International
  Prioritet: 99
  Regler:
    - Land != DK (alle lande undtagen DK)
  Deadline: 13:00
  Cut-off: 12:30
```

### Best practice

* Hold prioritetsnumre med god afstand (10, 20, 30) — let at indsætte nye zoner
* Opret altid en "fang alle" zone med højest prioritetsnummer
* Dokumentér cut-off-tider og kommunikér dem til lagerteamet

### Relaterede emner

→ Se: Scan til Palle (Terminal)
→ Se: End-of-day / Waybill (Admin)

\---

# DEL 10 — LEVERINGSMETODER

\---

## Leveringsmetoder — Opsætning

### Hvad er det

Opsætning af fragtintegrationer og leveringsmetoder i SmartPack.

### Sti

Admin → Leveringsmetoder

### Opret leveringsmetode

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Visningsnavn|Tekst|
|**Udbyder**|Fragtfirma (gls, postnord, bring, template...)|Valgmenu|
|**Method key**|Teknisk nøgle der matches med webshop|Tekst|
|**Aktiv**|Er metoden aktiv|✅ / ☐|
|**Test-tilstand**|Brug testmiljø|✅ / ☐|
|**API-nøgler**|Fragtfirmaets loginoplysninger|Felter per udbyder|
|**Tracking URL**|URL-skabelon til tracking|URL-template|
|**Addons**|Tilvalg fra fragtfirmaet|Per udbyder|

### Method keys — vigtige eksempler

|Transportør|Service|Method Key|
|-|-|-|
|GLS|Erhvervslevering|`gls\_business\_delivery`|
|GLS|Hjemmelevering|`gls\_private\_delivery`|
|GLS|FlexDelivery|`gls\_flex\_delivery`|
|GLS|Forced Deposit|`gls\_private\_delivery\_deposit`|
|GLS|Pakkeshop|`gls\_private\_droppoint`|
|GLS|ShopReturn|`gls\_shop\_return`|
|GLS|ShopReturn QR|`gls\_shop\_return\_qr`|
|GLS|Return Pickup|`gls\_return\_pickup`|
|PostNord|Erhvervslevering|`postnord\_business\_delivery`|
|Intern flyt|Eget lager|`Eget Lagerflyt`|
|Afhentning|Pickup|`shopify\_custom\_dk` (standard)|

### Relaterede emner

→ Se: GLS (integrationer.md)
→ Se: PostNord (integrationer.md)
→ Se: Shop Checkout konfiguration

\---

## Leveringspris konfiguration

### Hvad er det

Definition af prisniveauer for forsendelse baseret på vægt og mål.

### Sti

Admin → Leveringsmetoder → Leveringspriser

### Alle felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Prisniveauets navn|Tekst|
|**Land**|Gælder for dette land|Alpha-2|
|**Max længde**|Maks. pakkelængde|mm|
|**Max længde + omkreds**|Maks. samlet mål (L + 2×B + 2×H)|mm|
|**Max vægt**|Maks. pakkevægt|Gram|
|**Pris**|Fragtpris for dette interval|Beløb|

### Relaterede emner

→ Se: Leveringsmetoder — Opsætning

\---

## Shop Checkout konfiguration

### Hvad er det

Konfiguration af hvilke leveringsmetoder der præsenteres for kunder i webshoppens checkout.

### Sti

Admin → Shop Checkout

### Opret checkout-mulighed — alle felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Visningsnavn i checkout|Tekst|
|**Beskrivelse**|Vist under navn på shoppen|Tekst|
|**Sortering**|Rækkefølge i checkout|Tal|
|**Leveringsmetode**|Tilknyt SmartPack-leveringsmetode|Valgmenu|
|**Max resultater**|Maks. pakkeshops/drop points vist|Tal|
|**Inkluder lande**|Geografisk tilgængelighed|Alpha-2 liste|
|**Ekskluder lande**|Lande der ekskluderes|Alpha-2 liste|
|**Pris**|Pris vist til kunden|Beløb|
|**Valutakode**|Valuta for prisen|ISO 4217|

### Formel til betinget pris

Brug formler til dynamisk prissætning i checkout:

```
# Gratis fragt ved køb over 500 kr. og under 35 kg
price >= 500 and weight < 35000

# Kun til specifikke postnumre
recipient.zipcode in '2300', '2500' and not recipient.email like '@company.com'

# Ordrer med over 10 varer, alle over 100 kr.
items.count > 10 and items all price > 100
```

### Relaterede emner

→ Se: Leveringsmetoder — Opsætning

\---

# DEL 11 — MEDARBEJDERE

\---

## Medarbejderadministration

### Hvad er det

Komplet oversigt over alle medarbejdere med mulighed for oprettelse, redigering og deaktivering.

### Sti

Admin → Medarbejdere

→ Se: Opret / Rediger medarbejder (Del 1)
→ Se: Roller og rettigheder (Del 1)

\---

## Arbejdsplaner

### Hvad er det

Konfiguration af medarbejdernes arbejdstider til rapportering og kapacitetsplanlægning.

### Sti

Admin → Medarbejdere → Arbejdsplaner

### Felter

|Felt|Beskrivelse|
|-|-|
|**Plansnavn**|Navn på arbejdsplanen|
|**Dage**|Mandag–Søndag|
|**Start**|Starttidspunkt per dag|
|**Slut**|Sluttidspunkt per dag|
|**Pause**|Pausetid i minutter|

### Relaterede emner

→ Se: Employee Performance Dashboard

\---

# DEL 12 — KUNDER (3PL)

\---

## Kundeoversigt

### Hvad er det

Administration af 3PL-kunder — virksomheder der bruger dit lager til deres eget varesortiment.

### Sti

Admin → Kunder

### Kundedata

|Felt|Beskrivelse|
|-|-|
|**Firmanavn**|Kundens officielle navn|
|**Adresse**|Firmaadresse|
|**CVR**|Registreringsnummer|
|**Kontaktperson**|Primær kontakt|
|**Email**|Fakturering og kommunikation|
|**Telefon**|Kontaktnummer|
|**Lager**|Tilknyttet lager (delt/eget)|
|**Webhooks**|URL til webhook-notifikationer|
|**HMAC Secret**|Sikkerhedsnøgle til webhook-signering|

### Lagertyper

|Type|Beskrivelse|
|-|-|
|**Fælles lager**|Kundens varer er på samme lager som andre kunder|
|**Delt lager**|Kundens varer er adskilt i separate sektioner|
|**Eget lager**|Kunden har dedikeret lager|

### Relaterede emner

→ Se: 3PL Prissætning
→ Se: Valutakurs — overstyring

\---

## Valutakurs — Overstyring

### Hvad er det

Mulighed for at oversætte priser til en anden valuta per 3PL-kunde.

### Hvornår bruges det

3PL-kunder der faktureres i en anden valuta end systemets basisvaluta.

### Opsætning

Admin → Kunder → vælg kunde → **Valutakurse** → tilføj overstyring.

### Relaterede emner

→ Se: 3PL Prissætning

\---

## 3PL Prissætning

### Hvad er det

Konfiguration af faktureringsgrundlag for 3PL-kunder. Alt prissættes per kundelager.

### Sti

Admin → Lager/Kunde → Prissætning

### Prisstrukturer — alle felter

|Pris|Beskrivelse|Type|
|-|-|-|
|**Valuta**|Faktureringsvaluta|ISO 4217|
|**Moms**|Momssats|Procent|
|**Ad hoc timepris**|Timepris for ekstra arbejde|Beløb|
|**Fakturagebyr**|Fast gebyr per faktura|Beløb|
|**Ordrepris**|Fast pris per behandlet ordre|Beløb|
|**Pakkepris**|Fast pris per pakket forsendelse|Beløb|
|**Plukkepris**|Pris per plukket varelinje|Beløb|
|**Plukprisregel**|Differentierede plukkeprisregler|Regler|

### Lagerpladspriser

|Indstilling|Beskrivelse|Type|
|-|-|-|
|**M² pris**|Pris per kvadratmeter lagerplads|Beløb|
|**Rabat M² pris**|Rabateret M²-pris ved volumen|Beløb|
|**Låst M²**|Garanteret antal M² uanset faktisk brug|Tal|
|**Autotrim luft**|Fjerner automatisk "luftpladser" i M²-opgørelse|✅ / ☐|

### Interne kostpriser

|Post|Beskrivelse|Type|
|-|-|-|
|**Lønomkostninger**|Intern timeomkostning|Beløb/time|
|**Lagerleje kostpris**|Intern lagerleje per M²|Beløb/M²|
|**Pakke kostpris**|Intern pakkeomkostning|Beløb|

### Relaterede emner

→ Se: Kundeoversigt



\---

# DEL 13 — RAPPORTER

\---

## Lagerrapporter og historikvisninger

### Hvad er det

SmartPack tilbyder seks typer lagerhistorik-rapporter til revision, analyse og eksport.

### Sti

Admin → Rapporter

### De seks rapporttyper

|Rapport|Beskrivelse|
|-|-|
|**Lagerhistorik**|Alle lagerbevægelser i perioden (ind/ud/regulering)|
|**Ordrehistorik**|Alle behandlede ordrer med detaljer|
|**Ankomsthistorik**|Alle varemodtagelser|
|**Plukhistorik**|Alle plukkede ordrer per medarbejder|
|**Pakkehistorik**|Alle pakkede forsendelser|
|**Reguleringshistorik**|Alle manuelle lagerreguleringer|

### Fælles filtreringsmuligheder

|Filter|Muligheder|
|-|-|
|**Dato**|Fra / Til|
|**Lager**|Alle / Specifikt|
|**Bruger**|Alle / Specifik medarbejder|
|**SKU**|Specifik vare|
|**Shop**|Alle / Specifik shop|

### CSV-eksport

Alle rapporter kan eksporteres til CSV.

⚠️ CSV-format afhænger af CultureInfo-indstilling:

* `da-DK`: semikolon som separator
* `en-US`: komma som separator

→ Se: CSV-separator (CultureInfo)

### Relaterede emner

→ Se: Batchsporing
→ Se: Serienummersporing

\---

## Batchsporing

### Hvad er det

Sporingsværktøj der viser hele rejsen for et specifikt batchnummer — fra modtagelse til forsendelse til slutkunde.

### Sti

Admin → Kunder → Batchsporing

### Søg på

|Søgetype|Eksempel|
|-|-|
|**Batchnummer / Lotnummer**|`LOT-2024-001`|
|**SKU**|`SKU-001`|
|**Datointerval**|`01-01-2024 – 31-03-2024`|

### Hvad vises

|Data|Beskrivelse|
|-|-|
|**Ankomstdato**|Hvornår batchen kom ind|
|**Antal modtaget**|Antal enheder i batchen|
|**Placeringer**|Alle hyldepladser batchen har været på|
|**Ordrelinjer**|Alle ordrer der har plukket fra batchen|
|**Forsendelsesdata**|Track \& trace, afsendelsesdato, modtager|

### Relaterede emner

→ Se: Ankomst — Batch/LOT-sporing (Terminal)
→ Se: Lagerrevision — LOT/Batch håndtering (Terminal)

\---

## Serienummersporing

### Hvad er det

Sporingsværktøj der finder hvilken ordre et specifikt serienummer er afsendt med.

### Sti

Admin → Rapporter → Serienummersporing

### Søg på

Serienummeret (præcis match eller delvist match).

### Hvad vises

|Data|Beskrivelse|
|-|-|
|**Serienummer**|Det eftersøgte serienummer|
|**SKU**|Tilhørende produkt|
|**Ordrenummer**|Ordren det blev afsendt med|
|**Afsendelsesdato**|Hvornår det forlod lageret|
|**Modtager**|Kundens navn og adresse|
|**Track \& trace**|Forsendelseslink|

### Relaterede emner

→ Se: Produktflags (Registrer serie nr)
→ Se: Pakningsprocessen — Fast Pack (Terminal)

\---

# DEL 14 — STAMDATA

\---

## Totes og plukkekasser

### Hvad er det

Administration af totes (plukkekasser) der bruges under pluk.

### Sti

Admin → Stamdata → Totes

### Felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Tote-ID**|Unikt ID (bruges i `t\_`-stregkoden)|Tekst|
|**Navn**|Visningsnavn|Tekst|
|**Maksimal vægt**|Begrænser hvad der lægges i toten|Gram|
|**Maksimal volumen**|Volumbegrænsning|Cm³|
|**Aktiv**|Om toten er i drift|✅ / ☐|

### QR-koder til totes

Video: https://www.youtube.com/watch?v=Z\_JamyxxxLI

### Relaterede emner

→ Se: Aktiv plukning — Vogn og tote (Terminal)

\---

## Emballage og pakketyper

### Hvad er det

Registrering af de emballagetyper der bruges til forsendelse.

### Sti

Admin → Stamdata → Emballage

### Felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Emballage-navn|Tekst|
|**Bredde**|Indre bredde|mm|
|**Længde**|Indre længde|mm|
|**Højde**|Indre højde|mm|
|**Egenvægt**|Emballagens vægt|Gram|
|**Standard**|Bruges som default|✅ / ☐|

### Emballagedata (compliance)

SmartPack registrerer emballagemængde til brug ved emballage-lovgivningsrapportering (DE, FR og andre lande med krav).

### Relaterede emner

→ Se: Pakningsprocessen (Terminal)

\---

## Vogne

### Hvad er det

Registrering af rullevogne til brug under plukning.

### Sti

Admin → Stamdata → Vogne

### Felter

|Felt|Beskrivelse|
|-|-|
|**Vogn-ID**|Unikt ID (`tr\_`-stregkoden)|
|**Navn**|Visningsnavn|
|**Max totes**|Antal totes vognen rummer|

### Relaterede emner

→ Se: Aktiv plukning — Vogn og tote (Terminal)

\---

## Printere

### Hvad er det

Oversigt over alle printere der er registreret via Printservice.

### Sti

Admin → Stamdata → Printere

### Hvad vises

|Kolonne|Beskrivelse|
|-|-|
|**Navn**|Printerens visningsnavn|
|**Status**|Online / Offline|
|**Type**|Label / Etiket / A4|
|**Sidst set**|Seneste online-tidspunkt|

### Relaterede emner

→ Se: Printservice — Opsætning (Windows) (Terminal)
→ Se: Printerindstillinger (Terminal)

\---

## Enhedstyper

### Hvad er det

Konfiguration af målenheder der bruges for produkter.

### Sti

Admin → Stamdata → Enhedstyper

### Standardtyper

|Enhed|Beskrivelse|
|-|-|
|**Stk**|Hel enhed — kan ikke sælges i decimaler|
|**Ltr**|Liter — kan sælges i 0,1|
|**Meter**|Meter — kan sælges i 0,1|

\---

# DEL 15 — RETURPORTAL

\---

## Returportal — Opsætning

### Hvad er det

SmartPacks selvbetjenings-returportal hvor kunder kan initiere returer uden at kontakte kundeservice.

### Sti

Admin → Indstillinger → Returportal

### Status

Beta — tilgængelig til Shopify-integration.

### Opsætningsfelter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Aktiv**|Er returportalen aktiv|✅ / ☐|
|**Returportal URL**|Den offentlige URL kunder tilgår|Tekst|
|**Returneres til**|Standardlager for returvarer|Valgmenu|
|**Logo**|Upload logo til returportal|Upload|
|**Primærfarve**|Brandfarve|Hexkode|
|**Returperiode**|Antal dage fra køb (returret)|Tal|
|**Automatisk kreditering**|Kreditér automatisk ved Shopify|✅ / ☐|

### Integrationer

* **Shopify V2**: fuld integration — returer synkroniseres to-vejs

### Relaterede emner

→ Se: Alternativ returadresse
→ Se: Returårsager og -handlinger

\---

## Alternativ returadresse

### Hvad er det

Mulighed for at definere en anden adresse end lageradressen som returadresse for kunder.

### Opsætning

Admin → Indstillinger → Returportal → **Alternativ returadresse**

### Felter

|Felt|Beskrivelse|
|-|-|
|**Firmanavn**|Alternativt firmanavn|
|**Adresse**|Fuld returadresse|
|**Postnummer**||
|**By**||
|**Land**|Alpha-2|

### Relaterede emner

→ Se: Returportal — Opsætning

\---

## Returårsager og -handlinger

### Hvad er det

Konfiguration af de returnationsårsager og handlinger kunden kan vælge i returportalen.

### Returårsager (eksempler)

|Årsag|Beskrivelse|
|-|-|
|Forkert størrelse|Kunden vil have anden størrelse|
|Defekt vare|Varen er beskadiget|
|Fortryder købet|Fortrydelsesret|
|Forkert vare modtaget|Fejlplukning|
|Anden årsag|Fritekst|

### Returhandlinger

|Handling|Beskrivelse|
|-|-|
|**Refusion**|Pengene tilbage til betalingsmetoden|
|**Butikkredit**|Kredit til brug i butikken|
|**Gavekort**|Gavekort af tilsvarende beløb|
|**Ombytning**|Ombyt til anden variant/størrelse|

### Fejl: Kunde kan ikke vælge anden variant

**Årsag:** External ID-mismatch mellem SmartPack og Shopify.
**Løsning:** Slet External ID på produktet → genstart SmartPack → kør Full Sync.

### Relaterede emner

→ Se: Retur — Returtyper (Terminal)
→ Se: Retur — Modtagelse af returpakke (Terminal)

\---

# DEL 16 — WORKFLOWS

\---

## Workflows — Komplet guide

### Hvad er det

Et JavaScript-baseret automatiseringsmodul der lader dig manipulere ordredata **inden** de oprettes eller opdateres i SmartPack.

### Sti

Admin → Indstillinger → Workflows

### Hvornår bruges det

* Tving bestemt fragtmetode på ordrer med specifikt ordrenummer
* Fjern eller tilføj produkter automatisk
* Ændr leveringsadresse baseret på regler
* Sæt kommentarer automatisk

### Workflow-indstillinger

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Workflowets interne navn|Tekst|
|**Index**|Kørselsrækkefølge (0 køres først)|Tal|
|**Aktiv**|Er workflowet aktiveret|✅ / ☐|
|**Trigger**|Hvornår workflowet kører|Valgmenu|
|**Trigger Expression**|C# Lambda der bestemmer HVILKE ordrer der matches|C#|
|**JavaScript kode**|Den faktiske manipulation|JavaScript|

### Triggers

|Trigger|Hvornår|
|-|-|
|**Før ordren oprettes**|Inden SmartPack gemmer den nye ordre|
|**Før ordren opdateres**|Inden SmartPack gemmer en opdatering|
|**Efter ordren oprettes**|Direkte efter oprettelse|
|**Efter ordren opdateres**|Direkte efter opdatering|

### Trigger Expression (C# Lambda)

Bruges til at begrænse hvilke ordrer der køres igennem workflowet.

```csharp
// Kør kun på ordrer med "B2B" i ordrenummeret
order.orderNo.Contains("B2B")

// Kør kun på ordrer med kundekommentar
customerComment != ""

// Kør kun på ordrer til Danmark
order.deliveryAddress.country == "DK"
```

### JavaScript-kode

Den faktiske manipulation af ordren skrives som JavaScript.

```javascript
// Tving PostNord erhvervslevering på B2B-ordrer
if (order.orderNo.includes("B2B")) {
  order.deliveryMethod = "postnord\_business\_delivery";
}

// Sæt PNDK hvis leveringsmetode er "none"
if (order.deliveryMethod === "none") {
  order.deliveryMethod = "PNDK";
}
```

### Preview-URL

Test dit workflow på en specifik ordre:
`https://ditlager.smartpack.dk/Admin/Workflows?preview=ORDERID`

### Index-rækkefølge

Workflows køres i stigende index-rækkefølge:
`0 → 1 → 2 → 10` osv.

### Hvad kan ændres

* Leveringsmetode
* Produkter (tilføj/fjern)
* Antal
* Modtageradresse
* Kommentarer
* Tags

### Best practice

* Brug altid **Trigger Expression** for at begrænse ressourceforbrug
* Test med preview-URL inden aktivering
* Hold index-numre med god afstand

### AI-assisteret kode

SmartPack understøtter AI-konvertering af beskrivelse til JavaScript — beskriv hvad workflowet skal gøre i tekst, og systemet foreslår koden.

### Relaterede emner

→ Se: Plukkeprofil — Ordrefiltrering
→ Se: POS / Kasse Flow



\---

# DEL 17 — E-MAILS OG SKABELONER

\---

## Email-skabeloner — Komplet opsætning

### Hvad er det

Opsætning og administration af automatiske emails der sendes til kunder ved forsendelse, retur og dropshipping.

### Sti

Admin → E-mails → **Tilføj e-mailskabelon**

### Skabelontyper

|Type|Hvornår brugt|
|-|-|
|**Forsendelse**|Afsendelsesbekræftelse med track \& trace|
|**Dropshipping**|Send fragtlabel til leverandør, eller bekræftelse til kunde|
|**Retur**|Send returlabel til kunden|

### Alle indstillingsfelter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Skabelonnavn**|Internt genkendeligt navn|Tekst|
|**Type**|Forsendelse / Dropshipping / Retur|Valgmenu|
|**Aktiv**|Skabelonen evalueres|✅ — skal være markeret|
|**I brug**|Skabelonen sender emails|✅ — skal **også** være markeret|
|**Prioritet**|Evalueringsrækkefølge ved overlappende filtre|Tal (højest = first)|
|**Afsendernavn match**|Filter: kun ordrer med dette afsendernavn|Tekst|
|**Trigger udtryk**|C# Lambda-filter (fx specifik SKU)|C#|
|**Modtagere (kopi)**|BCC-modtagere separeret med semikolon|Email-liste|
|**Ignorer primær modtager**|Send KUN til BCC — ikke til kunden|✅ / ☐|

### ⚠️ KRITISK: Begge flueben skal være markeret

**Aktiv** + **I brug** skal begge være markeret for at mailen sendes.
Kun "Aktiv" = evalueres men sendes ikke.

### Leveringsmetode- og landefiltre

* Filtrer på specifik leveringsmetode (fx kun PostNord-ordrer)
* Filtrer på land (Alpha-2 koder)
* Kombinér filtre for skræddersyede flows per land og transportør

### Labels og følgesedler i emails

* PDF-labels kan vedhæftes automatisk
* Følgesedler kan vedhæftes
* Skabelonerne bruger Liquid template-sprog til dynamiske variabler

### BCC-brug

Modtagere i kopifeltet modtager mailen som BCC. Bruges til:

* Trustpilot-invitationer
* Email-marketing flows
* Interne notifikationer

### Eksempel: Send kun til leverandør, ikke kunden

1. Opret Dropshipping-skabelon
2. Udfyld leverandørens email i **Modtagere (kopi)**
3. Aktivér **Ignorer primær modtager**

### Relaterede emner

→ Se: SMTP-opsætning
→ Se: Gensend afsendelsesmail

\---

## Følgeseddel-skabeloner

### Hvad er det

Opsætning af automatiske følgesedler der printes ved pakning.

### Sti

Admin → Følgesedler

### Felter

|Felt|Beskrivelse|
|-|-|
|**Navn**|Skabelonens navn|
|**Aktiv**|Er skabelonen aktiv|
|**Trigger**|Hvornår printes følgesedlen|
|**Printer**|Vælg printer (A4)|
|**Papirtype**|A4 / Tilpasset|
|**Indhold**|Konfigurér via model-data (variabler)|

### Relaterede emner

→ Se: Stregkode-/labelskabeloner

\---

## Stregkode-/labelskabeloner

### Hvad er det

Opsætning af stregkode-labels og vareetiketter med tilpasset design.

### Sti

Admin → Stregkoder

### Felter

|Felt|Beskrivelse|
|-|-|
|**Navn**|Skabelonens navn|
|**Printer**|Vælg etiketprinter|
|**Papirstørrelse**|Dymo S0722370 / Tilpasset størrelse|
|**Indhold**|Konfigurér via model-data|
|**Trigger**|Hvornår printes labelen|

### Relaterede emner

→ Se: Printservice — Opsætning (Windows) (Terminal)

\---

## SMTP-opsætning

### Hvad er det

Konfiguration af den mailserver SmartPack bruger til at sende emails.

### Sti

Admin → Indstillinger → SMTP

### Krav

|Felt|Eksempel|
|-|-|
|**SMTP Server**|`smtp.gmail.com`|
|**Port**|`587` (TLS) eller `465` (SSL)|
|**Brugernavn**|`afsender@dinvirksomhed.dk`|
|**Adgangskode**|App-adgangskode (ikke normal kodeord)|
|**Fra-navn**|`Webshop Navn`|
|**Fra-email**|`ordre@dinvirksomhed.dk`|
|**Kryptering**|TLS / SSL|

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Emails sendes ikke|Kontrollér port + kryptering|
|Auth-fejl|Brug app-adgangskode (Gmail: 2FA kræves)|
|Timeout|Tjek firewall ikke blokerer SMTP-porten|

### Relaterede emner

→ Se: Email-skabeloner — komplet opsætning

\---

# DEL 18 — SYSTEMINDSTILLINGER

\---

## Systemindstillinger — Oversigt

### Hvad er det

Global konfiguration af SmartPack-installationen.

### Sti

Admin → Indstillinger → Systemindstillinger

### Nøgleindstillinger

|Indstilling|Beskrivelse|Type|
|-|-|-|
|**Firmanavn**|Vises i emails og dokumenter|Tekst|
|**Standardvaluta**|Systemets basisvaluta|ISO 4217|
|**Tidzone**|Systemets tidszone|Valgmenu|
|**Sprog**|Admin-interface sprog|Valgmenu|
|**CultureInfo CSV**|CSV-separator (da-DK = `;` / en-US = `,`)|Valgmenu|
|**Kræv regulering godkendelse**|Admin skal godkende reguleringer|✅ / ☐|
|**Aktive terminal-apps**|Hvilke apps vises på terminalen|Flervalg|
|**Restart Application**|Genstart SmartPack-applikationen|Knap|

### Relaterede emner

→ Se: Genstart SmartPack
→ Se: CSV-separator (CultureInfo)

\---

## Genstart SmartPack

### Hvad er det

Funktion til at genstarte SmartPack-applikationen uden at kontakte hosting.

### Hvornår bruges det

* Efter ændring af systemindstillinger der kræver genstart
* Ved vedvarende systemfejl eller baglås

### Sti

Admin → Indstillinger → Systemindstillinger → **Restart Application**

### ⚠️ Bemærk

Genstart afbryder alle aktive sessioner kortvarigt. Planlæg til lav-aktivitetsperiode.

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Systemet reagerer slet ikke|Kontakt support: support@smartpack.dk|

### Relaterede emner

→ Se: Terminal lader eller fryser (Terminal)

\---

## Lokationer

### Hvad er det

Administration af de fysiske lagerlokationer SmartPack arbejder med.

### Sti

Admin → Indstillinger → Lokationer

### Felter

|Felt|Beskrivelse|Type|
|-|-|-|
|**Navn**|Lokationens navn|Tekst|
|**Adresse**|Fuld adresse|Adresse|
|**Lagertype**|Primær / Sekundær / Transfer|Valgmenu|
|**Aktiv**|Er lokationen aktiv|✅ / ☐|

### ⚠️ Vigtigt: Adresse skal udfyldes

Fejl **OrderFromLocationAddressIsEmpty** opstår hvis afsenderlokationen mangler adresse.
Løsning: Admin → Indstillinger → Lokationer → udfyld adresse.

### Relaterede emner

→ Se: Transfer ordre — komplet guide

\---

## CSV-separator (CultureInfo)

### Hvad er det

Indstilling der bestemmer om CSV-filer bruger komma eller semikolon som kolonneseparator.

### Sti

Admin → Indstillinger → Systemindstillinger → **CultureInfo CSV**

### Muligheder

|Indstilling|Separator|Decimalseparator|Bruges i|
|-|-|-|-|
|`da-DK`|`;` (semikolon)|`,` (komma)|Danmark — åbn direkte i Excel|
|`en-US`|`,` (komma)|`.` (punktum)|Internationalt format|

### Hvorfor det betyder noget

Excel forventer det format der matcher computerens region. Åbner du en komma-separeret CSV på en dansk computer, tolker Excel kommaer som decimaler — alle data havner i én kolonne.

### Løsning ved forkert format

1. Admin → Indstillinger → Systemindstillinger
2. Skift CultureInfo CSV til `da-DK`
3. Klik **Restart Application**
4. Eksportér CSV igen

### Relaterede emner

→ Se: Lagerrapporter og historikvisninger
→ Se: Genstart SmartPack

\---

## Flush DNS

### Hvad er det

Nulstilling af DNS-cachen på computere med Printservice — løser printfejl der skyldes forældet netværksadresse.

### Symptom

Printer fejler med udskrift uagtet at den er online og konfigureret korrekt.

### Løsning

1. Åbn **CMD / Kommando-prompt** på Windows
2. Skriv: `ipconfig /flushdns`
3. Tryk Enter
4. Følgende besked vises: *"Flushing the DNS Resolver Cache"*
5. Gentag på **alle computere** der kører Printservice

### ⚠️ Vigtigt

Flush DNS skal køres på **ALLE** computere med Printservice — ikke kun én.

### Relaterede emner

→ Se: Printservice — Opsætning (Windows) (Terminal)
→ Se: Labelprint — Fejl og løsninger (Terminal)

\---

## API-adgang

### Hvad er det

Opsætning af API-adgang til SmartPack for ekstern integration.

### Sti

Admin → Indstillinger → Apps/Integrationer → **Tilføj private app**

### Hvad genereres

|Element|Beskrivelse|
|-|-|
|**AppId**|Unikt app-identifikator|
|**AccessToken**|Hemmeligt token — gem sikkert|

### Dokumentation

https://demo.smartpack.dk/

### Changelog

https://demo.smartpack.dk/

### Relaterede emner

→ Se: WooCommerce integration

\---

## WooCommerce integration

### Hvad er det

Opsætning af forbindelsen mellem WooCommerce og SmartPack via API-nøgler.

### Sti

Admin → Indstillinger → Apps → WooCommerce

### Nødvendige data fra WooCommerce

|Data|Hvorfra|
|-|-|
|**Consumer Key**|WooCommerce → Indstillinger → Avanceret → REST API → Tilføj nøgle|
|**Consumer Secret**|Samme sted|
|**Store URL**|Din WooCommerce-butiksadresse|

### Rettigheder til API-nøglen

Nøglen skal have **Læse/Skrive** rettigheder til ordrer og produkter.

### Relaterede emner

→ Se: API-adgang

\---

## POS / Kasse Flow

### Hvad er det

Konfiguration af kassebetjening direkte fra SmartPack.

### Sti

Admin → POS

### Alle indstillinger

|Indstilling|Beskrivelse|Type|
|-|-|-|
|**Tillad pluk udenfor flow**|Pluk kan ske uden om standard kasseflow|✅ / ☐|
|**Giv besked ved pluk udenfor flow**|Notifikation til ansvarlig|✅ / ☐|
|**Giv besked ved flere lokationer**|Advar hvis varen er på flere placeringer|✅ / ☐|
|**Giv besked ved manglende lager**|Advar ved lagermangel|✅ / ☐|

### Relaterede emner

→ Se: Workflows
→ Se: Plukstrategi — Pickup (Terminal)

\---

# DEL 19 — ANKOMST (ADMIN)

\---

## Ankomstoversigt og afsendelse

### Hvad er det

Admin-visning af alle aktive og afsluttede ankomster samt afsendelser.

### Sti

Admin → Ankomst

### Oversigten viser

|Kolonne|Beskrivelse|
|-|-|
|**Ankomstnummer**|Unikt ID|
|**Type**|Standard / Retur / Intern retur|
|**Lager**|Modtagerlager|
|**Afsender**|Leverandørnavn|
|**Reference**|Referencenummer|
|**Status**|Aktiv / Afsluttet|
|**Modtaget**|Antal enheder modtaget|
|**Forventet**|Antal enheder forventet|
|**Dato**|Oprettelsesdato|

### Relaterede emner

→ Se: Ankomst (Terminal — DEL 4)

\---

# DEL 20 — FORECASTING

\---

## Transfer ordre — Komplet guide

### Hvad er det

Transfer-ordrer er interne overførsler af varer fra én SmartPack-lokation til en anden.

### Opsætning (kræves én gang)

1. Opret leveringsmetode:

   * Udbyder: `template`
   * Nøgle: `Eget Lagerflyt`
→ Se: Eget lagerflyt
2. Opret plukkeprofil med ordretype **TransferOrder** og kildelokation
→ Se: Plukkeprofil til transfer ordre

### Opret manuel transfer

Admin → Ordrer → **"Opret manuel overførsel"**

|Felt|Beskrivelse|
|-|-|
|**Varer**|Produkter der overføres|
|**Afsenderlokation**|Fra-lager|
|**Modtagerlokation**|Til-lager|
|**Forventet leveringsdato**|Estimeret ankomstdato|

### Automatisk transfer — Generer overførsler

**Knappen "Generer overførsler"** findes nederst til højre på ordresiden.

Klik → systemet genererer én samlet transfer-ordre med alle varer der mangler på primærlokationen men er tilgængelige på en anden lokation (fx Hal 3).

Kræver opsat Transfer Order-plukkeprofil.

### Pluk og afsendelse

1. Plukkeprofil til transfer udvælger varerne
2. Pluk og pak som normal ordre
3. Generér waybill

### Modtagelse i butik/anden lokation

Terminal → Ankomster → **"Modtag overførselspakke"** → scan QR-koden på pakken

### Fejl: OrderFromLocationAddressIsEmpty

Afsenderlokation mangler adresse.
Løsning: Admin → Indstillinger → Lokationer → udfyld adresse.

### Relaterede emner

→ Se: Modtag Transfer (Terminal)
→ Se: Nedlæg plukliste (Terminal)

\---

## Lager-KPI'er og benchmarks

### Hvad er det

Nøgletal til løbende driftsstyring og performancemåling.

### SmartPack-benchmarks (standard)

|Aktivitet|Benchmark|
|-|-|
|**Pakker**|40 pakker/time|
|**Pluk**|110 picks/time|
|**Lagermodtagelser**|100/time|
|**Flytninger/Genopfyld**|50/time|
|**Revisioner**|100/time|
|**Palle-scans**|100/time|

### Branchemæssige nøgletal

|KPI|Målværdi|
|-|-|
|**Plukpræcision**|> 99,5%|
|**Lageromstætning**|4–8 gange/år|
|**Lagerudnyttelse**|> 85%|
|**Returhåndteringstid**|< 48 timer|
|**Pakke/pluktid pr. ordre**|3–6 min.|
|**OTD-rate (On Time Delivery)**|> 95%|
|**Returrate**|5–25% afhænger af branche|

### Relaterede emner

→ Se: Employee Performance Dashboard

\---

*SmartPack Admin Leksikon · Komplet · Alle detaljer bevaret · v1.34.0.0*



\---

# SmartPack Terminal — Komplet Leksikon

> \*\*Format:\*\* Hvert emne er en selvstændig artikel med fuldt format. Brug Ctrl+F til at søge.
> \*\*Kilde:\*\* Live system · support.smartpack.dk · Word-kvikguider · Domæneviden
> \*\*Version:\*\* SmartPack v1.34.0.0

\---

## Indholdsfortegnelse

**DEL 1 — HARDWARE OG OPSÆTNING**

* Newland MT9084 — Opsætning
* Newland — Lås til SmartPack (Admin Tool)
* Newland — Special stregkode (GS1/AI)
* Zebra Håndterminal — Opsætning
* Printservice — Opsætning (Windows)
* Printservice — Tilføj ekstra printer
* Anbefalet hardware
* Browser-kompatibilitet
* Datasimkort

**DEL 2 — LOGIN OG NAVIGATION**

* Login
* Skift bruger
* Log ud
* Navigation og hjemknap
* Terminal lader eller fryser
* Plukliste låst/optaget

**DEL 3 — FORSIDEN**

* App-oversigt og badge-tællere
* Realtidsopdateringer (SignalR)

**DEL 4 — ANKOMST**

* Ankomst — oversigt og ankomstliste
* Ankomst — Opret ny (tilknyt indkøbsordre)
* Ankomst — Opret ny (manuel)
* Ankomst — Behandl (trin-for-trin)
* Ankomst — Ekstrafelter (batch, udløbsdato, produktionsdato)
* Ankomst — GS1 stregkoder
* Ankomst — Blandet leverance
* Ankomst — Bundles (VIGTIG REGEL)
* Ankomst — Batch/LOT-sporing

**DEL 5 — RETUR**

* Retur — Modtagelse af returpakke
* Retur — Returtyper
* Retur — Bundlevarer ved retur

**DEL 6 — MODTAG TRANSFER**

* Modtag Transfer

**DEL 7 — PLUK ORDRER**

* Pluk Ordrer — Generer plukliste
* Pluk Ordrer — Indstillinger og filtre
* Plukstrategi — Multipluks Ordre (med totes)
* Plukstrategi — Runner / Singlelines (uden totes)
* Plukstrategi — Masseprint
* Plukstrategi — Priority
* Plukstrategi — Pickup / Afhentning
* Plukstrategi — Eksklusive profiler
* Aktiv plukning — Plukskærmen
* Aktiv plukning — Trin-for-trin
* Aktiv plukning — Interaktive elementer
* Aktiv plukning — Vogn og tote
* Fejlhåndtering — Vare mangler på hyldeplads
* Fejlhåndtering — Delvist plukket ordre
* Fejlhåndtering — 0/1 lister (ingen tote)
* Fejlhåndtering — For mange varer plukket
* Fejlhåndtering — Ordre annulleret i shop

**DEL 8 — PAK ORDRER**

* Pak Ordrer — Toteliste oversigt
* Pak Ordrer — Naviger til en ordre
* Pak Ordrer — OID-assistent
* Pakningsprocessen — Trin-for-trin
* Pakningsprocessen — Manuel ordre (Runner/Singlelines)
* Pakningsprocessen — Fast Pack
* Pakningsprocessen — Alle tilgængelige handlinger
* Labelprint — Fejl og løsninger
* Labelprint — Genudskriv (pakket ordre)
* Labelprint — Glemt produkt i pakket ordre

**DEL 9 — FLYT LAGER OG GENOPFYLDNING**

* Flyt Lager — Genopfyldningsliste fra totes
* Flyt Lager — Direkte flytning (placering til placering)
* Flyt Lager — Sektionsoversigt
* Nedlæg plukliste

**DEL 10 — REVISION**

* Lagerrevision (Stock Audit)
* Lagerrevision — LOT/Batch håndtering
* Lagerrevision — Karantæne
* Placeringsrevision
* Løbende optælling (automatisk revision)

**DEL 11 — ANDRE APPS**

* Ordreinfo
* Produktinfo / Vareinfo
* Produktion
* Scan til Palle
* Klienttilstand (Client Mode)

**DEL 12 — INDSTILLINGER**

* Printerindstillinger og printervælger
* Brugerindstillinger
* Automatiseringsindstillinger
* Plukindstillinger
* Stemmeassistent
* Stregkodeindstillinger
* Andre indstillinger
* Genvejsknapper

**DEL 13 — REFERENCE**

* Stregkodepræfikser og systemkoder
* Fejlkoder — Quick Reference
* Hurtige fejlløsninger

\---

# DEL 1 — HARDWARE OG OPSÆTNING

\---

## Newland MT9084 — Opsætning

### Hvad er det

Newland MT9084 Orca Pro er den primære anbefalede håndterminal til SmartPack. Det er en Android-baseret scanner med integreret stregkodelæser. Enheden installeres som en web-app og konfigureres til at simulere tastetryk.

### Hvornår bruges det

Første gangs opsætning af en ny Newland-enhed, eller ved genfabriksindstilling.

### Sådan fungerer det — trin-for-trin

1. Oplad enheden fuldt og tænd den
2. Log ind på eller opret en Google-konto på enheden
3. Sæt **ikke** skærmlås (anbefales ikke til terminalbrug — forsinkelse ved aktivering)
4. Swipe op fra bunden for at åbne menuen
5. Find **Quicksettings**
6. Scroll ned til **Scan**
7. Sæt **Prefix** til `7B`
8. Sæt **Suffix** til `7D`
9. Sæt **Output Mode** til `Simulate keystroke`
10. Sæt interval til `0 ms`
11. Åbn Play Butik → søg efter **Chrome** → opdatér hvis tilgængeligt
12. Åbn Chrome → navigér til `ditlager.smartpack.dk`
13. Tryk de tre prikker øverst til højre → **Installer app**
14. SmartPack er nu installeret som app på terminalen

### Indstillinger / felter

|Indstilling|Værdi|Forklaring|
|-|-|-|
|**Prefix**|`7B`|Tegn sendt før stregkodeindhold — kræves af SmartPack|
|**Suffix**|`7D`|Tegn sendt efter stregkodeindhold — kræves af SmartPack|
|**Output Mode**|`Simulate keystroke`|Simulerer tastaturtryk — nødvendigt for webbrowser-input|
|**Character interval**|`0 ms`|Ingen forsinkelse mellem tegn — hurtigst mulig scanning|

### Systemlogik

Prefix `7B` svarer til ASCII `{` og suffix `7D` svarer til `}`. SmartPack bruger disse tegn til at identificere og afgrænse stregkodeindhold fra anden tastaturinput.

### Typiske fejl

|Fejl|Årsag|Løsning|
|-|-|-|
|Scanning registreres ikke|Forkert Output Mode|Sæt Output Mode til Simulate keystroke|
|Scanning registreres som to input|Interval ikke 0|Sæt interval til 0 ms|
|App opdaterer ikke|Chrome er forældet|Opdatér Chrome via Play Butik|

### Edge cases

* Hvis enheden har skærmlås aktiveret, skal du låse op før scanning — dette giver forsinkelse i travle perioder
* Ved brug af pistolgreb: kontrollér at grebets scan-knap er konfigureret til samme output som den fysiske scanknap

### Best practice

* Opdatér Chrome ved opsætning — ældre versioner kan give uforudsigelig adfærd
* Brug Google-konto der er dedikeret til terminalen (fx `lager1.terminal@gmail.com`) — ikke en personlig konto
* Test scanning med en placeringsQR inden ibrugtagning

### Relaterede emner

→ Se: Newland — Lås til SmartPack (Admin Tool)
→ Se: Newland — Special stregkode (GS1/AI)
→ Se: Stregkodeindstillinger (Terminal-indstillinger)
→ Se: Anbefalet hardware

\---

## Newland — Lås til SmartPack (Admin Tool)

### Hvad er det

En valgfri men anbefalet konfiguration der låser Newland-terminalen til udelukkende at køre SmartPack. Forhindrer medarbejdere i at bruge terminalen til andet og sikrer at appen altid starter automatisk.

### Hvornår bruges det

Når terminalen udelukkende skal bruges som SmartPack-terminal og ikke til private formål.

### Sådan fungerer det — trin-for-trin

1. Åbn **Newland Installer** på terminalen
2. Installer **Admin Tool** via Newland Installer
3. Forlad Admin Tool med **tilbageknappen** (ikke hjemknappen)
4. Indtast admin-password når der spørges (standard: `112233`)
5. Gå til **App Manager**
6. Vælg de apps der må bruges (som minimum: SmartPack + Chrome)
7. Gå til **Launch Application**
8. Vælg SmartPack som standard-app der starter ved opstart

### Indstillinger / felter

|Indstilling|Beskrivelse|
|-|-|
|**App Manager**|Liste over tilladte apps på enheden|
|**Launch Application**|App der starter automatisk ved opstart/opvågning|
|**Admin password**|Standard: `112233` — bør ændres ved ibrugtagning|

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Kan ikke finde Admin Tool|Installér via Newland Installer først|
|Glemt admin-password|Kontakt Newland support eller fabriksindstil enheden|

### Best practice

* Ændr standard admin-password (`112233`) ved første opsætning
* Tillad kun de apps der er nødvendige — minimum SmartPack og Chrome

### Relaterede emner

→ Se: Newland MT9084 — Opsætning

\---

## Newland — Special stregkode (GS1/AI)

### Hvad er det

En Newland-konfiguration der aktiverer læsning af GS1-stregkoder med Application Identifiers (AI) i kantede parenteser. Nødvendigt for at SmartPack kan læse og tolke udvidede GS1-data som batch-numre, udløbsdatoer og produktionsdatoer direkte fra stregkoden.

### Hvornår bruges det

Når du modtager varer med GS1-128 eller GS1 DataMatrix stregkoder der indeholder batch-nummer, udløbsdato eller produktionsdato.

### Sådan fungerer det — trin-for-trin

1. Swipe hovedmenuen op — fra bund mod top
2. Find **Quick Settings**
3. Scroll ned til **Symbologies**
4. Gå til fanen **Advanced**
5. Sæt flueben i **"Output AI in brackets"**
6. SmartPack kan nu læse og tolke GS1 Application Identifiers

### Systemlogik

GS1 Application Identifiers er koder der identificerer typen af data i en stregkode (fx AI 10 = batchnummer, AI 17 = udløbsdato, AI 11 = produktionsdato). Når "Output AI in brackets" er aktiveret, sendes disse som `(10)BATCHNR(17)YYYYMMDD` — et format SmartPack kan tolke og automatisk fordele til de korrekte felter.

### Best practice

Aktivér altid denne indstilling hvis du arbejder med datostyrede eller batchstyrede varer.

### Relaterede emner

→ Se: Ankomst — GS1 stregkoder
→ Se: Ankomst — Ekstrafelter (batch, udløbsdato, produktionsdato)

\---

## Zebra Håndterminal — Opsætning

### Hvad er det

Opsætning af en Zebra Android-håndterminal til brug med SmartPack via DataWedge-profil.

### Hvornår bruges det

Første gangs opsætning af en Zebra-enhed.

### Sådan fungerer det — trin-for-trin

1. Opsæt Google-konto på enheden (anbefales: dedikeret konto fx `kundenavn.terminal@gmail.com`)
2. SmartPack sender **DataWedge-profil** (`dwprofile\_smartpack.db`) til kunden via e-mail
3. Hent filen fra Gmail på terminalen
4. Åbn DataWedge-appen
5. Tryk menu → **Import Configuration**
6. Vælg den downloadede `.db`-fil
7. Profilen importeres og aktiveres automatisk
8. Åbn Chrome → navigér til `kundenavn.smartpack.dk/terminal`
9. Tryk de tre prikker → **Installer app**

### Indstillinger / felter

|Indstilling|Kilde|Beskrivelse|
|-|-|-|
|**DataWedge-profil**|SmartPack-support sender filen|Konfigurerer scanner-output til SmartPack-format|
|**Terminal URL**|`kundenavn.smartpack.dk/terminal`|Kundespecifik URL|

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Scanning registreres ikke|DataWedge-profilen er ikke aktiv — tjek DataWedge|
|Profil-import fejler|Kontrollér at filen er `.db`-format og ikke zippet|

### Best practice

Opret en dedikeret Google-konto per terminal — ikke medarbejderens personlige konto.

### Relaterede emner

→ Se: Newland MT9084 — Opsætning
→ Se: Anbefalet hardware

\---

## Printservice — Opsætning (Windows)

### Hvad er det

SmartPack Printservice er et Windows-program der fungerer som bro mellem SmartPack-systemet og fysiske printere. Det kører i baggrunden på en Windows-PC og gør printere tilgængelige for alle terminaler og admin-brugere på netværket.

### Hvornår bruges det

* Første gangs opsætning af en printercomputer
* Når en ny printer skal tilgøres tilgængelig for SmartPack

### Krav

* Windows 10 minimum
* Computeren skal altid være tændt og online
* Printservice skal altid køre (konfigureres til auto-start)

### Download

Admin → Settings → Printere → **Download Print Service**
Alternativt: `cdn.smartpack.dk/downloads/printservice.zip`

### Sådan fungerer det — trin-for-trin

1. Download zip-filen
2. Pak zip ud → flyt mappen til et fast sted (fx `C:\\smartpack\\printservice`)
3. Kør `SmartPack.PrintService.Installer`
4. Windows viser sikkerhedsadvarsel → klik **"Flere oplysninger"** → **"Kør alligevel"**
5. Fastgør Printservice til proceslinjen for nem adgang
6. Åbn programmet fra systembakken (printerikon nederst til højre i Windows)
7. Udfyld **SmartPack URL**: `https://ditlager.smartpack.dk`
8. Klik **Connect**
9. Vælg printer i dropdown
10. Sæt flueben i **Share**
11. Giv printeren et beskrivende navn (fx `Labels Pakkestation 1`)
12. Klik **Save**
13. Klik **Test** — en testlabel sendes til printeren
14. Sæt flueben i **Run on startup**
15. Klik **Save** igen

### Indstillinger / felter

|Felt|Beskrivelse|Eksempel|
|-|-|-|
|**SmartPack URL**|URL til jeres SmartPack-installation|`https://ditlager.smartpack.dk`|
|**Printer** (dropdown)|Vælg hvilken Windows-printer der deles|`Zebra ZD421`|
|**Share** (checkbox)|Gør printeren synlig for SmartPack|✅ skal være markeret|
|**Navn**|Visningsnavn i SmartPack|`Fragtlabel Pakkestation 1`|
|**Run on startup**|Printservice starter automatisk ved Windows-opstart|✅ anbefales|

### Systemlogik

Kun printere med **Share** aktiveret er synlige for SmartPack-enheder og admin. Printere uden Share er usynlige uanset om de er online.

### Typiske fejl

|Fejl|Årsag|Løsning|
|-|-|-|
|Printer ikke synlig i SmartPack|Share ikke aktiveret|Aktivér Share på printeren|
|Kan ikke printe|Printservice lukket|Åbn Printservice fra systembakke|
|DNS-fejl|DNS-cache forældet|Kør `ipconfig /flushdns` i CMD på **alle** computere med Printservice|
|Printer offline|Printer slukket eller netværksfejl|Tjek printerens strøm og netværksforbindelse|

### Edge cases

* Hvis Printservice lukkes med X og genåbnes, skal du vælge printer og gemme igen — indstillingerne bevares ikke altid
* Flere printere på én computer: se artikel "Printservice — Tilføj ekstra printer"

### Best practice

* Installér Printservice på en computer der aldrig slukkes (fx en server-PC eller en dedikeret pakke-PC)
* Minimér altid Printservice — klik ALDRIG på X under normal drift
* Test printeren efter opsætning med Test-knappen inden brug i produktion

### ⚠️ KRITISK REGEL

**Klik ALDRIG på X (luk) i Printservice-vinduet under normal drift.** Det lukker hele servicen og ingen terminaler kan printe. Brug **minimér** (\_) i stedet.

### Relaterede emner

→ Se: Printservice — Tilføj ekstra printer
→ Se: Printerindstillinger (Terminal)
→ Se: Labelprint — Fejl og løsninger
→ Se: Flush DNS

\---

## Printservice — Tilføj ekstra printer

### Hvad er det

Procedure for at tilføje en ny printer til en computer der allerede kører Printservice.

### Hvornår bruges det

Når en ny fysisk printer kobles til en eksisterende Printservice-computer.

### Sådan fungerer det — trin-for-trin

1. Find Printservice i systembakken (printerikon, nederst til højre)
2. **Klik X for at lukke Printservice** — dette er det ENESTE tidspunkt du må klikke X
3. Navigér til Printservice-mappen (fx `C:\\smartpack\\printservice`)
4. Kør `SmartPack.PrintService` igen
5. Vælg den **nye printer** i dropdown
6. Sæt flueben i **Share**
7. Giv printeren et navn
8. Klik **Save**
9. Klik **Test** for at verificere

### Edge cases

* Eksisterende printere skal gen-konfigureres hvis de forsvinder efter genstart — kontrollér at Share stadig er aktivt
* Hvis den nye printer ikke vises i dropdown: kontrollér at Windows-printeren er installeret korrekt

### Best practice

Luk ikke Printservice unødigt. Planlæg tilføjelse af printere til tidspunkter med lav aktivitet.

### Relaterede emner

→ Se: Printservice — Opsætning (Windows)

\---

## Anbefalet Hardware

### Hvad er det

SmartPacks officielle anbefalinger for hardware til optimal drift.

### Håndterminaler

|Enhed|Anbefaling|Note|
|-|-|-|
|**Newland MT9084 Orca Pro**|✅ Primært anbefalet|Nævn SmartPack hos Skancode for **10% rabat**|
|**Zebra håndterminal**|✅ Understøttet|Kræver DataWedge-profil|
|**Smartphone (Android/iOS)**|⚠️ Alternativ|Fungerer men ikke optimalt til intensiv brug|

### Tilbehør til Newland

|Tilbehør|Leverandør|
|-|-|
|**Pistolgreb**|Skancode.dk|
|**Ladestander (3-slot)**|Skancode.dk|

### Printere

|Type|Anbefalet model|Note|
|-|-|-|
|**Fragtlabel-printer**|Zebra ZD421D|USB-version standard; WiFi-modul tilkøbes separat|
|**Etiket-/vareprinter**|Dymo LabelWriter Wireless|Til hyldeforkanter, stregkoder|
|**Etiket-/vareprinter**|Brother QL-810Wc|Alternativ til Dymo|
|**Labels til Dymo**|Dymo S0722370|Standardlabels|

### Computer til Printservice

|Krav|Specifikation|
|-|-|
|**Operativsystem**|Windows 10 minimum|
|**Tilgængelighed**|Altid tændt og online|
|**Formål**|Kører Printservice — bro til fysiske printere|

### Plukkasser (Totes)

|Produkt|Beskrivelse|
|-|-|
|**Plast Team Seoul Kurv, størrelse M**|Stablable plastikkurv — anbefalet til plukning|

### Køb hardware

|Kanal|Link|
|-|-|
|Skancode (Newland + tilbehør)|https://skancode.dk/smartpack|
|Dymo labels|Søg: `Dymo S0722370`|

### Best practice

* Køb Newland-terminaler via Skancode og nævn SmartPack for at opnå 10% rabat
* Brug pistolgreb ved intensiv plukning — reducerer træthed
* 3-slot ladestander sikrer alle terminaler er klar ved skiftets start

### Relaterede emner

→ Se: Newland MT9084 — Opsætning
→ Se: Zebra Håndterminal — Opsætning
→ Se: Printservice — Opsætning (Windows)

\---

## Browser-kompatibilitet

### Hvad er det

Oversigt over hvilke browsere der understøttes til SmartPack (terminal og admin).

### Desktop

|Browser|Platform|Kompatibilitet|
|-|-|-|
|**Google Chrome**|PC + Mac|✅ Anbefalet|
|**Microsoft Edge**|PC|✅ Anbefalet|
|**Apple Safari**|Mac|✅ Understøttet|
|Andre browsere|Alle|✅ Fungerer generelt|

> Brug altid \*\*nyeste browserversion\*\* for bedste kompatibilitet.

### ⚠️ Vigtig undtagelse — Lagerdesigner

**Lagerdesigneren virker IKKE i Chrome på Windows 8 eller ældre.**
Løsning: Brug Microsoft Edge, eller opgrader til Windows 10+.

### Mobil

SmartPack virker på både **Android** og **iOS**.

### Best practice

Hold browseren opdateret. Aktivér automatisk opdatering i Chrome/Edge.

### Relaterede emner

→ Se: Newland MT9084 — Opsætning (Chrome-installation)
→ Se: Lagerdesigner (Admin)

\---

## Datasimkort

### Hvad er det

Information om forventet dataforbrug ved brug af datasimkort i håndterminaler.

### Forventet forbrug

|Brug|Forbrug|
|-|-|
|Udelukkende SmartPack|**Under 10 GB/måned** per terminal|

### Best practice

* Vælg et simkortsabonnement med minimum 10 GB/måned per terminal
* WiFi foretrækkes over simkort for stabilitet og hastighed
* Brug simkort som fallback ved WiFi-udfald, ikke som primær forbindelse

### Relaterede emner

→ Se: Terminal lader eller fryser (WiFi-fejlfinding)

\---

# DEL 2 — LOGIN OG NAVIGATION

\---

## Login

### Hvad er det

Processen for at logge ind på SmartPack Terminal. Understøtter to metoder: QR-kode-scanning og manuelt brugernavn/adgangskode.

### Hvornår bruges det

Hver gang en medarbejder starter arbejde på en terminal.

### Sådan fungerer det

**Metode 1 — QR-kode (anbefalet):**

1. Åbn SmartPack-appen på terminalen
2. Scan din personlige QR-kode
3. Du er logget ind øjeblikkeligt

**Metode 2 — Brugernavn + adgangskode:**

1. Åbn SmartPack-appen
2. Skriv brugernavn i det øverste felt
3. Skriv adgangskode i det nederste felt
4. Tryk **Log ind**

### Systemlogik

Alle aktiviteter logges til den individuelle bruger. Sporbarhed er altid sikret uanset loginmetode. Systemet registrerer hvem der plukker, pakker, modtager og reviderer.

### Typiske fejl

|Fejl|Årsag|Løsning|
|-|-|-|
|Forkert adgangskode|Tastefejl eller ændret kode|Kontakt admin → nulstil kodeord|
|QR-kode scanner ikke|Snavset kode eller svag belysning|Rengør koden; prøv manuelt login|
|"Ikke aktiv bruger"|Konto deaktiveret|Kontakt admin|

### Edge cases

* Hvis en brugers QR-kode beskadiges: brug midlertidigt manuelt login mens ny QR-kode printes
* Tilladt IP-liste: en admin kan begrænse login til specifikke IP-adresser per bruger

### Best practice

Brug QR-kode-login — hurtigere og fejlfri. Laminér QR-koderne til holdbarhed.

### Relaterede emner

→ Se: Skift bruger
→ Se: Opret / Rediger Medarbejder (Admin)
→ Se: Glemt kodeord (Admin)

\---

## Skift bruger

### Hvad er det

Mulighed for at skifte til en anden bruger på terminalen uden at logge ud først.

### Hvornår bruges det

Når en anden medarbejder overtager terminalen mid-shift.

### Sådan fungerer det

1. Scan en anden medarbejders QR-kode direkte
2. Systemet logger automatisk den nuværende bruger ud og logger den nye ind
3. Ingen manuel log-ud nødvendig

### Systemlogik

Alle efterfølgende aktiviteter logges til den nye bruger. Der er ingen overlapning i loggen.

### Best practice

Sørg for altid at scanne din egen QR-kode når du overtager en terminal — aldrig arbejde under en andens konto.

### Relaterede emner

→ Se: Login
→ Se: Log ud

\---

## Log ud

### Hvad er det

Manuel udlogning fra SmartPack Terminal.

### Sådan fungerer det

1. Tryk **Log ud** — knappen sidder **nederst til højre** på skærmen
2. Du returneres til loginskærmen

### Best practice

Log altid ud ved endt arbejdsdag eller ved overlevering af terminal til anden medarbejder.

### Relaterede emner

→ Se: Login
→ Se: Skift bruger

\---

## Navigation og hjemknap

### Hvad er det

Oversigt over de universelle navigationselementer der altid er tilgængelige i terminalen.

### Altid-gældende navigationsregler

|Situation|Handling|
|-|-|
|Tilbage til hovedmenuen|Tryk **SmartPack-logoet** øverst på skærmen — virker overalt i systemet|
|Faret vild i terminalen|Tryk SmartPack-logoet — nulstiller til forsiden|
|App fryser|Træk ned fra toppen (= F5 genindlæsning)|

### Systemlogik

SmartPack-logoet fungerer som global hjemknap uanset hvilken app eller skærm du er på. Det er designet til at man altid kan finde tilbage uden at miste data (igangværende pluk gemmes automatisk).

### Relaterede emner

→ Se: Terminal lader eller fryser

\---

## Terminal lader eller fryser

### Hvad er det

Fejlsituation hvor terminalen holder op med at reagere, viser kun en loading-skærm, eller er låst ude af en plukliste.

### Symptomer og løsninger

|Symptom|Handling|
|-|-|
|Terminal lader/spinner|Træk ned fra toppen af skærmen (genindlæsning = F5)|
|Terminal reagerer slet ikke|Genstart appen|
|Låst ude af plukliste (mistet WiFi)|Genstart SmartPack-appen|

### Systemlogik

Terminalen kommunikerer i realtid med serveren via SignalR. Mister den forbindelsen, kan serveren tro at en plukliste stadig er aktiv. Ved genstart genoprettes forbindelsen.

### Version 100.0195 og nyere

Fra denne version vil SmartPack automatisk spørge om du vil **overtage den aktive plukliste** direkte — ingen manuel intervention nødvendig.

### Anbefalet ugentlig vedligehold

Genstart terminalen **én gang ugentlig** for optimal ydeevne.

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Vedvarende freezing|Tjek WiFi-signal; flyt tættere på access point|
|Systemet reagerer slet ikke|Kontakt ansvarlig → system-reset fra Admin|

### Relaterede emner

→ Se: Plukliste låst/optaget
→ Se: Genstart SmartPack (Admin)

\---

## Plukliste låst/optaget

### Hvad er det

Situationen hvor en plukliste vises som "optaget af anden bruger" — oftest fordi en WiFi-forbindelse blev afbrudt og serveren ikke ved at brugeren er offline.

### Hvornår opstår det

Primært ved midlertidigt WiFi-tab under aktiv plukning.

### Løsning

**Standard (alle versioner):**

1. Træk ned fra toppen af skærmen
2. Genstart SmartPack-appen
3. Prøv at åbne pluklisten igen

**Version 100.0195+:**
Systemet spørger automatisk: *"Vil du overtage den aktive plukliste?"*
→ Tryk **Ja** — pluklisten overtages og du fortsætter

### Edge cases

* Hvis en anden medarbejder faktisk har pluklisten aktiv: koordinér hvem der fortsætter
* Hvis problemet gentager sig hyppigt: tjek WiFi-dækning i lagerets alle zoner

### Best practice

Sørg for stabilt WiFi i hele lagerrummet. Dead spots giver gentagne låsningsproblemer.

### Relaterede emner

→ Se: Terminal lader eller fryser
→ Se: Fejlhåndtering — Delvist plukket ordre

\---

# DEL 3 — FORSIDEN

\---

## App-oversigt og badge-tællere

### Hvad er det

Forsiden i SmartPack Terminal viser alle tilgængelige apps som ikoner med badge-tællere. Badge-tallene opdateres i realtid og giver øjeblikkeligt overblik over afventende opgaver.

### Apps og hvad badge-tallene viser

|App|Badge viser|Funktion|
|-|-|-|
|**Ankomster**|Aktive ankomster|Modtag varer, returpakker, transfers|
|**Pluk Ordrer**|Ordrer klar til pluk|Generer og udfør pluklister|
|**Pak Ordrer**|Totes klar til pakning|Pak ordrer, udskriv fragtlabels|
|**Flyt Lager**|Genopfyldningsbehov|Flyt varer, genopfyld plukpladser|
|**Lagerrevision**|—|Tæl og ret antal for én vare|
|**Placeringsrevision**|—|Kontroller alle varer på én placering|
|**Ordreinfo**|—|Slå ordre op, rediger adresse|
|**Produktinfo**|—|Slå varer op, udskriv stregkoder|
|**Produktion**|Afventende batches|Kitting og produktionsbatches|
|**Scan til Palle**|—|Sorter pakker til paller|
|**Indstillinger**|—|Printer, sprog, stemme, dobbelt-scan m.m.|

### Skærmlayout

|Element|Placering|Funktion|
|-|-|-|
|SmartPack-logo|Øverst|Hjemknap — tryk for at gå til forsiden|
|Statuslinje|Øverst|Antal ordrer i de forskellige faser|
|Reol-ikon|Øverst til højre|Find tomme placeringer i nærheden|
|Brugernavn|Nederst|Viser aktuelt indlogget bruger|
|Terminalnavn|Nederst|Viser terminalens navn|

### Systemlogik

Badge-tæller opdateres automatisk via **SignalR** i realtid. Du behøver aldrig genindlæse siden for at se aktuelle tal.

### Relaterede emner

→ Se: Realtidsopdateringer (SignalR)
→ Se: Navigation og hjemknap

\---

## Realtidsopdateringer (SignalR)

### Hvad er det

SmartPack bruger SignalR-teknologi til at sende opdateringer øjeblikkeligt til alle terminaler og admin-brugere — uden at nogen behøver at genindlæse siden.

### Hvornår opdateres hvad automatisk

|Hændelse|Effekt på terminal|
|-|-|
|Ny ankomst oprettet|Vises øjeblikkeligt i ankomstlisten|
|Orden ændret status|Badge-tæller opdateres|
|Ny plukliste genereret|Vises i pluk-oversigten|
|Badge-tællere|Forsideikoner opdateres løbende|
|Fjernprint fra admin|Admin kan sende printjob direkte til din terminal|
|Tvungen navigation|Admin kan sende din terminal til forsiden|
|Løbende optælling udløst|Popup vises automatisk under pluk|

### Systemlogik

SignalR holder en vedvarende WebSocket-forbindelse åben. Mistes forbindelsen kortvarigt, vil terminalen automatisk genoprette den og modtage eventuelle mistede opdateringer.

### Relaterede emner

→ Se: Terminal lader eller fryser



\---

# DEL 4 — ANKOMST

\---

## Ankomst — Oversigt og ankomstliste

### Hvad er det

Ankomst-appen håndterer modtagelse af alle indkommende varer på lageret. Det dækker nye leverancer, kundereturer og interne overførsler.

### Hvornår bruges det

Hver gang varer fysisk ankommer til lageret og skal registreres i systemet.

### Ankomstlistens indhold

Vælg **Ankomster** i menuen. Listen viser:

* **Aktive ankomster** — ikke afsluttede modtagelser
* **Færdige ankomster** — afsluttede modtagelser (historik)

Hvert element i listen viser:

* Lager/kunde
* Placering
* Afsender
* Referencenummer
* Badge: modtaget antal / forventet antal

### Relaterede emner

→ Se: Ankomst — Opret ny (tilknyt indkøbsordre)
→ Se: Ankomst — Opret ny (manuel)
→ Se: Ankomst — Behandl (trin-for-trin)

\---

## Ankomst — Opret ny (tilknyt indkøbsordre)

### Hvad er det

Oprettelse af en ny ankomst der er tilknyttet en eksisterende indkøbsordre i systemet. Anbefalet metode — giver fuld sporbarhed og lagerværdistyring.

### Hvornår bruges det

Når der er oprettet en indkøbsordre i forvejen og varer modtages mod denne.

### Sådan fungerer det — trin-for-trin

1. Tryk **Opret ny ankomst**
2. Vælg **Ankomster**
3. Søg efter indkøbsordren via én af følgende metoder:

   * Leverandørnavn
   * Varenavn
   * Scan varens stregkode
   * Trackingnummer (scan fragtlabelen)
   * Referencenummer
4. Vælg den **korrekte ordre** fra resultatlisten
5. Bekræft valget

### ⚠️ KRITISK REGEL

Tilknytning til indkøbsordre **kan ikke ændres** efter ankomsten er afsluttet. Vælg den rigtige ordre inden du begynder modtagelse.

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Kan ikke finde indkøbsordren|Søg på trackingnummer fra fragtlabelen|
|Valgte forkert ordre|Afslut IKKE ankomsten — kontakt admin|

### Relaterede emner

→ Se: Ankomst — Behandl (trin-for-trin)
→ Se: Indkøbsordrer (Admin)

\---

## Ankomst — Opret ny (manuel)

### Hvad er det

Oprettelse af en ny ankomst uden tilknytning til en indkøbsordre. Bruges når varer ankommer uden forudgående indkøbsordre i systemet.

### Hvornår bruges det

* Spontane leverancer uden indkøbsordre
* Returvarer
* Interne returneringer

### Sådan fungerer det — trin-for-trin

1. Tryk **Opret ny ankomst**
2. Tryk **Tilføj manuelt**
3. Vælg ankomsttype:

|Ankomsttype|Hvornår|
|-|-|
|**Standard ankomst**|Ny leverance uden indkøbsordre|
|**Retur**|Kunderetur|
|**Intern retur**|Intern tilbageføring mellem afdelinger|
|**Revision**|Reguleringsankomst|

4. Udfyld felterne:

   * **Afsender** — leverandørens navn
   * **Referencenr.** — internt referencenummer
   * **Indkøbsordre** (valgfrit) — kan tilknyttes efterfølgende

### Relaterede emner

→ Se: Ankomst — Behandl (trin-for-trin)

\---

## Ankomst — Behandl (trin-for-trin)

### Hvad er det

Det fulde flow for at modtage og registrere varer i en åben ankomst.

### Hvornår bruges det

Når en ankomst er oprettet og varerne fysisk er klar til registrering.

### Sådan fungerer det — trin-for-trin

|Trin|Handling|Detalje|
|-|-|-|
|1|Åbn ankomsten|Tryk på den fra ankomstlisten|
|2|Find vare|Søg i søgefelt ELLER scan varens stregkode direkte|
|3|Angiv antal|Brug +/− knapper eller skriv direkte i feltet|
|4|Udfyld ekstrafelter|Kun synlige ved relevante varer (batch, udløbsdato)|
|5|Scan lagerplacering|Scan stregkoden på hyldekanten|
|6|Gentag|Trin 2–5 for alle varer|
|7|Afslut|Tryk **Afslut ankomst**|

### Alternativ ved blandet leverance

Scan alle varer i vilkårlig rækkefølge → scan derefter en tote. Systemet sorterer automatisk.

### Systemlogik

Når du scanner en lagerplacering, registreres varen på den præcise placering med tidsstempel, bruger og antal. Lagerværdien opdateres øjeblikkeligt.

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Stregkode ikke genkendt|Varen mangler i systemet — opret via Produktinfo|
|Kan ikke scanne placering|Kontrollér at placeringen eksisterer i lagerdesigneren|

### Relaterede emner

→ Se: Ankomst — Ekstrafelter
→ Se: Ankomst — Blandet leverance
→ Se: Ankomst — Bundles (VIGTIG REGEL)

\---

## Ankomst — Ekstrafelter (batch, udløbsdato, produktionsdato)

### Hvad er det

Ekstra datafelter der vises under modtagelse for varer der kræver batch-sporing, datostyring eller produktionssporing. Felterne vises kun når de er relevante for den specifikke vare.

### Felter og hvornår de vises

|Felt|Vises når|Datatype|Eksempel|
|-|-|-|-|
|**Batchnummer / Lotnummer**|`UseBatchNumber = true` på varen|Tekst|`LOT-2024-001`|
|**Udløbsdato**|`Expirable = true` på varen|Dato|`31-12-2025`|
|**Produktionsdato**|Produktionssporing aktiveret|Dato|`01-03-2024`|

### Systemlogik

Felterne aktiveres per vare i Admin → Produkter. Når aktiveret, er de **obligatoriske** — du kan ikke afslutte modtagelsen uden at udfylde dem.

### GS1 stregkoder udfylder automatisk

Hvis varen har en GS1-stregkode med de relevante Application Identifiers, udfyldes batch, produktionsdato og udløbsdato **automatisk** ved scanning.

→ Se: Ankomst — GS1 stregkoder
→ Se: Newland — Special stregkode (GS1/AI)

### Typiske fejl

|Fejl|Årsag|Løsning|
|-|-|-|
|Fejlkode 1206 StockingLotMissingBatchNumber|Batchnummer ikke angivet ved modtagelse|Angiv batchnummer|
|Kan ikke afslutte ankomst|Obligatoriske ekstrafelter ikke udfyldt|Udfyld alle markerede felter|

### Relaterede emner

→ Se: Ankomst — Batch/LOT-sporing
→ Se: Batchsporing (Admin)

\---

## Ankomst — GS1 stregkoder

### Hvad er det

GS1-stregkoder (GS1-128, GS1 DataMatrix m.fl.) indeholder strukturerede data med Application Identifiers der automatisk udfylder ekstrafelter under ankomst.

### Automatisk udfyldte felter

|GS1 Application Identifier|Data|
|-|-|
|AI 10|Batchnummer / Lotnummer|
|AI 11|Produktionsdato|
|AI 17|Bedst-før-dato / Udløbsdato|
|AI 01|GTIN / Varenummer|

### Forudsætning

Newland-scanneren skal være konfigureret med **"Output AI in brackets"** aktiveret.

→ Se: Newland — Special stregkode (GS1/AI)

### Systemlogik

Når stregkoden scannes, læser SmartPack de indlejrede Application Identifiers og fordeler data til de korrekte felter automatisk. Ingen manuel indtastning nødvendig.

### Best practice

Test GS1-scanning på en prøveleverance inden produktionsbrug for at verificere at alle felter udfyldes korrekt.

### Relaterede emner

→ Se: Ankomst — Ekstrafelter
→ Se: Ankomst — Batch/LOT-sporing

\---

## Ankomst — Blandet leverance

### Hvad er det

Mulighed for at scanne varer fra en leverance i vilkårlig rækkefølge og derefter scanne en tote — systemet sorterer automatisk og registrerer alle varer.

### Hvornår bruges det

Ved små leverancer med mange forskellige SKU'er i én kasse, hvor det er upraktisk at håndtere én vare ad gangen.

### Sådan fungerer det — trin-for-trin

1. Åbn ankomsten
2. Scan **alle varer** i vilkårlig rækkefølge direkte fra kassen
3. Scan en **tote** som samlet midlertidig placering
4. Systemet registrerer alle varer på toten
5. Flyt til lagerplacering via **Flyt Lager**

### Systemlogik

Systemet tillader flere SKU'er på samme tote ved ankomst. Endelig placering på hyldepladser sker efterfølgende via Flyt Lager.

### ⚠️ OBS

Kontrollér lagerbegrænsningerne for placeringerne — hvis en placering har `MaxItemsPrLocation` sat, kan ikke alle SKU'er placeres der.

### Relaterede emner

→ Se: Ankomst — Behandl (trin-for-trin)
→ Se: Flyt Lager — Genopfyldningsliste fra totes

\---

## Ankomst — Bundles (VIGTIG REGEL)

### Hvad er det

En kritisk regel for varemodtagelse: Bundle-SKU'er må **aldrig** modtages direkte. Kun komponentvarerne modtages individuelt.

### Reglen

**MODTAG ALDRIG EN BUNDLE-SKU DIREKTE.**

Modtag altid de individuelle komponentvarer.

### Eksempler

|Situation|Forkert|Korrekt|
|-|-|-|
|6-pak vinkasse (SKU: WINE-6) bestående af enkeltflasker (SKU: WINE-1)|Modtag WINE-6|Modtag WINE-1 × antal flasker|
|Månedskasse kaffe (BOX-COFFEE) bestående af KAF001–KAF005|Modtag BOX-COFFEE|Modtag hvert KAF-SKU individuelt|

### Systemlogik

SmartPack beregner automatisk lagerantal for en bundle som den **laveste fællesnævner** af komponenternes lagerantal. Systemet sammensætter og nedbryder bundles automatisk.

Eksempel: Har du 10 flasker vin og 1 kasse kan der bestilles 1 6-pak + 4 enkeltflasker.

### Hvad sker hvis du forsøger at modtage en bundle

Du vil opleve en fejl. Bundle-SKU'er kan desuden ikke oprettes på en indkøbsordre.

### Relaterede emner

→ Se: Bundles (Admin → Produkter)
→ Se: Ankomst — Behandl (trin-for-trin)

\---

## Ankomst — Batch/LOT-sporing

### Hvad er det

Systemet opretter et lagerparti (StockingLot) for hvert batch der modtages. Dette parti følger varen fra modtagelse til forsendelse og muliggør fuld sporbarhed.

### Hvad registreres i et lagerparti

|Data|Beskrivelse|
|-|-|
|**Batch-nummer**|Leverandørens lotnummer|
|**Mængde**|Antal enheder modtaget|
|**Placering**|Hyldeplads varen er placeret på|
|**Ankomstdato**|Dato og tid for modtagelse|
|**Udløbsdato**|Hvis aktiveret på varen|
|**Produktionsdato**|Hvis aktiveret på varen|
|**Bruger**|Hvem der modtog varen|

### FIFO og FEFO

Systemet prioriterer automatisk:

* **FIFO** (First In First Out): Ældste parti plukkes først
* **FEFO** (First Expired First Out): Parti med tidligst udløbsdato plukkes først

Juster prioritet via tandhjulet i Lagerrevision.

### Sporbarhed

Batch-nummer følger varen: modtagelse → lagerparti → plukordre → forsendelseslinje → modtager.

Søg på batch-nummer: Admin → Kunder → Batchsporing.

### Typiske fejl

|Fejlkode|Årsag|Løsning|
|-|-|-|
|**1206 StockingLotMissingBatchNumber**|Batch-nummer ikke angivet ved ankomst|Angiv batch-nummer|
|**352 ItemBatchNumberRequired**|Batch-nummer mangler ved plukbekræftelse|Angiv batch-nummer|

### Relaterede emner

→ Se: Lagerrevision — LOT/Batch håndtering
→ Se: Batchsporing (Admin)
→ Se: Ankomst — Ekstrafelter

\---

# DEL 5 — RETUR

\---

## Retur — Modtagelse af returpakke

### Hvad er det

Workflow til behandling af alle typer kundereturer direkte på terminalen. Med Shopify-integration kan en returvare modtages, lagerføres og kunden krediteres med blot 4 klik.

### Hvornår bruges det

Når en kunde returnerer en pakke til lageret.

### Åbn returmodulet

Fra **Ankomster** → tryk **Modtag returpakke**

### Trin 1 — Identificér forsendelsen

Scan **track \& trace nummeret** på pakken, eller søg på:

* Ordrenummer
* Reference

Systemet identificerer automatisk returtypen.

→ Se: Retur — Returtyper

### Trin 2 — Behandl returvarerne

For **hver returneret vare**:

|Felt|Beskrivelse|Muligheder|
|-|-|-|
|**Varebillede, SKU, navn**|Vises automatisk|(information)|
|**Antal**|Angiv returneret antal|Max = originalt bestilt antal|
|**Returhåndtering**|Hvad kunden kompenseres med|Refusion / Butikkredit / Gavekort / Ombytning|
|**Returårsag**|Årsag til returnering|Konfigureres i Admin → Returårsager|
|**Forsendelsesinfo**|Evt. rettelser|Adresse, leveringsmetode, pakkeshop|

### Trin 3 — Lagerplacering

1. Tag varerne ud af kassen fysisk
2. Scan varerne én ad gangen
3. Scan **lagerplacering** — varen registreres direkte på lageret, ELLER
4. Scan en **tote** som midlertidig placering (flyttes til lager efterfølgende)

**Alternativ:** Tryk **"Afslut uden placering"** — kræver bekræftelse. Bruges kun undtagelsesvist.

### Afslut

Tryk **Afslut retur** → returnotat kan printes.

### Relaterede emner

→ Se: Retur — Returtyper
→ Se: Retur — Bundlevarer ved retur
→ Se: Returportal (Admin)

\---

## Retur — Returtyper

### Hvad er det

De tre typer af returer systemet skelner imellem ved modtagelse.

|Type|Beskrivelse|Håndtering|
|-|-|-|
|**Reklamation**|Defekt eller fejlbehæftet vare|Sættes til side til separat behandling — vurderes manuelt|
|**Uafhentet**|Kunden hentede ikke pakken fra pakkeshop|Returneres til lager og genindlægges|
|**Kundeinitieret retur**|Kunden ønsker at returnere (fortrydelsesret, forkert størrelse etc.)|Behandles med valgt returhåndtering|

### Systemlogik

Returtypen identificeres automatisk baseret på track \& trace nummeret og ordrehistorikken. Du behøver ikke vælge den manuelt.

### Relaterede emner

→ Se: Retur — Modtagelse af returpakke
→ Se: Returårsager (Admin)
→ Se: Returhandlinger (Admin)

\---

## Retur — Bundlevarer ved retur

### Hvad er det

Særlig håndtering der kræves når en returneret ordre indeholder bundle-varer.

### Systemlogik

Bundlevarer i returflows vises med en **advarsel** på skærmen. De kan ikke behandles automatisk som almindelige varer.

### Hvad gør du

1. Systemet viser advarslen
2. Godkend/behandl bundlevaren manuelt
3. Returner de individuelle komponenter til lager

### Relaterede emner

→ Se: Ankomst — Bundles (VIGTIG REGEL)
→ Se: Retur — Modtagelse af returpakke

\---

# DEL 6 — MODTAG TRANSFER

\---

## Modtag Transfer

### Hvad er det

Modtagelse af varer der er overført fra et andet lager eller afdeling via en transfer-ordre.

### Hvornår bruges det

Når din lokation modtager varer fra en anden SmartPack-lokation.

### Sådan fungerer det — trin-for-trin

1. Fra **Ankomster** → tryk **Modtag transferpakke**
2. Scan **pakkelabelen** (QR-koden på transferpakken)
3. Terminalen viser de forventede varer fra transfer-ordren
4. Scan og bekræft varerne én ad gangen
5. Systemet opdaterer transfer-recorden automatisk og registrerer varerne på din lokation

### Systemlogik

Transfer-modtagelse trækker varerne fra afsenderlokaliteten og tilføjer dem til modtagerlokaliteten. Begge bevægelser registreres i flytningshistorikken.

### Relaterede emner

→ Se: Transfer ordre — komplet guide (Admin)
→ Se: Ankomst — Oversigt



\---

# DEL 7 — PLUK ORDRER

\---

## Pluk Ordrer — Generer plukliste

### Hvad er det

Funktionen der opretter en ny plukliste. SmartPack udvælger ordrer baseret på plukprofil og beregner den korteste mulige plukkerute via A\* pathfinding og TSP-algoritmer.

### Hvornår bruges det

Når en medarbejder skal starte en ny plukerunde.

### Sådan fungerer det — trin-for-trin

1. Vælg **Pluk Ordrer** i menuen
2. Vælg **plukprofil** (knapper vises for alle konfigurerede profiler)
3. Juster indstillinger efter behov (se tabel)
4. Scan din **startplacering** — bruges til ruteberegning
5. Tryk **Generer**
6. SmartPack udvælger ordrer og beregner optimal rute
7. Pluklisten starter

### Indstillinger ved generering

|Indstilling|Beskrivelse|Eksempel|
|-|-|-|
|**Plukprofil**|Vælg profil der matcher opgaven|Multipluks, Runner, Priority|
|**Zone**|Filtrer til specifik lager-/ekspeditionszone|Zone A, Zone B|
|**Kunde / Shop**|Filtrer til specifik shop (relevant ved 3PL)|Shop 1, Shop 2|
|**Startplacering**|Scan startplacering — bruges til ruteberegning|A-01-01|
|**Maks. forsendelser**|Max antal ordrer/totes — tilpas til kasser på vognen|8, 12, 16|
|**Prime plukliste**|Markér som høj prioritet|✅ / ☐|
|**Tillad genopfyldningspluk**|Inkludér genopfyldningsvarer i listen|✅ / ☐|
|**Manuel filter**|Vælg specifikke ordrer fra en liste|Valgfrit|

### Live-tæller

En tæller viser antal ordrer der vil indgå i listen med de aktuelle indstillinger. Opdateres i realtid når du justerer filtre.

### Genveje (uden at generere via menu)

|Stregkode|Effekt|
|-|-|
|`t\_`-stregkode|Hop direkte til pluklisten for denne tote|
|`tr\_`-stregkode|Tilknyt rullevogn til igangværende plukliste|

### Systemlogik

SmartPack bruger *A pathfinding*\* til at finde korteste vej mellem plukpunkter og **TSP (Travelling Salesman Problem)**-algoritmer til at optimere den samlede rute. Startplaceringen er udgangspunkt for beregningen — jo tættere du starter på de første plukpunkter, jo kortere er den beregnede rute.

### Best practice

* Hold vognen tæt på dig — systemet sorterer pluk så du aldrig går unødigt frem og tilbage
* Scan startplacering præcist — den placering du faktisk står ved, ikke en placering tæt på

### Relaterede emner

→ Se: Plukstrategi — Multipluks Ordre
→ Se: Plukstrategi — Runner / Singlelines
→ Se: Aktiv plukning — Trin-for-trin
→ Se: Plukkeprofiler — komplet guide (Admin)

\---

## Plukstrategi — Multipluks Ordre (med totes)

### Hvad er det

Plukning af flere ordrer simultaneously, hvor hver ordre sorteres til sin egen tote/plukkasse under plukningen. Den mest almindelige strategi til ordrer med flere varelinjer.

### Hvornår bruges det

* Ordrer med flere forskellige SKU'er
* Når du vil sortere ordrer direkte under pluk (ikke i pakkeriet)

### Sådan fungerer det — trin-for-trin

1. Juster **Maks. forsendelser** til antal kasser på din vogn
2. Scan **startplacering**
3. Tryk **Generer**
4. Gå til den første angivne hyldeplacering
5. **Scan varens stregkode**
6. **Scan toten** (`t\_`-stregkode) — varen registreres i korrekt tote
7. Gentag for hvert plukpunkt
8. Tryk **Afslut** når listen er færdig

### Tote-tildeling

* Systemet tildeler automatisk hvilken tote der hører til hvilken ordre
* Allerede påbegyndte ordrer: SmartPack husker den tildelte tote
* Ny ordre der skal have tote: Systemet viser `?` — vælg en ledig tote

### Systemlogik — fejlsikring

Systemet **afviser** forkerte scans øjeblikkeligt:

* Scanner du en forkert vare → fejlmelding
* Scanner du en forkert tote → fejlmelding
* Du kan ikke begå fejl hvis du følger systemets anvisninger

### Best practice

* Hav vognen tæt på dig hele ruten
* Store ordrer: scan en fri vogn-lokation direkte som tote (hvis vognen er oprettet som placering)

### Relaterede emner

→ Se: Aktiv plukning — Vogn og tote
→ Se: Pluk Ordrer — Generer plukliste

\---

## Plukstrategi — Runner / Singlelines (uden totes)

### Hvad er det

Plukning af enkeltlinje-ordrer eller 100% identiske ordrer uden brug af totes. Alle varer blandes i én kasse og adskillelse sker i pakkeriet.

### Hvornår bruges det

* Ordrer med kun én varelinje (singlelines)
* 100% identiske ordrer der kan plukkes samlet

### Sådan fungerer det — trin-for-trin

1. Scan **startplacering**
2. SmartPack beregner ruten
3. Gå til lokation
4. Scan **produktets stregkode**
5. SmartPack bekræfter antal der skal plukkes
6. Gentag for alle plukpunkter
7. Tryk **Afslut** når listen er plukket

### Forskel fra Multipluks

Runner-ordrer **scannes ikke til en tote** — alle varer blandes i én kasse eller på vognen. Adskillelse sker i pakkeriet ved pakning.

### Relaterede emner

→ Se: Plukstrategi — Multipluks Ordre
→ Se: Pakningsprocessen — Manuel ordre

\---

## Plukstrategi — Masseprint

### Hvad er det

Strategi til 100% identiske ordrer der plukkes samlet og afsendes med labelprint for alle ordrer på én gang.

### Hvornår bruges det

Når mange ordrer er 100% identiske — samme varer og antal.

### Sådan fungerer det — trin-for-trin

1. Scan **startplacering**
2. Scan **produktet**
3. Tryk **Afslut**
4. Alle labels printes på én gang

### Systemlogik

Ved masseprint genereres én label per ordre selvom de er identiske. Labels printes i batch til fragtlabelprinter.

### Relaterede emner

→ Se: Plukstrategi — Runner / Singlelines

\---

## Plukstrategi — Priority

### Hvad er det

Identisk workflow som Multipluks Ordre, men ordrer er markeret som **VIGTIGE** og bør have første prioritet.

### Hvornår bruges det

Hasteordrer, VIP-kunder eller ordrer med tæt deadline.

### Systemlogik

Priority-lister vises fremhævet i terminalen. Brug dem inden du starter en normal Multipluks-liste.

### Relaterede emner

→ Se: Plukstrategi — Multipluks Ordre
→ Se: Plukkeprofiler — Generelle indstillinger (Admin)

\---

## Plukstrategi — Pickup / Afhentning

### Hvad er det

Identisk workflow som Multipluks Ordre, men ordrer er afhentningsordrer. Bør prioriteres så kunder hurtigt kan afhente.

### Hvornår bruges det

Ordrer der skal afhentes fysisk af kunden i butikken/på lageret.

### Best practice

Prioritér Pickup-lister højt — en ventende kunde er der fysisk.

### Relaterede emner

→ Se: Plukstrategi — Multipluks Ordre

\---

## Plukstrategi — Eksklusive profiler

### Hvad er det

Et system hvor plukkeprofiler evalueres i prioritetsrækkefølge, og en eksklusiv profil "fanger" ordrer der matcher — disse ordrer vises ikke på lavere profiler.

### Systemlogik

1. Alle eksklusive profiler sorteres fra **højeste til laveste prioritet**
2. Ordren evalueres mod profil med højeste prioritet
3. Matcher den: ordren **fanges** og vises kun på denne profil
4. Matcher den ikke: ordren evalueres mod næste profil
5. Profiler uden eksklusivitet viser ordren uanset

### Praktisk eksempel

|Profil|Prioritet|Eksklusiv|Fanger|
|-|-|-|-|
|"Alle ordrer"|100|Nej|Viser alle 100 ordrer|
|"Singleline" (max 1 varelinje)|90|Ja|Fanger 70 enkeltlinje-ordrer|
|"Resten"|0|Nej|Viser 30 tilbageværende|

### Best practice

Brug eksklusive profiler frem for "Ekskluder profiler"-indstillingen — det er den anbefalede og vedligeholdelsesvenlige metode.

### Relaterede emner

→ Se: Eksklusive plukkeprofiler (Admin)

\---

## Aktiv plukning — Plukskærmen

### Hvad er det

Oversigt over informationerne der vises per plukpunkt under aktiv plukning.

### Hvad plukskærmen viser

|Element|Beskrivelse|
|-|-|
|**Hyldeplacering**|Zone + reolnavn (fx A-03-02)|
|**Aktuel beholdning**|Lille grå boks med nuværende lagerantal på placeringen|
|**Varebillede**|Foto af varen|
|**Varenavn**|Produktets fulde navn|
|**SKU**|Varenummer|
|**Antal**|Antal der skal plukkes|
|**Tote**|Hvilken tote varen skal i|
|**Progress-tæller**|Plukket / Total (fx 5/23)|

### Relaterede emner

→ Se: Aktiv plukning — Interaktive elementer
→ Se: Aktiv plukning — Trin-for-trin

\---

## Aktiv plukning — Trin-for-trin

### Hvad er det

Det fulde trin-for-trin flow for at gennemføre et enkelt plukpunkt under aktiv plukning.

### Fremgangsmåde

1. Gå til den angivne **hyldeplacering** (vist på skærmen)
2. Find varen (verificér med varebillede og navn)
3. **Scan varens stregkode** → plukket bekræftes
4. **Scan toten** (`t\_`-stregkode) → varen registreres i korrekt tote
5. Gentag for næste plukpunkt
6. Tryk **Afslut** når alle plukpunkter er gennemført

### Systemlogik

Hvert scan valideres øjeblikkeligt. Forkert vare eller forkert tote → fejlmelding med det samme. Du kan ikke "gemme" en fejl til senere.

### Typiske fejl

|Situation|Handling|
|-|-|
|Vare mangler på plads|→ Se: Fejlhåndtering — Vare mangler|
|Plukket for mange|→ Se: Fejlhåndtering — For mange varer|
|Plukliste fryser|Genstart terminalen|

### Relaterede emner

→ Se: Aktiv plukning — Plukskærmen
→ Se: Aktiv plukning — Interaktive elementer
→ Se: Fejlhåndtering — Vare mangler på hyldeplads

\---

## Aktiv plukning — Interaktive elementer

### Hvad er det

Trykbare elementer på plukskærmen der giver adgang til ekstra funktioner uden at forlade pluklisten.

### Elementer og funktioner

|Element|Placering|Funktion|
|-|-|-|
|**Reol-ikon**|Venstre side|Åbner lagerinfo for aktuel placering — kontrollér/ret beholdning, start Placeringsrevision|
|**Produktbillede**|Højre side|Åbner produktinfo — detaljer, alle EAN-koder, alle placeringer, lagerstatus|
|**Reol-ikon**|Øverste højre hjørne|Finder tomme placeringer / genopfyldningsplaceringer nærmest dig|

### Relaterede emner

→ Se: Aktiv plukning — Plukskærmen
→ Se: Produktinfo / Vareinfo
→ Se: Placeringsrevision

\---

## Aktiv plukning — Vogn og tote

### Hvad er det

Scanning af totes og vogne under aktiv plukning.

### Scankoder og effekt

|Scanning|Stregkode|Effekt|
|-|-|-|
|Tote|`t\_`-stregkode|Tildel/skift tote til den aktuelle ordrelinje|
|Vogn|`tr\_`-stregkode|Tilknyt rullevogn til pluklisten|

### Store ordrer

Hvis en ordre er meget stor og fylder en hel vogn: scan en fri vogn-lokation direkte som tote — forudsætter at vognen er oprettet som en placering i systemet.

### Systemlogik

Tote-tildelingen huskes per ordrelinje. Hvis en ordre allerede har en tote tildelt, bekræftes dette med et `!`-symbol. Ny tote kan altid tildeles.

### Relaterede emner

→ Se: Totes (Admin)
→ Se: Vogne (Admin)

\---

## Fejlhåndtering — Vare mangler på hyldeplads

### Hvad er det

Procedure for hvad man gør når en vare ikke kan findes på den angivne hyldeplacering under plukning.

### Trin-for-trin

1. **Swipe til højre** på produktlinjen → rød **Problem**-knap vises
2. Tryk **Problem** → vælg handling:

|Handling|Hvornår brugt|
|-|-|
|**Fjern produkt**|Varen kan slet ikke findes — angiv præcist antal der mangler|
|**Optæl produkt**|Mistanke om lageruoverensstemmelse — nulstil/opdater antal|
|**Skift plukplacering**|Varen er fundet andet sted end forventet|
|**Overstyr manuelt**|Manuel indgriben nødvendig|

3. Vælg hvad der sker med ordrens vare:

|Valg|Beskrivelse|
|-|-|
|**Send senere**|Produktet afsendes til kunden på et andet tidspunkt — opretter delordre automatisk|
|**Send ikke senere**|Produktet fjernes helt fra ordren|

### Edge cases

* Varen mangler pga. lageruoverensstemmelse: Brug "Optæl produkt" → nulstil → scan alle varer fysisk på placeringen
* Varen er på en anden placering: Brug "Skift plukplacering" → scan korrekt placering

### Best practice

Vælg altid "Send senere" fremfor "Send ikke senere" med mindre kunden aktivt ikke ønsker varen.

### Relaterede emner

→ Se: Fejlhåndtering — Delvist plukket ordre
→ Se: Lagerrevision (Stock Audit)

\---

## Fejlhåndtering — Delvist plukket ordre

### Hvad er det

Procedure for ordrer der er delvist plukket og sat til side på grund af en fejl eller mangel.

### Trin-for-trin

1. Scan **toten** under **Pluk Ordrer** → ordren åbner ved den fejlede linje
2. Dobbelttjek lokationen
3. Mangler varen fysisk:

   * Tryk **reol-ikonet** (venstre side)
   * Vælg **Placeringsrevision**
   * Tryk **Nulstil antal**
   * Tag alle produkter fysisk fra placeringen
   * Scan dem én ad gangen
   * Scan placeringen igen for at bekræfte
4. Sæt den ufærdige tote til side til kundeservice

### 0/1 lister (uden tildelt tote)

Klik direkte på pluklisten i stedet for at scanne tote — derefter samme procedure som ovenfor.

### Relaterede emner

→ Se: Fejlhåndtering — Vare mangler
→ Se: Placeringsrevision
→ Se: Plukliste låst/optaget

\---

## Fejlhåndtering — For mange varer plukket

### Hvad er det

Procedure når der er plukket et større antal end forventet.

### Trin-for-trin

1. Dobbelttjek at varen ikke mangler i en anden ordre
2. Scan produktet i **Produktinfo**
3. Se den korrekte lokation
4. Læg de ekstra varer tilbage på korrekt placering

### Relaterede emner

→ Se: Produktinfo / Vareinfo
→ Se: Aktiv plukning — Trin-for-trin

\---

## Fejlhåndtering — Ordre annulleret i shop

### Hvad er det

Situation hvor en ordre er annulleret i webshopen (Shopify etc.) men stadig er aktiv i SmartPack fordi pakning er påbegyndt.

### Hvornår opstår det

Pakning er startet → SmartPack pauser ordren i stedet for at annullere den.

### Løsning — kør pakkeprocessen baglæns

1. Pak Ordrer → find toten → tryk **rødt kryds** → ordren flyttes til plukliste med `!`
2. Åbn pluklisten → sæt alle varelinjer til **0 stk.** → tryk **Pluk** (læg varerne fysisk tilbage)
3. Alle = 0 → gå til aktive pluklister → swipe listen til venstre → **Annullér**
4. Ordren kan nu annulleres/synkes korrekt med shoppen

### Relaterede emner

→ Se: Pak Ordrer — Toteliste oversigt



\---

# DEL 8 — PAK ORDRER

\---

## Pak Ordrer — Toteliste oversigt

### Hvad er det

Oversigten der viser alle totes der er klar til pakning, organiseret i sektioner.

### Sektioner i oversigten

|Sektion|Beskrivelse|
|-|-|
|**Aktive totes**|Sorteret efter totenavn eller plukliste/alder|
|**Vogngruppering**|Totes på en specifik vogn vises samlet|
|**Afventende**|Kræver manuel handling|
|**Historik** (ur-ikon)|Alle pakkede ordrer for dagens arbejdsdag|

### Sortering

Totes sorteres efter konfiguration:

* **Totenavn** — alfabetisk
* **Plukliste + Alder** — ældste plukliste øverst

→ Indstilles under Indstillinger → Totesortering

### Relaterede emner

→ Se: Pak Ordrer — Naviger til en ordre
→ Se: Indstillinger (Terminal)

\---

## Pak Ordrer — Naviger til en ordre

### Hvad er det

De metoder der kan bruges til at åbne og starte pakningsprocessen for en specifik ordre.

### Navigationsmetoder

|Metode|Beskrivelse|Hastighed|
|-|-|-|
|**Scan tote-QR**|Scan QR-koden på den fysiske tote|⚡ Hurtigst|
|**Dobbeltklik på tote**|Klik to gange på toten i listen|Hurtig|
|**Søg**|Filtrer efter navn eller ordrenummer|Manuel|
|**Scan vogn** (`tr\_`)|Sæt aktiv vogn-kontekst|Kontekst|

### Best practice

Brug altid scanning af tote-QR — det er den hurtigste og fejlfrie metode.

### Relaterede emner

→ Se: Pak Ordrer — Toteliste oversigt
→ Se: Pakningsprocessen — Trin-for-trin

\---

## Pak Ordrer — OID-assistent

### Hvad er det

En slide-out panel der viser fuld ordredata for en specifik tote/ordre.

### Hvornår bruges det

Når du har brug for at se eller redigere ordredetaljer inden pakning.

### Åbn OID-assistenten

Tryk på **ordrenummeret** i listen eller i pakskærmen.

### Indhold

|Information|Detalje|
|-|-|
|**Ordredata**|Ordrenummer, dato, status|
|**Leveringsadresse**|Fuld adresse med mulighed for redigering|
|**Vareliste**|Alle varelinjer med antal|
|**Udskriv følgeseddel**|Send til A4-printer|
|**Udskriv label**|Genudskriv fragtlabel|

### Relaterede emner

→ Se: Pakningsprocessen — Trin-for-trin
→ Se: Ordreinfo

\---

## Pakningsprocessen — Trin-for-trin

### Hvad er det

Det fulde flow for pakning af en ordre fra en tote inkl. labelprint og afslutning.

### Trin-for-trin

|Trin|Handling|Detalje|
|-|-|-|
|1|Scan QR-koden på toten|Eller åbn fra listen|
|2|Verificér varer|Alle forventede varer i ordren vises|
|3|Håndter store ordrer|Kan ikke alt være i én pakke: sæt antal til **0** for varer der bliver i toten|
|4|Vælg printer|Scan QR-koden på printeren|
|5|Angiv mål (hvis påkrævet)|Bredde × Længde × Højde, vægt|
|6|Label printes|Fragtlabelen udskrives automatisk|
|7|Afslut ordre|Tryk **Afslut ordre** → nedtælling 0–5 sek.|

### Print-alternativer

|Metode|Betingelse|
|-|-|
|Scan produkt-EAN|Auto-print slået til → label printes automatisk|
|Dobbeltklik på tote|Vælg **Udskriv manuelt**|
|Scan printer-QR|Vælg hvilken printer der bruges|

### Relaterede emner

→ Se: Pakningsprocessen — Alle tilgængelige handlinger
→ Se: Labelprint — Fejl og løsninger

\---

## Pakningsprocessen — Manuel ordre (Runner/Singlelines)

### Hvad er det

Forenklet pakningsflow for Runner og Singlelines-ordrer der ikke bruger totes.

### Trin-for-trin

1. Scan **QR-koden på printeren** → terminalen bruger denne printer til alle efterfølgende prints
2. Scan **produktets EAN-kode** → label udskrives automatisk (auto-print)
3. Er auto-print slået **fra**: scan QR-koden på printeren igen, eller vælg Udskriv på skærmen

### Systemlogik

Manuel ordre går direkte fra pluk til pakning uden tote-scanning.

### Relaterede emner

→ Se: Pakningsprocessen — Trin-for-trin
→ Se: Printerindstillinger

\---

## Pakningsprocessen — Fast Pack

### Hvad er det

En forenklet pakningsskærm optimeret til høj-volumen pakning der prioriterer hastighed over manuel vareverifikation.

### Hvornår bruges det

Pakstationer med højt volumen og veldefinerede ordrer.

### Serienummersporing i Fast Pack

Fast Pack er det sted i flowet hvor **serienumre** registreres og knyttes til forsendelseslinjen. Operatøren scanner/indtaster serienummeret under pakning.

→ Se: Serienummersporing (Admin)

### Relaterede emner

→ Se: Pakningsprocessen — Trin-for-trin

\---

## Pakningsprocessen — Alle tilgængelige handlinger

### Hvad er det

Komplet oversigt over alle handlinger der er tilgængelige på pakskærmen.

### Handlingsoversigt

|Handling|Beskrivelse|
|-|-|
|**Scan produkt-EAN**|Bekræfter varen som pakket|
|**Auto vægt**|Henter vægt fra varedata i systemet|
|**Manuel vægt**|Integrer med tilkoblet vægtenhed|
|**Tilføj pakke (+)**|Én ordre kan fordeles på flere pakker|
|**Slet pakke**|Fjern overflødig/fejloprettet pakke|
|**Udskriv label**|Send fragtlabel til labelprinter|
|**Udskriv følgeseddel**|Send følgeseddel til A4-printer|
|**Rødt kryds**|Afbryd pakning → ordren flyttes til plukliste med `!`|

### Oversize-advarsel

Systemet advarer automatisk hvis pakken overskrider transportørens maksimale mål (dimensioner og/eller vægt).

### Fejlkode 1404 PackageTooManyItems

Opstår hvis pakken indeholder for mange varer ift. konfigurationen.
Løsning: Opret ekstra pakke (+) og fordel varerne.

### Relaterede emner

→ Se: Labelprint — Fejl og løsninger
→ Se: Fejlkoder — Quick Reference

\---

## Labelprint — Fejl og løsninger

### Hvad er det

Oversigt over alle fejl der kan opstå ved udskrivning af fragtlabels og hvordan de løses.

### Fejlguide

|Problem|Årsag|Løsning|
|-|-|-|
|Fejl i modtageradresse|Adressedata forkert|Tryk ordrenummer → ret → prøv igen|
|Adresse for lang|For mange tegn i adressefeltet|Forkort adressen|
|Mangler husnummer|Adresse ufuldstændig|Tilføj husnummer|
|Forkert postnummer|Postnummer matcher ikke by/land|Ret postnummer|
|Mangler telefonnummer|Transportøren kræver telefon|Tilføj telefonnummer på ordren|
|Transportøren melder fejl|Fragtintegration afviser data|Se fejlmelding → ret → prøv igen|
|Printer offline (fejl 1002: PrinterNotOnline)|Printeren er slukket eller offline|Tjek printer er tændt og forbundet|
|"Select Printer" vises|Ingen printer valgt|Gå til Indstillinger → vælg printer|
|Printservice kører ikke|Windows-program lukket|Åbn Printservice fra systembakke på Windows-PC|
|DNS-problem|DNS-cache forældet|Kør `ipconfig /flushdns` i CMD på **alle** computere med Printservice|
|Landet er lukket|Transportøren leverer ikke til landet|Kontakt transportøren eller vælg anden leveringsmetode|
|Ingen løsning mulig|Kompleks fejl|Tryk **rødt X** → sæt tote til problemordrer til kundeservice|

### Relaterede emner

→ Se: Printservice — Opsætning (Windows)
→ Se: Labelprint — Genudskriv
→ Se: Flush DNS

\---

## Labelprint — Genudskriv (pakket ordre)

### Hvad er det

Procedure for at genudskrive en fragtlabel for en ordre der allerede er pakket og afsluttet.

### ⚠️ VIGTIG FORSKEL — To print-knapper med forskellig effekt

|Knap|Effekt|
|-|-|
|**"Udskriv igen"**|Genbruger den originale label — samme stregkodenummer|
|**Grøn Print-knap**|Genererer en **ny** label med nyt stregkodenummer|

**Brug normalt "Udskriv igen"** — transportøren forventer det originale labelnummer.

### Trin-for-trin

1. Pak Ordrer → tryk **ur-ikonet** (historik, øverst til højre)
2. Find ordren i historiklisten
3. Tryk ind på ordren
4. Rul ned
5. Tryk **"Udskriv igen"** — systemet bekræfter

### Relaterede emner

→ Se: Labelprint — Fejl og løsninger
→ Se: Pakningsprocessen — Alle tilgængelige handlinger

\---

## Labelprint — Glemt produkt i pakket ordre

### Hvad er det

Procedure for at finde hvilken ordre et glemt produkt tilhører, efter ordren er pakket og afsluttet.

### Trin-for-trin

1. Pak Ordrer → tryk **ur-ikonet** (historik)
2. **Scan produktets EAN-stregkode** direkte på historikskærmen
3. De relevante ordrer der indeholdt dette produkt **blinker** på skærmen
4. Identificér den rigtige ordre
5. Håndter: genåbn ordren eller tilføj produktet manuelt

### Relaterede emner

→ Se: Labelprint — Genudskriv
→ Se: Pak Ordrer — Toteliste oversigt

\---

# DEL 9 — FLYT LAGER OG GENOPFYLDNING

\---

## Flyt Lager — Genopfyldningsliste fra totes

### Hvad er det

Den anbefalede metode til at lagerføre varer fra totes (modtagne leverancer eller plukket materiale) til endelige hyldeplaceringer.

### Hvornår bruges det

Når varer er modtaget til totes og skal flyttes til hylderne, eller når genopfyldning af plukpladser skal ske fra baglageret.

### Trin-for-trin

1. Vælg **Flyt Lager**
2. Vælg én eller flere totes fra listen
3. Tryk **Opret genopfyldningsliste**
4. Scan din **aktuelle position** → SmartPack beregner korteste rute
5. Vælg toten øverst på listen
6. Vælg de produkter der skal flyttes til lager
7. SmartPack foreslår placering (foretrukken eller eksisterende)
8. Du kan vælge en anden placering end den foreslåede
9. Gentag for alle produkter

### Systemlogik

Ruteberegningen bruger A\*-algoritmen ud fra din startplacering. Produkter med foretrukne placeringer (`PreferredStockPlacementId`) prioriteres til disse.

### Relaterede emner

→ Se: Flyt Lager — Direkte flytning
→ Se: Foretrukken Placering (Admin)

\---

## Flyt Lager — Direkte flytning (placering til placering)

### Hvad er det

Manuel flytning af varer direkte fra én placering til en anden uden brug af totes.

### Hvornår bruges det

* Omorganisering af lageret
* Korrekt placering af fejlplacerede varer
* Intern flytning uden forudgående tote-modtagelse

### Trin-for-trin

1. Scan **kildeplacering** (fra-placeringen)
2. Varerne på kildeplacering vises
3. Scan **varens stregkode** → angiv antal der skal flyttes
4. Scan **destinationsplacering** (til-placeringen)
5. Tryk **Bekræft**

### Relaterede emner

→ Se: Flyt Lager — Genopfyldningsliste fra totes

\---

## Flyt Lager — Sektionsoversigt

### Hvad er det

Oversigt over alle sektioner der er tilgængelige i Flyt Lager-appen.

### Sektioner

|Sektion|Beskrivelse|
|-|-|
|**Parkerede varer**|Varer på pause til genopfyldning|
|**Genopfyldningszone**|Afventende genopfyldningsopgaver|
|**Totezone**|Varer i totes der afventer lagerføring|
|**Restocking-lister**|Opret og administrer restocking-lister|

### Relaterede emner

→ Se: Flyt Lager — Genopfyldningsliste fra totes

\---

## Nedlæg plukliste

### Hvad er det

Funktion der overfører varer fra en aktiv plukliste direkte til en anden lokation (fx butikslager) i stedet for at pakke dem som en forsendelse.

### Hvornår bruges det

Interne overførsler til fysiske butikker eller afdelinger der deler lager.

### Trin-for-trin

1. Åbn aktiv plukliste
2. Vælg **Nedlæg plukliste**
3. Varerne registreres som overført til butikslokationen

### Relaterede emner

→ Se: Transfer ordre (Admin)



\---

# DEL 10 — REVISION

\---

## Lagerrevision (Stock Audit)

### Hvad er det

Funktion til at tælle og regulere lagerantallet for én specifik vare på en given placering. Giver mulighed for præcis korrektion med årsagskode og sporbarhed.

### Hvornår bruges det

* Mistanke om lageruoverensstemmelse for en enkelt vare
* Bekræftelse af lager ved pluk (OBS-liste)
* Rutinemæssig stikprøvekontrol

### Åbn Lagerrevision

Tryk **Lagerrevision** i menuen.

### Trin-for-trin

1. Find varen via én af disse metoder:

   * Søg på produktnavn
   * Søg på EAN-kode
   * Scan placeringsstregkode
   * Scan varens stregkode
2. Systemet viser varen med alle placeringer og lagerantal
3. **Notationen `5/5/10` forklaret:**

|Tal|Betydning|
|-|-|
|Første tal (5)|Antal LOT'er registreret på placeringen|
|Andet tal (5)|Aktuelt registreret lagerantal|
|Tredje tal (10)|Originalt ankomst-antal (hvad der burde være der)|

4. Ret antallet med **+ / −** knapperne
5. Vælg en **årsagskode:**

|Årsagskode|Forklaring|
|-|-|
|**StockAudit**|Generel lagerrevision — uoverensstemmelse fundet|
|**ItemMissing**|Vare fysisk mangler — tyverisikring, spild|
|**DamagedGoods**|Beskadiget vare fjernes fra salgsbart lager|
|**ProductionUsed**|Varen er brugt til produktion/assembly|
|**Other**|Andet — noter årsag i kommentarfeltet|

6. Tryk **Gem** → regulering registreres med tidsstempel og bruger

### Systemlogik

* Reguleringer kræver evt. godkendelse fra admin (afhænger af systemindstillinger)
* Reguleringen logges: hvem, hvornår, hvad, placering, før-antal, efter-antal
* LOT-baserede varer: regulering kan udføres per LOT/batch — du vælger det specifikke lagerparti

### Typiske fejl

|Fejl|Løsning|
|-|-|
|Kan ikke finde placering|Kontrollér at placeringen eksisterer i lagerdesigneren|
|Regulering afvises|Kræver adminbekræftelse — kontakt ansvarlig|

### Edge cases

* Løbende optælling (automatisk revision): kan trigges automatisk ved pluk som popup
* `ItemNotFound (301)`: varen er ikke registreret i systemet → opret produktet

### Best practice

Brug altid specifik årsagskode — generel "Other" bør undgås. Sporbarhed er vigtigst.

### Relaterede emner

→ Se: Lagerrevision — LOT/Batch håndtering
→ Se: Lagerrevision — Karantæne
→ Se: Løbende optælling
→ Se: Lagerreguleringer — Godkend (Admin)

\---

## Lagerrevision — LOT/Batch håndtering

### Hvad er det

Specifik håndtering af lagerpartier (LOT/batch) under revision, herunder ændring af plukrækkefølge.

### Prioritering — tandhjulet

Tryk **tandhjulet** ved siden af et LOT for at justere plukrækkefølge:

|Valg|Beskrivelse|
|-|-|
|**Sæt til Top**|Dette LOT plukkes som det første|
|**Sæt til Bund**|Dette LOT plukkes sidst|
|**FIFO**|Sorter alle LOT'er efter ankomstdato (ældst plukkes først)|
|**FEFO**|Sorter alle LOT'er efter udløbsdato (tidligst udløbsdato plukkes først)|

### Systemlogik

FIFO og FEFO er globale indstillinger der kan overstyres per vare under revision. Ændring af prioritet slår igennem ved næste plukning.

### Relaterede emner

→ Se: Lagerrevision — Karantæne
→ Se: Ankomst — Batch/LOT-sporing

\---

## Lagerrevision — Karantæne

### Hvad er det

Markering af et specifikt lagerparti som karantæne — forhindrer plukning fra partiet uden at fjerne det fra lageret fysisk.

### Hvornår bruges det

* Mistanke om defekt batch
* Afventende kvalitetskontrol
* Tilbagekald af specifikt batch

### Sæt i karantæne

1. Lagerrevision → find varen → find LOT-nummeret
2. Tryk **tandhjulet** ud for LOT-nummeret
3. Vælg **"Sæt i karantæne"**
4. LOT markeres som karantæne

### Effekt af karantæne

|Effekt|Beskrivelse|
|-|-|
|**Tæller ikke med i salgsbart antal**|Vises ikke som tilgængeligt lager|
|**Kan ikke plukkes**|Systemet springer karantæne-LOT'er over|
|**Vises i detaljeret lagerliste**|Synlig for admin via Admin → Produkter → Detaljeret lagerliste|

### Frigiv fra karantæne

Samme sted: Lagerrevision → tandhjul → **"Frigiv fra karantæne"**

### Relaterede emner

→ Se: Lagerrevision — LOT/Batch håndtering
→ Se: Ankomst — Batch/LOT-sporing

\---

## Placeringsrevision

### Hvad er det

Fuld revision af **alle varer** på én given placering. Modsat Lagerrevision (som gælder én vare) dækker Placeringsrevision alle SKU'er på den valgte placering.

### Hvornår bruges det

* Fuld kontrol af en hylde eller zone
* Rutinemæssig zoneoptælling
* Fejlfinding ved lageruoverensstemmelse på en placering

### Trin-for-trin

1. Tryk **Placeringsrevision** i menuen
2. Scan **placeringsstregkoden**
3. Alle varer på placeringen vises med antal
4. For hver vare:

   * Bekræft antallet (er det korrekt → tryk bekræft)
   * Korrigér med + / − (er det forkert → justér)
   * Angiv årsagskode
5. Tryk **Gem** for alle tilpassede værdier

### Nulstil og scan på ny

Tryk **Nulstil antal** → alle antal nulstilles → scan alle varer fysisk én ad gangen → system verificerer.

### Systemlogik

Nulstilling bruges til at lave en "tom kasse og tæl op" revision — al tvivl om hvad der er hvad fjernes. Scan derefter hvert fysisk produkt for at opbygge et bekræftet antal.

### Relaterede emner

→ Se: Lagerrevision (Stock Audit)
→ Se: Løbende optælling

\---

## Løbende optælling (automatisk revision)

### Hvad er det

Et regelbaseret system der automatisk beder medarbejdere om at tælle en vares antal under aktive plukoperationer, typisk når lagerniveauet nærmer sig en grænse.

### Hvornår bruges det

Systemet aktiveres automatisk — medarbejderen behøver ikke at starte noget manuelt.

### Trigger-regler (konfigureres i Admin)

|Felt|Beskrivelse|Eksempel|
|-|-|-|
|**Navn**|Navn på reglen|"Lav beholdning < 5 stk."|
|**Udløsningsregel**|Antal der udløser revision|`5` → popup vises under pluk når lager ≤ 5|
|**Udløser i alt lagermængde**|Aktivér kun ved udløsning på **hele** lagerets total|☐ = per placering, ✅ = totalt på alle placeringer|
|**Max revisionsalder**|Minimum antal dage mellem to revisioner af samme placering|`30` dage → ingen popup igen i 30 dage|
|**Medarbejder cooldown**|Minutter en medarbejder ikke spammes|`60` minutter|
|**Aktiv**|Er reglen aktiveret|✅ / ☐|

### Best practice for opsætning (Admin-anbefaling)

|Typisk ordrestørrelse|Anbefalet udløsningsregel|
|-|-|
|1 stk. per ordre|5 stk.|
|5–6 stk. per ordre|25–30 stk.|

### Hvad sker der under pluk

En popup vises: "Bekræft antal på placeringen"
Medarbejderen tæller og bekræfter eller retter antallet.
Revisionen logges automatisk.

### Systemlogik

Løbende optælling eliminerer behovet for periodiske lukkede lageroptællinger. Lageret kontrolleres kontinuerligt i hverdagen.

### Relaterede emner

→ Se: Lagerrevision (Stock Audit)
→ Se: Placeringsrevision
→ Se: Revisionszoner (Admin)



\---

# DEL 11 — ANDRE APPS

\---

## Ordreinfo

### Hvad er det

En opslagsapp til at finde og se detaljer om en specifik ordre — og til at redigere modtageradresse direkte fra terminalen.

### Hvornår bruges det

* Tote-identification: hvad er der i den kasse?
* Kundeservice: hurtigt slå op en ordres status
* Adresserettelser: ændr adresse inden pakning

### Trin-for-trin

**Slå ordre op via tote:**

1. Vælg **Ordreinfo**
2. Scan **tote-labelen**
3. Ordredetaljer vises øjeblikkeligt

**Slå ordre op manuelt:**

1. Vælg **Ordreinfo**
2. Søg på ordrenummer eller reference
3. Ordredetaljer vises

### Hvad vises

|Data|Beskrivelse|
|-|-|
|Ordrenummer|Unikt identifikator|
|Status|Aktuelt stadie i ordreflow|
|Modtager|Navn, adresse, telefon, email|
|Varelinjer|Alle produkter og antal|
|Forsendelsesmetode|Transportør og service|
|Tidslinje|Alle hændelser på ordren med tidsstempel og bruger|

### Redigering

Tryk **rediger** (blyant-ikon) → adressefelter kan ændres → gem.

### Relaterede emner

→ Se: Pak Ordrer — OID-assistent
→ Se: Ordredetaljer (Admin)

\---

## Produktinfo / Vareinfo

### Hvad er det

En opslagsapp til at finde alle oplysninger om et specifikt produkt — og til at administrere stregkoder og udskrive labels.

### Hvornår bruges det

* Slå en vares lagerplacering op
* Se alle EAN-koder for en vare
* Tilføj ny stregkode til varen
* Opret ny vare direkte fra terminalen
* Print stregkodelabels til hylden

### Sådan finder du en vare

|Metode|Handling|
|-|-|
|**Scan EAN**|Scan varens stregkode direkte|
|**Søg**|Skriv SKU, navn, stregkode|
|**Manuel søgning**|Scroll gennem produktliste|

### Hvad vises

|Data|Beskrivelse|
|-|-|
|SKU|Varenummer|
|Navn|Produktnavn|
|EAN-koder|Alle tilknyttede stregkoder|
|Placering(er)|Alle lagerpladser med antal|
|Lagerantal|Totalt, reserveret, tilgængeligt|
|Mål og vægt|Dimensioner og vægt|
|Billede|Produktfoto|

### Handlinger

|Handling|Beskrivelse|
|-|-|
|**Tilføj stregkode**|Scan ny stregkode → tilknyttes varen|
|**Kolli-stregkode**|Tilføj stregkode der repræsenterer X antal ved scan|
|**Udskriv stregkode**|Print EAN-label til etiketprinter|
|**Opret kladde**|Opret ny vare som kladde — udfyldes færdig i Admin|
|**Juster vægt og mål**|Opdatér dimensioner direkte fra terminalen|

### Systemlogik — Kolli-stregkoder

En kolli-stregkode registrerer automatisk et foruddefineret antal ved scanning. Eksempel: stregkode på en 12-pak registrerer 12 stk. ved scanning — ingen manuel talindtastning nødvendig.

### Relaterede emner

→ Se: Produktadministration (Admin)
→ Se: Stregkodepræfikser og systemkoder

\---

## Produktion

### Hvad er det

App til håndtering af kitting og produktionsbatches — samling af komponenter til færdige produkter (kollektions-produkter/bundles der produceres fysisk).

### Hvornår bruges det

Når SmartPack bruges til at styre produktionsordrer, kitting eller samling af komponentvarer til salgsfærdige enheder.

### Trin-for-trin

1. Vælg **Produktion** i menuen
2. Vælg et afventende produktionsbatch
3. **Scan komponentvarerne** én ad gangen
4. Systemet bekræfter at alle komponenter er scannet
5. Tryk **Afslut batch** → det færdige produkt tilføjes til lageret

### Indstillinger

|Indstilling|Beskrivelse|
|-|-|
|**Tillad samling**|Komponentvarer kan samles til produkt|
|**Tillad adskillelse**|Færdigt produkt kan adskilles til komponenter|
|**Inkluder indhold i lager**|Komponenterne tæller med i lagerantallet|

### Systemlogik

Produktionsbatches oprettes i Admin → Produkter (kollektions-typen). Terminalen udfører den fysiske samling og bekræfter via scanning.

### Relaterede emner

→ Se: Produkttyper — Kollektions (Admin)
→ Se: Produktadministration (Admin)

\---

## Scan til Palle

### Hvad er det

App til at sortere og gruppere pakker til paller, typisk til store forsendelser eller B2B-leverancer.

### Hvornår bruges det

Når pakker skal organiseres på specifikke paller inden afsendelse.

### Trin-for-trin

1. Vælg **Scan til Palle** i menuen
2. Scan **fragtlabelen** på en pakke
3. SmartPack viser hvilken palle pakken tilhører
4. Placer pakken på den korrekte palle
5. Gentag for alle pakker

### Systemlogik

Palletildelingen beregnes på baggrund af forsendelseszone, transportør og destination. Systemet optimerer palleudnyttelsen.

### Relaterede emner

→ Se: Sorteringszoner (Admin)
→ Se: End-of-day / Waybill-liste (Admin)

\---

## Klienttilstand (Client Mode)

### Hvad er det

En special-mode der tillader en admin-bruger at se terminalen fra en anden terminal — eller styre og overvåge terminaler centralt.

### Funktioner i Klienttilstand

|Funktion|Beskrivelse|
|-|-|
|**Fjernprint**|Admin kan sende printjob til en bestemt terminal/printer|
|**Tvungen navigation**|Admin kan tvinge en terminal til at vise en specifik skærm|
|**Se terminal-status**|Admin kan se hvad terminalen gør i realtid|

### Systemlogik

Klienttilstand styres fra Admin-panelet og kommunikerer via SignalR i realtid.

### Relaterede emner

→ Se: Realtidsopdateringer (SignalR)
→ Se: Medarbejder settings (Admin)

\---

# DEL 12 — INDSTILLINGER

\---

## Printerindstillinger og printervælger

### Hvad er det

Konfiguration af hvilke printere terminalen bruger til de tre printertyper.

### Åbn printerindstillinger

Vælg **Indstillinger** i menuen → øverste sektion viser printerindstillinger.

### De tre printertyper

|Type|Bruges til|Eksempel|
|-|-|-|
|**Etiketteprinter (Stregkodeprinter)**|Vareetiketter, hyldeforkanter, stregkode-labels|Dymo LabelWriter, Brother QL|
|**Labelprinter (Fragtlabelprinter)**|Fragtlabels fra transportører|Zebra GK420D, Zebra ZD421|
|**A4-printer**|Følgesedler, dokumenter|Ethvert netværkstilsluttet A4-apparat|

### Vælg printer — 2 metoder

**Metode 1 — Scan printer-QR:**
Scan QR-koden på printeren → terminalen skifter til denne printer for den pågældende type.
QR-mærket kan være konfigureret til en bestemt printertype (fx altid A4) — en scanning skifter automatisk til korrekt type.

**Metode 2 — Manuelt i Indstillinger:**

1. Tryk på dropdown ud for den ønskede type
2. Vælg printer fra listen
3. **VIGTIGT:** Tryk ét sted på skærmen **uden for dropdown-menuen** — først da gemmes valget (det tykke sorte/gule rammemærke forsvinder)

### ⚠️ Gotcha — Printervælger

Den tykke markering rundt om dropdown-menuen viser at feltet stadig er aktivt. Valget er **ikke gemt** endnu. Tryk et neutralt sted på skærmen for at bekræfte.

### Relaterede emner

→ Se: Printservice — Opsætning (Windows)
→ Se: Anbefalet hardware

\---

## Brugerindstillinger

### Hvad er det

Personlige præferencer der tilpasses individuelt per terminal-bruger.

### Indstillinger

|Indstilling|Beskrivelse|Muligheder|
|-|-|-|
|**Sprog**|Terminalens visningssprog|Dansk / Engelsk / Norsk / Polsk / Tysk m.fl.|
|**Skærm-zoom**|Tilpas tekststørrelse|Standard / Stor / Meget stor|
|**Totesortering**|Sorter totelisten i Pak Ordrer|Totenavn / Plukliste + Alder|
|**Auto-print labels**|Fragtlabels printes automatisk|✅ / ☐|
|**Auto-print følgesedler**|Følgesedler printes automatisk|✅ / ☐|

### Relaterede emner

→ Se: Automatiseringsindstillinger
→ Se: Printerindstillinger

\---

## Automatiseringsindstillinger

### Hvad er det

Indstillinger der styrer automatiske handlinger uden manuel bekræftelse.

### Indstillinger

|Indstilling|Beskrivelse|Effekt|
|-|-|-|
|**Auto-print label**|Print fragtlabel automatisk ved pakning|Ingen manuel scan af printer nødvendig|
|**Auto-print følgeseddel**|Print følgeseddel automatisk ved pakning|Ingen manuel bekræftelse nødvendig|
|**Afslut pakke (forsinkelse)**|Sekunder der afventes inden auto-afslutning|0–5 sekunder nedtælling|

### Relaterede emner

→ Se: Brugerindstillinger
→ Se: Pakningsprocessen — Trin-for-trin

\---

## Plukindstillinger

### Hvad er det

Terminal-specifikke indstillinger der påvirker plukprocessen.

### Indstillinger

|Indstilling|Beskrivelse|Effekt|
|-|-|-|
|**Dobbelt-scan**|Kræv scan af vare + bekræftelsesscan|Øget sikkerhed mod fejlpluk|
|**Vis lagerbeholdning**|Vis antal på hylde under pluk|Synlighed for medarbejder|
|**Kræv plukbekræftelse**|Eksplicit bekræftelse efter hvert pluk|Ekstra kontroltrin|

### Relaterede emner

→ Se: Aktiv plukning — Trin-for-trin
→ Se: Plukkeprofiler (Admin)

\---

## Stemmeassistent

### Hvad er det

Funktion der læser placeringer, varenavn og antal højt under plukning. Giver håndfri assistance.

### Indstillinger

|Indstilling|Beskrivelse|Muligheder|
|-|-|-|
|**Aktiver stemmeassistent**|Slår stemmehjælp til/fra|✅ / ☐|
|**Sprog**|Stemme-sprog|Dansk / Engelsk / Tysk m.fl.|
|**Hastighed**|Talehastighed|Langsom / Normal / Hurtig|
|**Bekræftelser**|Læs bekræftelsestekster op|✅ / ☐|

### Hvad der læses op

* Placeringsnavn ved navigation
* Varenavn
* Antal der skal plukkes
* Bekræftelse ved korrekt scan

### Best practice

Brug stemmeassistenten ved støjende miljøer eller ved brug af scannerhandske.

\---

## Stregkodeindstillinger

### Hvad er det

Konfiguration af specielle stregkoder og præfikser på terminalniveau.

### Indstillinger

|Indstilling|Beskrivelse|
|-|-|
|**GS1-parsing**|Aktivér/deaktivér automatisk parsing af GS1-stregkoder|
|**Prefix/Suffix**|Konfigureres på scannerhardwaren (se Newland-opsætning)|

### Relaterede emner

→ Se: Newland MT9084 — Opsætning
→ Se: Newland — Special stregkode (GS1/AI)
→ Se: Stregkodepræfikser og systemkoder

\---

## Andre indstillinger

### Terminal-specifikke indstillinger

|Indstilling|Beskrivelse|
|-|-|
|**Terminalens navn**|Visningsnavn for denne terminal|
|**Standardlager**|Fortrukt lager hvis flere er tilgængelige|
|**Default plukprofil**|Forslagsprofil ved start af plukliste|
|**Reol-scanner**|Konfigurér om placements-scan er obligatorisk|

### Relaterede emner

→ Se: Systemindstillinger (Admin)

\---

## Genvejsknapper

### Hvad er det

Skjulte eller hurtige inputs der aktiverer funktioner uden at navigere gennem menuer.

### Genveje

|Stregkode|Effekt|
|-|-|
|`t\_`-stregkode|Åbn/tilknyt specifik tote|
|`tr\_`-stregkode|Tilknyt rullevogn til plukliste|
|Scan printer-QR|Skift aktiv printer|
|Scan placeringsQR på forside|Find tomme placeringer i nærheden|

### Navigation

|Tryk|Effekt|
|-|-|
|SmartPack-logo|Gå til forsiden fra enhver skærm|
|Reol-ikon (plukskærm)|Åbn lagerinfo for placering|
|Produktbillede (plukskærm)|Åbn produktinfo for varen|
|Ur-ikon (Pak Ordrer)|Åbn historik over pakkede ordrer|

\---

# DEL 13 — REFERENCE

\---

## Stregkodepræfikser og systemkoder

### Hvad er det

Oversigt over alle specielle stregkodepræfikser SmartPack anvender til at identificere objekttyper.

### Præfiksoversigt

|Præfiks|Objekt|Eksempel|
|-|-|-|
|`t\_`|Tote / Plukkasse|`t\_A01`|
|`tr\_`|Rullevogn / Vogn|`tr\_VOGN1`|
|`p\_`|Placering / Hylde|`p\_A-01-01`|
|`u\_`|Bruger / Medarbejder|`u\_MARTIN`|
|`pr\_`|Printer|`pr\_ZEBRA1`|
|Ingen præfiks|Vare (EAN/GTIN)|`5701234567890`|

### Systemlogik

SmartPack bruger præfikserne til at identificere objekttype øjeblikkeligt ved scanning — uden at søge i databasen for hvert scan. Det giver maksimal scanningshastighed.

### Relaterede emner

→ Se: Totes (Admin)
→ Se: Vogne (Admin)
→ Se: Placeringsnavngivning (Admin)

\---

## Fejlkoder — Quick Reference

### Hvad er det

Hurtig referencetabel for de hyppigste fejlkoder i terminal-kontekst.

|Kode|Navn|Typisk kontekst|Løsning|
|-|-|-|-|
|**301**|ItemNotFound|Scan af vare der ikke er i systemet|Opret produktet i Admin eller Produktinfo|
|**326**|—|Skift til bundle-type med eksisterende lager|Nulstil lageret på varen først|
|**341**|ItemBundleCantContainSelfOrParent|Cirkulær bundle-reference|Slet indhold → skift til Normal → ret|
|**352**|ItemBatchNumberRequired|Batchnummer mangler ved plukbekræftelse|Angiv batchnummer|
|**1206**|StockingLotMissingBatchNumber|Batchnummer mangler ved ankomst|Angiv batchnummer|
|**1300**|PickingNoPicksFound|Ingen tilgængelige pluk|Kontrollér lager + åbne ankomster|
|**1404**|PackageTooManyItems|For mange varer i pakken|Opret ekstra pakke (+)|
|**1002**|PrinterNotOnline|Printer offline|Tjek printer og Printservice|

→ Se: Fejlkoder (fejlkoder.md) for komplet oversigt

\---

## Hurtige fejlløsninger

### Hvad er det

Tabel til øjeblikkeligt overblik over de hyppigste problemer og deres løsning.

|Problem|Løsning|
|-|-|
|Kan ikke komme til menuen|Tryk SmartPack-logo øverst|
|Terminal lader/spinner|Træk ned fra toppen (genindlæsning)|
|System reagerer slet ikke|Kontakt ansvarlig — bed om system-reset|
|Plukliste låst|Genstart app; version 100.0195+: acceptér overtagelse|
|Printer printer ikke|Tjek Printservice kører på PC|
|Label printes forkert|Genudskriv via historik → "Udskriv igen"|
|Vare ikke fundet ved scan|Opret/kontrollér produktet i Produktinfo|
|Kan ikke logge ind|Kontakt admin → kontrollér konto|
|WiFi-forbindelsestab|Genstart appen; flyt tættere på access point|
|DNS-fejl ved print|`ipconfig /flushdns` i CMD på alle Printservice-computere|

### Support

|Kanal|Detalje|
|-|-|
|**Support (dokumentation)**|https://support.smartpack.dk/da/|
|**Telefon**|+45 88 20 20 19 · Tast 2 (support) · Tast 9 (akut)|
|**Email**|support@smartpack.dk|
|**In-app chat**|Tilgængelig i Admin for superbrugere — Sofia AI svarer øjeblikkeligt|
|**Quicksupport — Windows**|https://coopincdk.github.io/smartpack-v1/#quicksupport-windows|
|**Quicksupport — Mac**|https://coopincdk.github.io/smartpack-v1/#quicksupport-mac|

\---

*SmartPack Terminal Leksikon · Komplet · Alle detaljer bevaret · v1.34.0.0*



\---

# SmartPack Integrationer — Komplet Leksikon

> \*\*Version:\*\* SmartPack v1.34.0.0

\---

## Indholdsfortegnelse

* Generelle principper for fragtintegrationer
* Business Central (BC)
* Shopify
* Visma e-conomic
* GLS
* PostNord
* Bring
* BFT Logistik
* DanDomain
* Herodesk
* WooCommerce
* API — generelt

\---

## Generelle principper for fragtintegrationer

### Hvad er det

SmartPack videresender ordredata til fragtintegrationerne. SmartPack kender ikke den enkelte kundes fragtaftale, addons eller serviceaftaler.

### Hvornår kontaktes fragtselskabet direkte

* Spørgsmål om specifikke leveringsmetoder og hvad kundens aftale dækker
* Fejlkoder der kommer direkte fra fragtselskabets API
* Afklaringer om addons og services

→ Når afklaret med fragtselskabet: SmartPack kan hjælpe med opsætning.

### UPS — særlig note

UPS har mange leveringsmetoder og addons. Fejlkoder fra UPS (fx `Missing or invalid Shipper AttentionName`, kode 120110) opstår typisk i kommunikationen mellem fragtintegrationen og UPS — ikke nødvendigvis i SmartPack. Kunden skal kontakte UPS direkte (eller Webshipper/Shipmondo).

\---

## Business Central (BC)

### Hvad er det

Integration der synkroniserer ordrer og produkter to-vejs mellem Microsoft Business Central og SmartPack.

### Hvad synkroniseres

|Retning|Data|
|-|-|
|BC → SmartPack|Ordrer til pluk og pak|
|BC → SmartPack|Produkter/varer|
|SmartPack → BC|Fulfillment-status|

### Krav til opsætning

|Krav|Detalje|
|-|-|
|**SmartPack-udvidelse**|Installeres i BC via `.app`-fil (Udvidelsesstyring)|
|**Microsoft Entra-applikation**|Kræver `API.ReadWrite.All`-tilladelse til Dynamics 365 BC|
|**SmartPack PermissionSet**|"SmartPack - Main" + "D365 - Basic" + "Giv samtykke"|

### ⚠️ Client secret udløber efter 2 år

Client secret i Microsoft Entra udløber automatisk.
**Sæt en kalenderreminder** ved opsætning — udløbet secret er den hyppigste årsag til at BC-integrationen holder op.

**Forny:** Microsoft Entra → din applikation → Certifikater og hemmeligheder → tilføj ny secret → opdatér i SmartPack.

### Kendte fejltyper

|Fejl|Årsag|Løsning|
|-|-|-|
|**OrderLineAlreadyExists**|Bundle-underlinjer allerede markeret som fuldført i BC|Undersøg bundle-opsætning|
|**Duplikerede SKU'er**|External ID-mapping forkert|Fjern external ID → kør fuld sync|
|**Webhook queue problemer**|Queue blokerer fuld sync|Undersøg queue-status i Job Monitor|
|**Integration virker ikke**|Udløbet client secret|Forny secret i Microsoft Entra|

### Job Monitor — normal adfærd

Job Monitor kører konstant — **dette er normalt og forventet.** Webhooks fra BC sender løbende hændelser til SmartPack.

|Adfærd|Forklaring|
|-|-|
|Job Monitor altid aktiv|Webhooks kører løbende — **ikke en fejl**|
|Enkelt fejl i loggen|Automatisk retry — én fejl er ikke vedvarende problem|

\---

## Shopify

### Hvad synkroniseres

|Retning|Data|
|-|-|
|Shopify → SmartPack|Ordrer|
|Begge veje|Produkter|
|SmartPack → Shopify|Fulfillment og tracking|
|SmartPack → Shopify|Retur og kreditering (kræver Shopify-integration)|

### ⚠️ KRITISK: Manuel ordre i Shopify — Custom shipping

Når du opretter en **manuel ordre i Shopify** og vælger **"Custom shipping"** (fritekst, fx "Gratis levering"), tildeler SmartPack automatisk method key `shopify\_custom\_dk` — som **standard er mappet til Pickup**.

|Valg i Shopify|Resultat i SmartPack|
|-|-|
|"Shipping rates" → vælg fra liste|✅ Korrekt leveringsmetode|
|"Custom shipping" (fritekst)|❌ `shopify\_custom\_dk` → **Pickup**|

**Løsning:** Vælg altid **"Shipping rates"** ved manuelle Shopify-ordrer.

### Kendte fejltyper

|Fejl|Årsag|Løsning|
|-|-|-|
|Forkerte varenumre / manglende telefon|Mangelfuld data|Ret på ordren|
|Massefejl efter produktændring|Bundle ændret i Shopify|Konsultér SmartPack support inden større bundle-ændringer|
|Produkter med status "pending"|Manglende produktdata|Udfyld alle produktfelter|
|Variant ikke valgbar i returportal|External ID-mismatch|Slet External ID → genstart → Full Sync|

### Shopify Presell — metafields

Leveringsdatoer fra indkøbsordrer kan sendes til Shopify:
`smartpack.next\_po\_deliverydate\_{location}`

\---

## Visma e-conomic

### Hvad synkroniseres

|Retning|Data|
|-|-|
|e-conomic → SmartPack|Salgsordrer (anbefalet status: "sendt")|
|e-conomic → SmartPack|Produktkatalog (SKU, navn, stregkoder, priser)|
|SmartPack → e-conomic|Fakturakladde når ordre pakkes|
|SmartPack → e-conomic|Lagerværdi (dagligt / ugentligt / månedligt / kvartalsvis / halvårligt / årligt)|

### Krav

|Krav|Detalje|
|-|-|
|**Grant Token**|Genereres via e-conomic autorisationsside|
|**Webhooks**|Anbefales for realtidsopdateringer|

### Normal adfærd

* Ordrer hentes hvert **5. minut**
* Produkter opdateres via webhooks ved ændringer
* Lagerværdi synkroniseres efter konfigureret frekvens

### Kendte fejltyper

|Problem|Tjek|
|-|-|
|Ordrer importeres ikke|Grant Token gyldig? Status = "sendt"?|
|Fakturakladde oprettes ikke|"Opret fakturakladde" aktiveret? Ordre pakket?|
|Lagerværdi fejler|Kladdenummer + konto-IDs korrekte? (standard: debet 5520, kredit 1355)|

\---

## GLS

### Krav

|Data|Fra GLS (YourGLS)|
|-|-|
|**Username**|YourGLS login|
|**Password**|YourGLS password|
|**ContactId**|YourGLS → Administration → Afsenderadministration|
|**CustomerId**|YourGLS → Administration → Afsenderadministration|

### Leveringsmetoder

|Metode|Beskrivelse|Max vægt|Method Key|
|-|-|-|-|
|GLS Erhvervslevering|Erhvervsadresse|30 kg|`gls\_business\_delivery`|
|GLS Hjemmelevering|Privat (kræver email + mobil)|30 kg|`gls\_private\_delivery`|
|GLS FlexDelivery|Privat m. fleksibel aflevering|30 kg|`gls\_flex\_delivery`|
|GLS Forced Deposit|Pakken stilles altid|30 kg|`gls\_private\_delivery\_deposit`|
|GLS Pakkeshop|Levering til pakkeshop (kræver email + mobil)|20 kg|`gls\_private\_droppoint`|
|GLS ShopReturn|Returlabel til pakkeshop|20 kg|`gls\_shop\_return`|
|GLS ShopReturn QR|Returlabel som QR til email|20 kg|`gls\_shop\_return\_qr`|
|GLS Return Pickup|Afhentning til retur|30 kg|`gls\_return\_pickup`|

### DepositService

|Indstilling|Adfærd|
|-|-|
|`auto` (standard)|Aktiveres kun hvis leveringsinstruktioner på ordren|
|`always`|Pakken stilles altid|
|`never`|Bruges aldrig — sæt under Parameters + flueben i "Include"|

### Tilvalg (addons)

* `email\_notification` (standard aktiveret)
* `express10`
* `express12`
* `add\_on\_liability\_service` (forsikring)

### GLS fejlbeskeder

|Fejl|Årsag|Løsning|
|-|-|-|
|`Flexdelivery not possible`|Metoden understøttes ikke til landet|Vælg anden leveringsmetode|
|`Directshop not allowed`|Pakkeshop ikke tilladt til landet|Brug erhvervs- eller hjemmelevering|
|Booking fejler|Manglende email eller mobil|Tilføj email + mobilnummer på ordren|

### Testmode

Tilgængeligt med V2 API — forsendelser bookes mod GLS testmiljø.

\---

## PostNord

### Krav

|Data|Detalje|
|-|-|
|**MISKOS-nummer**|9-cifret (også kaldet GTT-nummer eller produktionskundenummer)|

### Installation

Apps/Integrationer → Browse App Library → PostNord

Leveringsmetoder tilføjes under Delivery Methods-fanen.

### Nyere versioner

Forbedret validering ved manglende toldoplysninger.

\---

## Bring

### Telefonnummer-krav

**Kritisk:** Telefonnummer skal starte med `+47` og det første ciffer efter `+47` skal være **9 eller 4** (mobilnummer).

|Nummer|Gyldigt|
|-|-|
|`+4798765432`|✅ Gyldigt (starter med 9)|
|`+4748765432`|✅ Gyldigt (starter med 4)|
|`+4712345678`|❌ Ugyldigt (starter med 1)|

\---

## BFT Logistik

### Hvad er det

Fragtintegration primært til møbel- og storgodslevering med tidsbestemt levering.

### Krav

|Data|Detalje|
|-|-|
|**Brugerkode**|Fra BFT|
|**Hemmelig kode**|Fra BFT|

### Delivery Service koder

|Kode|Beskrivelse|
|-|-|
|`7`|Standard (08–21)|
|`6`|Dag (08–16)|
|`1`|Aften (17–21)|
|`4`|Tidsbestemt (4-timers interval)|

### Tillægsservice

* Opbæring
* Indbæring
* Udpakning
* Bortskaffelse

\---

## DanDomain

### Hvad er det

Integration der automatisk bogfører og sender faktura i DanDomain når en ordre pakkes i SmartPack.

### ⚠️ KRITISK: Fakturamail sendes kun én gang

**Fakturamailen til kunden kan kun sendes én gang.** Verificér kundens email-adresse inden afsendelse.

### Aktivering

DanDomain-appen → Settings → sæt flueben i:

* **Create invoice**
* **Send invoice to mail**

\---

## Herodesk

### Hvad er det

Integration med Herodesk kundeserviceplatform.

### Installation

Browse App Library → Herodesk → Configure App → Approve

### Krav

|Felt|Detalje|
|-|-|
|**Organization identifier**|Det der står **inden `.app`** i din Herodesk-URL|

**Eksempel:** Herodesk URL er `minvirksomhed.app.herodesk.io` → Organization identifier = `minvirksomhed`

\---

## WooCommerce

### Krav

|Data|Fra WooCommerce|
|-|-|
|**Consumer Key**|WooCommerce → Indstillinger → Avanceret → REST API|
|**Consumer Secret**|Samme sted|
|**Store URL**|Din WooCommerce-butiksadresse|

### Rettigheder

API-nøglen skal have **Læse/Skrive** rettigheder.

→ Se: WooCommerce integration (Admin.md — Systemindstillinger)

\---

## API — Generelt

### Krav

* **AppId** og **AccessToken**
* Opret: Admin → Indstillinger → Apps → **Tilføj private app**

### Dokumentation og Changelog

https://demo.smartpack.dk/

### Integrationer — oversigt

https://smartpack.dk/integrationer/

\---

*SmartPack Integrationer Leksikon · v1.34.0.0*



\---

# SmartPack Fejlkoder — Komplet Leksikon

> Alle kendte fejlkoder med årsag, kontekst og løsning.

\---

## Fejlkode 301 — ItemNotFound

### Hvad er det

En vare kunne ikke slås op i SmartPack — SKU'en eksisterer ikke eller matcher ikke.

### Kontekst

Import, ankomst, scanning.

### Årsager

|Årsag|Detalje|
|-|-|
|SKU-mismatch|SKU i webshop/ERP matcher ikke SmartPack|
|Produkt mangler|Varen er slet ikke oprettet i SmartPack|
|Whitespace i SKU|Usynlige mellemrum i starten/slutningen af SKU|
|Specialtegn|Tegn der ikke håndteres korrekt|

### Løsning

1. Tjek `item\_not\_found.log` (Admin → Rapporter)
2. Ret SKU i webshop ELLER importer produktet med korrekt SKU
3. Hvis whitespace: rens SKU'en i kilde-systemet

\---

## Fejlkode 326

### Hvad er det

Forsøg på at skifte produkttype til Bundle på en vare der allerede har lager registreret.

### Kontekst

Produktredigering i Admin.

### Årsag

Systemet tillader ikke typeskift til Bundle når der er eksisterende lagerpostering.

### Løsning

1. Nulstil lagerbeholdningen på varen til 0
2. Ret produkttypen til Bundle
3. Tilføj komponenterne
4. Lagerregulér til korrekt antal bagefter

\---

## Fejlkode 341 — ItemBundleCantContainSelfOrParent

### Hvad er det

En bundle-vare er sat op med cirkulær reference — bundlen indeholder sig selv eller sin overordnede bundle.

### Kontekst

Produktopsætning — Bundle-konfiguration.

### Årsag

En bundle-komponent peger tilbage til bundlen den er del af.

### Løsning

1. Åbn bundlen i Admin → Produkter
2. Slet alt indhold i bundlen
3. Skift produkttypen til **Normal** midlertidigt
4. Rediger de cirkulære referencer i de underliggende produkter
5. Skift typen tilbage til Bundle
6. Tilføj korrekte komponenter

\---

## Fejlkode 352 — ItemBatchNumberRequired

### Hvad er det

Batchnummer mangler ved plukbekræftelse for en vare der kræver det.

### Kontekst

Terminal → Pluk Ordrer → bekræftelse af pluk.

### Årsag

Varen har `UseBatchNumber = true` men intet batchnummer er registreret.

### Løsning

Angiv batchnummer på varen enten under ankomst (foretrukket) eller via lagerrevision.

\---

## Fejlkode 1206 — StockingLotMissingBatchNumber

### Hvad er det

Batchnummer mangler ved modtagelse/ankomst af en batch-konfigureret vare.

### Kontekst

Terminal → Ankomst.

### Årsag

Varen kræver batchnummer men det blev ikke angivet.

### Løsning

Angiv batchnummer i ekstrafeltet under ankomst.

→ Se: Ankomst — Ekstrafelter (terminal.md)

\---

## Fejlkode 1300 — PickingNoPicksFound

### Hvad er det

Systemet kan ikke finde nogen tilgængelige pluk at generere en plukliste fra.

### Kontekst

Terminal → Pluk Ordrer → Generer.

### Årsager og løsninger

|Årsag|Løsning|
|-|-|
|Samme SKU på flere ordrelinjer|Konsolidér ordrelinjer i webshop|
|Varen er oversolgt|Genopfyld lageret|
|Åben ankomst blokerer|Afslut den åbne ankomst|
|Profil-filter er for restriktivt|Justér plukkeprofil-filtre|
|Ingen ordrer passer til profilen|Kontrollér filtre i plukkeprofilen|

\---

## Fejlkode 1404 — PackageTooManyItems

### Hvad er det

For mange varer er tilknyttet pakken — overskrider konfigureret maksimum.

### Kontekst

Terminal → Pak Ordrer.

### Løsning

1. Åbn pakken i Pak Ordrer
2. Tryk **+** for at tilføje en ekstra pakke
3. Fordel varerne på de to pakker
4. Afslut forsendelsen

\---

## Fejl: OrderFromLocationAddressIsEmpty

### Hvad er det

Afsenderlokation mangler en udfyldt adresse — kræves af fragtintegrationerne.

### Kontekst

Transfer-ordrer og forsendelser.

### Løsning

Admin → Indstillinger → Lokationer → vælg afsenderlokationen → udfyld alle adressefelter → gem.

\---

## Fejl: The JSON value could not be converted

### Hvad er det

En formateringsfejl opstår typisk ved redigering af produkter med udløbsdato.

### Kontekst

Admin → Produkter → redigering.

### Årsag

Datofeltet for udløbsdato indeholder et ugyldigt format.

### Løsning

Vælg udløbsdatoen på ny i datovælgerfeltet — skriv den ikke manuelt som tekst.

\---

## Fejl: Unable to find pickup location

### Hvad er det

Systemet kan ikke finde en pakkeshop/drop point til det angivne postnummer.

### Kontekst

Labelgenerering for pakkeshop-leveringsmetoder.

### Årsag

Postnummeret matcher ikke transportørens database for denne service.

### Løsning

Kontrollér postnummeret på ordren. Ret om nødvendigt — eventuelt til nærmeste gyldige postnummer.

\---

## Fejl: Printer Not Online (1002)

### Hvad er det

Systemet kan ikke kommunikere med den valgte printer.

### Kontekst

Terminal → Pak Ordrer → labelprint.

### Årsager og løsninger

|Årsag|Løsning|
|-|-|
|Printer slukket|Tænd printeren|
|Printservice lukket|Åbn Printservice fra systembakken|
|Netværksfejl|Tjek printerens netværksforbindelse|
|DNS-problem|Kør `ipconfig /flushdns` på alle Printservice-computere|
|Printer ikke Share-markeret|Åbn Printservice → aktivér Share|

\---

## Fejl: Systemet reagerer ikke (Baglås)

### Hvad er det

SmartPack er gået i baglås og reagerer ikke på input.

### Løsning

1. Kontakt **den ansvarlige**
2. Admin → Indstillinger → Systemindstillinger → **Restart Application**
3. Alle sessioner afbrydes kortvarigt
4. Systemet genstarter og er normalt tilgængeligt inden for 30–60 sekunder
5. Vedvarende baglås: kontakt support@smartpack.dk og anmod om et reset

\---

## Fejl: Terminal lader (loader)

### Hvad er det

Terminalen viser kun en loading-animation og reagerer ikke.

### Løsning

Træk ned fra toppen af skærmen (genindlæsning).
Hjælper det ikke: genstart SmartPack-appen.

→ Se: Terminal lader eller fryser (terminal.md)

\---

## Fejl: Label vil ikke udskrives

### Hvad er det

Systemet forsøger at printe men ingenting udskrives på labelprinter.

### Tjekliste

|Tjek|Handling|
|-|-|
|Er "Select Printer" vist?|Gå til Indstillinger og vælg printer|
|Er Printservice kørende?|Åbn fra systembakken på Windows-PC|
|Er Share aktiveret?|Åbn Printservice → aktivér Share på printeren|
|Er DNS-cache forældet?|Kør `ipconfig /flushdns` på alle Printservice-computere|
|Er printeren tændt?|Tjek fysisk printer|

\---

## Fejl: GLS Flexdelivery not possible

### Kontekst

GLS labelgenerering.

### Årsag

FlexDelivery er ikke tilgængeligt til det pågældende land.

### Løsning

Vælg en anden GLS-leveringsmetode der understøttes til landet.

\---

## Fejl: Bring — Telefonnummer format

### Kontekst

Bring labelgenerering.

### Årsag

Telefonnummeret starter ikke med et gyldigt norsk mobil-præfiks (+47 fulgt af 9 eller 4).

### Løsning

Kontrollér at telefonnummeret er i format `+479xxxxxxx` eller `+474xxxxxxx`.

→ Se: Bring (integrationer.md)

\---

## Fejl: DanDomain — Fakturamail kun én gang

### Kontekst

DanDomain-integration, pakning.

### Regel

Fakturamailen til kunden kan kun sendes **én gang**.

### Forebyggelse

Verificér kundens email-adresse på ordren inden pakning.

\---

## Fejl: BC — OrderLineAlreadyExists

### Kontekst

Business Central integration.

### Årsag

Bundle-underlinjer er allerede markeret som fuldført i BC ved ankomst til SmartPack.

### Løsning

Undersøg bundle-opsætning i BC. Ikke en simpel bug — kræver gennemgang af workflow.

\---

## Fejl: CSV/Excel ser forkert ud

### Kontekst

Export af CSV-filer fra SmartPack, åbnet i Excel.

### Årsag

CultureInfo-indstillingen er sat til `en-US` men Excel forventer `da-DK` format (semikolon som separator).

### Symptomer

* Alle data i én kolonne
* Tal vises forkert
* Kolonner forskydes

### Løsning

Admin → Indstillinger → Systemindstillinger → CultureInfo CSV → skift til `da-DK` → Restart Application → eksportér igen.

→ Se: CSV-separator (admin.md)

\---

*SmartPack Fejlkoder Leksikon · v1.34.0.0*



\---

# SmartPack Ordbog — A til Å

> Alle begreber der bruges i SmartPack og lagerlogistik. Hvert begreb er sin egen artikel.

\---

## ABC-analyse

**Hvad:** Lagerstyringsmetode der kategoriserer varer baseret på omsætningsværdi.

|Kategori|Definition|Standard|
|-|-|-|
|**A-varer**|Øverste X% af omsætningsværdi|Øverste 5%|
|**B-varer**|Næste X%|Næste 10%|
|**C-varer**|Næste X%|Næste 15%|
|**D-varer**|Resten|Alt øvrigt|

**Bruges til:** Indkøbsprioritering, lagerplacering, forecasting.

→ Se: Forecasting og ABC-analyse (admin.md)

\---

## AI (Application Identifier)

**Hvad:** GS1-koder i kantede parenteser der identificerer typen af data i en GS1-stregkode.

|AI|Data|
|-|-|
|(01)|GTIN / varenummer|
|(10)|Batchnummer|
|(11)|Produktionsdato|
|(17)|Udløbsdato|

→ Se: Newland — Special stregkode (terminal.md)

\---

## API (Application Programming Interface)

**Hvad:** Teknisk grænse der giver udviklere programmatisk adgang til SmartPack-data og funktioner.

**Bruges til:** Egne integrationer, automatisering, dataudtræk.

→ Se: API-adgang (admin.md)

\---

## Batch picking

**Hvad:** Plukning til flere ordrer simultant på én plukliste — øger effektiviteten.

→ Se: Plukstrategi — Multipluks (terminal.md)

\---

## Batchnummer / Lotnummer

**Hvad:** Unikt identifikationsnummer for et specifikt produktionsparti. Muliggør tilbagekald og kvalitetssporing.

**Synonymer:** LOT-nummer, batchnummer, partinummer.

→ Se: Ankomst — Batch/LOT-sporing (terminal.md)
→ Se: Batchsporing (admin.md)

\---

## Batch/LOT

**Hvad:** Et specifikt lagerparti med ét batch-nummer. Følger varen fra modtagelse til forsendelse.

\---

## BOM (Bill of Materials)

**Hvad:** Stykliste — liste over alle komponenter der indgår i samling af et produkt.

→ Se: Produkttyper — Kollektions (admin.md)

\---

## Bundle

**Hvad:** En kombination af eksisterende produkter der sælges som ét samlet produkt. Systemet beregner lagertilgængelighed ud fra komponenternes individuelle beholdning.

→ Se: Produkttyper — Bundle (admin.md)

\---

## Cloudbaseret WMS

**Hvad:** Lagerstyringssystem der kører i cloud — ingen lokal serverinstallation kræves.

\---

## Cross docking

**Hvad:** Varer losses fra indkommende transport og lægges direkte over i udgående transport uden at passere lageret.

\---

## Cut-off tid

**Hvad:** Seneste frist for ordremodtagelse for at nå dagens afsendelse.

→ Se: Sorteringszoner (admin.md)

\---

## Demand planning

**Hvad:** Forudsigelse af fremtidig kundeefterspørgsel til optimal lagerstyring.

→ Se: Forecasting og ABC-analyse (admin.md)

\---

## Dropshipping

**Hvad:** Varer sendes direkte fra leverandøren til slutkunden — ingen eget lager håndterer varen.

→ Se: Dropshipping — To metoder (admin.md)

\---

## EAN (European Article Number)

**Hvad:** Stregkodestandard — bruges til at identificere varer unikt.

**Synonymer:** GTIN, varestregkode.

\---

## End-of-day

**Hvad:** Daglig afslutningsprocedure hvor waybill-liste genereres til transportøren.

→ Se: Afsendelse og Waybill (admin.md)

\---

## ERP (Enterprise Resource Planning)

**Hvad:** Virksomhedssystem der integrerer økonomi, lager, salg og indkøb. SmartPack integrerer med Business Central og e-conomic.

\---

## FEFO (First Expired First Out)

**Hvad:** Lagerstyringsmetode der prioriterer forsendelse af varer med tidligst udløbsdato.

→ Se: Produktflags (admin.md)
→ Se: Lagerrevision — LOT/Batch håndtering (terminal.md)

\---

## FIFO (First In First Out)

**Hvad:** Lagerstyringsmetode der sikrer at ældste varer sendes/sælges først.

→ Se: Produktflags (admin.md)

\---

## Forsendelse

**Hvad:** Den fysiske afsendelse af pakker til kunden — fra label genereret til pakke afhentet af transportør.

\---

## Fragtlabel

**Hvad:** Stregkode-label der printes og klistres på pakken. Indeholder modtageradresse, sporingsnummer og transportørinformation.

→ Se: Labelprint (terminal.md)

\---

## Full Sync

**Hvad:** Fuld synkronisering af alle data fra en integration (Shopify, BC) til SmartPack.

**Bruges til:** Genopbygning af data efter fejl eller opsætningsændringer.

\---

## Genopfyldning / Refill

**Hvad:** Påfyldning af plukpladser fra reservelager/baglagerpladser.

→ Se: Flyt Lager (terminal.md)
→ Se: Refill-lokationer (admin.md)

\---

## GS1

**Hvad:** Global standard for stregkoder. Bruges i SmartPack til automatisk udfyldelse af batch, dato og LOT ved scanning.

→ Se: Ankomst — GS1 stregkoder (terminal.md)

\---

## GTIN (Global Trade Item Number)

**Hvad:** Det globale varenummer — bruges interchangeably med EAN.

\---

## Håndterminal

**Hvad:** Mobil enhed (tablet/scanner) til udførelse af lageropgaver. SmartPack anbefaler Newland MT9084.

→ Se: Anbefalet hardware (terminal.md)

\---

## Intrastat

**Hvad:** Obligatorisk EU-rapportering af varebevægelser mellem EU-lande.

\---

## IOSS (Import One Stop Shop)

**Hvad:** EU-momsordning der forenkler momsafregning ved salg til EU-kunder.

\---

## Just-In-Time (JIT)

**Hvad:** Varer modtages præcis når de bruges — minimerer lagerhold.

\---

## Karantæne

**Hvad:** Markering af et lagerparti som utilgængeligt for pluk uden at fjerne det fra lageret.

→ Se: Lagerrevision — Karantæne (terminal.md)

\---

## Kitting

**Hvad:** Samling af komponenter til et færdigt produkt — udføres via Produktions-appen.

→ Se: Produktion (terminal.md)
→ Se: Produkttyper — Kollektions (admin.md)

\---

## KPI (Key Performance Indicators)

**Hvad:** Målbare nøgletal til at vurdere effektivitet.

→ Se: Lager-KPI'er og benchmarks (admin.md)
→ Se: Employee Performance Dashboard (admin.md)

\---

## Kostpris

**Hvad:** Hvad det koster virksomheden at købe/producere en vare. Synkroniseres fra e-handelsplatform.

→ Se: Kostpris vs. Lageromkostning (admin.md)

\---

## Lagerkostpris

**Hvad:** Beregnet gennemsnitlig kostpris inkl. fragt, told og finansiering.

→ Se: Kostpris vs. Lageromkostning (admin.md)

\---

## Lageromstætning

**Hvad:** Hastighed for salg og udskiftning af lager over en periode. Mål: 4–8 gange/år.

\---

## Lageroptælling / Revision

**Hvad:** Fysisk tælling og verificering af lagerantal.

→ Se: Lagerrevision (terminal.md)
→ Se: Placeringsrevision (terminal.md)
→ Se: Løbende optælling (terminal.md)

\---

## Lagerprincip: Gennemsnitskost

**Hvad:** Lagerværdi beregnes som: total kostpris ÷ total enheder = gennemsnitlig enhedspris.

\---

## LabelOnly

**Hvad:** En ordretype i SmartPack der genererer en fragtlabel uden at der er varer tilknyttet.

→ Se: Opret label uden ordre (admin.md)

\---

## LOT

**Hvad:** Lotnummer = batchnummer for et specifikt produktparti.

→ Se: Batchnummer / Lotnummer

\---

## Mikrofulfillment

**Hvad:** Små lokale lagre tæt på kunder til ultra-hurtig levering.

\---

## Minimumslager

**Hvad:** Laveste acceptable lagerantal — bestillingspunkt der udløser genopfyldning.

→ Se: Produktdata — Refill limit (admin.md)

\---

## Method key

**Hvad:** Den tekniske nøgle der identificerer en leveringsmetode i SmartPack og matcher med webshoppens leveringsmetode.

**Eksempel:** `gls\_private\_droppoint`, `postnord\_business\_delivery`

→ Se: Leveringsmetoder — Opsætning (admin.md)

\---

## OTD-rate (On Time Delivery)

**Hvad:** Andel af ordrer der leveres til aftalt tid. Mål: > 95%.

\---

## Ordrestyring

**Hvad:** Hele forløbet fra ordremodtagelse til levering.

\---

## Pakning

**Hvad:** Forberedelse af varer til forsendelse inkl. emballage og fragtlabel.

→ Se: Pakningsprocessen (terminal.md)

\---

## Pick \& Pack

**Hvad:** Integreret pluk og pak — ordrer plukkes og pakkes direkte.

\---

## PIM (Product Information Management)

**Hvad:** Central styring af produktdata.

→ Se: Produktoversigt (admin.md)

\---

## Plukning

**Hvad:** Udvælgelse og samling af varer fra hylderne til en kundeordre.

→ Se: Pluk Ordrer (terminal.md)

\---

## Plukprofil

**Hvad:** Skabelon der bestemmer hvordan pluklister genereres.

→ Se: Introduktion til plukkeprofiler (admin.md)

\---

## Pre-pack

**Hvad:** Forpakning af populære varer inden ordrer indkommer.

\---

## Presell / Forudsalg

**Hvad:** Salg af varer der endnu ikke er modtaget på lageret.

→ Se: Presell (admin.md)

\---

## Printservice

**Hvad:** Windows-program der fungerer som bro mellem SmartPack og fysiske printere.

→ Se: Printservice — Opsætning (terminal.md)

\---

## Re-commerce

**Hvad:** Videresalg af returnerede eller brugte varer.

\---

## Returflow

**Hvad:** Hele processen for håndtering af returnerede varer fra modtagelse til lagerføring.

→ Se: Retur (terminal.md)
→ Se: Returportal (admin.md)

\---

## Reverse Logistics

**Hvad:** Håndtering af varestrømme fra kunde retur til lager.

\---

## RMA (Return Merchandise Authorization)

**Hvad:** Returregistrering — autorisation til at returnere en vare.

\---

## ROI (Return on Investment)

**Hvad:** Afkast på investering.

\---

## Same-day delivery

**Hvad:** Levering samme dag som ordren afgives.

\---

## SCM (Supply Chain Management)

**Hvad:** Styring af hele forsyningskæden fra råmaterialer til færdige produkter.

\---

## Serienummer

**Hvad:** Unikt nummer per enkelt enhed af et produkt — til sporbarhed på enhedsniveau.

→ Se: Produktflags (admin.md)
→ Se: Serienummersporing (admin.md)

\---

## SignalR

**Hvad:** Teknologi der muliggør realtidsopdateringer fra server til klient.

→ Se: Realtidsopdateringer (terminal.md)

\---

## SKU (Stock Keeping Unit)

**Hvad:** Unikt varenummer der identificerer én specifik vare/variant i systemet.

**Eksempel:** En blå t-shirt i størrelse M har ét SKU. Størrelse L har et andet SKU.

\---

## SLA (Service Level Agreement)

**Hvad:** Aftalt serviceniveau og svartider.

\---

## Sofia

**Hvad:** SmartPacks AI-supportassistent i supportchatten. Svarer øjeblikkeligt 24/7.

→ Se: Supportchat (admin.md)

\---

## Sorteringszone

**Hvad:** Logisk gruppe af pakker til samme transportør/destination.

→ Se: Sorteringszoner (admin.md)

\---

## Stregkode

**Hvad:** Maskinlæsbar kode der indeholder produktdata.

→ Se: Stregkoder på produkter (admin.md)
→ Se: Stregkodepræfikser (terminal.md)

\---

## Tote

**Hvad:** Fysisk plukkasse brugt under ordrepluk til at sortere varer per ordre.

→ Se: Totes og plukkekasser (admin.md)
→ Se: Aktiv plukning — Vogn og tote (terminal.md)

\---

## Transfer ordre

**Hvad:** Intern overførsel af varer fra én SmartPack-lokation til en anden.

→ Se: Transfer ordre (admin.md)

\---

## TSM / TSP

**Hvad:** Travelling Salesman Problem — optimeringsalgoritme der beregner korteste mulige rute mellem alle plukpunkter.

→ Se: Pluk Ordrer — Generer plukliste (terminal.md)

\---

## Udløbsdato

**Hvad:** Seneste dato for optimal kvalitet og sikkerhed.

→ Se: Ankomst — Ekstrafelter (terminal.md)
→ Se: Produktflags (admin.md)

\---

## UOM (Unit of Measure)

**Hvad:** Standardiseret måleenhed for varer på lager (stk., ltr., meter).

→ Se: Enhedstyper (admin.md)

\---

## Varemodtagelse / Ankomst

**Hvad:** Modtagelse, kontrol og registrering af indkommende varer på lageret.

→ Se: Ankomst (terminal.md)

\---

## Waybill

**Hvad:** Fragtbrev — transportdokument der medfølger forsendelsen.

→ Se: Afsendelse og Waybill (admin.md)

\---

## Wave picking

**Hvad:** Pluk i bølger baseret på deadlines og fragtafgange.

→ Se: Sorteringszoner (admin.md)

\---

## WEEE

**Hvad:** Waste Electrical and Electronic Equipment — lovpligtig håndtering af elektronikaffald i EU.

\---

## Webhook

**Hvad:** Automatisk HTTP-notifikation fra ét system til et andet ved specifikke hændelser.

→ Se: Business Central (integrationer.md)
→ Se: Shopify (integrationer.md)

\---

## WMS (Warehouse Management System)

**Hvad:** Lagerstyringssystem — software der optimerer alle aspekter af lagerdrift.

**SmartPack er et cloudbaseret WMS.**

\---

*SmartPack Ordbog · A til Å · v1.34.0.0*



\---

