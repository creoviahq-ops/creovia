const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const opportunityCards = document.querySelectorAll(".opportunity-card");

function searchOpportunities() {
  const query = searchInput.value.toLowerCase().trim();

  opportunityCards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (query === "" || text.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

searchButton.addEventListener("click", searchOpportunities);

searchInput.addEventListener("keyup", event => {
  if (event.key === "Enter") {
    searchOpportunities();
  }
});