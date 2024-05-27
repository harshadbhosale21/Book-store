
import { Book } from '../Models/bookModel.js'

export const postBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body


        if (!title) {
            return res.send({ message: 'Title is Required' })
        }
        if (!author) {
            return res.send({ message: 'Title is Required' })
        }
        if (!publishYear) {
            return res.send({ message: 'Title is Required' })
        }

        const newBook = new Book({ title, author, publishYear });
        await newBook.save();
        res.status(201).send({
            message: 'Succesfully Posted A new Book',
            newBook
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error Posting Book'
        })
    }
}

export const getBook = async (req, res) => {
    try {

        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error Fetching requested Book '
        })
    }
}

export const getSingleBook = async (req, res) => {
    try {

        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(400).send({ message: 'No Such Book Available' });
        }

        res.status(201).send({
            message: 'Book fetched Successfully',
            book
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Error Fetching single book'
        })
    }
}

export const updateBook = async (req, res) => {
    try {

        const { title, author, publishYear } = req.body;

        const book = await Book.findByIdAndUpdate(req.params.id);
        if (!book) {
            return res.status(400).send({ message: 'No Such Book Available' });
        }

        if (title) {
            book.title = title;
        }
        if (author) {
            book.author = author;
        }
        if (publishYear) {
            book.publishYear = publishYear;
        }

        await book.save();

        res.status(201).send({
            message: 'Book Updated Successfully',
            book
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error Updating Book'
        })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(400).send({ message: 'No Such Book Available' });
        }

        res.status(201).send({
            message: 'Book Deleted Successfully',
            book
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error Deleting Book'
        })
    }
}