var computerChoiceBox = document.getElementById('computerChoice');
var userChoiceBox = document.getElementById('userChoice');
var endResultBox = document.getElementById('diplayResult');
var playerChoiceButtons = document.querySelectorAll('.myBtn');


    function onButtonClick(event) {
    
    const computerDecision = letComputerChoose();
    
    const yourChoice = event.target.value;

   
    const gameResult = getDiplayResult(computerDecision, yourChoice);
    endResultBox.innerHTML = `Result: ${gameResult}`;
    computerChoiceBox.innerHTML = `Computer: ${computerDecision}`;
    userChoiceBox.innerHTML = `You: ${yourChoice}`;
}

    playerChoiceButtons.forEach(value => {
        value.addEventListener('click', onButtonClick);
    })

    function letComputerChoose() {
        const computerChoiceNumber = (Math.floor(Math.random() * 3));
        switch(computerChoiceNumber) {
            case 0:
                return 'Rock';
                break;
            case 1:
                return 'Paper';
                break;
            case 2: 
                return 'Scissors';
                break;
        
        }
    }


    function getDiplayResult(computerChoice, userChoice) {
        if (userChoice === computerChoice) {
            return 'This one is a tie!';
        }
        if (userChoice === 'Rock') {
            if (userChoice === 'Paper') {
                return 'You Lost!';
            } else {
                return 'Congratulations, you won!';
            }
        }
        if (userChoice === 'Paper') {
            if (computerChoice === 'Scissors') {
                return 'You lost!';
            } else {
                return 'Congratulations, you won!';
            }
        }
        if (userChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                return 'You lost!';
            } else {
                return 'Congratulations, you won!';
            }
        }
    }
