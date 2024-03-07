import express from 'express';
import ChatModel from '../models/ChatModel.js'

const router = express.Router();

// route to generate a new chat
router.get('/', async( req, res) => {
    try{ 
        res.send('This screen will be showing all chat')
    }
    catch(err){
        return res.status(500).send('Failed to retrieve chats from db', {message : err.message})
    }
})

router.post('/new', async (req, res) => {                           // Managed to make the function work
    try {
        if(!req.body.chatName){                                     // We should add a validation for checking the amount of users!
            console.log(req.body)
            return res.send(req.body)
        }
    
        const newChat = {
            chatName: req.body.chatName,
            isGroupChat: req.body.isGroupChat,
            users: req.body.users,
            latestMessage: req.body.latestMessage,
            groupAdmin: req.body.groupAdmin
        }

        const chat = await ChatModel.create(newChat);
        return res.status(201).send(chat);

    } catch(err) {
        console.log('There has been an error in the creation of the chat:', err)
        res.status(500)
    };

    // return res.send(req.body)                   // Want to check if without this the axios works on React frontend later!
})


export default router;