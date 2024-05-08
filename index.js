let score = 0;
let lastAnsStatus1 = false;
let lastAnsStatus2 = false;
const scoreBox = document.getElementById("scoreBox");

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        if (!lastAnsStatus1) {
            lastAnsStatus1 = true;
            score++;
        }

    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        if (lastAnsStatus1) {
            lastAnsStatus1 = false;
            score--;
        }

    }
    scoreBox.textContent = Math.max(0, score);;
 }
 function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'd') {
        result2.textContent = "ถูกต้อง ปีที่ก่อตั้งบริษัท gosoft คือ 2003";
        result2.style.color = 'green';
        if (!lastAnsStatus2) {
            lastAnsStatus2 = true;
            score++;
        }

    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
        if (lastAnsStatus2) {
            lastAnsStatus2 = false;
            score--;
        }

    }
    scoreBox.textContent = Math.max(0, score);;
 }
 