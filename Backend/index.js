import express from "express";
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import cors from 'cors';


// Import our routers
import MessageRoutes from './routes/MessageRoutes.js';
import ChatRoutes from './routes/ChatRoutes.js';
import UserRoutes from './routes/UserRoutes.js';

const app = express();

// Middleware for parsing request body
app.use(express.json())

app.use(cors());

app.get('/', (req, res) => {
    console.log('Project is working!')
    return res.status(234).send('Welcome to your project!')
})

app.use('/message', MessageRoutes);
app.use('/chats', ChatRoutes);
app.use('/user', UserRoutes);

mongoose
    .connect(mongoDBURL)
    .then( () => {
        console.log('App successfully connected to DB')

        app.listen(PORT, () => {
            console.log("Express app running in port", PORT)
        })
    })
    .catch( ( err ) => {
        console.log(' There has been the following error when trying to connect to MongoDB:', err)
    })

