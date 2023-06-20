// Obté una referència als elements d'opció mitjançant els seus identificadors
const optionPaper = document.getElementById('option-paper');
const optionRock = document.getElementById('option-rock');
const optionScissors = document.getElementById('option-scissors');

// Obté una referència a l'element d'ícon del jugador
const playerIcon = document.querySelector('.player .icon img');

// Obté una referència a l'element d'ícon de la màquina
const machineIcon = document.querySelector('.machine .icon img');

// Obté una referència a l'element <h3> per mostrar el resultat
const resultElement = document.querySelector('.playzone h3');

// Obté una referència als elements del marcador de punts
const playerScoreElement = document.getElementById('player-score');
const machineScoreElement = document.getElementById('machine-score');

// Afegir gestor d'esdeveniments de clic a cada opció
optionPaper.addEventListener('click', function () {
    playerIcon.src = "./assets/paper.png";
    updateMachineIcon();
});

optionRock.addEventListener('click', function () {
    playerIcon.src = "./assets/rock.png";
    updateMachineIcon();
});

optionScissors.addEventListener('click', function () {
    playerIcon.src = "./assets/scissors.png";
    updateMachineIcon();
});

// Funció per obtenir una opció aleatòria
function getRandomOption() {
    const options = ['paper', 'rock', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Funció per determinar el guanyador
function determineWinner(playerOption, machineOption) {
    if (playerOption === machineOption) {
        return "It's a tie!";
    } else if (
        (playerOption === 'rock' && machineOption === 'scissors') ||
        (playerOption === 'paper' && machineOption === 'rock') ||
        (playerOption === 'scissors' && machineOption === 'paper')
    ) {
        return "Player Point!";
    } else {
        return "Machine Point!";
    }
}

// Funció per actualitzar l'ícon de la màquina i determinar el guanyador
function updateMachineIcon() {
    const randomOption = getRandomOption();
    machineIcon.src = `./assets/${randomOption}.png`;

    const playerOption = playerIcon.src.split('/').pop().split('.')[0];
    const machineOption = randomOption;
    const result = determineWinner(playerOption, machineOption);

    resultElement.textContent = result;

    // Actualitza el marcador de punts
    if (result === "Player Point!") {
        let playerScore = parseInt(playerScoreElement.textContent);
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === "Machine Point!") {
        let machineScore = parseInt(machineScoreElement.textContent);
        machineScore++;
        machineScoreElement.textContent = machineScore;
    }
}
