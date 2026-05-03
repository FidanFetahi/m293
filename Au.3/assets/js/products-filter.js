(() => {
  const filterButtons = Array.from(document.querySelectorAll('.filter-actions .filter-button'));
  const productCards = Array.from(document.querySelectorAll('.product-grid .product-card'));
  const resultsCount = document.querySelector('.results-bar p');

  if (!filterButtons.length || !productCards.length || !resultsCount) {
    return;
  }

  const normalize = (value) => value.trim().toLowerCase();

  const getCategoryFromCard = (card) => {
    const meta = card.querySelector('.product-meta')?.textContent ?? '';
    return meta.split('·')[0].trim();
  };

  const hashToCategory = {
    '#street': 'Street',
    '#retro': 'Retro',
    '#performance': 'Performance',
    '#terrace': 'Terrace',
    '#limited': 'Limited',
    '#drops': 'Alle'
  };

  const setActiveButton = (category) => {
    filterButtons.forEach((button) => {
      button.classList.toggle('is-active', normalize(button.textContent) === normalize(category));
    });
  };

  const updateResults = (count, category) => {
    const suffix = count === 1 ? '' : 'e';
    resultsCount.textContent = category === 'Alle'
      ? `${count} Produkt${suffix}`
      : `${count} Produkt${suffix} in ${category}`;
  };

  const applyFilter = (category) => {
    let visibleCount = 0;

    productCards.forEach((card) => {
      const matches = category === 'Alle' || normalize(getCategoryFromCard(card)) === normalize(category);
      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;
      }
    });

    setActiveButton(category);
    updateResults(visibleCount, category);
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const category = button.textContent.trim();
      const targetHash = button.getAttribute('href') || '#drops';

      applyFilter(category);
      window.history.replaceState({}, '', targetHash);
    });
  });

  const initialCategory = hashToCategory[window.location.hash] || 'Alle';
  applyFilter(initialCategory);
})();
