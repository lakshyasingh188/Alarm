const cron=require("node-cron")
const supabase=require("./supabase")
const twilio=require("twilio")

const client=twilio("AC2a8c0137a1beb3c1dae6d56ed2e0519e","2282b73f090920e428536d99b380199f")

cron.schedule("* * * * *",async()=>{

const {data}=await supabase
.from("calls")
.select("*")

const now=new Date()

const time=now.getHours()+":"+now.getMinutes()

data.forEach(call=>{

if(call.time===time){

client.calls.create({

url:"https://handler.twilio.com/twiml/YOUR_TWIML",
to:call.phone,
from:"+15706528097"

})

}

})

})
