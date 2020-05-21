
   
   
    let money = +prompt('Ваш бюджет на месяц','');
    let time = prompt('YYYY-MM-DD','');
    let costs = prompt('Введит обязательную статью расходов в этом месяце','');
    let howMany = prompt('Во сколько обойдется?', '');


let arrData = {
   budget: money,
   timeData: time,
   expenses: {
    costs: howMany, 
   },
   optionalExpenses: {},
   income: [],
   savings: false, 
}

alert (`Ваш бюджет за день - ${arrData.budget / 30}`);