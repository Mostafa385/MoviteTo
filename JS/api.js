const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE4YzY1NWE3MTJhY2I1NTJiMDIwMDllNzA3ODhhMiIsIm5iZiI6MTcyOTUzNzA3Ny4wNzEyOTEsInN1YiI6IjY3MGNlYjM5MWNhNGMzOWZkZWViOGUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tXyFltFyQ9nwALCX7sLPp0LTmnOxw4ptlr1-cwFkeGg",
  },
};

export async function getTop() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data1 = await response.json();
    return data1.results;
  } catch (error) {
    console.log("There's an error fetching Top movies: " + error);
  }
}

export async function getData() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("There's an error fetching popular movies: " + error);
  }
}

export async function getTV() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("There's an error fetching TV shows: " + error);
  }
}
