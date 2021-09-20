function countSheeps(arrayOfSheep) {
    arrayOfSheep.forEach((item,index) => {
        let count = 0
        if (item[index]) {
            return count++
        }
        return count
    })
}
let array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
];

countSheeps(array1)