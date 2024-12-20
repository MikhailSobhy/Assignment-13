import { Ui } from "./ui.js";
export let all = document.querySelector(".all");
export let allContainer = document.querySelector(".games .row");
export let allDetails = document.querySelector(".game-all-details");
export let allDetailsData = document.querySelector(".game-all-details .row");
export let closeBtn = document.querySelector(".game-all-details .header i");
export let loader = document.querySelector(".loader-container");
export const mmorpgCat = document.querySelector(".links .mmorpg");
const shooterCat = document.querySelector(".links .shooter");
const sailingCat = document.querySelector(".links .sailing");
const permadeathCat = document.querySelector(".links .permadeath");
const superheroCat = document.querySelector(".links .superhero");
const pixelCat = document.querySelector(".links .pixel");

let display = new Ui();

mmorpgCat.addEventListener("click", function (e) {
  e.preventDefault();
  display.displayGames(mmorpgCat.innerHTML);
  mmorpgCat.classList.add("active");
  shooterCat.classList.remove("active");
  sailingCat.classList.remove("active");
  permadeathCat.classList.remove("active");
  superheroCat.classList.remove("active");
  pixelCat.classList.remove("active");
});
shooterCat.addEventListener("click", function (e) {
  e.preventDefault();
  display.displayGames(shooterCat.innerHTML);
  mmorpgCat.classList.remove("active");
  shooterCat.classList.add("active");
  sailingCat.classList.remove("active");
  permadeathCat.classList.remove("active");
  superheroCat.classList.remove("active");
  pixelCat.classList.remove("active");
});
sailingCat.addEventListener("click", function (e) {
  e.preventDefault();
  display.displayGames(sailingCat.innerHTML);
  mmorpgCat.classList.remove("active");
  shooterCat.classList.remove("active");
  sailingCat.classList.add("active");
  permadeathCat.classList.remove("active");
  superheroCat.classList.remove("active");
  pixelCat.classList.remove("active");
});
permadeathCat.addEventListener("click", function (e) {
  e.preventDefault();
  display.displayGames(permadeathCat.innerHTML);
  mmorpgCat.classList.remove("active");
  shooterCat.classList.remove("active");
  sailingCat.classList.remove("active");
  permadeathCat.classList.add("active");
  superheroCat.classList.remove("active");
  pixelCat.classList.remove("active");
});
superheroCat.addEventListener("click", function (e) {
  e.preventDefault();
  display.displayGames(superheroCat.innerHTML);
  mmorpgCat.classList.remove("active");
  shooterCat.classList.remove("active");
  sailingCat.classList.remove("active");
  permadeathCat.classList.remove("active");
  superheroCat.classList.add("active");
  pixelCat.classList.remove("active");
});
pixelCat.addEventListener("click", function (e) {
  e.preventDefault();
  display.displayGames(pixelCat.innerHTML);
  mmorpgCat.classList.remove("active");
  shooterCat.classList.remove("active");
  sailingCat.classList.remove("active");
  permadeathCat.classList.remove("active");
  superheroCat.classList.remove("active");
  pixelCat.classList.add("active");
});

const game = document.querySelector(".games .row");

game.addEventListener("click", function (e) {
  all.classList.add("d-none");
  allDetails.classList.remove("d-none");
  let gameId = e.target.closest(".game").querySelector(".id-none").innerHTML;
  display.displayDetails(gameId);
});
