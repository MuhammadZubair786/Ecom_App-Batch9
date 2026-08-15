var signup = document.getElementById("signup")
var email = document.getElementById("email")
var password = document.getElementById("password")
var username = document.getElementById("name")


signup.addEventListener("click", async function(){
    console.log(email.value,password.value) 

   await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((result)=>{
        console.log(result.user.uid) // database id 
        alert("SignUp Successfully")
        firebase.database().ref("user").child(result.user.uid).set({
            email:email.value,
            password:password.value,
            name:username.value
        })
        setTimeout(()=>{
            // window.location.href="login.html"
            window.location.replace("login.html")
        },2000)
    })
    .catch((error)=>{ 
        alert(error)

    })


})