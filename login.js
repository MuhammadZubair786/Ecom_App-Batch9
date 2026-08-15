var login = document.getElementById("login")
var email = document.getElementById("email")
var password = document.getElementById("password")

login.addEventListener("click",async function(){

    await firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((login)=>{
        console.log(login.user.uid)
        alert("Login SuccessFully")

        setTimeout(()=>{
            window.location.replace("index.html")
            // window.history.replaceState(null, "", "index.html");
        },2000)
      
    })
    .catch((err)=>{
        alert(err)
    })

})