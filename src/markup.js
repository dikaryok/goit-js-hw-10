// Разметка
const countryListEl = document.querySelector('.country-list');
const countryIfnoEl = document.querySelector('.country-info');

function markupCountryList(countries) {
  return countries
    .map(country => {
      return `<li class="country-list_item">
      <img src="${country.flags.svg} " alt="flag of ${country.name.official}" class="country-list_img" width="50"/>
      <p class="country-list_name">${country.name.official}</p>
    </li>`;
    })
    .join('');
}

function markupCountry(countries) {
  const country = countries[0]; //                  >>>>>>>>>>>>!!!
  return `<div class="country-info__box">
      <img src="${country.flags.svg}" alt="${
    country.name.official
  }" class="country-info_img" width="50"/>
  <p class="country-info_name">${country.name.official}</p>
  </div>
      
      <p class="country-info_item"><span class="country-info__accent">Capital:</span> ${
        country.capital
      }</p>
      <p class="country-info_item"><span class="country-info__accent">Population:</span> ${
        country.population
      }</p>
      <p class="country-info_item"><span class="country-info__accent">Llanguages</span> ${Object.values(
        country.languages
      ).join(', ')}</p>
    `;
}

export { countryListEl, countryIfnoEl, markupCountryList, markupCountry };
