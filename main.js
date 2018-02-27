function calculateChange() {
    var totalAmount = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;
    var change = (amountReceived - totalAmount).toFixed(2);
    // var changeDecimalPart = Math.abs((change - dollars).toFixed(2));

    var dollars = Math.floor(change);
    var changeDecimalPart = Math.abs((change - dollars).toFixed(2));
    document.getElementById("dollars-output").innerHTML= dollars;

    var quarters = calculateQuarters(changeDecimalPart);
    document.getElementById("quarters-output").innerHTML= quarters;
    var inputToDime = findInputToDime(quarters, changeDecimalPart);

    var dimes = calculateDimes(inputToDime);
    var dimes1 = correct(dimes);
    document.getElementById("dimes-output").innerHTML= dimes1;
    var inputToNickel = findInputToNickel(dimes, inputToDime);

    var nickels = calculateNickels(inputToNickel);
     var nickels1= correct(nickels);
    document.getElementById("nickels-output").innerHTML= nickels1;
    var inputToPennies = findInputToPenny(nickels, inputToNickel);

     var pennies = calculatePennies(inputToPennies);
    var pennies1=correct(pennies);
    document.getElementById("pennies-output").innerHTML= pennies1;
    

}

function calculateQuarters(input) {
    if( input >= .25){
    var quarters = Math.floor(input / .25 );
    return quarters;
    } 
    else {
        return input;
    }   

}
function findInputToDime(input, changeDecimalPart) {
    var inputToDime = (changeDecimalPart - (input *  .25)).toFixed(2);
    return inputToDime;

}

 function calculateDimes(input) {
    if( input >= .10){
    var dimes = Math.floor(input / .10 );
    return dimes;
    }   
    else {
        return input;
    } 

}

function findInputToNickel(input, inputToDime) {
    var inputToNickel = (inputToDime - (input *  .10)).toFixed(2);
    return inputToNickel;

}

 function calculateNickels(input) {
    if( input >= .05){
    var nickels = Math.floor(input / .05 );
    return nickels;
    }    
    else {
        return input;
    }

}

function findInputToPenny(input, inputToNickel) {
    var inputToPennies = (inputToNickel - (input *  .05)).toFixed(2);
    return inputToPennies;

}

 function calculatePennies(input) {
    if( input >= .01){
    var pennies = Math.floor(input / .01 );
    return pennies;
    }  
    else {
        return input;
    }  

}

function correct(input){
    if (input < 1){
        return 0;
    }
    else {
        return input;
    }
}