# Sole District Wireframes

Stand: 2026-04-29

Verifiziert gegen diese Dateien:
- `index.html`
- `produkte.html`
- `detail.html`
- `kontakt.html`
- `Webshop.html`
- `assets/css/styles.css`
- `assets/js/mobile-nav.js`
- `assets/js/products-filter.js`
- `assets/js/product-detail.js`

## Breakpoints und Regeln

- Desktop: groesser als `960px`
- Tablet: `721px` bis `960px`
- Mobile: `720px` oder kleiner
- Referenzbreite fuer die Wireframes Desktop: `1440px`
- Referenzbreite fuer die Wireframes Tablet: `834px`
- Referenzbreite fuer die Wireframes Mobile: `390px`
- Containerbreite: `min(1180px, calc(100% - 2rem))`
- Navigation auf Tablet und Mobile: Menue-Button sichtbar, Navigation standardmaessig geschlossen, geoeffnet als voller Block unter dem Brand
- `hero`, `page-intro`, `newsletter-panel`, `detail-hero`, `detail-secondary`, `contact-layout`, `editorial-grid`, `footer-grid`: ab `960px` und kleiner einspaltig
- `form-grid`: ab `720px` und kleiner einspaltig
- `product-grid`: `repeat(auto-fill, minmax(240px, 1fr))`
- `category-grid`: `repeat(auto-fit, minmax(170px, 1fr))`
- `team-grid`: `repeat(auto-fit, minmax(230px, 1fr))`
- `detail.html` wird nach dem Laden per JavaScript neu gerendert
- `detail.html` ohne `?product=` zeigt standardmaessig `Mono Court Low`
- `detail.html` mit ungueltigem `?product=` zeigt einen Fehlerzustand

## index.html

### Desktop

```text
+--------------------------------------------------------------------------------------------------+
| TOPBAR                                                                                           |
| Gratis Versand ... Drop-Alarm jeden Freitag um 18:00 Uhr                                         |
+--------------------------------------------------------------------------------------------------+
| STICKY HEADER                                                                                    |
| [SD Brand + Sole District]                   [Start] [Produkte] [Kontakt] [Jetzt shoppen]       |
+--------------------------------------------------------------------------------------------------+
| HERO (2 Spalten)                                                                                 |
| Left column                                     | Right column                                   |
| - Eyebrow: Sole District                        | [Featured Drop Card]                           |
| - H1                                            | - Mono Court Low                               |
| - Lead text                                     | - kurzer Text                                  |
| - [Alle Produkte] [Newsletter abonnieren]       | - Link zur Detailseite                         |
| - 3 Stats: 10 / 5 / 24h                         | [Warum dieser Shop? Card]                      |
|                                                 | - 3 Bullet-Argumente                           |
+--------------------------------------------------------------------------------------------------+
| KATEGORIEN                                                                                       |
| [Section head: Eyebrow + H2 + Link]                                                              |
| [Street] [Retro] [Performance] [Terrace] [Limited]                                               |
+--------------------------------------------------------------------------------------------------+
| BELIEBTE PRODUKTE                                                                                |
| [Section head: Eyebrow + H2 + Text]                                                              |
| [Card 1] [Card 2] [Card 3] [Card 4]                                                              |
| Jede Card: Bild+Badge / Meta / Titel+Preis / Copy / 2 Chips / Link + Bestellbutton             |
+--------------------------------------------------------------------------------------------------+
| EDITORIAL (2 Spalten)                                                                            |
| [Kuratiert Card] [Service Card]                                                                  |
+--------------------------------------------------------------------------------------------------+
| NEWSLETTER (2 Spalten)                                                                           |
| [Copy]                                            [Form]                                          |
|                                                   - Vorname                                      |
|                                                   - E-Mail                                       |
|                                                   - Button                                       |
|                                                   - Note                                         |
|                                                   - Feedback                                     |
+--------------------------------------------------------------------------------------------------+
| FOOTER (4 Spalten)                                                                               |
| [Brand+Intro] [Navigation] [Kontakt] [Credits]                                                   |
| [Meta links]                                                                  [Meta rechts]      |
+--------------------------------------------------------------------------------------------------+
```

