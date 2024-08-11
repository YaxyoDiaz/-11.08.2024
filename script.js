let start = 50;
let end = 100;
let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}

console.log(sum);

// Функция для вычисления НОД с использованием алгоритма Евклида
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Запрашиваем два числа у пользователя
const num1 = parseInt(prompt("Введите первое число:"), 10);
const num2 = parseInt(prompt("Введите второе число:"), 10);

// Проверяем, что оба числа валидны
if (!isNaN(num1) && !isNaN(num2)) {
    const result = gcd(num1, num2);
    console.log(`Наибольший общий делитель чисел ${num1} и ${num2} равен ${result}`);
} else {
    console.log("Пожалуйста, введите допустимые числа.");
}

// Запрашиваем у пользователя число
let number1 = parseInt(prompt("Введите число:"));

// Проверяем, является ли введенное значение числом
if (isNaN(number)) {
    console.log("Это не число.");
} else {
    console.log(`Делители числа ${number}:`);
    // Находим и выводим все делители числа
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}

// Запрашиваем у пользователя число
let number2 = parseInt(prompt("Введите число:"));

// Проверяем, является ли введенное значение числом
if (isNaN(number)) {
    console.log("Пожалуйста, введите корректное число.");
} else {
    console.log(`Делители числа ${number}:`);
    // Находим и выводим все делители числа
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}

// Запрашиваем у пользователя число
let number3 = prompt("Введите число:");

// Проверяем, является ли введенное значение числом
if (isNaN(number)) {
    console.log("Пожалуйста, введите корректное число.");
} else {
    // Убираем возможный знак минуса перед числом и считаем количество цифр
    let digitCount = number.replace('-', '').length;
    console.log(`Количество цифр в числе ${number}: ${digitCount}`);
}

// Инициализация счетчиков
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

// Цикл для ввода 10 чисел
for (let i = 0; i < 10; i++) {
    let number = parseFloat(prompt(`Введите число ${i + 1}:`));

    // Проверка числа
    if (isNaN(number)) {
        console.log("Это не число, попробуйте снова.");
        i--; // Уменьшаем счетчик, чтобы запросить число повторно
        continue;
    }

    // Подсчет положительных, отрицательных и нулей
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }

    // Подсчет четных и нечетных чисел
    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

// Вывод статистики
console.log(`Положительных чисел: ${positiveCount}`);
console.log(`Отрицательных чисел: ${negativeCount}`);
console.log(`Нулей: ${zeroCount}`);
console.log(`Четных чисел: ${evenCount}`);
console.log(`Нечетных чисел: ${oddCount}`);
let continueCalculation = true;

while (continueCalculation) {
    // Запрашиваем у пользователя два числа
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    let operator = prompt("Введите знак операции (+, -, *, /):");

    // Проверяем, является ли введенное значение числом
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Вы ввели не число. Попробуйте снова.");
        continue;
    }

    // Переменная для хранения результата
    let result;

    // Выполняем операцию в зависимости от введенного знака
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            // Проверка на деление на ноль
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Ошибка: деление на ноль!");
                continue;
            }
            break;
        default:
            console.log("Неверный знак операции. Попробуйте снова.");
            continue;
    }

    // Выводим результат
    console.log(`Результат: ${num1} ${operator} ${num2} = ${result}`);

    // Спрашиваем у пользователя, хочет ли он выполнить еще один расчет
    let userChoice = prompt("Хотите выполнить еще один расчет? (да/нет)").toLowerCase();
    if (userChoice !== "да") {
        continueCalculation = false;
    }
}

console.log("Спасибо за использование калькулятора!");

// Запрашиваем у пользователя число и количество сдвигов
let number4 = prompt("Введите число:");
let shift = parseInt(prompt("На сколько цифр сдвинуть число?"));

// Проверяем, что ввод корректный
if (isNaN(shift) || isNaN(parseInt(number))) {
    console.log("Некорректный ввод. Пожалуйста, введите число.");
} else {
    // Нормализуем значение сдвига, чтобы оно не превышало длину числа
    shift = shift % number.length;

    // Выполняем сдвиг
    let shiftedNumber = number.slice(shift) + number.slice(0, shift);

    // Выводим результат
    console.log(`Результат сдвига: ${shiftedNumber}`);
}

// Массив с днями недели
let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

// Инициализация переменной для цикла
let continueLoop = true;
let dayIndex = 0;

// Цикл вывода дней недели
while (continueLoop) {
    alert(`День недели: ${daysOfWeek[dayIndex]}`);
    
    // Проверяем, хочет ли пользователь увидеть следующий день
    continueLoop = confirm("Хотите увидеть следующий день?");
    
    // Переходим к следующему дню
    dayIndex = (dayIndex + 1) % daysOfWeek.length;
}

console.log("Цикл завершен.");

// Цикл по числам от 2 до 9
for (let i = 2; i <= 9; i++) {
    console.log(`Таблица умножения для ${i}:`);

    // Цикл умножения на числа от 1 до 10
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }

    // Пустая строка для разделения таблиц
    console.log("");
}

// Начальные границы диапазона
let min = 0;
let max = 100;
let guessed = false;

alert("Загадайте число от 0 до 100, и я попробую его угадать.");

while (!guessed) {
    // Определяем среднее значение диапазона
    let N = Math.floor((min + max) / 2);

    // Спрашиваем у пользователя, больше, меньше или равно загаданное число N
    let answer = prompt(`Ваше число > ${N}, < ${N} или == ${N}? Введите '>', '<' или '=='`);

    // Обрабатываем ответ пользователя
    if (answer === ">") {
        min = N + 1;
    } else if (answer === "<") {
        max = N - 1;
    } else if (answer === "==") {
        alert(`Угадал! Ваше число: ${N}`);
        guessed = true;
    } else {
        alert("Пожалуйста, введите корректный ответ ('>', '<', '==').");
    }
}

console.log("Спасибо за игру!");