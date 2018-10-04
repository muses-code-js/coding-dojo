const _ = require('lodash');

const BASE_PRICE = 8
const DISCOUNTS = [0,
                  1,
                  0.95,
                  0.9,
                  0.8,
                  0.75
                ]
const BOOKS = [0,1,2,3,4]

function potter(books = []){
    let totalPrice = 0
    let freqList = freq(books)

    freqList.filter((f) => {
        return f != 0
    })
    totalPrice += BASE_PRICE * freqList.length * DISCOUNTS[freqList.length]
    return totalPrice
}
function freq(books=[]){
    const countingBooks = [0, 0, 0, 0, 0]
    books.forEach((book) => {
        countingBooks[book] += 1
    })
    return countingBooks
}
        

module.exports={potter, freq};