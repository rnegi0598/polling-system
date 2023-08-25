const mongoose=require('mongoose');


const optionSchema= new mongoose.Schema({
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    votes:{
        type:Number,
        default:0

    },
    link_to_vote:{
        type:String,
    }

})

module.exports=mongoose.model('Option',optionSchema);