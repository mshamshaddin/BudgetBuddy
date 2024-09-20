class Category {
    constructor(name) {
        this.name = name;
    }
  }
  
  class BudgetItem {
    constructor(itemName, category, amount) {
        this.itemName = itemName;
        this.category = category;
        this.amount = amount;
    }
  }
  
  class Budget {
    constructor(initialAmount) {
        this.initialAmount = initialAmount;
        this.expenses = [];
    }
  
    addExpense(item) {
        this.expenses.push(item);
    }
  
    calculateRemainingBudget() {
        const totalSpent = this.expenses.reduce((sum, item) => sum + item.amount, 0);
        return this.initialAmount - totalSpent;
    }
  }
  
  // Define categories
  const foodCategory = new Category("Food");
  const entertainmentCategory = new Category("Entertainment");
  const billsCategory = new Category("Bills");
  const clothingCategory = new Category("Clothing");
  
  // Create a budget
  const myBudget = new Budget(10000); // Example initial budget
  
  // Add expenses
  myBudget.addExpense(new BudgetItem("Groceries", foodCategory, 150)); // Input
  myBudget.addExpense(new BudgetItem("Movie Night", entertainmentCategory, 50)); // Input
  myBudget.addExpense(new BudgetItem("Electric Bill", billsCategory, 200));
  myBudget.addExpense(new BudgetItem("New Shirt", clothingCategory, 80));
  
  // Calculate and print remaining budget
  const remainingBudget = myBudget.calculateRemainingBudget();
  console.log(`Remaining budget: ${remainingBudget.toFixed(2)}`);
  
  