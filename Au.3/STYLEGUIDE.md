# Sole District - Styleguide

Stand: 2026-04-29

Dieser Styleguide ist gegen die echten Dateien verifiziert:
- `assets/css/styles.css`
- `index.html`
- `produkte.html`
- `detail.html`
- `kontakt.html`

Wichtig:
- Dieser Guide beschreibt die aktuelle Implementierung, nicht eine Wunschversion.
- Pixelwerte unten setzen den Browser-Standard von `1rem = 16px` voraus, weil im Projekt kein eigener Root-Font-Size gesetzt wird.

## Typografie

### Schriftfamilien

Geladen über Google Fonts:

- `Antonio`: Gewichte `400`, `600`, `700`
- `Space Grotesk`: Gewichte `400`, `500`, `700`

Verwendung:

- `Space Grotesk, sans-serif`
  - Standard für Body-Text
  - Navigation
  - Buttons
  - Formulare
  - Fliesstext
- `Antonio, sans-serif`
  - `h1`, `h2`, `h3`
  - Brand-Marke `SD`
  - Brand-Name
  - grosse Zahlen in den Hero-Stats
  - Preis auf der Detailseite

### Globale Textregeln

#### Body-Text

- Font: `Space Grotesk`
- Farbe: `var(--ink)` = `#121212`
- `p` hat `line-height: 1.7`
- Links erben standardmässig die aktuelle Textfarbe

#### Headings

`h1`, `h2`, `h3` teilen dieselben Grundregeln:

- Font: `Antonio`
- `line-height: 0.95`
- `letter-spacing: 0.02em`
- `text-transform: uppercase`
- `margin: 0`

### Schriftgrössen und Rollen

| Rolle | CSS | Desktop 1440 | Tablet 834 | Mobile 390 | Verwendung |
|---|---|---:|---:|---:|---|
| `h1` | `clamp(3.2rem, 8vw, 5.9rem)` und bei `<=720px` `clamp(2.7rem, 15vw, 4rem)` | `94.4px` | `66.72px` | `58.5px` | Haupttitel |
| `h2` | `clamp(2rem, 4vw, 3.1rem)` und bei `<=720px` `clamp(1.7rem, 10vw, 2.4rem)` | `49.6px` | `33.36px` | `38.4px` | Abschnittstitel |
| `h3` | `1.15rem` | `18.4px` | `18.4px` | `18.4px` | kleine Titel |
| Produktkarten-`h3` | `1.45rem` | `23.2px` | `23.2px` | `23.2px` | Produktname in Karten |
| Detailpreis | `clamp(2rem, 4vw, 3rem)` | `48px` | `33.36px` | `32px` | Preis auf Detailseite |
| `detail-panel h2`, `order-panel h2` | `clamp(1.6rem, 3vw, 2.35rem)` | `37.6px` | `25.6px` | `25.6px` | Untertitel auf Detailseite |
| Lead | `1.08rem` | `17.28px` | `17.28px` | `17.28px` | Intro-Text |
| Topbar | `0.92rem`, bei `<=720px` `0.84rem` | `14.72px` | `14.72px` | `13.44px` | Infoband oben |
| Brand-Mark `SD` | `1.4rem` | `22.4px` | `22.4px` | `22.4px` | Markenkürzel |
| Brand-Name | `1.4rem` | `22.4px` | `22.4px` | `22.4px` | `Sole District` |
| Brand-Unterzeile | `0.9rem`, bei `<=720px` `0.84rem` | `14.4px` | `14.4px` | `13.44px` | `Curated Sneaker Boutique` |
| Eyebrow | `0.88rem` | `14.08px` | `14.08px` | `14.08px` | kleine Akzent-Überschrift |
| Meta-Label | `0.86rem` | `13.76px` | `13.76px` | `13.76px` | Produktmeta, Teamrolle |
| Kategorie-Label | `0.85rem` | `13.6px` | `13.6px` | `13.6px` | `Street`, `Retro` usw. |
| Product Badge | `0.75rem` | `12px` | `12px` | `12px` | Badge auf Produktbild |
| Product Copy | `0.96rem` | `15.36px` | `15.36px` | `15.36px` | Kurzbeschreibung in Karten |
| Chip | `0.83rem` | `13.28px` | `13.28px` | `13.28px` | Pillen/Chips |
| Caption / Form Note / Results / Credit | `0.94rem` | `15.04px` | `15.04px` | `15.04px` | Hilfs- und Sekundärtext |
| Hero Stat Number | `1.8rem` | `28.8px` | `28.8px` | `28.8px` | Kennzahlen |
| Hero Stat Label | `0.95rem` | `15.2px` | `15.2px` | `15.2px` | Kennzahlen-Beschriftung |
| Nav Toggle Label | `0.92rem` | `14.72px` | `14.72px` | `14.72px` | `Menü` |

### Schriftgewichte und Letter-Spacing

