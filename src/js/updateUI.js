const cardsEl = document.querySelector('.cards')

export const createCountries = (countries) => {
  countries.forEach((country) => {
    console.log(country);
    const commonName = country.name.common;
    const population = country.population;
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "No Capital";
    const flag = country.flags.svg;

    const li = document.createElement("li");
    li.classList.add(".cards__item");
    li.innerHTML = `
    <a href="./about.html">
        <img
          src=${flag}
          alt="germany-flag"
          width="267"
          height="160"
        />
        <div class="cards__item-inner">
          <h3 class="cards__title">${commonName}</h3>
          <p class="population">${population}<span>81,770,900</span></p>
          <p class="region">${region} <span>Europe</span></p>
          <p class="capital">${capital}<span>Berlin</span></p>
        </div>
      </a>
      `;

      cardsEl.appendChild(li);
  });
};
