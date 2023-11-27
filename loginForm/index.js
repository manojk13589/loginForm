let correctDetails = false
let userName = "Manoj123"
let passWord = "Man123"
let uName = document.getElementById("u1")
let pWord = document.getElementById("p1")
let messageEl = document.getElementById("message-el")
let message = ""
function login(){
    if(uName.value === userName && pWord.value === passWord){
        correctDetails = true
        message = "Welcome Choddu"
        window.location.href="logedIn.html"
        console.log("condition met")
    }
    else{
        console.log("error but works fine")
        message = "incorrect username or password"
    }
    messageEl.textContent = message
}
function signUp(){
    window.location.href = "signUp.html"
}