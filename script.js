let money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц','');
 while( isNaN(money) || money == "" || money == null ){
    money = +prompt('Ваш бюджет на месяц','');
    }
    time = prompt('YYYY-MM-DD','');
}

start();
chooseExpenses();

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true, 
}

function chooseExpenses(){

 for( let i = 0; i < 2; i++ ){
  let costs = +prompt('Введит обязательную статью расходов в этом месяце','');
  let howMany = +prompt('Во сколько обойдется?', '');

  if( typeof(costs) === 'string' && typeof(costs) != null &&
   typeof(howMany) != null && costs != '' && howMany != '' && costs.length < 50 ){
   appData.expenses[costs] = howMany; 
  }else{
      i -= 1;
  }
}; 

}



// Напишу ещё 2 разних цикла для практики
/* let i = 0;
while( i < 2 ){
    let costs = +prompt('Введит обязательную статью расходов в этом месяце','');
    let howMany = +prompt('Во сколько обойдется?', '');

    if( typeof(costs) === 'string' && typeof(costs) != null &&
   typeof(howMany) != null && costs != '' && howMany != '' && costs.length < 50 ){
   appData.expenses[costs] = howMany; 
  }

  i++;
} */
/* let i = 0;
do{
    let costs = +prompt('Введит обязательную статью расходов в этом месяце','');
    let howMany = +prompt('Во сколько обойдется?', '');
  
    if( typeof(costs) === 'string' && typeof(costs) != null &&
     typeof(howMany) != null && costs != '' && howMany != '' && costs.length < 50 ){
     appData.expenses[costs] = howMany; 
    }

}while( i < 2 ); */

function detectDayBudget(){
  appData.moneyPerDay = (appData.budget / 30).toFixed(1);
  alert (`Ваш бюджет за день - ${appData.moneyPerDay}`);
}
detectDayBudget();


function detectLevel(){
if( appData.moneyPerDay < 100 ){
    console.log( 'Минимальный уровень достатка' );
}else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
  console.log('Средний уровень достатка');
}else if( app.Data.moneyPerDay > 2000 ){
    console.log( 'Высокий уровень достатка' );
}else{
    console.log( 'Произошла ошибка' );
}
}

detectLevel();

function checkSavings(){
   if( app.Data.savings == true ){
       let save = +prompt( 'Какова сумма накоплений', '' );
           percent = +prompt( 'Под какой процент', '' );

        appData.monthIncome = save/100/12 * percent;
        alert( `Доход в месяц с вашего депозита -  ${appData.monthIncome}` );   
   }
}

checkSavings();

function chooseOptExpenses(){
    for( let i = 1; i <= 3; i++ ){
      let optExpense = +prompt( 'Статья необязательных расходов', '');
    }
    appData.optionalExpenses[i] = optExpense;
}