// const resultEl = document.getElementById('result')
// const lengthEl = document.getElementById('length')
// const uppercaseEl = document.getElementById('uppercase')
// const lowercaseEl = document.getElementById('lowercase')
// const numbersEl = document.getElementById('numbers')
// const symbolsEl = document.getElementById('symbols')
// const generateEl = document.getElementById('generate')
// const clipboardEl = document.getElementById('clipboard')



// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }

// const getRandomUpper =() => {
//     return String.fromCharCode(Math.floor(Math.random()*26)+ 65)
// }

// const getRandomNumber=()=>{
//     return String.fromCharCode(Math.floor(Math.random()* 10)+48)
// }

// const getRandomSymbol=()=> {
//     const symbols = '!@#$%^&*(){}[]=<>/,.'

//     return symbols[String.fromCharCode(Math.floor(Math.random()* symbolsEl.length))]
// }

// const randomFunc = {
//     lower: getRandomLower,
//     upper:getRandomUpper,
//     number:getRandomNumber,
//     symbol:getRandomSymbol
// }


// generateEl.addEventListener('click', ()=>{
//     const length= +lengthEl.value
//     const hasLower= lowercaseEl.checked
//     const hasUpper = uppercaseEl.checked
//     const hasNumber = numbersEl.checked
//     const hasSymbol= symbolsEl.checked

//     console.log(hasLower, hasUpper,hasSymbol,hasNumber);
//     console.log(hasLower + hasUpper + hasNumber + hasSymbol);


//     resultEl.innerTexT = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)


// })


// function generatePassword(lower, upper, number, symbol, length){
//     let generatedPassword = ''
//     const typesCount = lower + upper + number + symbol
// // typesCount gives us the number how many are selected
//     const typesArr = [{lower}, {upper}, {number},{symbol}].filter(item => Object.values(item)[0])
//     console.log(typesArr);

//     // typesArr is a array of Objects with key:value pairs.  Item is the obj, lower, upper, number, symbol are keys and wheather checked or not checked (true or false) is the value. Object.vlaues(obj) is a method which gives only the values of the obj passed as parameter. And filter() works just like forloop which runs itself until the end of array or obj to find the values which satisfy the filter condition.
//     //   filter(item => Object.values(item)[0])  here the filter condition is it to return the elements which are present at the top of typesErr. false keys are like not present. Therefore this function returns only the true values of the item objs of typeArr. 
//     if (typesCount === 0) {return}

//     for(let i=0; i< length; i += typesCount){
//         typesArr.forEach(type => {
//             const funcName = Object.keys(type)[0]
//             console.log(funcName);
//             generatedPassword += randomFunc[funcName]()
//         })
//     }
//     const finalPassword = generatedPassword.slice(0,length)
//     console.log(finalPassword);
//     return finalPassword;
// }



const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    
    document.execCommand('copy')
    textarea.remove()
    // console.log(textarea);
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
            // randomFunc object doesnt have () with its vlaue functions
           
        })
    }
    console.log(generatedPassword);
    const finalPassword = generatedPassword.slice(0,length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}