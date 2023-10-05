const languageBlock = document.getElementById("languageBlock");
const langChangeCheckmark = document.getElementById("langChangeCheckmark");
const langChange = document.getElementById("langChange");
const langChangeCheckmarkBlock = document.getElementById(
  "langChangeCheckmarkBlock"
);
const headerStyckerStory = document.getElementById("headerStyckerStory");
const styckerStoryLink = document.getElementById("styckerStoryLink");
const styckerStoryBar = document.querySelectorAll(".bar");
const languageOpenBlock = document.getElementById("languageOpenBlock");

function languageBlockAddClass() {
  languageOpenBlock.style.display = "flex";
  langChangeCheckmark.classList.add("change-checkmark-color");
  langChangeCheckmarkBlock.classList.add("lang-change-checkmark-block");
}

function languageBlockRemoveClass() {
  languageOpenBlock.style.display = "none";
  langChangeCheckmark.classList.remove("change-checkmark-color");
  langChangeCheckmarkBlock.classList.remove("lang-change-checkmark-block");
}

languageBlock.addEventListener("mouseover", languageBlockAddClass);
languageBlock.addEventListener("mouseout", languageBlockRemoveClass);

function headerStyckerStoryAddClass() {
  styckerStoryLink.classList.add("change-color-stycker-story-link");
  styckerStoryBar.forEach((barChange) => {
    barChange.classList.add("change-backgound-stycker-story-bar");
  });
}

function headerStyckerStoryRemoveClass() {
  styckerStoryLink.classList.remove("change-color-stycker-story-link");
  styckerStoryBar.forEach((barChange) => {
    barChange.classList.remove("change-backgound-stycker-story-bar");
  });
}

headerStyckerStory.addEventListener("mouseover", headerStyckerStoryAddClass);
headerStyckerStory.addEventListener("mouseout", headerStyckerStoryRemoveClass);

// console.log(styckerStoryBar);

// slider
// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//     // autoplay: {
//     //     delay: 2000,
//     // },
//     // effect: 'cards',

// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'horizantal',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
  autoplay: {
    delay: 3000,
  },
  effect: "cards",
  grabCursor: true,
});
