const express=require("express")

const supabase=require("./supabase")

const app=express()

app.use(express.json())

app.post("/schedule",async(req,res)=>{

const {phone,time,description}=req.body

await supabase
.from("calls")
.insert([{phone,time,description}])

res.json({status:"scheduled"})

})

app.listen(3000)
