function addValue(){
    // get the operands value
    let stroper1 = document.querySelector("#input_a").value;
    let stroper2 = document.querySelector("#input_b").value;
    let msg;

    if (stroper1 == "" || stroper2 == "") {
        msg = "Please do not leave any operand field empty";
    } else if (isNaN(stroper1) || isNaN(stroper2)) {
        msg = "Please do not enter any characters or symbols";
    } else {
        // parse to integer. You can use: parseInt(input, 10);
        let intoper1 = parseInt(stroper1, 10);
        let intoper2 = parseInt(stroper2, 10);

        // perform operation
        let sum = intoper1 + intoper2; 

        // creating the text output
        msg = stroper1 + " + " + stroper2 + " = " + sum;
    }

    // (if you want to check) print out in console
    console.log(addValue);

    // change the text area
    document.mycalculator.output.value = msg;
}


function mulValue(){
    // get the operands value
    let stroper1 = document.querySelector("#input_a").value;
    let stroper2 = document.querySelector("#input_b").value;
    let msg;

    if (stroper1 == "" || stroper2 == "") {
        msg = "Please do not leave any operand field empty";
    } else if (isNaN(stroper1) || isNaN(stroper2)) {
        msg = "Please do not enter any characters or symbols";
    } else {
        // parse to integer. You can use: parseInt(input, 10);
        let intoper1 = parseInt(stroper1, 10);
        let intoper2 = parseInt(stroper2, 10);

        // perform operation
        let product = intoper1 * intoper2; 

        // creating the text output
        msg = stroper1 + " x " + stroper2 + " = " + product;
    }

    // (if you want to check) print out in console
    console.log(mulValue);

    // change the text area
    document.mycalculator.output.value = msg;
}

function divValue(){
    // get the operands value
    let stroper1 = document.querySelector("#input_a").value;
    let stroper2 = document.querySelector("#input_b").value;
    let msg;

    if (stroper1 == "" || stroper2 == "") {
        msg = "Please do not leave any operand field empty";
    } else if (isNaN(stroper1) || isNaN(stroper2)) {
        msg = "Please do not enter any characters or symbols";
    } else if (stroper2 == "0") {
        msg = "No number can be divided by 0"
    } else {
        // parse to integer. You can use: parseInt(input, 10);
        let intoper1 = parseInt(stroper1, 10);
        let intoper2 = parseInt(stroper2, 10);

        // perform operation
        let quotient = intoper1 / intoper2; 

        // creating the text output
        msg = stroper1 + " / " + stroper2 + " = " + quotient;
    }
    
    // (if you want to check) print out in console
    console.log(divValue);

    // change the text area
    document.mycalculator.output.value = msg;
}
