function squareSum(numbers) {
    let squareArr = numbers.map(x => x * x);
    let result = 0
    squareArr.forEach(item => {
        result += item

    })
    return result
}
