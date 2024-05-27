import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        reqiure: true
    },
    author: {
        type: String,
        trim: true,
        reqiure: true
    },
    publishYear: {
        type: Number,
        reqiure: true
    }
},
    { timestamps: true }
);

export const Book = mongoose.model('Book', bookSchema)