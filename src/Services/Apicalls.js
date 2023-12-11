const API = "https://api.themoviedb.org/3";

export function get() {
  return fetch(`${API}/discover/movie?api_key=ea370ff11e967f7500ea0c91fdae24e9`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM3MGZmMTFlOTY3Zjc1MDBlYTBjOTFmZGFlMjRlOSIsInN1YiI6IjY1NjcyNjg0MTU2Y2M3MDEyZDU1YTg1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O0jcaXBZlckb-xwGAKzXtc29W41bUQUFGGknHclW5hY",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
