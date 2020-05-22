let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц', '');
    }
    time = prompt('YYYY-MM-DD', '');
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {

        for (let i = 0; i < 2; i++) {
            let costs = +prompt('Введит обязательную статью расходов в этом месяце', '');
            let howMany = +prompt('Во сколько обойдется?', '');

            if (typeof (costs) === 'string' && typeof (costs) != null &&
                typeof (howMany) != null && costs != '' && howMany != '' && costs.length < 50) {
                appData.expenses[costs] = howMany;
            } else {
                i -= 1;
            }
        };

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert(`Ваш бюджет за день - ${appData.moneyPerDay}`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (app.Data.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (app.Data.savings == true) {
            let save = +prompt('Какова сумма накоплений', '');
            percent = +prompt('Под какой процент', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита -  ${appData.monthIncome}`);
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let optExpense = +prompt('Статья необязательных расходов', '');
        }
        appData.optionalExpenses[i] = optExpense;
    },

    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислить через запятую)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
    },

};

