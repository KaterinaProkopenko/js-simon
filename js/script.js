const numbers = [];

for(let i = 0; i < 5; i++){
    numbers.push(generateRandomNumber(numbers, 1, 20));
};

document.getElementById('user-number').innerHTML = `${numbers[0]} - ${numbers[1]} - ${numbers[2]} - ${numbers[3]} - ${numbers[4]}`;
console.log(numbers);

function generateRandomNumber(blackList, min, max){
    let check = false;
    let randomInt;

    while(!check){
        randomInt = Math.floor(Math.random() * ((max + 1) - min) + min);

        if(!blackList.includes(randomInt)){
            check = true;
        };
        return randomInt;
    };
};

setTimeout(hidden, 2999);

function hidden() {
    document.getElementById('user-number').innerHTML = '';
};

setTimeout(userNumbersFunction, 3000, numbers);

function userNumbersFunction(givenNumbers) {
    const userNumbers = [];
    const guessedNumbers = [];

    for (let i = 0; i < 5; i++){
        const userNumber = parseInt(prompt('Inserisci i numeri che hai visto'));
        if (!isNaN(userNumber)){
            userNumbers.push(userNumber);
            if(givenNumbers.includes(userNumber)){
                pushUnique(guessedNumbers, userNumber);
            };
        };
    };

    console.log(userNumbers);
    console.log(guessedNumbers);

    document.getElementById('user-number').innerHTML = 
    `Numeri che hai indovinato: ${guessedNumbers.join(', ')} <br>
     Numeri mostrati: ${givenNumbers.join(', ')}`;
};

function pushUnique(array, elementToAdd){
    if (!array.includes(elementToAdd)){
        array.push(elementToAdd);
        return array;
    };
};
