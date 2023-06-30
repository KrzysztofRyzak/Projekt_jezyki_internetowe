const movies = {
  movies: [
    {
      image: './Assets/moviesImages/FastFurious.jpg',
      name: 'Fast & Furious',
      year: 2003,
      type: 'action',
      ocena: 4.5,
      opis: 'Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu',
    },
    {
      image: './Assets/moviesImages/FastFurious.jpg',
      name: 'Fast & Furious 2',
      year: 2005,
      type: 'kids',
      ocena: 5,
      opis: 'Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu',
    },
    {
      image: './Assets/moviesImages/FastFurious.jpg',
      name: 'Fast & Furious 3',
      year: 2006,
      type: 'horror',
      ocena: 5,
      opis: 'Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu',
    },
    {
      image: './Assets/moviesImages/FastFurious.jpg',
      name: 'Polska',
      year: 966,
      type: 'commedy',
      ocena: 1,
      opis: 'Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu',
    },
    {
      image: './Assets/moviesImages/oppenheimer.jpg',
      name: 'Oppenheimer',
      year: 2023,
      type: 'action',
      ocena: 5,
      opis: 'Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu',
    },
  ],
};
// horror, commedy, kids, action, adventure

let genre = wszystkie;

const showMoviesFunction = () => {
  const moviesContainer = document.getElementById('movies-container');

  movies.movies.forEach((movie) => {
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `
	<div class='card'>
	<h3>${movie.name}</h3>
	<img src=${movie.image} alt='${movie.name}'/>
	<div class='two-in-row'>
	<h4>Rok: ${movie.year}</h4>
	<h4>Ocena: ${movie.ocena}</h4>
	</div>
	<p>${movie.opis}</p>
	</div>
  `;
    moviesContainer.appendChild(movieDiv);
  });
};

showMoviesFunction();

const segregateFunction = (genre) => {
  const moviesContainer = document.getElementById('movies-container');

  moviesContainer.innerHTML = '';

  if (genre === 'wszystkie') {
    movies.movies.forEach((movie) => {
      const movieDiv = document.createElement('div');
      movieDiv.innerHTML = `
		<div class='card'>
		<h3>${movie.name}</h3>
		<img src=${movie.image} alt='${movie.name}'/>
		<div class='two-in-row'>
		<h4>Rok: ${movie.year}</h4>
		<h4>Ocena: ${movie.ocena}</h4>
		</div>
		<p> ${movie.opis}</p>
		</div>
	  `;
      moviesContainer.appendChild(movieDiv);
    });
  } else {
    const filteredMovies = movies.movies.filter((item) => item.type === genre);

    filteredMovies.forEach((item) => {
      const movieDiv = document.createElement('div');
      movieDiv.innerHTML = `
      <div class='card'>
        <h3>${item.name}</h3>
		<img src=${item.image} alt='${item.name}'/>
        <div class='two-in-row'>
          <h4>Rok: ${item.year}</h4>
          <h4>Ocena: ${item.ocena}</h4>
        </div>
        <p> ${item.opis}</p>
      </div>
    `;
      moviesContainer.appendChild(movieDiv);
    });
  }
};

horror.addEventListener('click', function () {
  segregateFunction('horror');
});

action.addEventListener('click', function () {
  segregateFunction('action');
});

adventure.addEventListener('click', function () {
  segregateFunction('adventure');
});

commedy.addEventListener('click', function () {
  segregateFunction('commedy');
});

kids.addEventListener('click', function () {
  segregateFunction('kids');
});

wszystkie.addEventListener('click', function () {
  segregateFunction('wszystkie');
});
