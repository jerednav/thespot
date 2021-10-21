const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require('bcrypt')

//Update user
router.put('/:id', async (req,res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
            if(req.body.password){
                try {
                    //Find password, update new password and hash it
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch(err){
                    return res.status(500).json(err)
                }
            }
            try {
                const user = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.status(200).json('Account has been updated')
            } catch(err){
                return res.status(500).json(err)
            }
    } else {
        return res.status(403).json("You can only update your account.")
    }
})


//Delete user
router.delete('/:id', async (req,res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
                try {
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json('Account has been deleted successfully.');
                } catch(err){
                    return res.status(500).json(err);
                }
            } else {
                return res.status(403).json("You can only delete your account.")
    }
})

//Get a user
//Follow a user
//Unfollow a user

module.exports = router;