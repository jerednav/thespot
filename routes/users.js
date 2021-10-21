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
router.get('/:id', async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        //Deletes these inside the mongoDB collection when getting user
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other)
    } catch(err){
        res.status(500).json(err)
    }
})

//Follow a user
router.put('/:id/follow', async (req,res) => {
    //Check if the users are the same, If they are, itll give status 500 alert 
    if(req.body.userId !== req.params.id){
        try {
            //find User with id, and current user
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            //if current user is not following user. it will add follower to followers
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({ $push: { followers: req.body.userId }})
                await currentUser.updateOne({ $push: { following: req.params.id }});
                res.status(200).json('User has been followed.')
            } else {
                res.status(403).json('You follow this user already.')
            }

        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You can't follow yourself.")
    }

})

//Unfollow a user
router.put('/:id/unfollow', async (req,res) => {
    //Check if the users are the same, If they are, itll give status 500 alert 
    if(req.body.userId !== req.params.id){
        try {
            //find User with id, and current user
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            //if current user is not following user. it will add follower to followers
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({ $pull: { followers: req.body.userId }})
                await currentUser.updateOne({ $pull: { following: req.params.id }});
                res.status(200).json('User has been unfollowed.')
            } else {
                res.status(403).json('You unfollowed this user already.')
            }

        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You can't unfollow yourself.")
    }

})




module.exports = router;