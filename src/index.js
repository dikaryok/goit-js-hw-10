import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import {
  countryListEl,
  countryIfnoEl,
  markupCountryList,
  markupCountry,
} from './markup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('input#search-box');

inputSearch.addEventListener('input', debounce(inputValue, DEBOUNCE_DELAY));

inputSearch.addEventListener('input', debounce(inputValue, DEBOUNCE_DELAY));

function inputValue(e) {
  let value = e.target.value.trim();
  console.log(' value', value);

  if (value != '') {
    fetchCountries(value)
      .then(response => {
        if (response.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          countryIfnoEl.innerHTML = '';
          countryListEl.innerHTML = '';
        } else if (response.length >= 2 && response.length <= 10) {
          countryIfnoEl.innerHTML = '';
          countryListEl.innerHTML = markupCountryList(response);
        } else if (response.length === 1) {
          countryIfnoEl.innerHTML = markupCountry(response);
          countryListEl.innerHTML = '';
        }
      })
      .catch(error => {
        console.log('fetchCountries -> error', error);
        countryIfnoEl.innerHTML = '';
        countryListEl.innerHTML = '';
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  } else {
    countryIfnoEl.innerHTML = '';
    countryListEl.innerHTML = '';
  }
}
