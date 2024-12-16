let budget = {
    income : 1000, 
    expenses:700,
};
budget.savings = budget.income - budget.expenses;
budget.income = 1200;
budget.savings = budget.income - budget.expenses;
console.log(budget.savings);
