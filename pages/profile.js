const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const activeBar = document.getElementById("active-bar");

// Fonction de mise à jour de la barre rouge et du contenu
function activateTab(tabName, button) {
  tabButtons.forEach((btn) => btn.classList.remove("active-tab"));
  tabContents.forEach((content) => content.classList.add("hidden"));
  button.classList.add("active-tab");
  document.getElementById(tabName).classList.remove("hidden");

  // Déplacer la barre rouge sous le bouton actif
  const rect = button.getBoundingClientRect();
  const containerRect = button.parentElement.getBoundingClientRect();
  activeBar.style.width = `${rect.width}px`;
  activeBar.style.left = `${rect.left - containerRect.left}px`;
}

// Initialisation
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-tab");
    activateTab(tabName, button);
  });
});

// Position initiale de la barre
window.addEventListener("load", () => {
  const active = document.querySelector(".active-tab");
  const rect = active.getBoundingClientRect();
  const containerRect = active.parentElement.getBoundingClientRect();
  activeBar.style.width = `${rect.width}px`;
  activeBar.style.left = `${rect.left - containerRect.left}px`;
});
