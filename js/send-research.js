const f = document.getElementById('form-recherche');
const q = document.getElementById('barreRecherche');
const google = 'https://www.google.com/search?q=Amour%3A+';

// Fonction qui tourne dès que quelqu'un presse le bouton de recherche
function submitted(event) {
  event.preventDefault();
  const url = google + '+' + q.value;
  const win = window.open(url, '_top');
  win.focus();
}

f.addEventListener('submit', submitted);