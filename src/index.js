import "./style.css";

const dropdownContent = document.querySelector(".dropdown-content");
const dropdownButton = document.querySelector(".dropdown-button");

dropdownButton.addEventListener("mouseenter", () => {
  console.log("IS THIS CALLED?");
  dropdownContent.classList.toggle("hidden");
});

dropdownButton.addEventListener("mouseleave", () => {
  console.log("IS THIS CALLED?");
  dropdownContent.classList.toggle("hidden");
});
