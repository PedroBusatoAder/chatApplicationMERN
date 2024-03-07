import express from 'express';

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)

    } 
    catch(err) {
        console.log('There has been an error', err)
    }
})


export default router;