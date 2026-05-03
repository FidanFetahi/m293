# KI-Dokumentation mit Nutzwertanalyse

## 1. Ausgangslage

Im Rahmen dieses Projekts habe ich KI gezielt eingesetzt, um effizienter zu entwickeln und gleichzeitig mein Wissen zu erweitern. Das Ziel war nicht, die gesamte Arbeit an eine KI abzugeben, sondern KI als Unterstützung für Layout, Codevorschläge, UI-Optimierungen und zum Lernen zu nutzen.

Als Projektgrundlage diente meine Website **"Sole District"**, ein moderner Sneaker-Shop mit Startseite, Produktübersicht, Detailseite und Kontaktbereich. Später wurden die Formulare so erweitert, dass Kontaktanfragen, Bestellungen und Newsletter-Anmeldungen direkt über die Website abgeschickt werden können.

## 2. Eingesetzte KI-Tools

Für die Umsetzung und den Vergleich habe ich zwei verschiedene KI-Tools verwendet:

| KI-Tool | Haupteinsatz | Stärken | Schwächen |
|---|---|---|---|
| **Codex** | Direkte Unterstützung bei Code, Struktur, Überarbeitung und technischer Umsetzung | Sehr stark bei konkreten Codeänderungen, Projektbezug, HTML/CSS/JS-Unterstützung | Weniger geeignet für rein kreative Ideensammlungen ohne technischen Kontext |
| **ChatGPT** | Ideenfindung, Erklärungen, Formulierungen und Alternativen | Gut für Verständnis, Lernhilfe und erste Konzepte | Vorschläge müssen oft noch genauer auf das Projekt angepasst werden |

## 3. Zielgerichteter KI-Einsatz im Projekt

Ich habe die KI nicht zufällig, sondern in klaren Arbeitsschritten eingesetzt.

### 3.1 Layout und Design

Beim Layout habe ich KI genutzt, um Ideen für eine moderne, klare und projekttaugliche Gestaltung zu erhalten. Dabei ging es vor allem um:

- Struktur der Startseite
- Hero-Bereich mit Call-to-Action
- Kartenlayout für Produkte und Kategorien
- Farbkonzept, Abstände und Typografie
- Responsive Verhalten auf kleineren Bildschirmen

Konkrete Ergebnisse im Projekt:

- In `assets/css/styles.css` wurde mit CSS-Variablen ein einheitliches Designsystem aufgebaut.
- Die Kombination aus `Antonio` und `Space Grotesk` sorgt für einen eigenständigen Look.
- Mit Grid-Layouts wurden Produktkarten, Kategorie-Bereiche und Footer übersichtlich gestaltet.
- Media Queries verbessern die Darstellung auf Tablet und Mobile.
- Der Header wurde für kleine Bildschirme mit einem kompakten mobilen Menü optimiert.

### 3.2 Codevorschläge

KI wurde auch eingesetzt, um JavaScript-Logik schneller und sauberer umzusetzen. Dabei habe ich die Vorschläge nicht blind übernommen, sondern geprüft und angepasst.

Beispiele:

- In `assets/js/products-filter.js` wurde eine Filterlogik für Kategorien umgesetzt.
- In `assets/js/product-detail.js` werden Produktdaten dynamisch über URL-Parameter geladen.
- In `assets/js/mobile-nav.js` wurde eine mobile Navigation umgesetzt, die per Button ein- und ausgeklappt werden kann.
- In `assets/js/form-submissions.js` wurde die Formularlogik für Kontakt, Bestellung und Newsletter umgesetzt.
- Die Formulare wurden mit **Formspree** verbunden, damit Übermittlungen direkt online gesendet werden.

Der Vorteil war, dass ich schneller zu funktionierendem Code gekommen bin und gleichzeitig gesehen habe, wie man JavaScript sauber strukturiert, zum Beispiel mit Funktionen, Events, Formularvalidierung und API-Aufrufen.

