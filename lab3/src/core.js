/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) 
{
    return ~~n === n;
}

/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() 
{
    const evenArray = [];
    for (let index = 2; index <= 20; index += 2)
    {
        evenArray.push(index);
    }
    return evenArray;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n)
{
    let sum = 0;
    for (let index = 1; index <= n; index++)
    {
        sum += index;
    }

    return sum;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) 
{
    return n <= 1 ? n : n + recSumTo(n - 1);
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n)
{
    let factorial = 1;
    for (let index = 2; index <=  n; index++)
    {
        factorial *= index;
    }

    return factorial;
}

/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n)
{
    return n > 0 && (n & (n - 1)) === 0
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n)
{
    const sqrt5 = 5 ** 0.5;
    const a = (1 + sqrt5) / 2;
    const b = (1 - sqrt5) / 2;

    return ~~(((a ** n) - (b ** n)) / sqrt5);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn)
{
    let current = initialValue;
    return function(value)
    {
        if (typeof operatorFn === 'function') 
        {
            current = operatorFn(current, value);
        }
        
        return current; 
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step)
{
    let current = start !== undefined ? start : 0;
    let actualStep = step !== undefined ? step : 1;    

    return function()
    {
        const result = current;
        current += actualStep;

        return result;
    };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject)
{
    if (firstObject === secondObject)
    {
        return true;
    }

    if (firstObject !== firstObject && secondObject !== secondObject) 
    {
        return true;
    }

    if (typeof firstObject !== 'object' || typeof secondObject !== 'object' ||
        firstObject === null || secondObject === null) 
    {
        return false;
    }

    for (const key in firstObject) 
    {
        if (!(key in secondObject) || !deepEqual(firstObject[key], secondObject[key]))
        {
            return false;
        }
    }

    for (const key in secondObject) 
    {
        if (!(key in firstObject))
        {
            return false;
        }
    }
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
