function max(first , second) {
    if (first > second)
        return first;
    else
        return second;
}
function max2 (a , b) {
    return a > b ? a : b;
}

let num1 = 5
let num2 = 10
console.log(max(num1, num2))

num1 = 7
num2 = 2
console.log(max2(num1, num2))

//////////////////////////////////////////////////////////////////////////////////////////////////

function whatType( variable) {
    return typeof (variable) === 'string'
}

console.log(whatType("string"))
console.log(whatType(1))

/////////////////////////////////////////////////////////////////////////////////////////////////

function fizzbuzz ( number )
{
    if (number%15 === 0)
        return "fizzbuzz"
    else if (number%3 === 0)
        return "fizz"
    else if (number%5 === 0)
        return number
    else
        return false
}

console.log("this is a " + fizzbuzz(3) + " number")
console.log(fizzbuzz(5))
console.log(fizzbuzz(15))
console.log(fizzbuzz(2))

/////////////////////////////////////////////////////////////////////////////////////////////////

function sqrt( number ) {
    let i = 0
    do {
        i++
    }
    while (i**2 <= number)
    return i - 1;
}

function firstSquare (number) {
    return (Math.sqrt(number) + 1)**2;
}

console.log(firstSquare(144))

/////////////////////////////////////////////////////////////////////////////////////////////////

function completeNumber (number) {
    let sum = 1
    if (number >= 1 && number <= 200000) {
        if(number === 1)
            return false
        for (let i = 2; i < Math.sqrt(number); i++) {
            if (number % i === 0) {
                sum += i
                sum += (number / i)
            }
        }
        if (sum === number)
            return true
        else
            return false
    }
    else
        return "not in range"
}

function printAllCompleteNumbers() {
    for (let i = 1 ; i <= 2000 ; i++)
    {
       if( completeNumber(i) )
           console.log(i)
    }

}

console.log(completeNumber(6))
console.log(completeNumber(1))
console.log(completeNumber(496))
printAllCompleteNumbers()

/////////////////////////////////////////////////////////////////////////////////////////////////

function isPrime (number) {
    if(number === 2 || number === 3)
        return true
    else if (number === 1 || number === 4) {
        return false
    }
    else {
        for (let i = 2; i < (number / 2); i++) {
            if (number % i === 0)
                return false
        }
        return true
    }
}

function primeNumbers(a , b)
{
    let arr=[]
    for (let i = a ; i <= b ; i++)
    {

        if (isPrime(i))
            arr.push(i)
    }
    return arr;
}
console.log(primeNumbers(1 , 20))

////////////////////////////////////////////////////////////////////////////////////////////////

function isHardPrime (number)
{
    let temp = number
    while (temp > 0) {
        temp = (temp - (temp % 10)) / 10
        if (!(isPrime(temp)))
            return false
    }
    return true
}

function allHardPrimes(length)
{
    let arr = []
    for (let i = 10**(length-1) ; i < 10**(length)-1 ; i++)
    {
        if(isPrime(i)) {
            if (isHardPrime(i))
                arr.push(i)
        }
    }
    return arr
}

console.log(allHardPrimes(3))

////////////////////////////////////////////////////////////////////////////////////////////////