import express from 'express'
import Workers from '../models/Workers.js';


const router = express.Router();

router.post('/workers/save', async (req,res) => {

    const worker = req.body;
    console.log(req);

    const newWorker = new Workers(worker);

    try {
        await newWorker.save();

        res.status(201).json(newWorker);
    } catch (error) {
        res.status(400).json({error:error});
        
    }

});

router.get('/workers', async (req, res) => {
    try {
        const workers = await Workers.find().exec();

        return res.status(200).json({
            success: true,
            existingWorkers: workers
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


export default router;