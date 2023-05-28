const router=require('express').Router();
const Reaction=require('./Reaction');
const Thought=require('./Thought');
const User=require('./User');
router.use('/Reaction',Reaction);
router.use('/Thought',Thought);
router.use('/User',User);
module.exports={Reaction,Thought,User};