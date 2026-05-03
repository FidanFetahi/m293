(() => {
  const formConfig = {
    contact: {
      resetOnSuccess: true,
      successMessage: 'Deine Anfrage wurde erfolgreich gesendet.'
    },
    order: {
      resetOnSuccess: true,
      successMessage: 'Deine Bestellung wurde erfolgreich gesendet.'
    },
    newsletter: {
      resetOnSuccess: true,
      successMessage: 'Deine Newsletter-Anmeldung wurde erfolgreich gesendet.'
    }
  };

  function setFeedback(form, message, state) {
    const feedback = form.querySelector('.form-feedback');
    if (!feedback) {
      return;
    }

    feedback.textContent = message;
    feedback.classList.remove('is-success', 'is-error');

    if (state) {
      feedback.classList.add(state);
    }
  }

  function bindForm(form) {
    if (!form || form.dataset.formBound === 'true') {
      return;
    }

    const config = formConfig[form.dataset.apiForm];
    const submitButton = form.querySelector('[type="submit"]');

    if (!config || !submitButton) {
      return;
    }

    form.dataset.formBound = 'true';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const formData = new FormData(form);
      formData.set('page', window.location.href);

      submitButton.disabled = true;
      setFeedback(form, 'Wird gesendet ...');

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const result = await response.json().catch(() => ({
          message: 'Die Serverantwort konnte nicht verarbeitet werden.'
        }));

        if (!response.ok) {
          const errorMessage = Array.isArray(result.errors) && result.errors.length
            ? result.errors.map((entry) => entry.message).join(' ')
            : (result.message || 'Absenden fehlgeschlagen.');

          throw new Error(errorMessage);
        }

        setFeedback(form, config.successMessage, 'is-success');

        if (config.resetOnSuccess) {
          form.reset();
        }
      } catch (error) {
        setFeedback(form, error.message || 'Beim Absenden ist ein Fehler aufgetreten.', 'is-error');
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  function initForms() {
    document.querySelectorAll('[data-api-form]').forEach(bindForm);
  }

  window.addEventListener('sole-district:detail-rendered', initForms);
  initForms();
})();
