"use strict";

const sounds = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

const createDiv = (text) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = text;
  div.id = text;
  document.getElementById("container").appendChild(div);
};

const show = (sounds) => Object.keys(sounds).forEach(createDiv);

const playSound = (letter) => {
  const audio = new Audio(`./sounds/${sounds[letter]}`);
  audio.play();
};

const addEffect = (letter) => {
  document.getElementById(letter).classList.add("active");
};

const removeEffect = (letter) => {
  document.getElementById(letter).classList.remove("active");
};

const executeDiv = (event) => {
  const letter =
    event.type == "click" ? event.target.id : event.key.toUpperCase();

  const hasLetter = sounds.hasOwnProperty(letter);
  if (hasLetter) {
    addEffect(letter);
    playSound(letter);
    setTimeout(function () {
      document.getElementById(letter).classList.remove("active");
    }, 400);
  }
};

document.getElementById("container").addEventListener("click", executeDiv);

window.addEventListener("keyup", executeDiv);

show(sounds);
