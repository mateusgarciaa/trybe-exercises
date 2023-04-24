const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');
const abilities = document.querySelector('#abilities');
const loading = document.querySelector('#loading');
const appearance = document.querySelector('#appearance');

const ACCESS_TOKEN = '6146813548730562';
const BASE_URL = `https://www.superheroapi.com/api.php/${6146813548730562}`;
const MAX_HEROES = 731;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  loading.style.display = 'block'; // Mostrar animação de carregamento

  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;

      const powerstats = data.powerstats;
      const abilitiesList = Object.entries(powerstats)
        .map(([ability, value]) => `<li>${ability}: ${value}</li>`)
        .join('');
        abilities.innerHTML = `<ul class="no-bullet">${abilitiesList}</ul>`;

      const appearanceData = data.appearance;
      const appearanceList = Object.entries(appearanceData)
      .map(([key, value]) => `<li>${key}: ${value}</li>`)
      .join('');
    appearance.innerHTML = `<ul class="no-bullet">${appearanceList}</ul>`;


      loading.style.display = 'none'; // Ocultar animação de carregamento
    })
    .catch((error) => {
      Swal.fire({
        title: 'Herói não encontrado',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      loading.style.display = 'none'; // Ocultar animação de carregamento
    });
});