### Tablet

```text
+--------------------------------------------------------------------------------------+
| TOPBAR                                                                               |
+--------------------------------------------------------------------------------------+
| HEADER                                                                               |
| [SD Brand + Sole District]                                           [Menue-Button] |
| Nav default: geschlossen                                                               |
| Nav offen:                                                                            |
| [Start]                                                                               |
| [Produkte]                                                                            |
| [Kontakt]                                                                             |
| [Jetzt shoppen]                                                                       |
+--------------------------------------------------------------------------------------+
| HERO (1 Spalte)                                                                       |
| - Eyebrow                                                                             |
| - H1                                                                                  |
| - Lead                                                                                |
| - 2 CTA Buttons                                                                       |
| - 3 Stats nebeneinander in einer Wrap-Zeile                                          |
| [Featured Drop Card]                                                                  |
| [Warum dieser Shop? Card]                                                             |
+--------------------------------------------------------------------------------------+
| KATEGORIEN                                                                            |
| [Section head]                                                                        |
| [Street] [Retro] [Performance] [Terrace]                                             |
| [Limited]                                                                             |
+--------------------------------------------------------------------------------------+
| BELIEBTE PRODUKTE                                                                     |
| [Section head]                                                                        |
| [Card 1] [Card 2] [Card 3]                                                            |
| [Card 4]                                                                              |
+--------------------------------------------------------------------------------------+
| EDITORIAL                                                                             |
| [Kuratiert Card]                                                                      |
| [Service Card]                                                                        |
+--------------------------------------------------------------------------------------+
| NEWSLETTER                                                                            |
| [Copy]                                                                                |
| [Form]                                                                                |
+--------------------------------------------------------------------------------------+
| FOOTER                                                                                |
| [Brand+Intro]                                                                         |
| [Navigation]                                                                          |
| [Kontakt]                                                                             |
| [Credits]                                                                             |
| [Meta links]                                                                          |
| [Meta rechts]                                                                         |
+--------------------------------------------------------------------------------------+
```

### Mobile

```text
+------------------------------------------------------------------------+
| TOPBAR                                                                 |
+------------------------------------------------------------------------+
| HEADER                                                                 |
| [SD Brand]                                              [Menue-Button] |
| Nav default: geschlossen                                               |
| Nav offen: 4 gestapelte Vollbreiten-Links                              |
+------------------------------------------------------------------------+
| HERO                                                                   |
| - Eyebrow                                                              |
| - H1                                                                   |
| - Lead                                                                 |
| - CTA Buttons umbrechen je nach Platz                                  |
| - Stats gestapelt:                                                     |
|   [10 kuratierte Sneaker]                                              |
|   [5 Kategorien]                                                       |
|   [24h Drop-Vorankuendigung]                                           |
| [Featured Drop Card]                                                   |
| [Warum dieser Shop? Card]                                              |
+------------------------------------------------------------------------+
| KATEGORIEN                                                             |
| [Section head]                                                         |
| [Street]                                                               |
| [Retro]                                                                |
| [Performance]                                                          |
| [Terrace]                                                              |
| [Limited]                                                              |
+------------------------------------------------------------------------+
| BELIEBTE PRODUKTE                                                      |
| [Section head]                                                         |
| [Card 1]                                                               |
| [Card 2]                                                               |
| [Card 3]                                                               |
| [Card 4]                                                               |
+------------------------------------------------------------------------+
| EDITORIAL                                                              |
| [Kuratiert Card]                                                       |
| [Service Card]                                                         |
+------------------------------------------------------------------------+
| NEWSLETTER                                                             |
| [Copy]                                                                 |
| [Form]                                                                 |
+------------------------------------------------------------------------+
| FOOTER                                                                 |
| [Brand+Intro]                                                          |
| [Navigation]                                                           |
| [Kontakt]                                                              |
| [Credits]                                                              |
| [Meta links]                                                           |
| [Meta rechts]                                                          |
+------------------------------------------------------------------------+
```

