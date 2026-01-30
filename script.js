const jsMCQs = [
    {
        id: 1,
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        answer: "var"
    },
    {
        id: 2,
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "//", "/* */", "#"],
        answer: "//"
    },
    {
        id: 3,
        question: "Which data type is NOT supported by JavaScript?",
        options: ["Number", "Boolean", "Character", "String"],
        answer: "Character"
    },
    {
        id: 4,
        question: "Which method is used to print data in the console?",
        options: ["print()", "log()", "console.log()", "display()"],
        answer: "console.log()"
    },
    {
        id: 5,
        question: "Which operator is used to compare both value and type?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    },
    {
        id: 6,
        question: "What will `typeof null` return?",
        options: ["null", "object", "undefined", "number"],
        answer: "object"
    },
    {
        id: 7,
        question: "Which function converts JSON data to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        id: 8,
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do...while", "foreach"],
        answer: "do...while"
    },
    {
        id: 9,
        question: "Which keyword is used to create a function?",
        options: ["function", "method", "def", "func"],
        answer: "function"
    },
    {
        id: 10,
        question: "Which array method adds an element at the end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    }
];

let index = 0;

const questionText = document.querySelector(".question h2");
const optionsBox = document.querySelector(".options");
const badge = document.querySelector(".badge");
const numbers = document.querySelectorAll(".q-numbers span");

function showQuestion() {
    const q = jsMCQs[index];

    badge.innerHTML = `Question ${index + 1} of ${jsMCQs.length}`;
    questionText.innerHTML = q.question;
    optionsBox.innerHTML = "";

    q.options.forEach(opt => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option"> ${opt}
        `;
        optionsBox.appendChild(label);
    });

    numbers.forEach(n => n.classList.remove("active"));
    numbers[index].classList.add("active");
}

numbers.forEach((num, i) => {
    num.onclick = () => {
        index = i;
        showQuestion();
    };
});

function gotonext() {
    if (index < jsMCQs.length - 1) {
        index++;
        showQuestion();
    }
}

function gotoprev() {
    if (index > 0) {
        index--;
        showQuestion();
    }
}

showQuestion();

function submitQuiz() {
    const win = window.open("", "_blank");
    win.document.write(`
        <h1 style="text-align:center;margin-top:40vh;">
            Quiz Completed!!!
        </h1>
    `);

    window.close();
}


