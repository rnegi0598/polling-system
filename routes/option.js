const express=require('express');
const { deleteOption,incrementVote}=require('../controllers/option')
const router=express.Router();

//delete an option
router.delete('/:id/delete',deleteOption);

//increment votes
router.get('/:id/add_vote',incrementVote);



module.exports=router;