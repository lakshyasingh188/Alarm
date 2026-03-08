const SUPABASE_URL = "https://sozdibpjfbjypzndoeyz.supabase.co"

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvemRpYnBqZmJqeXB6bmRvZXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NDY5NjcsImV4cCI6MjA4ODUyMjk2N30.Vy9cFXM99ZiyB0OuhIEfeiSr6ab1boePlDSFXJKTbM4"

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

}

}
