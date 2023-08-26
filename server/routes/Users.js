import express from 'express'
import Users from '../models/Users.js';


const router = express.Router();

router.get('/', (req,res) =>{
    res.send('this works!')
})

//save items
router.post('/user/save', async (req,res) => {

    const user = req.body;
    console.log(req);

    const newUser = new Users(user);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error:error});
        
    }

});

router.post('/user/login', async (req, res) => {
    try {
        const newUser = new Users(req.body);
        const users = await Users.find().exec();

        const existingUser = users.find(user => user.email === newUser.email && user.password === newUser.password);
        console.log(existingUser)

        return res.status(200).json({
            success: true,
            existingUser: existingUser
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});



export default router;