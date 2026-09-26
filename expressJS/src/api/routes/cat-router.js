import express from 'express';
import multer from 'multer';
import {
  getCats,
  getCat,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

const upload = multer({ dest: 'uploads/' });

const catRouter = express.Router();

catRouter.route('/').get(getCats).post(upload.single('cat'), postCat);
catRouter.route('/:id').get(getCat).put(putCat).delete(deleteCat);

export default catRouter;
