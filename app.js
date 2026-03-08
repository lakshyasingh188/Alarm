const SUPABASE_URL="https://sozdibpjfbjypzndoeyz.supabase.co"

const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvemRpYnBqZmJqeXB6bmRvZXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NDY5NjcsImV4cCI6MjA4ODUyMjk2N30.Vy9cFXM99ZiyB0OuhIEfeiSr6ab1boePlDSFXJKTbM4"

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

window.location.href="dashboard.html"

}

}



async function scheduleCall(){

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
