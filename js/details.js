import { loader } from "./main.js";
export class details {
  constructor() {}
  async getSpecificGame(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ba98820811msh39f458c4d481181p1c4060jsn2291a474dcc7",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    loader.classList.remove("d-none");
    const response = await fetch(url, options);
    const result = await response.json();
    loader.classList.add("d-none");
    return result;
  }
}
