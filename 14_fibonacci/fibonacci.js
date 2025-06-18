const fibonacci = function (num) {
    num = Number(num);
    
    if (num < 0) {
        return "OOPS";
    }
    else if (num == 0) {
        return 0;
    }
    else if (num == 1 || num == 2) {
        return 1;
    }

    let fibonacciArray = [1, 1];

    for (let index = 2; index < num; index++) {
        fibonacciArray.push(fibonacci(index) + fibonacci(index - 1));

    }

    return fibonacciArray[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
