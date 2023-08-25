const express=require('express');
const {createQuestion,createOption,deleteQuestion,getQuestion} =require('../controllers/question');

const router=express.Router();

//create question
router.post('/create',createQuestion);

//create option for an question
router.post('/:id/options/create',createOption);

//delete a question
router.delete('/:id/delete',deleteQuestion);


//get a question
router.get('/:id',getQuestion);


module.exports=router;