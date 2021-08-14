let firstNumber, secondNumber, operation, repeat = true;

//этот while -> дать возможность повторить, если ввел что-то не то, или 
while(repeat)

while (isNaN(firstNumber)){
    firstNumber = parseFloat (prompt('Enter first number'));
} // парсинг выше и тут isNaN покрывают все случаи если не то ввели или кенсел сделал полльзоветль ПО ПЕРВОй введенной цифре 

while (isNaN(secondNumber)){
    secondNumber = parseFloat (prompt('Enter first number'));
} // то же самое по ВТОРОЙ ЦИФРЕ

operation = prompt ('select operation: + - * / ');

switch(operation){
    case '+':{
        alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber + secondNumber}`);
        repeat = false;
        break;
    }
    case '-':{
            alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber - secondNumber}`);
            repeat = false;
            break;
        }
    case '*':{
            alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber * secondNumber}`);
            repeat = false;
            break;
        }
    case '/':{
        if(secondNumber == 0){
            agree = prompt(`Error. Devision by zero is forbidden. Would you like enter another divider?/n Type 'y' if yes`);
            if(agree != 'y'){
                repeat = false;
                break;
            }else{
                secondNumber = NaN; 
                break;
            }
           
        }else{
            alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber / secondNumber}`);
            repeat = false;
            break;}
        }
    default:{
        agree = prompt(`Error, this is not a valid operation. Would ypu like try again?\nType 'y' if yes);
        if(agree != 'y'){
            repeat = false;
        }
    }
}
agree = prompt(`Would you like count somebody more?\nType 'y' if yes`);
    if(agree == 'y'){
        repeat = true;
        firstNumber = NaN;
        secondNumber = NaN;
    }else{
        alert('See you later!')
    }
}

