const SUPABASE_URL="https://sozdibpjfbjypzndoeyz.supabase.co"

const SUPABASE_KEY="YOUR_SUPABASE_ANON_KEY"

const { createClient } = supabase

const client=createClient(SUPABASE_URL,SUPABASE_KEY)

async function sendOTP(){

const phone=document.getElementById("phone").value

const {error}=await client.auth.signInWithOtp({

phone:phone

})

if(error){

alert(error.message)

}else{

alert("OTP Sent")

}

}

async function verifyOTP(){

const phone=document.getElementById("phone").value
const otp=document.getElementById("otp").value

const {error}=await client.auth.verifyOtp({

phone:phone,

token:otp,

type:"sms"

})

if(error){

alert(error.message)

}else{

alert("Login Success")

localStorage.setItem("phone",phone)

window.location="dashboard.html"

}

}

async function createCall(){

const phone=localStorage.getItem("phone")

const time=document.getElementById("time").value

const description=document.getElementById("description").value

await fetch("https://YOUR_BACKEND_URL/schedule",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

phone:phone,

time:time,

description:description

})

})

alert("Call Scheduled")

}
