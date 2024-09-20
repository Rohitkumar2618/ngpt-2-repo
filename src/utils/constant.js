export const Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USERAVTAR =
  "https://plus.unsplash.com/premium_photo-1674343963928-d67007d2ae74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8";

export const API_URL = "https://api.themoviedb.org/3/movie/now_playing";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmYxNmFhNDA4MWU4YTlkOGE4NTZmNTg5OWNmY2VkMSIsIm5iZiI6MTcyNjQ2OTIxNy40NDQ4NTgsInN1YiI6IjY0ZTBmNDQ2ZTE5ZGU5MDEzYTI4N2QwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqAOqhkz-vwEXcFW0swOsHd_qy96raxqfsDecQhjsRc",
  },
};

export const API_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";

export const API_TOP_RATED =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200";

export const API_UPCOMING =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GEMINI_API_KEY = "AIzaSyDg4h9HKR8L9q8oUDyWER2GSDqe5J-Wo84";
