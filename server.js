require("dotenv").config()

const express = require("express")
const supabase = require("./supabase")

const app = express()

app.use(express.json())

app.post("/schedule", async (req,res)=>{

const {phone,time,description} = req.body

const {data,error} = await supabase
.from("calls")
.insert([{phone,time,description}])

if(error) return res.send(error)

res.send("Call Scheduled")

})

app.get("/",(req,res)=>{
res.send("Voice Call API Running")
})

app.listen(3000,()=>{
console.log("Server running")
})
