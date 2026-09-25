const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;

  let menuHtml = '<ul>';
  courses.forEach((course) => {
    const { name: courseName, price, diets } = course;
    const priceText = price ? price : '?€';
    const dietText = diets ? diets : '';
    menuHtml += `<li>${courseName}, ${priceText}. ${dietText}</li>`;
  });
  menuHtml += '</ul>';

  const html = `
    <h1>${name}</h1>
    <p>${address}</p>
    <p>${postalCode}, ${city}</p>
    <p>${phone}</p>
    <p>${company}</p>
    ${menuHtml}
    <form method="dialog">
      <button>Close</button>
    </form>
  `;
  return html;
};

export { restaurantRow, restaurantModal };