## produkte.html

Standardzustand beim ersten Laden:
- Filter `Alle` ist aktiv
- Ergebnistext ist `10 Produkte`
- Alle 10 Produktkarten sind sichtbar

### Desktop

```text
+--------------------------------------------------------------------------------------------------+
| TOPBAR                                                                                           |
| Neue Releases, Restocks und Weekend Specials aus Zuerich.                                        |
+--------------------------------------------------------------------------------------------------+
| STICKY HEADER                                                                                    |
| [SD Brand + Sole District]                   [Start] [Produkte] [Kontakt] [Drop auswaehlen]     |
+--------------------------------------------------------------------------------------------------+
| PAGE INTRO (2 Spalten)                                                                           |
| Left: Eyebrow + H1                               | Right: Lead                                    |
+--------------------------------------------------------------------------------------------------+
| FILTER PANEL                                                                                     |
| [Filter Copy]                                     [Alle*] [Street] [Retro] [Performance]         |
|                                                   [Terrace] [Limited]                            |
+--------------------------------------------------------------------------------------------------+
| RESULTS BAR                                                                                      |
| [10 Produkte]                                      [Hinweis zu Bildern, Details, Bestellung]     |
+--------------------------------------------------------------------------------------------------+
| PRODUCT GRID                                                                                     |
| [Card 1] [Card 2] [Card 3] [Card 4]                                                              |
| [Card 5] [Card 6] [Card 7] [Card 8]                                                              |
| [Card 9] [Card 10]                                                                               |
| Jede Card: Bild+Badge / Meta / Titel+Preis / Copy / 2 Chips / Link + Bestellbutton             |
+--------------------------------------------------------------------------------------------------+
| FOOTER (4 Spalten)                                                                               |
| [Brand+Intro] [Navigation] [Support] [Credits]                                                   |
| [Meta links]                                                                  [Meta rechts]      |
+--------------------------------------------------------------------------------------------------+
```

### Tablet

```text
+--------------------------------------------------------------------------------------+
| TOPBAR                                                                               |
+--------------------------------------------------------------------------------------+
| HEADER                                                                               |
| [SD Brand + Sole District]                                           [Menue-Button] |
| Nav default: geschlossen                                                               |
| Nav offen:                                                                            |
| [Start]                                                                               |
| [Produkte]                                                                            |
| [Kontakt]                                                                             |
| [Drop auswaehlen]                                                                     |
+--------------------------------------------------------------------------------------+
| PAGE INTRO                                                                            |
| - Eyebrow                                                                             |
| - H1                                                                                  |
| - Lead                                                                                |
+--------------------------------------------------------------------------------------+
| FILTER PANEL                                                                          |
| [Filter Copy]                                                                         |
| [Alle*] [Street] [Retro] [Performance]                                               |
| [Terrace] [Limited]                                                                   |
+--------------------------------------------------------------------------------------+
| RESULTS BAR                                                                           |
| [10 Produkte]                                                                         |
| [Hinweis zu Bildern, Details, Bestellung]                                             |
+--------------------------------------------------------------------------------------+
| PRODUCT GRID                                                                          |
| [Card 1] [Card 2] [Card 3]                                                            |
| [Card 4] [Card 5] [Card 6]                                                            |
| [Card 7] [Card 8] [Card 9]                                                            |
| [Card 10]                                                                             |
+--------------------------------------------------------------------------------------+
| FOOTER                                                                                |
| [Brand+Intro]                                                                         |
| [Navigation]                                                                          |
| [Support]                                                                             |
| [Credits]                                                                             |
| [Meta links]                                                                          |
| [Meta rechts]                                                                         |
+--------------------------------------------------------------------------------------+
```

### Mobile