### 3.3 UI-Optimierungen

Für die UI-Optimierung habe ich KI genutzt, um die Seite benutzerfreundlicher und visuell konsistenter zu machen.

Beispiele:

- Buttons und Navigation wurden klarer hervorgehoben.
- Für Mobile wurde ein kompakter Menü-Button ergänzt, damit mehr Screenfläche für den eigentlichen Inhalt frei bleibt.
- Produktkarten erhielten Hover-Effekte und gut lesbare Preisbereiche.
- Die Detailseite wurde mit Quick Facts, Chips und Video-Bereich informativer gestaltet.
- Formulare wurden so überarbeitet, dass sie direkt auf der Website abgeschickt werden können und sofort Feedback anzeigen.

Dadurch wurde die Website nicht nur funktional, sondern auch optisch besser und angenehmer in der Nutzung.

## 4. Mein Vorgehen

Ich bin beim Einsatz der KI in mehreren Schritten vorgegangen:

1. Ich habe zuerst selbst eine Grundidee für den Webshop und die benötigten Seiten erstellt.
2. Anschliessend habe ich KI verwendet, um Layout-Ideen, passende Strukturen und UI-Verbesserungen zu erhalten.
3. Danach habe ich mit KI-Unterstützung konkrete HTML-, CSS- und JavaScript-Lösungen ausgearbeitet.
4. Im nächsten Schritt habe ich die Formulare von `mailto` auf direktes Absenden über die Website umgestellt.
5. Dafür habe ich mich für **Formspree** entschieden, weil diese Lösung einfacher ist als ein kompletter eigener Mailversand mit Zugangsdaten.
6. Alle Vorschläge wurden manuell geprüft, angepasst und in mein Projekt eingebaut.
7. Zum Schluss habe ich die Ergebnisse getestet und optisch überarbeitet.

Wichtig war dabei, dass ich KI nicht einfach ungeprüft übernommen habe. Ich habe die Vorschläge immer mit meinem Auftrag und meinem Projekt verglichen.

## 5. Nutzwertanalyse

Um die beiden KI-Tools zu vergleichen, habe ich eigene Kriterien definiert und gewichtet. Die Bewertung erfolgt auf einer Skala von **1 bis 5**, wobei **5** den besten Wert darstellt.

### 5.1 Kriterien

| Kriterium | Gewichtung |
|---|---:|
| Qualität der Codevorschläge | 25 % |
| Projektbezug und technische Genauigkeit | 25 % |
| Unterstützung bei Layout und UI | 20 % |
| Lernnutzen und Erklärungen | 15 % |
| Effizienz und Geschwindigkeit | 15 % |

### 5.2 Bewertung

Berechnung: `Gewichtung x Bewertung / 5`

| Kriterium | Gewichtung | Codex | ChatGPT | Nutzwert Codex | Nutzwert ChatGPT |
|---|---:|---:|---:|---:|---:|
| Qualität der Codevorschläge | 25 | 5 | 4 | 25 | 20 |
| Projektbezug und technische Genauigkeit | 25 | 5 | 3 | 25 | 15 |
| Unterstützung bei Layout und UI | 20 | 4 | 4 | 16 | 16 |
| Lernnutzen und Erklärungen | 15 | 4 | 5 | 12 | 15 |
| Effizienz und Geschwindigkeit | 15 | 5 | 4 | 15 | 12 |
| **Gesamt** | **100** |  |  | **93** | **78** |

### 5.3 Ergebnis der Nutzwertanalyse

Die Nutzwertanalyse zeigt, dass **Codex** für dieses Projekt die bessere Wahl war. Der Hauptgrund ist, dass Codex stärker auf konkrete technische Umsetzung ausgerichtet ist und besser bei direktem Arbeiten an HTML-, CSS- und JavaScript-Dateien unterstützt.

**ChatGPT** war trotzdem sehr nützlich, vor allem für:

