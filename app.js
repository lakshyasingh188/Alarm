const SUPABASE_URL="https://sozdibpjfbjypzndoeyz.supabase.co"

const SUPABASE_KEY="YOUR_ANON_KEY"

const supabase = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)

async function signup(){

const email=document.getElementById("email").value
const password=document.getElementById("password").value

const {data,error}=await supabase.auth.signUp({

email:email,
password:password

})

if(error){

alert(error.message)

}else{

alert("Signup successful")

window.location="index.html"

}

}

async function login(){

const email=document.getElementById("email").value
const password=document.getElementById("password").value

const {data,error}=await supabase.auth.signInWithPassword({

email:email,
password:password

})

if(error){

alert(error.message)

}else{

window.location="dashboard.html"

}

}

async function logout(){

await supabase.auth.signOut()

window.location="index.html"

}

async function checkUser(){

const {data}=await supabase.auth.getUser()

if(!data.user){

window.location="index.html"

}

}
