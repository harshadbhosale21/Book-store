import express from 'express';
import ConnectDB from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { Book } from './Models/bookModel.js'
import router from './Routes/bookRoutes.js';

const app = express();
dotenv.config();

ConnectDB();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welocome</h1>')
});


app.use('/books', router)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})