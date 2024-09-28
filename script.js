let totalBudget = 0;
let remainingBudget = 0;





// Event listener for submitting the total budget
document.getElementById("budget-funds").addEventListener("submit", function(event) {
    event.preventDefault(); // dont do default behavior when page refreshes  // Prevent page reload on form submit

    totalBudget = parseFloat(document.getElementById("total-budget").value);
    if (isNaN(totalBudget) || totalBudget <= 0) {
        alert("Please enter a valid total budget.");
        return;
    }

    remainingBudget = totalBudget;
    document.querySelector(".budget-total").textContent = `Remaining Budget: $${remainingBudget.toFixed(2)}`;


});




function handleExpense(categoryId) {
    const amount = parseFloat(document.getElementById(categoryId).value);

    if (isNaN(amount) || amount < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Deduct the expense from the remaining budget
    remainingBudget -= amount;
    if (remainingBudget < 0) {
        remainingBudget = 0;  // Avoid negative budget
    }

    // Update the remaining budget display
    document.querySelector(".budget-total").textContent = `Remaining Budget: $${remainingBudget.toFixed(2)}`;
    document.getElementById("remaining-funds").textContent = `$${remainingBudget.toFixed(2)}`;

    // Optionally clear the input field after submission
    document.getElementById(categoryId).value = "";
}

// Event listeners for category expense buttons
const buttons = document.querySelectorAll('.entry-btn');
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const categoryId = button.getAttribute("data-category");
        handleExpense(categoryId);
       

    });
});





