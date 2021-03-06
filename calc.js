let gridSize = 19;
const text = {10:'+/-', 11:'0', 12:'.', 13: 'C', 15:'/', 16:'X', 17:'-', 18:'+', 19:'='};

//GENERATE BUTTONS
function grid(gridSize){
    const inputDiv = document.querySelector('.inputGrid');
    const mathDiv = document.querySelector('.mathGrid');

    for(let i = 1; i < gridSize + 1; i++){
        
        const gridItem = document.createElement('div');
        
        if(i < 14){
            gridItem.classList.add('inputBtns');
    
            if(i >= 1 && i <= 3) gridItem.textContent = i + 6;
            else if(i >= 7 && i <= 9) gridItem.textContent = i - 6;
            else if(i > 9 && i < 14){
                gridItem.textContent = text[i];
                if(i == 13) gridItem.setAttribute('id', 'clear');
            }
            else gridItem.textContent = i;
      
            inputDiv.appendChild(gridItem);
        }
        else {
         
            gridItem.classList.add('inputBtns');
            gridItem.textContent = text[i];

            if(i == 14) gridItem.setAttribute('id', 'delete');
            else if(i == 15 || i == 17) gridItem.classList.add('blue');
            else if(i == 16 || i == 18) gridItem.classList.add('red');
            else if(i == 19) gridItem.setAttribute('id', 'equals');

            mathDiv.appendChild(gridItem);
        }
    }
}

grid(gridSize);


const input = document.querySelectorAll('.inputBtns');
let numInput = [];
let numbers = [];
let operators = [];
let num = '';

//POPULATE DISPLAY
input.forEach(input => input.addEventListener('click', () => {
    const display = document.querySelector('#input');

    if(display.textContent == '0') display.textContent = '';

    display.textContent += input.textContent;
    
    num = input.textContent;
    numInput.push(num);

    //CLEAR BUTTON
    if(input.textContent == text[13]){
        display.textContent = '0';
        numInput = [];
        numbers = [];
        operators = [];
        num = '';
    }

    //EQUALS BUTTON
    if(input.textContent == text[19]){
        let solution = operate(numInput);
        display.textContent = solution;
            numInput = [];
            numbers = [];
            operators = [];
            num = '';
        }
}));

function operate(numInput){
    
    //SEPARATE NUMBERS & OPERATORS
    let op1 = -1;
    for(let i = 0; i < numInput.length + 1; i++){
        if(numInput[i] == text[15] ||
            numInput[i] == text[16] ||
            numInput[i] == text[17] ||
            numInput[i] == text[18] ||
            numInput[i] == text[19]){

                let index = numInput.indexOf(numInput[i], i - 1);

                num = numInput.slice(op1 + 1, index).join('');
                numbers.push(num);
                if(numInput[i] !== text[19]) operators.push(numInput[i]);
                op1 = i;
        }
    }

    //DO MATH
    let solution = 0;
    let num1 = 0;
    let num2 = 0;

    for(let r = 0; r < operators.length; r++){
            if(r == 0){
                num1 = Number(numbers[r]);
                num2 = Number(numbers[r + 1]);
            }
            else{
                num1 = solution;
                num2 = Number(numbers[r + 1]);
            }

            if(operators[r] == text[15]) solution = divide(num1, num2);
            else if(operators[r] == text[16]) solution = multiply(num1, num2);
            else if(operators[r] == text[17]) solution = subtract(num1, num2);
            else if(operators[r] == text[18]) solution = add(num1, num2);
    }

    return solution;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}
