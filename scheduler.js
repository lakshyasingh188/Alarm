require("dotenv").config()

const cron = require("node-cron")
const supabase = require("./supabase")
const twilio = require("twilio")

const client = twilio(
process.env.TWILIO_ACCOUNT_SID,
process.env.TWILIO_AUTH_TOKEN
)

cron.schedule("* * * * *", async ()=>{

const {data} = await supabase
.from("calls")
.select("*")

const now = new Date()
const currentTime =
now.getHours()+":"+now.getMinutes()

data.forEach(call=>{

if(call.time === currentTime){

client.calls.create({
url:process.env.TWIML_URL,
to:call.phone,
from:process.env.TWILIO_NUMBER
})

}

})

})
