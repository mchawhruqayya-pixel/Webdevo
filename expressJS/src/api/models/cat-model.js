const cats = [
  {
    cat_id: 1,
    name: 'idc',
    birthdate: '2020-05-14',
    weight: 4.2,
    owner: 'Rukaya',
    image: 'https://loremflickr.com/320/240/cat',
  },
];

const listAllCats = () => cats;

const findCatById = (id) => cats.find((cat) => cat.cat_id === Number(id));

const addCat = (cat) => {
  cats.push(cat);
  return cat;
};

export { listAllCats, findCatById, addCat };
