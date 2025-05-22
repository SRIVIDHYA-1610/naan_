const express=require('express');
const {default :mongoose}=require('mongoose');
const port=5001;
const app=express();
const user=require('./Routes/User')

app.use(express.json());
app.listen(port,()=>{
  console.log("server is running on port 5001");
})
app.get('/',(req,res)=>{
  res.send('Hello world');
})
app.use('/user',user)

mongoose .connect('mongodb+srv://vidhiyasri106:srividhya@cluster0.qob5uqv.mongodb.net/GCT?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
  console.log("MongoDB connected");
})
.catch((err)=>{
  console.log('MongoDB connection error:',err);
  
})    