displayFavorites();
function displayFavorites() {
  const favoritesContainer = document.getElementById("favorites-container");
  favoritesContainer.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("movie ")) {
      const movieData = localStorage.getItem(key);
      if (movieData) {
        const { title, poster } = JSON.parse(movieData);

        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
                    <img src="${poster}" alt="${title} Poster" class="movie-poster" />
                    <h5>${title}</h5>
                    <button class="remove-fav" data-id="${key}">Remove</button>
                `;
        favoritesContainer.appendChild(movieCard);
      }
    }
  }

  const removeButtons = document.querySelectorAll(".remove-fav");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const key = e.target.getAttribute("data-id");
      localStorage.removeItem(key);
      displayFavorites();
    });
  });
}

const x = window.localStorage.getItem("theme");
if (x === "light") {
  document.getElementById("css").href = "style/favLight.css";
  document.getElementsByTagName("body")[0].className = "bg-light";
}
