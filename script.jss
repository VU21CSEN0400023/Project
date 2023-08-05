// Get the input element where calculations are displayed
let input = document.getElementById('inputBox');

// Get all the buttons on the calculator
let buttons = document.querySelectorAll('button');

// Initialize an empty string to hold the current calculation
let string = "";

// Convert the NodeList of buttons into an array
let arr = Array.from(buttons);

// Loop through each button and add a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the clicked button is the equals (=) button
        if (e.target.innerHTML == '=') {
            // Evaluate the current string as a mathematical expression
            string = eval(string);
            // Display the result in the input box
            input.value = string;
        } 
        // Check if the clicked button is the All Clear (AC) button
        else if (e.target.innerHTML == 'AC') {
            // Clear the string and reset the input box
            string = "";
            input.value = string;
        } 
        // Check if the clicked button is the Delete (DEL) button
        else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the string and update the input box
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        // For other buttons (numbers and operators)
        else {
            // Append the button's text content to the current string
            string += e.target.innerHTML;
            // Update the input box with the new string
            input.value = string;
        }
    });
});
