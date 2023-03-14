const colorPicker = document.getElementById('picker')
const getButton = document.getElementById('get-btn')
const colorsHtml = document.getElementById('colors')
const colorCodesHtml = document.getElementById('color-codes')
const schemeList = document.getElementById('scheme')

getButton.addEventListener('click', renderColors)

function getHtml(data) {
    for (let item of data.colors) {
        colorsHtml.innerHTML += `<div class="block" style="background-color: ${item.hex.value}"></div>`
        colorCodesHtml.innerHTML += `<div class="code1 code">${item.hex.value}</div>`
    }
}

function renderColors(e) {
    e.preventDefault()
    
    let colorCode = colorPicker.value.slice(1)
    colorsHtml.innerHTML = ''
    colorCodesHtml.innerHTML = ''
    
    if (schemeList.value === 'Monochrome') {
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=monochrome`)
        .then(res => res.json())
        .then(data => {
            getHtml(data)
        })  
    } else if (schemeList.value === 'Analogic') {
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=analogic`)
        .then(res => res.json())
        .then(data => {
            getHtml(data)
        })  
    } else if (schemeList.value === 'Triad') {
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=triad`)
        .then(res => res.json())
        .then(data => {
            getHtml(data)
        })  
    }
}



