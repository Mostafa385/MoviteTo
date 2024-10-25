export function initSearch() {
  const searchInput = document.getElementById("search");
  const sendButton = document.getElementById("send");

  sendButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    searchMovies(query);
  });

  function searchMovies(query) {
    const allMovies = [...document.querySelectorAll(".movie-card")];
    allMovies.forEach((movieCard) => {
      const title = movieCard
        .querySelector(".card-title")
        .innerText.toLowerCase();

      if (title.includes(query)) {
        movieCard.style.display = "";
      } else {
        movieCard.style.display = "none";
      }
    });
  }
}
