var container = document.getElementById("container")
var TotalQuestion = document.getElementById("TotalQuestion")
var MainCard = document.getElementById("MainCard")
var result = document.getElementById("result")
var timer = document.getElementById("timer")

var QuizData = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        type: "radio",
        correctOptions: "Hyper Text Markup Language"
    },
    {
        question: "Which are heading tags in HTML?",
        options: ["<h1>", "<h2>", "<p>", "<div>"],
        type: "checkbox",
        correctOptions: ["<h1>", "<h2>"]
    },
    {
        question: "2 + 2 × 2 = ?",
        options: ["6", "8", "4", "2"],
        type: "radio",
        correctOptions: "6"
    },
    // {
    //     question: "Which tag is used to create a paragraph?",
    //     options: ["<p>", "<h1>", "<div>", "<br>"],
    //     type: "radio",
    //     correctOptions: "<p>"
    // },
    // {
    //     question: "Which are JavaScript data types?",
    //     options: ["String", "Number", "Boolean", "Heading"],
    //     type: "checkbox",
    //     correctOptions: ["String", "Number", "Boolean"]
    // },
    // {
    //     question: "Which symbol is used for comments in JavaScript (single line)?",
    //     options: ["//", "<!-- -->", "/* */", "#"],
    //     type: "radio",
    //     correctOptions: "//"
    // },
    // {
    //     question: "Which methods are used to display output in JavaScript?",
    //     options: ["alert()", "console.log()", "document.write()", "printText()"],
    //     type: "checkbox",
    //     correctOptions: ["alert()", "console.log()", "document.write()"]
    // },
    // {
    //     question: "Which HTML tag is used to insert an image?",
    //     options: ["<img>", "<image>", "<src>", "<picture>"],
    //     type: "radio",
    //     correctOptions: "<img>"
    // },
    // {
    //     question: "Which are looping statements in JavaScript?",
    //     options: ["for", "while", "if", "do...while"],
    //     type: "checkbox",
    //     correctOptions: ["for", "while", "do...while"]
    // },
    // {
    //     question: "Which keyword is used to declare a variable in JavaScript?",
    //     options: ["var", "int", "string", "define"],
    //     type: "radio",
    //     correctOptions: "var"
    // }
];


var index = 0;
var score = 0;
var correctAnswer = 0;

var min = 1
var second = 5;
var timer1 =setInterval(() => {
    if (second > 0) {
        second--;
    }
    else if (second == 0 && min!=0) {
        min = min - 1
         second=5
        if(min==0){  
            second = 0
        }
       
      
    }
    else if (second == 0 && min == 0) {

        clearInterval(timer1)

        MainCard.style.display = "none"
        MainCard.style.display = "none";
        result.style.display = "block";

        var percentage = ((score / QuizData.length) * 100).toFixed(0);

        result.innerHTML = `
    <h1>🎉 Quiz Result</h1>

    <div class="score">${percentage}%</div>

    <div class="box">
        <span>Total Questions</span>
        <strong>${QuizData.length}</strong>
    </div>

    <div class="box">
        <span>Correct Answers</span>
        <strong>${score}</strong>
    </div>

    <div class="box">
        <span>Wrong Answers</span>
        <strong>${QuizData.length - score}</strong>
    </div>

    <div class="box">
        <span>Your Percentage</span>
        <strong>${percentage}%</strong>
    </div>

    <button onclick="location.reload()">Try Again</button>
`;
    }
     timer.innerText = min + ":" + second
  
}, 1000)



// 15second







