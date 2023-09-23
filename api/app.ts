import express from 'express';
import * as dotenv from 'dotenv';
import router from './src/router';
import morgan from 'morgan';
import { protect } from './src/middlewares/auth';
import { signup, signin } from './src/handlers/user';
import allowCrossDomain from './src/middlewares/allowCrossDomain';
import cors from 'cors';

dotenv.config()

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(allowCrossDomain);
app.use(cors())

app.get('/', (req, res) => {
    // throw new Error('notok');
    res.status(200);
    res.json({ message: "Home" })
});

// app.use('/api', protect, router);
app.use('/api', router);

app.post('/signup', signup);

app.post('/signin', signin);

app.use((error, req, res, next) => {
    console.log(error);
    res.json({ message: "something went wrong!" })
})

app.listen(3000, () => {
    console.log("Serverin running on: http://localhost:3000");
});

export default app;