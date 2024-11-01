const express=require('express');
const app=express();
const userRouter=require('./routes/users.route')
const PORT=3000;

app.use(express.urlencoded({extended:true}))
app.use(userRouter);


app.use((req,res,next)=>{
    res.status(404).json({
        message:"route not found"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})