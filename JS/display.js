export function display(movies, id, type) {
  const moviesContainer = document.getElementById(id);
  moviesContainer.innerHTML = "";

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  movies.forEach((movie) => {
    const moviePoster = movie.poster_path;

    const rateCircle = document.createElement("div");
    rateCircle.className =
      "rounded-circle opacity-75 bg-warning position-absolute top-0 end-0 p-2 m-2";
    rateCircle.innerText = movie.vote_average.toFixed(1);

    const cardDiv = document.createElement("div");
    cardDiv.className = "card border-1 shadow mb-5 bg-dark rounded movie-card";
    cardDiv.style.width = "18rem";
    cardDiv.style.position = "relative";
    cardDiv.style.overflow = "hidden";

    cardDiv.addEventListener("click", () => {
      window.location.href = `movieDetails.html?id=${movie.id}`;
    });

    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top position-relative";
    cardImg.src = `${baseImageUrl}${moviePoster}`;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body bg-dark text-light";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";

    if (type === "tv") {
      cardTitle.innerText = movie.original_name;
    } else {
      cardTitle.innerText = movie.title;
    }

    const cardDesc = document.createElement("div");
    cardDesc.className = "card-desc text-light p-3";
    cardDesc.innerText = movie.overview;

    moviesContainer.appendChild(cardDiv);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(rateCircle);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardDiv.appendChild(cardDesc);
  });
}