| Rolle | Gewicht | Letter-Spacing | Text-Transform |
|---|---:|---:|---|
| `h1`, `h2`, `h3` | browser-default für Headings, Font `Antonio` | `0.02em` | uppercase |
| Brand-Name `strong` | `700` | `0.08em` | uppercase |
| Brand-Mark `SD` | normal | `0.08em` | keine eigene Regel |
| Eyebrow | `700` | `0.18em` | uppercase |
| Meta-Label | `700` | `0.12em` | uppercase |
| Kategorie-Label | `700` | `0.14em` | uppercase |
| Product Badge | `700` | `0.08em` | uppercase |
| Nav Toggle Label | `700` | `0.08em` | uppercase |
| Label im Formular | `500` | keine eigene Regel | normal |
| Price Tag | `700` | keine eigene Regel | normal |
| Inline-Link | `700` | keine eigene Regel | normal |

### Typografische Verwendung nach Bauteil

#### Brand

- `SD`-Marke:
  - `Antonio`
  - `1.4rem`
  - helle Schrift auf dunklem Quadrat
- `Sole District`:
  - `Antonio`
  - `1.4rem`
  - `700`
  - uppercase
- Unterzeile:
  - `Space Grotesk`
  - `0.9rem`, mobil `0.84rem`
  - `var(--muted)`

#### Hauptnavigation

- normale Links:
  - `Space Grotesk`
  - Farbe `var(--muted)`
- Hover und aktiver Link:
  - Hintergrund `rgba(18, 18, 18, 0.06)`
  - Text `var(--ink)`
- CTA-Link:
  - Hintergrund `var(--surface-dark)`
  - Text `var(--bg-strong)`
  - Hover: `var(--accent)` auf `var(--surface-dark)`

#### Abschnittseinstiege

- Eyebrow:
  - `0.88rem`
  - orange
  - uppercase
  - starkes Letter-Spacing
- Lead:
  - `1.08rem`
  - `var(--muted)`
  - `max-width: 62ch`

#### Produktkarte

- Meta:
  - `0.86rem`
  - uppercase
  - `var(--muted)`
- Produktname:
  - `1.45rem`
  - `Antonio`
- Preis:
  - `var(--accent)`
  - `700`
- Copy:
  - `0.96rem`
  - `var(--muted)`
- Badge:
  - `0.75rem`
  - uppercase
  - dunkler Hintergrund, helle Schrift
- Chips:
  - `0.83rem`
  - helle Fläche mit feiner Border

#### Detailseite

- Produktname:
  - `h1`
- Preis:
  - `Antonio`
  - `clamp(2rem, 4vw, 3rem)`
  - orange
- Beschreibung:
  - `var(--muted)`
- Quick Facts und Spec-Liste:
  - normale Body-Typografie

## Farben

### Primäre Farb-Tokens

| Token | Wert | Verwendung |
|---|---|---|
| `--bg` | `#f5efe4` | Grundton des Layouts, Header-Tint |
| `--bg-strong` | `#fffdf8` | sehr helle Flächen, Text auf dunklen Flächen |
| `--surface` | `rgba(255, 252, 246, 0.86)` | Standard-Panel-Hintergrund |
| `--surface-dark` | `#151515` | dunkle CTA-Flächen, Brand-Marke |
| `--ink` | `#121212` | Haupttextfarbe |
| `--muted` | `#625e58` | Sekundärtext |
| `--line` | `rgba(18, 18, 18, 0.1)` | Standard-Border |
| `--accent` | `#ff6a00` | Hauptakzent, Preise, Eyebrows, Hover |
| `--accent-soft` | `#ffd8bd` | warme Akzentflächen und Tints |
| `--highlight` | `#d5ff6e` | Lime-Akzent auf dunklen Flächen |

### Zusätzliche feste Farben

| Wert | Verwendung |
|---|---|
| `#000` | Video-Frame Hintergrund |
| `#1a7f37` | Erfolgsstatus in Formularen |
| `#b42318` | Fehlerstatus in Formularen |
| `#f9f3e7` | Body-Gradient Start |
| `#f4ede0` | Body-Gradient Mitte |
| `#efe8dd` | Body-Gradient Ende |
| `rgba(44, 44, 44, 0.92)` | dunkler Gradient-Endwert in `editorial-card-dark` |

### Farbverwendung im Interface

#### Textfarben

- Primärer Fliesstext: `var(--ink)` = `#121212`
- Sekundärtext:
  - `var(--muted)` = `#625e58`
  - genutzt für Lead-nahe Inhalte, Meta, Footertexte, Captions, Notes
- Helle Schrift auf dunklen Flächen:
  - `var(--bg-strong)` = `#fffdf8`

#### Akzentfarben

- Hauptakzent Orange:
  - `var(--accent)` = `#ff6a00`
  - für Eyebrows, Preise, CTA-Hover, Bullets in Listen
- Soft-Orange:
  - `var(--accent-soft)` = `#ffd8bd`
  - für sanfte Hervorhebungen, Tints und Hintergrundmischungen
