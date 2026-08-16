var login = document.getElementById("login")
var email = document.getElementById("email")
var password = document.getElementById("password")

login.addEventListener("click", async function () {

    await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(async (login) => {
            console.log(login.user.uid)
            await firebase.database().ref("user").child(login.user.uid).get()
                .then((db) => {
                    console.log(db.val())
                    localStorage.setItem("loginUser",login.user.uid)
                
                })
                .catch((e) => {
                    console.log(e)
                })
            alert("Login SuccessFully")

            setTimeout(()=>{
                window.location.replace("dashboard.html")
                // window.history.replaceState(null, "", "index.html");
            },2000)

        })
        .catch((err) => {
            alert(err)
        })

})