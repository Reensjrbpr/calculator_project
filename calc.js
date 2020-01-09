let gridSize = 19;
const text = {10:'+/-', 11:'0', 12:'.', 13: 'C', 15:'/', 16:'X', 17:'-', 18:'+', 19:'='};

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

input.forEach(input => input.addEventListener('click', () => {
    const display = document.querySelector('#input');
    if(display.textContent == '0') display.textContent = '';
    
    display.textContent += input.textContent;

    if(input.textContent == text[13]) display.textContent = '0';
   // else if(input.textContent == text[12]) 
    
}));
   




function operate(operator, ...input){

}

function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}
