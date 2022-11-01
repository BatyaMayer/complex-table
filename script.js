const invoiceNum = document.getElementById('invoiceNum')
const elDate = document.getElementById('date')
const date = new Date()
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


let dayOfMonth = date.getDate()
let monthName = months[date.getMonth()]
let year = date.getFullYear()

let fullDate = `${dayOfMonth} ${monthName} ${year}`
elDate.innerHTML = fullDate


//get a array of randon nums
const ARRAY_LENGTH = 9
const randomArray = []
for (let i = 0; i < ARRAY_LENGTH; i++) {
    randomArray.push(Math.round(getRandomInt(1, 9)))
}

//Render invoice number 
invoiceNum.innerHTML = '#' + randomArray.join('')



//Generate a random num
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
