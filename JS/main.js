import { getTop, getData, getTV } from "./api.js";
import { display } from "./display.js";
import { lightDark } from "./theme.js";
import { initSearch } from "./search.js";

async function init() {
  const topMovies = await getTop();
  display(topMovies, "Top-container", "movie");

  const popularMovies = await getData();
  display(popularMovies, "movies-container", "movie");

  const topTVShows = await getTV();
  display(topTVShows, "TV-container", "tv");
}

init();
lightDark();
initSearch();