- Verständniserklärungen
- Formulierungen
- Ideen für Verbesserungen
- alternative Denkansätze

Meine Wahl fiel deshalb auf **Codex als Hauptwerkzeug**, weil dieses Tool für mein Projekt den grössten praktischen Nutzen hatte.

## 6. Was ich durch den KI-Einsatz gelernt habe

Durch die Arbeit mit KI habe ich nicht nur schneller entwickelt, sondern auch fachlich dazugelernt. Besonders hilfreich war:

- bessere Strukturierung von HTML- und CSS-Dateien
- sauberere JavaScript-Logik
- klarere Trennung von Layout, Inhalt und Funktion
- gezielteres Testen von UI-Elementen
- bewusstere Entscheidungen bei Design und Benutzerführung
- bessere Einschätzung, wann ein externer Dienst wie Formspree sinnvoller ist als eine eigene Mail-Lösung

Ich habe gemerkt, dass KI vor allem dann stark ist, wenn man präzise Fragen stellt und den Kontext des Projekts klar beschreibt.

## 7. Was ich in Zukunft besser machen würde

In Zukunft würde ich KI noch strukturierter einsetzen:

- Ich würde meine Prompts noch genauer formulieren, damit die Ergebnisse von Anfang an besser passen.
- Ich würde Zwischenschritte stärker dokumentieren, zum Beispiel welche Prompts gut funktioniert haben.
- Ich würde mehrere Varianten für Layout und UI systematischer vergleichen.
- Ich würde KI früher für Accessibility, Performance und Usability-Checks einsetzen.
- Ich würde die Antworten noch konsequenter kritisch prüfen, bevor ich sie übernehme.
- Ich würde bei Formularen früher entscheiden, ob ein externer Dienst oder ein eigenes Backend besser passt.

Gerade bei Code ist es wichtig, KI nicht als Ersatz für eigenes Denken zu sehen. Der grösste Nutzen entsteht dann, wenn man die Vorschläge versteht, bewertet und passend weiterentwickelt.

## 8. Fazit

KI war in diesem Projekt ein sinnvolles Hilfsmittel, um schneller und effizienter zu arbeiten. Besonders bei Layout, Codevorschlägen, UI-Optimierungen und der Umstellung auf direktes Formular-Absenden brachte der Einsatz einen klaren Mehrwert. Durch den Vergleich von **Codex** und **ChatGPT** wurde deutlich, dass unterschiedliche KI-Tools unterschiedliche Stärken haben.

Für dieses Webprojekt war **Codex** die beste Wahl, weil das Tool sehr praxisnah bei der technischen Umsetzung geholfen hat. **ChatGPT** war dagegen besonders wertvoll als Lern- und Ideenhilfe. Insgesamt hat mir der KI-Einsatz nicht nur Zeit gespart, sondern auch geholfen, mein technisches und gestalterisches Verständnis zu verbessern.

## 9. Technische Umsetzung

Die Website verfügt weiterhin über statische Seiten mit `HTML`, `CSS` und `JavaScript`. Für das direkte Absenden von Formularen wird jetzt **Formspree** verwendet.

### Verwendete Technik

- Frontend: `HTML`, `CSS`, `JavaScript`
- Formularversand: `Formspree`
- Mobile Navigation: eigenes JavaScript
- Produktdaten und Detailansicht: eigenes JavaScript

### Formularlösung

| Bereich | Lösung |
|---|---|
| Kontaktformular | direkte Übermittlung an Formspree |
| Bestellformular | direkte Übermittlung an Formspree |
| Newsletter | direkte Übermittlung an Formspree |

### Hinweis

Damit du E-Mails bekommst, muss dein Formspree-Formular korrekt eingerichtet sein. Im kostenlosen Formspree-Plan erhält nur der Formularempfänger eine Benachrichtigung. Eine automatische Bestätigungs-Mail an den Kunden ist nur mit einem passenden kostenpflichtigen Formspree-Plan möglich.