```text
+------------------------------------------------------------------------+
| TOPBAR                                                                 |
+------------------------------------------------------------------------+
| HEADER                                                                 |
| [SD Brand]                                              [Menue-Button] |
| Nav default: geschlossen                                               |
| Nav offen: 4 gestapelte Vollbreiten-Links                              |
+------------------------------------------------------------------------+
| PAGE INTRO                                                             |
| - Eyebrow                                                              |
| - H1                                                                   |
| - Lead                                                                 |
+------------------------------------------------------------------------+
| FILTER PANEL                                                           |
| [Filter Copy]                                                          |
| [Alle*]                                                                |
| [Street]                                                               |
| [Retro]                                                                |
| [Performance]                                                          |
| [Terrace]                                                              |
| [Limited]                                                              |
+------------------------------------------------------------------------+
| RESULTS BAR                                                            |
| [10 Produkte]                                                          |
| [Hinweis zu Bildern, Details, Bestellung]                              |
+------------------------------------------------------------------------+
| PRODUCT GRID                                                           |
| [Card 1]                                                               |
| [Card 2]                                                               |
| [Card 3]                                                               |
| [Card 4]                                                               |
| [Card 5]                                                               |
| [Card 6]                                                               |
| [Card 7]                                                               |
| [Card 8]                                                               |
| [Card 9]                                                               |
| [Card 10]                                                              |
+------------------------------------------------------------------------+
| FOOTER                                                                 |
| [Brand+Intro]                                                          |
| [Navigation]                                                           |
| [Support]                                                              |
| [Credits]                                                              |
| [Meta links]                                                           |
| [Meta rechts]                                                          |
+------------------------------------------------------------------------+
```

## detail.html

Wichtiger Abgleich:
- Die statische HTML-Huelle wird durch `assets/js/product-detail.js` ersetzt
- Ohne Query-Parameter wird `Mono Court Low` gerendert
- Mit gueltigem `?product=` wird dieselbe Struktur mit anderen Inhalten gerendert
- Mit ungueltigem `?product=` wird ein Fehler-Panel statt des Produktlayouts gezeigt

### Desktop

```text
+--------------------------------------------------------------------------------------------------+
| TOPBAR                                                                                           |
| Direkt bestellen oder Beratung anfragen. Antwort innerhalb eines Werktags.                       |
+--------------------------------------------------------------------------------------------------+
| STICKY HEADER                                                                                    |
| [SD Brand + Sole District]                   [Start] [Produkte] [Kontakt] [Bestellen]           |
+--------------------------------------------------------------------------------------------------+
| MAIN (Standard: Mono Court Low)                                                                  |
| [Back-Link: Zurueck zur Uebersicht]                                                              |
|                                                                                                  |
| DETAIL HERO (2 Spalten)                                                                          |
| Left column                                     | Right column                                   |
| [Bild-Figure]                                   | - Meta: Street / Drop 03                       |
| - Produktbild                                   | - H1: Mono Court Low                           |
| - Bildquelle + Unsplash Link                    | - 3 Chips: Badge / Colorway / Stock            |
|                                                 | - Preis                                         |
|                                                 | - Beschreibung                                 |
|                                                 | - Quick Facts Box                              |
|                                                 | - Spec List mit 4 Punkten                      |
|                                                                                                  |
| DETAIL SECONDARY (2 Spalten)                                                                     |
| [Video Panel]                                    [Order Form]                                     |
| - Eyebrow: Video                                 - Eyebrow: Bestellformular                       |
| - H2                                             - H2                                              |
| - 16:9 YouTube Embed                             - Beschreibung                                    |
| - Caption                                        - Form Grid 2x2: Groesse / Menge / Name / Email |
|                                                  - Lieferadresse                                   |
|                                                  - Notiz                                           |
|                                                  - Button                                          |
|                                                  - Note + Feedback                                 |
+--------------------------------------------------------------------------------------------------+
| FOOTER (4 Spalten)                                                                               |
| [Brand+Intro] [Shop] [Bestellung] [Credits]                                                      |
| [Meta links]                                                                  [Meta rechts]      |
+--------------------------------------------------------------------------------------------------+
```

