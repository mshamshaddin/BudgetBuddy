/*
Create an application that allows users to enter their 
weekly budget and track how much 
is left based on their purchases throughout the week. 
At a minimum, this should include:
Displaying the user’s weekly budget which will be updated every 
time a new item is added to the list of purchased items.
Allow the user to choose between four categories for each purchase.
    Entertainment
    Food
    Clothing
    Bills	
Must indicate to the user how much money has been spent, 
which requires an easy-to-understand layout.
The user should be able to see how much money 
is being spent on each of the four categories.
If their budget is consumed within the week, 
they must be notified that they cannot purchase additional items.

BudgetItem class
itemName = String; // "sun glasses"
category = String; // "clothes"
valueAmount = Int; // $40.00


Budget class 
totalBudget = Int/Float; $10,000.00
expenses = [] // [new BudgetItem("Sun Glasses", "Clothes", 40)] we will append the BudgetItems into

*/

// Define a Week Here?

class BudgetItem {
    constructor(itemName, category, valueAmount) {
        this.itemName = itemName;
        this.category = category;
        this.valueAmount = valueAmount;
    }
}

class Budget {
     constructor(totalBudget) {
        this.totalBudget = totalBudget;
        this.expenses = [];
     }
}

const startingBudget = new Budget(100.00);

const item1 = new BudgetItem("coffee", "food", 4.01);
const item2 = new BudgetItem("coffee", "food", 4.00);
const item3 = new BudgetItem("pizza", "food", 14);
const item4 = new BudgetItem("paintball", "entertainment", 74.99);

function getRemainingBalance(valueTotals) {return startingBudget - valueTotals;}

function addValues(item) {
    let total = 0;
    startingBudget.expenses.push(item);
    for (let item of startingBudget.expenses) {
       total += item.valueAmount;
    }
    return total;
}

let addedExpenses = addValues(item3);
addedExpenses = addValues(item1);
addedExpenses = addValues(item2);
addedExpenses = addValues(item4);
console.log(`Added expenses: ${addedExpenses}`);


function findRemaining() {
    console.log(`Remaining Budget: ${startingBudget.totalBudget - addedExpenses}`);
    return startingBudget.totalBudget - addedExpenses;
}

findRemaining();