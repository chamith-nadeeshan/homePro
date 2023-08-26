import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

import UserRoutes from './routes/Users.js';
import WorkerRoutes from './routes/Workers.js'

app.use(bodyParser.json());
app.use(cors());


app.use(UserRoutes);
app.use(WorkerRoutes);

const PORT = 3000;
const CONNETION_URL = 'mongodb+srv://homepro:homepro123@cluster0.i26okgm.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNETION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => {
    console.log("DB Connected")
})
.catch((err) => console.log(`DB Connection error`, err))

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})