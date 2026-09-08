async function testFetch() {
  try {
    const response = await fetch(
      'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants',
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Virhe:', error);
  }
}
function renderRestaurants(restaurants) {
  restaurantListElement.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const card = document.createElement('div');
    card.classList.add('restaurant-card');

    const name = document.createElement('h3');
    name.textContent = restaurant.name;
    card.appendChild(name);

    const address = document.createElement('p');
    address.textContent = `${restaurant.address}, ${restaurant.city}`;
    card.appendChild(address);

    card.addEventListener('click', () => {
      openRestaurantModal(restaurant);
    });

    restaurantListElement.appendChild(card);
  });
}
async function openRestaurantModal(restaurant) {
  modalContent.innerHTML = `
    <h2>${restaurant.name}</h2>
    <p>${restaurant.address}, ${restaurant.city}</p>
    <p>Ladataan menua</p>
  `;
  modal.showModal();

  try {
    const response = await fetch(
      `${API_BASE}/restaurants/daily/${restaurant._id}`,
    );

    if (!response.ok) {
      throw new Error(`Menun haku epäonnistui: ${response.status}`);
    }

    const menuData = await response.json();
    renderModalContent(restaurant, menuData);
  } catch (error) {
    console.error('Menun haku epäonnistui:', error);
    modalContent.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>${restaurant.address}, ${restaurant.city}</p>
      <p>Päivän menua ei voitu ladata.</p>
      <button id="close-modal-btn">Sulje</button>
    `;
    document
      .getElementById('close-modal-btn')
      .addEventListener('click', () => modal.close());
  }
}
fetch(
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/6470d391cb12107db6fe24f7/fi',
)
  .then((res) => res.json())
  .then((data) => console.log(data));
testFetch();
