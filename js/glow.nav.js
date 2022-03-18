// -----
// Functions here taken from this CodePen:
// https://codepen.io/pin0s/pen/VwyZjqr
// Plan to rewrite this to jQuery syntax, which I prefer to Vanilla JS.
// -----

const links = document.querySelectorAll("li");
const svgs = document.querySelectorAll("svg");
const border = document.getElementsByClassName("border-effect");

const home = document.getElementById("home-icon");
const explore = document.getElementById("explore-icon");
const messages = document.getElementById("messages-icon");
const profile = document.getElementById("profile-icon");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    switch (link.id) {
      case "home":
        border[0].style.left = "6%";
        removeStyles();
        link.classList.add("active");
        home.classList.add("active-fill");
        break;
      case "explore":
        border[0].style.left = "31%";
        removeStyles();
        link.classList.add("active");
        explore.classList.add("active-fill");
        break;
      case "messages":
        border[0].style.left = "56%";
        removeStyles();
        link.classList.add("active");
        messages.classList.add("active-fill");
        break;
      case "profile":
        border[0].style.left = "81%";
        removeStyles();
        link.classList.add("active");
        profile.classList.add("active-fill");
        break;
    }
  });
});

const removeStyles = () => {
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  svgs.forEach(function (svg) {
    svg.classList.remove("active-fill");
  });
};