const display = document.querySelector('.display')

const data = {
    value1: 0,
    value2: 0,
    number: true,
    operator: '',
    result: 0,
    getResult() {
        console.log(this.operator)

        switch(this.operator) {
            case '+':
                this.result = Number(this.value1) + Number(this.value2)
                break
            case '-':
                this.result = Number(this.value1) - Number(this.value2)
                break
            case '*':
                this.result = Number(this.value1) * Number(this.value2)
                break
            case '/':
                this.result = Number(this.value1) / Number(this.value2)
                break
        }
    }
}

function clean() {
    display.innerHTML = '0'
}

function clickButton(value) {
    if(data.number) {
        if(display.innerHTML == '0') display.innerHTML = value
        else display.innerHTML += value

        data.value1 = display.innerHTML
        
        console.log('value1) ' + data.value1)
    } else {
        if(display.innerHTML == '0') display.innerHTML = value
        else display.innerHTML += value

        data.value2 = display.innerHTML

        console.log('value2) ' + data.value2)
    }
}

function clickOperator(value) {
    data.operator = value
    data.number = 
    
    console.log(data.operator)

    clean()
}

function showResult() {
    data.getResult()

    display.innerHTML = data.result
    data.number = true

    data.value1 = 0
    data.value2 = 0
}

function signal() {
    const num = Number(display.innerHTML) * -1
    display.innerHTML = num

    if(data.value2 == 0) data.value1 = num
    if(data.value1 != 0) data.value2 = num
}