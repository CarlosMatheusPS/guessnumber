const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

let stats = document.getElementById('stats');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativas: ' + value
};


function handlesubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;
    
    if (!kick) {
        alert('Digite um número!')
        return;
    };

    updateAttempt(attempt, ++guess.attemptsNumber);

    if (numberDrawn == kick) {

        playAgain();
        stats.innerHTML = 'Parabéns, você acertou!'
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        stats.style.color = '#fff';
        clear();
    } else if (numberDrawn > kick) {
        stats.innerHTML = ' O número sorteado é maior!';
        stats.style.color = '#de4251'
        clear();

    } else if (numberDrawn < kick) {
        stats.innerHTML = ' O número sorteado é menor!';
        stats.style.color = '#de4251'
        clear();
    }
};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = ''
    
}