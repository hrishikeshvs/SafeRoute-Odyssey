// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="q1"]:checked');

    if (selectedAnswer) {
        // Get the value of the selected answer
        const selectedValue = selectedAnswer.value;

        // Check if the selected value is the correct answer
        if (selectedValue === 'c') {
            alert('Correct answer!'); // Show a message for correct answer
        } else {
            alert('Incorrect answer. Please try again.'); // Show a message for incorrect answer
        }
    } else {
        alert('Please select an answer.'); // Show a message if no answer is selected
    }
}

// Add event listener to the form for submission
document.querySelector('form').addEventListener('submit', handleSubmit);
