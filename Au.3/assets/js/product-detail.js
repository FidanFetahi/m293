(() => {
  const root = document.querySelector('#product-detail-root');

  if (!root) {
    return;
  }

  const products = {
    'mono-court-low': {
      name: 'Mono Court Low',
      category: 'Street',
      drop: 'Drop 03',
      badge: 'Bestseller',
      price: 'CHF 159.00',
      colorway: 'Monochrome Black / White',
      stock: 'Sofort lieferbar',
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      imageSrc: 'https://unsplash.com/photos/QbDe8JxtUp0/download?force=true&w=1800',
      imageAlt: 'Schwarz-weisser Sneaker im Profil vor hellem Hintergrund.',
      imagePage: 'https://unsplash.com/photos/QbDe8JxtUp0',
      videoId: 'tBaGgxXgSrw',
      summary: 'Cleanes Low-Top mit kontrastreichem Blocking und griffiger Cupsole.',
      description: 'Mono Court Low ist der Daily Pairing-Sneaker für reduzierte Fits. Die Silhouette bleibt ruhig, die Sohle stabil und das Farbsetup lässt sich mit Denim, Workwear und Tailoring kombinieren.',
      specs: [
        'Glattes Obermaterial mit verstärkter Toebox',
        'Gepolsterter Collar für lange Tage in der Stadt',
        'Cupsole mit sicherem Grip auf Asphalt und Beton',
        'Ideal für Alltag, Travel und Office-to-Street Looks'
      ]
    },
    'crimson-flight-high': {
      name: 'Crimson Court',
      category: 'Limited',
      drop: 'Heat Capsule',
      badge: 'Low Stock',
      price: 'CHF 189.00',
      colorway: 'Crimson / White',
      stock: 'Nur noch 4 Paare',
      sizes: ['40', '41', '42', '43', '44', '45'],
      imageSrc: 'https://unsplash.com/photos/WlDNoK28rtc/download?force=true&w=1800',
      imageAlt: 'Ein Paar rote und weisse Sneaker auf hellem Hintergrund.',
      imagePage: 'https://unsplash.com/photos/WlDNoK28rtc',
      videoId: 'Cp_bI7SEIxU',
      summary: 'Statement Pair mit hellem Hintergrund, klarem Rotton und sauberer Studio-Wirkung.',
      description: 'Crimson Court setzt auf eine klare Studio-Präsenz mit rotem Upper und sauberem Weissanteil. Das Modell wirkt reduzierter als zuvor und passt besser zu auffälligen Streetwear-Fits mit hellerem Gesamtbild.',
      specs: [
        'Saubere Court-Silhouette mit klarer Studio-Präsenz',
        'Roter Upper mit heller Basis für mehr Kontrast',
        'Stabiler Grip für Stadt, Events und Weekend Rotation',
        'Geeignet für auffällige Fits mit hellerem Gesamtlook'
      ]
    },
    'graphite-pulse': {
      name: 'Graphite Pulse',
      category: 'Performance',
      drop: 'Spring Motion',
      badge: 'Neu',
      price: 'CHF 169.00',
      colorway: 'Grey / White',
      stock: 'Sofort lieferbar',
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      imageSrc: 'https://unsplash.com/photos/PHJr-VdFO2o/download?force=true&w=1800',
      imageAlt: 'Grauer Sneaker mit schwarzer Sohle auf heller Fläche.',
      imagePage: 'https://unsplash.com/photos/PHJr-VdFO2o',
      videoId: 'oeO2B357Ra0',
      summary: 'Dämpfungsstarker Runner für lange Wege, Pendeln und leichte Sessions.',
      description: 'Graphite Pulse ist auf Komfort und ruhige Performance ausgelegt. Die Form rollt weich ab, bleibt im Look aber clean genug für Alltag, Pendeln und moderne Techwear-Kombinationen.',
      specs: [
        'Leichte Performance-Sohle mit softer Dämpfung',
        'Atmungsaktives Mesh-Obermaterial',
        'Zuglasche für schnelles On-and-Off',
        'Stark für lange Tage und leichte Trainingseinheiten'
      ]
    },
    'terrace-cream': {
      name: 'Terrace Cream',
      category: 'Terrace',
      drop: 'Club Pack',
      badge: 'Editor Pick',
      price: 'CHF 149.00',
      colorway: 'Cream / Gum',
      stock: 'Sofort lieferbar',
      sizes: ['38', '39', '40', '41', '42', '43', '44'],
      imageSrc: 'https://unsplash.com/photos/VJIL_YZrpyQ/download?force=true&w=1800',
      imageAlt: 'Heller Low-Top Sneaker mit klarer Seitenansicht.',
      imagePage: 'https://unsplash.com/photos/VJIL_YZrpyQ',
      videoId: '-V58DKa_tmA',
      summary: 'Schmale Terrace-Silhouette mit cleaner Linie und smarter Vintage-Wirkung.',
      description: 'Terrace Cream bringt den klassischen Terrace-Ansatz in eine ruhige, tragbare Farbwelt. Die Silhouette ist schmal, direkt und wirkt mit Gum-Sohle besonders stark zu Denim, Chinos und Knitwear.',
      specs: [
        'Schlanke Terrace-Form mit flachem Aufbau',
        'Gum Outsole für klassischen Terrace-Charakter',
        'Ruhige Farbgebung für vielseitige Kombinationen',
        'Ideal für Alltag, Reisen und Matchday-Looks'
      ]
    },
    'canvas-rise-offwhite': {
      name: 'Canvas Rise Offwhite',
      category: 'Retro',
      drop: 'Core Rotation',
      badge: 'Classic',
      price: 'CHF 129.00',
      colorway: 'Offwhite',
      stock: 'Sofort lieferbar',
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      imageSrc: 'https://unsplash.com/photos/p-Ry6cqLt8g/download?force=true&w=1800',
      imageAlt: 'Weisser High-Top Sneaker auf neutralem Hintergrund.',
      imagePage: 'https://unsplash.com/photos/p-Ry6cqLt8g',
      videoId: '_7ReXdauz8w',
      summary: 'Zeitloser High-Top mit Canvas-Look und rauer Vintage-Attitude.',
      description: 'Canvas Rise Offwhite lebt von einer reduzierten Retro-Sprache und einem hellen, unkomplizierten Look. Das Modell passt gut in minimalistische Rotationen und funktioniert stark mit cleanen Layering-Fits.',
      specs: [
        'Canvas-inspiriertes Obermaterial mit leichter Struktur',
        'High-Top Collar für klassischen Retro-Stand',
        'Offwhite-Finish für weiche Vintage-Wirkung',
        'Einfach kombinierbar mit Denim und Workwear'
      ]
    },
    'nightshift-high': {
      name: 'Nightshift High',
      category: 'Retro',
      drop: 'Core Rotation',
      badge: 'Staff Pick',
      price: 'CHF 135.00',
      colorway: 'Black / White',
      stock: 'Sofort lieferbar',
      sizes: ['40', '41', '42', '43', '44', '45'],
      imageSrc: 'https://unsplash.com/photos/nEyC-cooHTc/download?force=true&w=1800',
      imageAlt: 'Schwarz-weisser High-Top Sneaker auf dunklem Stoffuntergrund.',
      imagePage: 'https://unsplash.com/photos/nEyC-cooHTc',
      videoId: 'Qadabc0hq-U',
      summary: 'Dunkle High-Top Interpretation für monochrome Outfits und Abendlooks.',
      description: 'Nightshift High ist das passende Pair für dunklere Rotationen und saubere monochrome Fits. Die klassische High-Top-Höhe trifft auf ein reduziertes Schwarz-Weiss-Setup mit klarem Street-Appeal.',
      specs: [
        'Klassischer High-Top Aufbau mit festem Halt',
        'Monochromes Farbsetup für cleane Kombinationen',
        'Robuste Sohle für täglichen Einsatz',
        'Stark für Abendlooks und dunkle Fits'
      ]
    },
    'grey-day-runner': {
      name: 'Grey Day Runner',
      category: 'Performance',
      drop: 'Motion Archive',
      badge: 'Comfort',
      price: 'CHF 179.00',
      colorway: 'Grey / Silver',
      stock: 'Sofort lieferbar',
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      imageSrc: 'https://unsplash.com/photos/tgdgb6yb0Qo/download?force=true&w=1800',
      imageAlt: 'Grauer Running-Sneaker auf neutralem Hintergrund.',
      imagePage: 'https://unsplash.com/photos/tgdgb6yb0Qo',
      videoId: 'oeO2B357Ra0',
      summary: 'Komfortfokussierter Runner mit ruhiger Farbwelt und softer Abrollbewegung.',
      description: 'Grey Day Runner liefert den ruhigsten Performance-Look in der Rotation. Die Silhouette bleibt technisch, wirkt aber nicht laut und ist damit stark für Alltag, Travel und lange City-Tage.',
      specs: [
        'Performance-Dämpfung für lange Strecken',
        'Silberne Details für dezente Technik-Optik',
        'Leichtes Upper mit guter Belüftung',
        'Entspannt für Alltag, Commute und Wochenenden'
      ]
    },
    'citrus-sprint': {
      name: 'Citrus Sprint',
      category: 'Street',
      drop: 'Summer Signal',
      badge: 'Fresh Colorway',
      price: 'CHF 165.00',
      colorway: 'Orange / White / Black',
      stock: 'Sofort lieferbar',
      sizes: ['39', '40', '41', '42', '43', '44'],
      imageSrc: 'https://unsplash.com/photos/1vHAP0oeUQE/download?force=true&w=1800',
      imageAlt: 'Ein Paar orangefarbene Sneaker komplett auf farbigem Hintergrund.',
      imagePage: 'https://unsplash.com/photos/1vHAP0oeUQE',
      videoId: 't4ZfRsUl9KA',
      summary: 'Street Pair mit lautem Farbakzent und sportlicher Grundform.',
      description: 'Citrus Sprint bringt klare Sommerenergie in die Rotation. Das Modell lebt vom orangen Signalton, bleibt aber durch die schwarze und weisse Basis tragbar für tägliche Streetwear-Kombinationen.',
      specs: [
        'Sportliche Grundform mit dynamischer Linienführung',
        'Starker Farbkontrast für auffällige Fits',
        'Leichte Polsterung für Alltag und City-Wear',
        'Ideal für Frühling, Sommer und Festival-Looks'
      ]
    },
    'jade-one': {
      name: 'Jade One',
      category: 'Limited',
      drop: 'Collector Room',
      badge: 'Collector Pair',
      price: 'CHF 199.00',
      colorway: 'Teal / White / Black',
      stock: 'Nur noch 2 Paare',
      sizes: ['40', '41', '42', '43', '44'],
      imageSrc: 'https://unsplash.com/photos/kKObh7tUPNc/download?force=true&w=1800',
      imageAlt: 'Türkiser High-Top Sneaker in Nahaufnahme.',
      imagePage: 'https://unsplash.com/photos/kKObh7tUPNc',
      videoId: '-Wo_zltHEGY',
      summary: 'Sammlerorientierter High-Top mit kühler Jadefarbe und klarer Kante.',
      description: 'Jade One ist auf Aufmerksamkeit und Sammlerwert ausgelegt. Die kühle Farbwelt, der hohe Schnitt und die kleine Verfügbarkeit machen das Paar zum klaren Limited-Highlight im Sortiment.',
      specs: [
        'High-Top mit markanter Farbdominanz',
        'Teal-Ton als Sammler-Statement',
        'Kleine Verfügbarkeit für exklusive Rotation',
        'Gemacht für Collector-Fits und Display-Shelf'
      ]
    },
    'studio-white-high': {
      name: 'Studio White High',
      category: 'Retro',
      drop: 'Studio Line',
      badge: 'Clean Staple',
      price: 'CHF 139.00',
      colorway: 'White',
      stock: 'Sofort lieferbar',
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      imageSrc: 'https://unsplash.com/photos/B6LFgATILWI/download?force=true&w=1800',
      imageAlt: 'Weisser High-Top Sneaker freigestellt auf hellem Hintergrund.',
      imagePage: 'https://unsplash.com/photos/B6LFgATILWI',
      videoId: 'RRTDd7l5TlY',
      summary: 'Heller High-Top als ruhiges Grundmodell für minimalistische Rotationen.',
      description: 'Studio White High ist das cleane Basis-Paar für reduzierte Outfits. Die helle Farbwelt hält sich zurück, während die High-Top-Form trotzdem genug Haltung für eine komplette Rotation liefert.',
      specs: [
        'Klares White-on-White Erscheinungsbild',
        'High-Top Shape für klassischen Stand',
        'Vielseitig für reduzierte und helle Fits',
        'Stark als Daily Pair über mehrere Saisons'
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('product');
  const hasRequestedSlug = typeof slug === 'string' && slug.length > 0;
  const hasValidSlug = hasRequestedSlug && Boolean(products[slug]);
  const resolvedSlug = hasValidSlug ? slug : 'mono-court-low';
  const product = products[resolvedSlug];

  if (hasRequestedSlug && !hasValidSlug) {
    document.title = 'Sole District | Produkt nicht gefunden';

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', 'Die angeforderte Produktseite konnte nicht gefunden werden.');
    }

    root.innerHTML = `
      <section class='section container'>
        <a class='back-link' href='produkte.html'>&larr; Zur&uuml;ck zur &Uuml;bersicht</a>
        <article class='detail-panel'>
          <p class='eyebrow'>Produkt nicht gefunden</p>
          <h1>Dieses Modell existiert nicht mehr.</h1>
          <p class='detail-description'>
            Der Link ist ung&uuml;ltig oder das Produkt wurde aus dem Sortiment entfernt.
          </p>
          <p class='caption'>Angefragter Produkt-Slug: ${slug}</p>
          <a class='button button-primary' href='produkte.html'>Zur Produkt&uuml;bersicht</a>
        </article>
      </section>
    `;

    return;
  }

  document.title = `Sole District | ${product.name}`;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', `${product.name} mit Preis, Bildern, Quick Facts und Bestellmöglichkeit.`);
  }

  const sizeOptions = product.sizes
    .map((size) => `<option value='${size}'>${size}</option>`)
    .join('');

  const specItems = product.specs
    .map((spec) => `<li>${spec}</li>`)
    .join('');

  root.innerHTML = `
    <section class='section container'>
      <a class='back-link' href='produkte.html'>&larr; Zur&uuml;ck zur &Uuml;bersicht</a>
      <div class='detail-layout'>
        <section class='detail-hero'>
          <div class='detail-media'>
            <figure>
              <img src='${product.imageSrc}' alt='${product.imageAlt}'>
              <figcaption class='detail-credit'>
                Bildquelle:
                <a class='inline-link' href='${product.imagePage}' target='_blank' rel='noopener noreferrer'>Unsplash ansehen</a>
              </figcaption>
            </figure>
          </div>
          <article class='detail-panel'>
            <p class='meta-label'>${product.category} &middot; ${product.drop}</p>
            <h1>${product.name}</h1>
            <div class='detail-badges'>
              <span class='chip'>${product.badge}</span>
              <span class='chip'>${product.colorway}</span>
              <span class='chip'>${product.stock}</span>
            </div>
            <p class='detail-price'>${product.price}</p>
            <p class='detail-description'>${product.description}</p>
            <div class='order-summary'>
              <strong>Quick Facts</strong>
              <span>Release: ${product.drop}</span>
              <span>Farbe: ${product.colorway}</span>
              <span>Grössen: ${product.sizes.join(' / ')}</span>
            </div>
            <ul class='spec-list'>
              ${specItems}
            </ul>
          </article>
        </section>

        <section class='detail-secondary'>
          <article class='detail-panel'>
            <p class='eyebrow'>Video</p>
            <h2>On-foot und Styling Eindruck</h2>
            <div class='video-frame'>
              <iframe
                src='https://www.youtube.com/embed/${product.videoId}?rel=0'
                title='${product.name} Styling Clip'
                loading='lazy'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen>
              </iframe>
            </div>
            <p class='caption'>${product.summary}</p>
          </article>

          <form id='order-panel' class='order-panel order-form' data-api-form='order' action='https://formspree.io/f/xeevqowb' method='POST'>
            <p class='eyebrow'>Bestellformular</p>
            <h2>${product.name} direkt anfragen</h2>
            <p class='detail-description'>W&auml;hle deine Angaben und sende deine Anfrage direkt an unser Team.</p>
            <input type='hidden' name='formType' value='Bestellung'>
            <input type='hidden' name='productName' value='${product.name}'>
            <input type='hidden' name='productSlug' value='${resolvedSlug}'>
            <input type='hidden' name='_subject' value='Neue Bestellung für ${product.name}'>
              <div class='form-grid'>
                <label>
                  Grösse
                  <select name='size' required>
                    <option value=''>Bitte wählen</option>
                    ${sizeOptions}
                  </select>
                </label>
                <label>
                  Menge
                  <input type='number' name='quantity' min='1' max='3' value='1' required>
                </label>
                <label>
                  Name
                  <input type='text' name='name' placeholder='Vorname Nachname' autocomplete='name' required>
                </label>
                <label>
                  E-Mail
                  <input type='email' name='email' placeholder='name@example.com' autocomplete='email' required>
                </label>
              </div>
              <label>
                Lieferadresse
                <input type='text' name='address' placeholder='Strasse, PLZ, Ort' autocomplete='street-address' required>
              </label>
              <label>
                Notiz
                <textarea name='note' rows='4' placeholder='Zum Beispiel Wunsch zur Lieferung oder Fragen zur Passform'></textarea>
              </label>
              <button class='button button-primary' type='submit'>Bestellung direkt senden</button>
              <p class='form-note'>Deine Bestellung wird direkt an unser Team übermittelt.</p>
              <p class='form-feedback' aria-live='polite'></p>
          </form>
        </section>
      </div>
    </section>
  `;

  if (window.dispatchEvent) {
    window.dispatchEvent(new CustomEvent('sole-district:detail-rendered'));
  }
})();
