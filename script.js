let minNum = (arr) => {
    let res = arr[0]
    arr.map((el) => {
        if (el < res) {
            res = el
        }
        return res
    })
    return res
}

console.log(minNum([78,56,232,12,8]))