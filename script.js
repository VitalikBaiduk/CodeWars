function sq(arr) {
    // debugger
    let res = 0
    let newNum = arr.reduce((ac, el) => {
        return ac += el
    })
     res = newNum / arr.length
    return Math.floor(res)
}

console.log(sq([5,5,5]))
