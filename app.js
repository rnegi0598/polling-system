const express=require('express')
const bodyParser=require('body-parser');
const questionRoute=require('./routes/question');
const optionRoute=require('./routes/option');
const dbConnect=require('./config/db');
dbConnect();
const app=express();


app.use(bodyParser.urlencoded({extended:false}));

app.use('/questions',questionRoute);
app.use('/options',optionRoute);


app.listen(5173,()=>{
    console.log('server connected at PORT',5173);
})