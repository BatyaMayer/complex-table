const invoiceNum = document.getElementById('invoiceNum')


//get a array of randon nums
const ARRAY_LENGTH = 9
const randomArray = []
for (let i = 0; i < ARRAY_LENGTH; i++) {
    randomArray.push(Math.round(getRandomInt(1, 9)))
}
invoiceNum.innerHTML = '#' + randomArray.join('')



//Generate a random num
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
