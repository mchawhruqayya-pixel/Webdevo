import { restaurantRow, restaurantModal } from './components.js';
import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';

const tableBody = document.querySelector('#restaurant-list tbody');
const modal = document.querySelector('#restaurant-modal');
const modalContent = document.querySelector('#modal-content');

const createTable = (restaurants) => {
  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      try {
        const menu = await fetchData(
          `${baseUrl}/restaurants/daily/${restaurant._id}/fi`,
        );
        modalContent.innerHTML = restaurantModal(restaurant, menu);
        modal.showModal();
      } catch (error) {
        console.log(error.message);
      }
    });

    tableBody.appendChild(row);
  });
};

const getRestaurants = async () => {
  try {
    const restaurants = await fetchData(`${baseUrl}/restaurants`);
    createTable(restaurants);
  } catch (error) {
    console.log(error.message);
  }
};

getRestaurants();
