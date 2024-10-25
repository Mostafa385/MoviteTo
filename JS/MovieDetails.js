getMovieDetails();

async function getMovieDetails() {
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE4YzY1NWE3MTJhY2I1NTJiMDIwMDllNzA3ODhhMiIsIm5iZiI6MTcyOTA2NzE5NS4zMjkxNjYsInN1YiI6IjY3MGNlYjM5MWNhNGMzOWZkZWViOGUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g2Fk11USk67ixsP7PqYN8Jd9Rkm76aib1pgxkloMPT4",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const data = await response.json();
    displayMovie(data);
    fetchMovieCredits(movieId);
  } catch (error) {}
}

function displayMovie(movie) {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  const titleElement = document.getElementById("movie-title");
  const posterElement = document.getElementById("movie-poster");
  const overviewElement = document.getElementById("movie-overview");

  titleElement.innerText = movie.original_title;
  posterElement.src = `${imgURL}${movie.poster_path}`;
  overviewElement.innerText = movie.overview;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE4YzY1NWE3MTJhY2I1NTJiMDIwMDllNzA3ODhhMiIsIm5iZiI6MTcyOTA2NzE5NS4zMjkxNjYsInN1YiI6IjY3MGNlYjM5MWNhNGMzOWZkZWViOGUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g2Fk11USk67ixsP7PqYN8Jd9Rkm76aib1pgxkloMPT4",
  },
};

async function fetchMovieCredits(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    const data = await response.json();
    displayCast(data.cast);
  } catch (err) {
    console.error("Error fetching movie credits:", err);
  }
}

function displayCast(cast) {
  const castContainer = document.getElementById("castContainer");
  castContainer.innerHTML = "";

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  castContainer.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        max-width: 1000px; /* Adjust max-width to better fit 3 columns */
        gap: 80px;
    `;

  for (const actor of cast) {
    const actorElement = document.createElement("div");
    actorElement.classList.add("actor");
    actorElement.style.cssText = `
            display: flex;
            align-items: center;
            width: 15rem;
            margin-bottom: 20px;
        `;

    const actorImage = document.createElement("img");
    actorImage.src = actor.profile_path
      ? `${baseImageUrl}${actor.profile_path}`
      : "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"; // Default image if no profile_path
    actorImage.style.cssText = `
            width: 100px;
            height: 100px;
            margin-right: 10px;
            border-radius: 50%;
        `;

    const actorInfo = document.createElement("div");
    actorInfo.innerHTML = `<h5> ${actor.name}</h5> <i>${actor.character}</i>`;

    actorElement.appendChild(actorImage);
    actorElement.appendChild(actorInfo);
    castContainer.appendChild(actorElement);
  }
}

const css = document.getElementById("css");
const storedTheme = localStorage.getItem("theme");

css.href = `${
  storedTheme == "light" ? "style/css2light.css" : "style/css2.css"
}`;

const star = document.getElementById("fav");
var count = localStorage.getItem("movieCount")
  ? parseInt(localStorage.getItem("movieCount"))
  : 0;
star.addEventListener("click", (e) => {
  count++;
  const title = document.getElementById("movie-title").innerText;
  const posterPath = document.getElementById("movie-poster").src;
  const movieData = {
    title: title,
    poster: posterPath,
  };
  window.localStorage.setItem(`movie ${count}`, JSON.stringify(movieData));
  window.localStorage.setItem("movieCount", count.toString());
});
