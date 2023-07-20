import express from "express";
const app = express()
const PORT = 3000;


app.get("/",(req,res)=>{
    return res.status(200).json({message:"API is running"})
})
app.listen(PORT, ()=>console.info(`App listening on PORT ${PORT}`))