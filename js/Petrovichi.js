// Семейный бюджет
// Используя prompt указать сумму и вы должны написать расчёт денег на покупку продуктов на всю семью продукты + цены + количество указаны в массиве products
// указать в alert сколько целых дней сможет прожить семья Петровичей на указанную сумму и указать остаток денег.

const products = [
  { product: 'Milk', price: 40, count: 2 },
  {
    product: 'Potato',
    price: 14,
    count: 10,
  },
  {
    product: 'Mineral Water',
    price: 20,
    count: 2,
  },
  {
    product: 'Bread',
    price: 19,
    count: 1,
  },
  {
    product: 'Sweets',
    price: 11,
    count: 15,
  },
];

let budget = prompt('Enter budget of Petrovichi  family');
let everyDayBudget = 0;
let days = 0;
let restOfMoney = 0;
let lackOfMoney = 0;

for (var product of products) {
  let productAmount = product.price * product.count;
  everyDayBudget = everyDayBudget + productAmount;
}
days = Math.floor(budget / everyDayBudget);

restOfMoney = budget - everyDayBudget * days;

lackOfMoney = everyDayBudget - budget;

console.log(budget, everyDayBudget, days, restOfMoney, lackOfMoney);

if (days >= 1) {
  alert(
    'Congratulatiions, Petrovichi family could exist ' +
      days +
      ' day(s) on ' +
      budget +
      ' santik(ov) and the rest of they money is ' +
      restOfMoney +
      ' santik(ov)!'
  );
} else if (days < 1) {
  alert(
    'Sorry, but Petrovichi family couldn`t exist on ' +
      budget +
      ' santik(ov) even one day! Please, increase they budget by ' +
      lackOfMoney +
      ' santik(ov)'
  );
}
