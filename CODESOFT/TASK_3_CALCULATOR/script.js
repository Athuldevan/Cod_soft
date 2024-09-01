const display=document.getElementById('output-screen');
const buttons=document.querySelectorAll(".button");

//function to display the values of buttons to screen

function displayToOutput(btnValue){
    display.value+=btnValue;
}


// function to clear the screen

function clearScreen(){
    display.value=" ";
}

// function to calculate
function calculate(equalsToButton){
    
    // calculating the value in display
    let answer=eval(display.value);
    display.value=answer;
    
}

// functions to  back(delete the number one by one ...)
function back(){
    // slicing the values one by one 
   display.value=display.value.slice(0,-1);
}