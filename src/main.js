import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripCostTemplate } from './view/trip-cost.js';
import { createMenuTemplate } from './view/menu.js';
import { createFiltersTemplate } from './view/filters.js';
import { createTripBoardTemplate } from './view/trip-board.js';
import { createEditPointTemplate } from './view/edit-point.js';
import { createNewPointTemplate } from './view/new-point.js';
import { createPointTemplate } from './view/point.js';

const COUNT_POINT = 3;

const Places = {
  BEFOREEND: 'beforeend',
  AFTERBEGIN: 'afterbegin',
};

const render = (container, template, place = Places.BEFOREEND) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.page-header');

const tripMainElement = headerElement.querySelector('.trip-main');
render(tripMainElement, createTripInfoTemplate(), Places.AFTERBEGIN);

const tripInfoElement = tripMainElement.querySelector('.trip-info');
render(tripInfoElement, createTripCostTemplate());

const navigationElement = headerElement.querySelector('.trip-controls__navigation');
render(navigationElement, createMenuTemplate());

const filtersElement = headerElement.querySelector('.trip-controls__filters');
render(filtersElement, createFiltersTemplate());

const mainElement = document.querySelector('.page-main');

const sortElement = mainElement.querySelector('.trip-events');
render(sortElement, createTripBoardTemplate());

const sortListElement = mainElement.querySelector('.trip-events__list');
render(sortListElement, createEditPointTemplate());
render(sortListElement, createNewPointTemplate());

for (let i = 0; i < COUNT_POINT; i++) {
  render(sortListElement, createPointTemplate());
}
