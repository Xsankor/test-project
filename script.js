
    let money = +prompt('Ваш бюджет на месяц','');
    let time = prompt('YYYY-MM-DD','');

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false, 
}

 for( let i = 0; i < 2; i++ ){
  let costs = +prompt('Введит обязательную статью расходов в этом месяце','');
  let howMany = +prompt('Во сколько обойдется?', '');

  if( typeof(costs) === 'string' && typeof(costs) != null &&
   typeof(howMany) != null && costs != '' && howMany != '' && costs.length < 50 ){
   appData.expenses[costs] = howMany; 
  }
}; 

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


appData.moneyPerDay = appData.budget / 30;

alert (`Ваш бюджет за день - ${appData.moneyPerDay}`);

if( appData.moneyPerDay < 100 ){
    console.log( 'Минимальный уровень достатка' );
}else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
  console.log('Средний уровень достатка');
}else if( app.Data.moneyPerDay > 2000 ){
    console.log( 'Высокий уровень достатка' );
}else{
    console.log( 'Произошла ошибка' );
}