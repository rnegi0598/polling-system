const Option=require('../models/option');


const deleteOption=async (req,res)=>{
    const {id}=req.params;
    const option=await Option.findById(id);
    //check if it has non-zero votes
    if(option.votes!==0){
        return res.json({error:'option cannot be deleted ,it has more than 0 votes'});
    }
    //delete option
    const deletedOption=await Option.deleteOne({_id:id});
    res.json(deletedOption);
}

const incrementVote=async (req,res)=>{
    const {id}=req.params;
    const option=await Option.findById(id);
    option.votes=option.votes+1;
    const updatedOption=await option.save();
    res.json(updatedOption);
}

module.exports={
    deleteOption,incrementVote
}