- Lime-Highlight:
  - `var(--highlight)` = `#d5ff6e`
  - gezielt in dunklen Bereichen

#### Borders

- Standard-Border:
  - `var(--line)` = `rgba(18, 18, 18, 0.1)`
- Input-Border:
  - `rgba(18, 18, 18, 0.12)`
- Chip-Border:
  - `rgba(18, 18, 18, 0.08)`
- Empty-State gestrichelt:
  - `rgba(18, 18, 18, 0.16)`
- Fokus-Ring:
  - `outline: 2px solid rgba(255, 106, 0, 0.25)`
  - `border-color: rgba(255, 106, 0, 0.45)`

### Hintergründe und Gradient-System

#### Seitenhintergrund

`body` kombiniert 3 Ebenen:

1. `radial-gradient(circle at top left, rgba(255, 106, 0, 0.18), transparent 30%)`
2. `radial-gradient(circle at top right, rgba(213, 255, 110, 0.2), transparent 28%)`
3. `linear-gradient(180deg, #f9f3e7 0%, #f4ede0 55%, #efe8dd 100%)`

Zusatzoverlay:

- festes Grid-Muster über `body::before`
- Linienfarbe `rgba(18, 18, 18, 0.03)`
- Raster `36px x 36px`
- `opacity: 0.35`

#### Oberflächen

| Bauteil | Hintergrund |
|---|---|
| Header | `rgba(245, 239, 228, 0.82)` mit `backdrop-filter: blur(18px)` |
| Topbar | `rgba(255, 255, 255, 0.55)` |
| Standard-Panels | `var(--surface)` |
| Mobile-Nav Panel | `rgba(255, 252, 246, 0.96)` |
| Button Secondary | `rgba(255, 255, 255, 0.55)` |
| Filter Button | `rgba(255, 255, 255, 0.72)` |
| Chip | `rgba(255, 255, 255, 0.65)` |
| Input / Select / Textarea | `rgba(255, 255, 255, 0.86)` |
| Footer | `rgba(255, 255, 255, 0.52)` |
| Empty State | `rgba(255, 255, 255, 0.5)` |

#### Spezifische Verläufe

| Bauteil | Gradient |
|---|---|
| Hero Panel | `linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 244, 236, 0.95))` |
| Hero Accent Card | `linear-gradient(145deg, rgba(213, 255, 110, 0.32), rgba(255, 255, 255, 0.8))` |
| Section Contrast | `linear-gradient(180deg, rgba(18, 18, 18, 0.03), rgba(255, 255, 255, 0.22))` |
| Category Card | `linear-gradient(160deg, rgba(255, 255, 255, 0.88), rgba(255, 236, 220, 0.82))` plus `var(--bg-strong)` |
| Editorial Dark Card | `linear-gradient(145deg, rgba(18, 18, 18, 0.95), rgba(44, 44, 44, 0.92))` |
| Product Media | `linear-gradient(180deg, rgba(255, 216, 189, 0.45), rgba(255, 255, 255, 0.4))` |

### Komponenten-Farbregeln

#### Buttons

`button-primary`

- Hintergrund: `var(--surface-dark)`
- Text: `var(--bg-strong)`
- Hover:
  - Hintergrund: `var(--accent)`
  - Text: `var(--surface-dark)`

`button-secondary`

- Border: `var(--line)`
- Hintergrund: `rgba(255, 255, 255, 0.55)`

#### Navigation

Normale Links:

- Text: `var(--muted)`

Aktiv/Hover:

- Hintergrund: `rgba(18, 18, 18, 0.06)`
- Text: `var(--ink)`

CTA:

- Hintergrund: `var(--surface-dark)`
- Text: `var(--bg-strong)`
- Hover:
  - Hintergrund: `var(--accent)`
  - Text: `var(--surface-dark)`

#### Produktkarten

- Card-Fläche:
  - `var(--surface)`
- Bildbereich:
  - warmer Verlauf aus Soft-Orange und Weiss
- Badge:
  - Hintergrund `rgba(18, 18, 18, 0.82)`
  - Text `var(--bg-strong)`
- Preis:
  - `var(--accent)`
- Chips:
  - Hintergrund `rgba(255, 255, 255, 0.65)`
  - Border `rgba(18, 18, 18, 0.08)`

#### Formulare

- Input-Fläche:
  - `rgba(255, 255, 255, 0.86)`
- Input-Text:
  - `var(--ink)`
- Fokus:
  - orange Fokus-Ring und stärkere orange Border
- Erfolg:
  - `#1a7f37`
- Fehler:
  - `#b42318`

## Kurzfazit

Das visuelle System kombiniert:

- warme, cremefarbene Grundflächen
- fast schwarze Typografie für Kontrast
- gedecktes Braun für Sekundärtext
- ein klares Orange als Hauptakzent
- ein limettiges Highlight nur punktuell
- eine klare Trennung zwischen Display-Typografie (`Antonio`) und Lesetypografie (`Space Grotesk`)
