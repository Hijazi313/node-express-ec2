import express from "express";
const app = express()
const PORT = 3000;


app.get("/",(req,res)=>{
    return res.status(200).json({message:"API is running"})
})

app.get("/ping",(req,res)=>{
    return res.status(200).json({message:"pong"})
})

app.get("/api/users",(req,res)=>{
    return res.status(200).json({
        message:"no user found",
        data:[]
    })
})
app.listen(PORT, ()=>console.info(`App listening on PORT ${PORT}`))