### Tablet

```text
+--------------------------------------------------------------------------------------+
| TOPBAR                                                                               |
+--------------------------------------------------------------------------------------+
| HEADER                                                                               |
| [SD Brand + Sole District]                                           [Menue-Button] |
| Nav default: geschlossen                                                               |
| Nav offen:                                                                            |
| [Start]                                                                               |
| [Produkte]                                                                            |
| [Kontakt]                                                                             |
| [Bestellen]                                                                           |
+--------------------------------------------------------------------------------------+
| MAIN (Standard: Mono Court Low)                                                      |
| [Back-Link]                                                                           |
| [Bild-Figure]                                                                         |
| [Detail Panel]                                                                        |
| - Meta / H1 / 3 Chips / Preis / Beschreibung / Quick Facts / 4 Specs                 |
| [Video Panel]                                                                         |
| [Order Form]                                                                          |
| - Form Grid bleibt 2x2                                                                |
| - Danach Lieferadresse, Notiz, Button, Note, Feedback                                |
+--------------------------------------------------------------------------------------+
| FOOTER                                                                                |
| [Brand+Intro]                                                                         |
| [Shop]                                                                                |
| [Bestellung]                                                                          |
| [Credits]                                                                             |
| [Meta links]                                                                          |
| [Meta rechts]                                                                         |
+--------------------------------------------------------------------------------------+
```

### Mobile

```text
+------------------------------------------------------------------------+
| TOPBAR                                                                 |
+------------------------------------------------------------------------+
| HEADER                                                                 |
| [SD Brand]                                              [Menue-Button] |
| Nav default: geschlossen                                               |
| Nav offen: 4 gestapelte Vollbreiten-Links                              |
+------------------------------------------------------------------------+
| MAIN (Standard: Mono Court Low)                                        |
| [Back-Link]                                                            |
| [Bild-Figure]                                                          |
| [Detail Panel]                                                         |
| - Meta                                                                 |
| - H1                                                                   |
| - 3 Chips in Wrap                                                      |
| - Preis                                                                |
| - Beschreibung                                                         |
| - Quick Facts                                                          |
| - 4 Specs                                                              |
| [Video Panel]                                                          |
| [Order Form]                                                           |
| - Groesse                                                              |
| - Menge                                                                |
| - Name                                                                 |
| - E-Mail                                                               |
| - Lieferadresse                                                        |
| - Notiz                                                                |
| - Button                                                               |
| - Note                                                                 |
| - Feedback                                                             |
+------------------------------------------------------------------------+
| FOOTER                                                                 |
| [Brand+Intro]                                                          |
| [Shop]                                                                 |
| [Bestellung]                                                           |
| [Credits]                                                              |
| [Meta links]                                                           |
| [Meta rechts]                                                          |
+------------------------------------------------------------------------+
```

Sonderfall bei ungueltigem `?product=`:

```text
+------------------------------------------------------------------------+
| [Back-Link]                                                            |
| [Fehler-Panel]                                                         |
| - Eyebrow: Produkt nicht gefunden                                      |
| - H1: Dieses Modell existiert nicht mehr.                              |
| - Beschreibung                                                         |
| - Angefragter Produkt-Slug                                             |
| - Button zur Produktuebersicht                                         |
+------------------------------------------------------------------------+
```

## kontakt.html

### Desktop

