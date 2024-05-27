import express from 'express';

import { deleteBook, getBook, getSingleBook, postBook, updateBook } from '../Controller/bookController.js';

const router = express.Router();

router.post('/', postBook);
router.get('/', getBook);
router.get('/:id', getSingleBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;