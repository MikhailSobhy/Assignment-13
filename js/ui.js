import {
  allContainer,
  all,
  allDetails,
  allDetailsData,
  closeBtn,
  mmorpgCat,
  loader,
} from "./main.js";
import { details } from "./details.js";

let detailsObject = new details();

export class Ui {
  constructor() {}
  async getGames(cat = "mmorpg") {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
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

  async displayGames(cat) {
    let games = await this.getGames(cat);
    let container = "";
    for (let i = 0; i < games.length; i++) {
      container += `<div class="col-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wrapper">
                    <div class="game">
                        <div class="id-none d-none">${games[i].id}</div>
                        <div class="game-details">
                            <div class="image">
                                <img src="${games[i].thumbnail}">
                            </div>
                            <div class="game-title">
                                <h3>${games[i].title}</h3>
                                <span class="badge">Free</span>
                            </div>
                            <div class="game-info text-center">
                                <p>${games[i].short_description}</p>
                            </div>
                        </div>
                        <div class="game-footer">
                            <span class="badge genre">${games[i].genre}</span>
                            <span class="badge platform">${games[i].platform}</span>
                        </div>
                    </div>
                </div>`;
    }
    allContainer.innerHTML = container;
  }

  async displayDetails(id) {
    let container = "";
    let specificGame = await detailsObject.getSpecificGame(id);
    container = `<div class="col-md-4 information-img">
             <img src="${specificGame.thumbnail}">
         </div>
        <div class="col-md-8 information-text">
             <h3>Title: ${specificGame.title}</h3>
             <p>Category: <span class="badge">${specificGame.genre}</span></p>
             <p>Platform: <span class="badge">${specificGame.platform}</span></p>
             <p>Status: <span class="badge">${specificGame.status}</span></p>
             <p>${specificGame.description}</p>
             <a href="${specificGame.game_url}" class="show-game">Show Game</a>
            </div>`;
    allDetailsData.innerHTML = container;
    closeBtn.addEventListener("click", function () {
      all.classList.remove("d-none");
      allDetails.classList.add("d-none");
    });
  }
}

window.addEventListener("load", () => {
  let defaultDisplay = new Ui();
  defaultDisplay.displayGames();
});