function showQuizQuestion() {
    TotalQuestion.innerText = `${(index + 1)} Question of ${QuizData.length}`

    console.log(score)
    container.innerHTML = ""

    var ul = document.createElement("ul")
    var h1 = document.createElement("h1")

    h1.innerText = (index + 1) + ")" + QuizData[index].question
    if (QuizData[index].type == "radio") {

        for (var i = 0; i < QuizData[index].options.length; i++) {
            var li = document.createElement("li")
            var inp = document.createElement("input")
            inp.type = "radio"
            // inp.setAttribute("required",true)
            inp.setAttribute("id", `option${i}`)
            inp.setAttribute("name", "Quiz")
            inp.setAttribute("value", QuizData[index].options[i])
            var label = document.createElement("label")
            label.innerText = QuizData[index].options[i]
            label.setAttribute("for", `option${i}`)

            li.appendChild(inp)
            li.appendChild(label)
            ul.appendChild(li)

        }


    }

    else if (QuizData[index].type == "checkbox") {

        for (var i = 0; i < QuizData[index].options.length; i++) {
            var li = document.createElement("li")
            var inp = document.createElement("input")
            inp.type = "checkbox"
            inp.setAttribute("id", `option${i}`)
            inp.setAttribute("name", "Quiz")
            inp.setAttribute("value", QuizData[index].options[i])
            var label = document.createElement("label")
            label.innerText = QuizData[index].options[i]
            label.setAttribute("for", `option${i}`)

            li.appendChild(inp)
            li.appendChild(label)
            ul.appendChild(li)

        }


    }

    var div = document.createElement("div")
    div.setAttribute("id", "btn1")
    var button = document.createElement("button")
    button.disabled = true
    button.style.backgroundColor = "grey"


    if (QuizData.length - 1 == index) {
        button.innerText = "Submit"
        button.setAttribute("onclick", "submit()")


    }
    else {
        button.innerText = "Next"
        button.setAttribute("onclick", "ShowNext()")
    }
    div.appendChild(button)

    container.append(h1, ul, div)

    var input = document.getElementsByTagName("input")
    var btn1 = document.getElementById("btn1")

    for (var i = 0; i < input.length; i++) {
        console.log(input[i])
        input[i].addEventListener("change", function (e) {
            console.log(e.target.checked)



            if (e.target.checked == true) {
                if (btn1.childNodes[0].disabled == true) {
                    btn1.childNodes[0].disabled = !btn1.childNodes[0].disabled
                    btn1.childNodes[0].style.backgroundColor = "blue"
                }
            }
            else {
                btn1.childNodes[0].disabled = !btn1.childNodes[0].disabled

                btn1.childNodes[0].style.backgroundColor = "grey"
            }


        })
    }




}


function ShowNext() {
    var liItems = container.childNodes[1].childNodes
    var check = false;
    for (var i = 0; i < liItems.length; i++) {

        if (QuizData[index].type == "radio") {
            if (liItems[i].childNodes[0].checked == true) {
                check = true
                if (QuizData[index].correctOptions == liItems[i].childNodes[0].value) {
                    score += 1;
                }
                break;
            }
        }
        else if (QuizData[index].type == "checkbox") {
            var givenScore = 1 / QuizData[index].correctOptions.length
            if (liItems[i].childNodes[0].checked == true) {
                check = true
                var checkAnswer = QuizData[index].correctOptions.indexOf(liItems[i].childNodes[0].value)
                if (checkAnswer != -1) {
                    score += givenScore



                }
                if (checkAnswer == -1) {
                    score -= givenScore

                }


            }



        }


    }

    if (check == true) {
        index = index + 1
        showQuizQuestion()
    }
    else {
        alert("bhai 1 select kar")
    }
}

function submit() {

    var liItems = container.childNodes[1].childNodes
    var check = false;
    for (var i = 0; i < liItems.length; i++) {
        if (QuizData[index].type == "radio") {
            if (liItems[i].childNodes[0].checked == true) {
                check = true
                if (QuizData[index].correctOptions == liItems[i].childNodes[0].value) {
                    score += 1;
                }
                break;
            }
        }
        else if (QuizData[index].type == "checkbox") {
            var givenScore = 1 / QuizData[index].correctOptions.length
            if (liItems[i].childNodes[0].checked == true) {
                check = true
                var checkAnswer = QuizData[index].correctOptions.indexOf(liItems[i].childNodes[0].value)
                if (checkAnswer != -1) {
                    score += givenScore


                }
                if (checkAnswer == -1) {
                    score -= givenScore

                }

            }



        }
        score = Math.round(score)

    }
    if (check == true) {
        MainCard.style.display = "none"
        MainCard.style.display = "none";
        result.style.display = "block";

        var percentage = ((score / QuizData.length) * 100).toFixed(0);

        result.innerHTML = `
    <h1>🎉 Quiz Result</h1>

    <div class="score">${percentage}%</div>

    <div class="box">
        <span>Total Questions</span>
        <strong>${QuizData.length}</strong>
    </div>

    <div class="box">
        <span>Correct Answers</span>
        <strong>${score}</strong>
    </div>

    <div class="box">
        <span>Wrong Answers</span>
        <strong>${QuizData.length - score}</strong>
    </div>

    <div class="box">
        <span>Your Percentage</span>
        <strong>${percentage}%</strong>
    </div>

    <button onclick="location.reload()">Try Again</button>
`;
    }
    else {
        alert("bhai 1 select kar")
    }
}

showQuizQuestion()
