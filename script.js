let description = document.getElementById('description');
let amount = document.getElementById('amount');
let addIncomeBtn = document.getElementById('add-income-btn');
let addExpenseBtn = document.getElementById('add-expense-btn');
let incomeList = document.getElementById('income-items');
let expenseList = document.getElementById('expense-items');
let moneyEarned = document.getElementById('money-earned');
let moneyAvailable = document.getElementById('money-available');
let moneySpent = document.getElementById('money-spent');

//  totals
let totalIncome = 0;
let totalExpenses = 0;

// UpdateSummary 
function updateSummary() {
    moneyEarned.textContent = '$' + totalIncome.toFixed(3);
    moneySpent.textContent = '$' + totalExpenses.toFixed(3);
    moneyAvailable.textContent = '$' + (totalIncome - totalExpenses).toFixed(3);
}

// Add item function                masrof 
function addItem(list, text, value, isExpense) {
    let li = document.createElement('li');
    li.innerHTML = `
        ${text} 
        <span>$${value.toFixed(3)}</span> 
        <button class="delete-btn"><img src="garbage (1).png" alt="Delete"></button>
    `;
    
    list.appendChild(li);

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
        if (isExpense) {
            totalExpenses -= value;
        } else {
            totalIncome -= value;
        }
        updateSummary();
    });
}

// Add expense 
addExpenseBtn.addEventListener('click', function() {
    let expenseText = description.value;
    let expenseValue = parseFloat(amount.value);
    //                 -""

    if (expenseText && expenseValue > 0) {
        addItem(expenseList, expenseText, expenseValue, true);
        totalExpenses += expenseValue;
        updateSummary();
        description.value = '';
        amount.value = '';
    } else {
        alert(' enter a valid description and amount !!! ');
    }
});

//  summary update
updateSummary();

// Add income 
addIncomeBtn.addEventListener('click', function() {
    let incomeText = description.value;
    let incomeValue = parseFloat(amount.value);

    if (incomeText &&  incomeValue > 0) {
        addItem(incomeList, incomeText, incomeValue, false);
        totalIncome += incomeValue;
        updateSummary();
        description.value = '';
        amount.value = '';
    } else {
        alert(' enter a valid description and amount  !!! ');
    }
});

//  summary update
updateSummary();
