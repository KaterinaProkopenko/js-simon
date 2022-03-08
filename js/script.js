const functionNumbers = generateNumber(5);

function generateNumber(number){
    const numbers = [];
    for(let i = 0; i < number; i++){
        numbers.push(generateRandomNumber(numbers, 1, 50));
    }
    document.getElementById('user-number').innerHTML = `${numbers[0]} - ${numbers[1]} - ${numbers[2]} - ${numbers[3]} - ${numbers[4]}`;
    console.log(numbers)
}

/* Non funziona il flag */
function generateRandomNumber(blackList, min, max){
    let check = false;
    let randomInt;

    while(!check){
        randomInt = Math.floor(Math.random() * ((max + 1) - min) + min);

        if(!blackList.includes(randomInt)){
            check = true;
        }
        return randomInt;
    }
}

setTimeout(hidden, 2999);

function hidden() {
    document.getElementById('user-number').innerHTML = '';
}

setTimeout(userNumbers, 3000);

function userNumbers() {
    parseInt(prompt('Inserisci i numeri che hai visto'));
}

