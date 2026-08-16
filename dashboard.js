async function getCurrentUser() {
    var username = document.getElementById("studentName")
    var studentEmail = document.getElementById("studentEmail")
    var stdImage = document.getElementById("stdImage")
    var userId = localStorage.getItem("loginUser")
   
    await firebase.database().ref("user").child(userId)
        .get()
        .then((db) => {
            console.log(db.val())
            username.innerText += db.val()["name"]
            studentEmail.innerText=db.val()["email"]
            stdImage.src=db.val()["image"]

            new QRCode(document.getElementById("qrcode"),{
                text:JSON.stringify({
                    name :db.val()["name"],
                    email:db.val()["email"],

                }),
                width:75,
                heigth:75
            })

        

        })
}

// a=>97
// A=>65

getCurrentUser()