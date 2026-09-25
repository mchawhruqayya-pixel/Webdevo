import { listAllCats, findCatById, addCat } from '../models/cat-model.js';

const getCats = (req, res) => {
  res.json(listAllCats());
};

const getCat = (req, res) => {
  const cat = findCatById(req.params.id);
  if (!cat) {
    return res.status(404).json({ message: 'Cat not found' });
  }
  res.json(cat);
};

const postCat = (req, res) => {
  const newCat = req.body;
  addCat(newCat);
  res.status(201).json(newCat);
};

const putCat = (req, res) => {
  res.json({ message: 'Cat item updated.' });
};

const deleteCat = (req, res) => {
  res.json({ message: 'Cat item deleted.' });
};

export { getCats, getCat, postCat, putCat, deleteCat };
