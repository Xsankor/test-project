let startPayment = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSaving = document.getElementsByClassName('monthsavings-value')[0],
    yearSaving = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    btnOptExp = document.querySelector('.optionalexpenses-btn'),
    btnExpItem = document.querySelector('.expenses-item-btn'),
    btnCountBuget = document.querySelector('.count-budget-btn'),
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent');
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, items;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};






startPayment.addEventListener('click', function () {

    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    money = +prompt('Ваш бюджет на месяц', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц', '');
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

btnExpItem.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let costs = expensesItem[i].value;
        let howMany = expensesItem[++i].value;

        if (typeof (costs) === 'string' && typeof (costs) != null &&
            typeof (howMany) != null && costs != '' && howMany != '' && costs.length < 50) {
            appData.expenses[costs] = howMany;
            sum += +howMany;
        } else {
            i -= 1;
        }
    }

    expensesValue.textContent = sum;
});

btnOptExp.addEventListener('click', function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        let optExpense = optionalExpenses[i].value;
        appData.optionalExpenses[i] = optExpense;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});


btnCountBuget.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка !';
        }
    } else {
        dayBudget.textContent = 'Произошла ошибка!';
    }
});


incomeItem.addEventListener('change', function () {
    items = incomeItem.value;
    while (!isNaN(items) || (items == '') || (items == null)) {
        items = incomeItem.value;
    }
    appData.income = items.split(', ');

    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSaving.textContent = appData.monthIncome.toFixed(1);
        yearSaving.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSaving.textContent = appData.monthIncome.toFixed(1);
        yearSaving.textContent = appData.yearIncome.toFixed(1);
    }
});



