const searchForEl = document.querySelector(".search");

searchForEl.search.addEventListener("input", () => {
  const searchValue = searchForEl.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitle = document.querySelectorAll(".cards__title");
  cardsTitle.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem(i).style.display = "block";
    } else {
      cardsItem(i).style.display = "none";
    }
  });
});
