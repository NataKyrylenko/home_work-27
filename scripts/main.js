//-------minimum-----//
//1
let age = prompt('Enter your age', "");
let message = (age <= 11) ? 'You are child!' :
  (age <= 17) ? 'You are teenager!' :
  (age <= 59) ? 'You are adult!' :
  (age >= 60 && age <=110) ? 'You are retired!' :
  (age > 110) ? 'People don`t live that long' :
  'Unusual age!';
alert( message );

//2
let sign = prompt('Enter number 0-9', "");
let mess = (sign==0) ? ')' :
  (sign===1) ? '!' :
  (sign===2) ? '@' :
  (sign===3) ? '#' :
  (sign===4) ? '$' :
  (sign===5) ? '%' :
  (sign===6) ? '^' :
  (sign===7) ? '&' :
  (sign===8) ? '*' :
  (sign===9) ? '(' :
  (sign>9) ? 'It`s a big number' :
  'Please, enter a number';
  alert(mess);

//3
let  firstNum = Number(prompt('Enter the beginning of the numbers range',""));
let lastNum = Number(prompt('Enter the end of the numbers range',""));
let sum = 0;
while(firstNum <= lastNum){       
       sum+=firstNum;  
       firstNum++;
    }
alert(sum);

//---------Normal-------//

//1
let n = prompt('Bведіть значення для перевірки на паліндромність')
function IsPalindrome(n) {
  return n + (((n+="").split("").reverse().join("") == n) ?  " це значення є паліндромом" : " це значення не є паліндромом");
 }
 alert(IsPalindrome(n));

 //2
let buy = prompt('Введіть суму покупки', "");
let sale = (buy>=200 && buy<300) ? buy-(buy * 0.03) : 
(buy>=300 && buy<500) ? buy-(buy * 0.05) : 
(buy>=500) ? buy-(buy * 0.07) : 
(buy<200) ? 'Сума покупки становить '+buy : 
'Введіть число';
alert(sale);


//4
const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
let currDay = 0;
while (confirm(`${days[currDay]}. Хочеш побачити наступний день?`)) {
  currDay = (currDay + 1) % days.length;
}

     //--------MAX------//

//1
let rand = Math.floor(Math.random()*100);
console.log(rand);
while (true) {
  let x = prompt('Bвeди число від 0 до 100');
  if (isNaN(x)) {
    alert('Помилка, потрібно ввести число!');
    break;
  }else if (x < rand) {
    alert('Мало!');
  }else if (x > rand) {
    alert('Багато!');
  }else {
    alert('Супер! Ти вгадав!');
    break;
  }
}
