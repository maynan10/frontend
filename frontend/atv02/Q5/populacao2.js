const form = document.querySelector('form');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const popA = parseFloat(form.popA.value);
        const taxaA = parseFloat(form.taxaA.value);
        const popB = parseFloat(form.popB.value);
        const taxaB = parseFloat(form.taxaB.value);
        let anos = 0;

        if (popA <= 0 || taxaA <= 0 || popB <= 0 || taxaB <= 0) {
          alert('Os valores informados devem ser maiores que zero.');
          return;
        }

        while (popA < popB) {
          anos++;
          popA *= (1 + taxaA);
          popB *= (1 + taxaB);
        }

        alert(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
        form.reset();
      });