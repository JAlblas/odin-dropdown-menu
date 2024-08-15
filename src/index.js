import "./style.css";

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownButton = document.querySelector(".dropdown-button");

dropdownButton.addEventListener("mouseenter", () => {
  console.log("IS THIS CALLED?");
  dropdownContent.classList.toggle("hidden");
});

dropdownMenu.parentElement.addEventListener("mouseleave", () => {
  dropdownContent.classList.toggle("hidden");
});
