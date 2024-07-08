// 1.	Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function compareNumbers (number1, number2) //Принимает 2 числ в качестве параметров
{
    if (number1 < number2) {
        return -1;
    } else if (number1 > number2) {
        return 1;
    } else {
        return 0;
    }
}

let number1 = prompt('Enter the first number');
let number2 = prompt('Enter the second number');

number1 = parseFloat(number1);
number2 = parseFloat(number2);

let result = compareNumbers(number1, number2); //Вызывает функцию для сравнения чисел

if (result === -1) 
    //Использует оператор if-else для отображения сообщ в зависимости от результата сравнения
    {
    alert('The first number is less than the second');
} else if (result === 1) {
    alert('The first number is greater than the second');
} else {
    alert('Numbers are equal');
}

// 2.	Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n) //Принимает число (n) в качестве параметра
{
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n -1);
    }
}

let n = prompt('Enter the number: ');
n = parseInt(n);

let res = (factorial(n));
alert(`Factoral ${n} is equal ${res}`);

//3.	Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function combineDigits(digit1, digit2, digit3) {
    return digit1 * 100 + digit2 * 10 + digit3;
}

let digit1 = prompt('Enter the first number: ');
let digit2 = prompt('Enter the second number: ');
let digit3 = prompt('Enter the third number: ');

let r = combineDigits(digit1, digit2, digit3); //вызывает функцию для обьединения цифр в одно число
alert(`Combined number: ${r}`);


// 4.	Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function calculateArea(length, width) {
    // Check for single argument (square) or two arguments (rectangle)
    if (width === undefined) {
      // Square calculation
      if (isNaN(length) || length < 0) {
        return "Incorrect input. Please enter a positive side length.";
      }
  
      const area = length * length;
      alert(`The area of the square with side ${length} is ${area}.`);
      return area; // Return the calculated area
    } else {
      // Rectangle calculation
      if (isNaN(length) || length < 0 || isNaN(width) || width < 0) {
        return "Incorrect input. Please enter positive values for length and width.";
      }
  
      const area = length * width;
      alert(`The area of the rectangle with sides ${length} and ${width} is ${area}.`);
      return area; // Return the calculated area
    }
  }
  
  // Example usage
  let length = parseFloat(prompt("Enter the length: "));
  
  // Optional: Check if user entered a value for width
  let width = parseFloat(prompt("Enter the width (or press Enter for square): "));
  width = width || length; // Use length if width is empty (optional)
  
  const resul = calculateArea(length, width);
  alert(`The calculated area is: ${resul}`);
  
// 5.	Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function isPerfectNumber(number) {
    // Check for invalid input (non-numeric, non-positive)
    if (isNaN(number) || number <= 0) {
      return "Incorrect input. Please enter a positive integer.";
    }
  
    // Initialize sum of divisors
    let sumOfDivisors = 1; // Include 1 as a divisor
  
    // Iterate through divisors from 2 to the square root of the number
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
      // Check if the number is divisible by the current divisor
      if (number % divisor === 0) {
        // Add the divisor to the sum
        sumOfDivisors += divisor;
  
        // Check if the divisor is not equal to half the number
        if (divisor !== number / divisor) {
          // Add half the number to the sum (for paired divisors)
          sumOfDivisors += number / divisor;
        }
      }
    }
  
    // Check if the sum of divisors equals the original number
    if (sumOfDivisors === number) {
      return `${number} is a perfect number.`;
    } else {
      return `${number} is not a perfect number.`;
    }
  }
  
  // Example usage
  let inputNumber = prompt("Enter the number: ");
  inputNumber = parseInt(inputNumber);
  
  const resultPerfectNumber = isPerfectNumber(inputNumber);
  alert(resultPerfectNumber);
  
// 6.	Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// Function to check if a number is a perfect number
function PerfectNumber(number) {
  if (number <= 1) {
    return false; // Perfect numbers are greater than 1
}
let sumOfDivisors = 1; // Start with 1 (itself)
for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
        sumOfDivisors += i;
        if (i * i !== number) {
            sumOfDivisors += number / i; // Add the pair if not a perfect square
        }
    }
  }
  return sumOfDivisors === number;
}
  
  // Function to find perfect numbers in a range
  function findPerfectNumbersInRange(min, max) {
    const perfectNumbers = [];
    for (let num = min; num <= max; num++) {
        if (isPerfectNumber(num)) {
            perfectNumbers.push(num);
        }
    }
    return perfectNumbers;
  }
  
  // Event listener for the "Go" button
  const button = document.querySelector(".button");
  const input1 = document.querySelector(".input1");
  const input2 = document.querySelector(".input2");
  const resultElement = document.querySelector(".results");
  
  button.addEventListener("click", () => {
    const minRange = parseInt(input1.value, 10);
    const maxRange = parseInt(input2.value, 10);

    const perfectNumbers = findPerfectNumbersInRange(minRange, maxRange);

    // Display the results (assuming you have an element with class "results")
    const resultsElement = document.querySelector(".results"); // Adjust the selector if needed
    if (perfectNumbers.length > 0) {
        resultsElement.textContent = "Perfect numbers found: " + perfectNumbers.join(", ");
    } else {
        resultsElement}});


// 7.	Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». 
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function formatTime() {
  const hoursString = parseInt(prompt('Enter hours (0-23):'), 10);
  const minutesString = parseInt(prompt('Enter minutes (0-59):'), 10);
  const secondsString = parseInt(prompt('Enter seconds (0-59):'), 10);
  
  if (hoursString === null || minutesString === null || secondsString === null) {
  alert('Wrong. Enter again.');
  return;
  }
  
  const formattedHours = pad(hoursString % 24, 2);
  const formattedMinutes = pad(minutesString % 60, 2);
  const formattedSeconds = pad(secondsString % 60, 2);
  
  alert(`Formated time: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  }
  
  function pad(number, length) {
  return String(number).padStart(length, '0');
  }
  
  formatTime();
  
//8.	Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function convertTimeToSeconds() {
  let h = prompt("Enter the number of hours: ");
  let min = prompt("Enter the number of minutes: ");
  let sec = prompt("Enter the number of seconds: ");

  let totalSeconds = (parseInt(h) * 3600) + (parseInt(min) * 60) + parseInt(sec);
  
  alert(`The total time in seconds is: ${totalSeconds}`);
  
  return totalSeconds;
}

let totalSeconds = convertTimeToSeconds();
  
  // 9.	Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
  function formatTime(allSeconds) {
    // Validate input (optional)
    if (isNaN(allSeconds) || allSeconds < 0) {
      alert("Invalid input: Please enter a non-negative number of seconds.");
    }
  
    // Calculate hours, minutes, and remaining seconds
    const hour = Math.floor(allSeconds / 3600);
    const remainingSeconds = allSeconds % 3600;
    const minute = Math.floor(remainingSeconds / 60);
    const second = remainingSeconds % 60;
  
    // Pad hours, minutes, and seconds with leading zeros (if necessary)
    const formattedHours = String(hour).padStart(2, '0');
    const formattedMinutes = String(minute).padStart(2, '0');
    const formattedSeconds = String(second).padStart(2, '0');
  
    // Return the formatted time string
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
  // Get user input outside the function
  const inputSeconds = parseInt(prompt("Enter the number of seconds:"));
  
  // Check for invalid input before calling the function
  if (isNaN(inputSeconds) || inputSeconds < 0) {
    alert("Invalid input: Please enter a non-negative number of seconds.");
  } else {
    const formattedTimeString = formatTime(inputSeconds);
    alert(`The time is: ${formattedTimeString}`);
  }
  



  