const global = {
  currentPage: window.location.pathname,
};

function activeLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

async function displayPopularMovies() {
  const results = await fetchAPIData("movie/popular");
  console.log(results);
}

async function fetchAPIData(endpoint) {
  const API_KEY = "625ace398a15e3f05acb1ebc552d68e8";
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`,
  );
  const data = await response.json();
  console.log(response);
  return data;
}

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie details");
      break;
    case "flixx/tv-details.html":
      console.log("TV details");
      break;
    case "flixx/search.html":
      console.log("Search");
      break;
  }

  activeLink();
}

function test() {
  console.log(window.location.pathname);
}

test();