```text
+--------------------------------------------------------------------------------------------------+
| TOPBAR                                                                                           |
| Fragen zu Bestellung, Retouren, Sizing oder Partnerschaften? Unser Team antwortet direkt.       |
+--------------------------------------------------------------------------------------------------+
| STICKY HEADER                                                                                    |
| [SD Brand + Sole District]                   [Start] [Produkte] [Kontakt] [Anfrage senden]      |
+--------------------------------------------------------------------------------------------------+
| PAGE INTRO (2 Spalten)                                                                           |
| Left: Eyebrow + H1                               | Right: Lead                                    |
+--------------------------------------------------------------------------------------------------+
| TEAM GRID (2 Cards)                                                                              |
| [Fidan Fetahi Card] [Eduart Maliqi Card]                                                         |
+--------------------------------------------------------------------------------------------------+
| CONTACT LAYOUT (2 Spalten)                                                                       |
| [Store Info Card]                                 [Contact Form]                                 |
|                                                   - Form Grid 2x2: Name / E-Mail / Betreff / Tel|
|                                                   - Nachricht                                    |
|                                                   - Button                                       |
|                                                   - Note + Feedback                              |
+--------------------------------------------------------------------------------------------------+
| FOOTER (4 Spalten)                                                                               |
| [Brand+Intro] [Navigation] [Direktkontakt] [Credits]                                             |
| [Meta links]                                                                  [Meta rechts]      |
+--------------------------------------------------------------------------------------------------+
```

### Tablet

```text
+--------------------------------------------------------------------------------------+
| TOPBAR                                                                               |
+--------------------------------------------------------------------------------------+
| HEADER                                                                               |
| [SD Brand + Sole District]                                           [Menue-Button] |
| Nav default: geschlossen                                                               |
| Nav offen:                                                                            |
| [Start]                                                                               |
| [Produkte]                                                                            |
| [Kontakt]                                                                             |
| [Anfrage senden]                                                                      |
+--------------------------------------------------------------------------------------+
| PAGE INTRO                                                                            |
| - Eyebrow                                                                             |
| - H1                                                                                  |
| - Lead                                                                                |
+--------------------------------------------------------------------------------------+
| TEAM GRID                                                                             |
| [Fidan Fetahi Card] [Eduart Maliqi Card]                                             |
+--------------------------------------------------------------------------------------+
| CONTACT LAYOUT                                                                        |
| [Store Info Card]                                                                     |
| [Contact Form]                                                                        |
| - Form Grid bleibt 2x2                                                                |
| - Nachricht / Button / Note / Feedback                                                |
+--------------------------------------------------------------------------------------+
| FOOTER                                                                                |
| [Brand+Intro]                                                                         |
| [Navigation]                                                                          |
| [Direktkontakt]                                                                       |
| [Credits]                                                                             |
| [Meta links]                                                                          |
| [Meta rechts]                                                                         |
+--------------------------------------------------------------------------------------+
```

### Mobile

```text
+------------------------------------------------------------------------+
| TOPBAR                                                                 |
+------------------------------------------------------------------------+
| HEADER                                                                 |
| [SD Brand]                                              [Menue-Button] |
| Nav default: geschlossen                                               |
| Nav offen: 4 gestapelte Vollbreiten-Links                              |
+------------------------------------------------------------------------+
| PAGE INTRO                                                             |
| - Eyebrow                                                              |
| - H1                                                                   |
| - Lead                                                                 |
+------------------------------------------------------------------------+
| TEAM GRID                                                              |
| [Fidan Fetahi Card]                                                    |
| [Eduart Maliqi Card]                                                   |
+------------------------------------------------------------------------+
| CONTACT LAYOUT                                                         |
| [Store Info Card]                                                      |
| [Contact Form]                                                         |
| - Name                                                                 |
| - E-Mail                                                               |
| - Betreff                                                              |
| - Telefonnummer                                                        |
| - Nachricht                                                            |
| - Button                                                               |
| - Note                                                                 |
| - Feedback                                                             |
+------------------------------------------------------------------------+
| FOOTER                                                                 |
| [Brand+Intro]                                                          |
| [Navigation]                                                           |
| [Direktkontakt]                                                        |
| [Credits]                                                              |
| [Meta links]                                                           |
| [Meta rechts]                                                          |
+------------------------------------------------------------------------+
```

## Webshop.html

Diese Datei ist keine eigene gestaltete Seite, sondern nur ein Redirect.

```text
+--------------------------------------------------------------+
| META REFRESH -> index.html                                    |
| Fallback im Body: "Weiter zur Startseite." + Link             |
+--------------------------------------------------------------+
```
