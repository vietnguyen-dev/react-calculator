const continueCurrentNum = value =>{
    return {
        type: 'CURRENT_NUM',
        value: value
    }
}

const add = value =>{
    return {
        type: 'ADD',
        value: value
    }
}

const subtract = value =>{
    return{
        type: 'SUBTRACT',
        value: value
    }
}

const multiply = value =>{
    return{
        type: 'MULTIPLY',
        value: value
    }
}

const divide = value =>{
    return{
        type: 'DIVIDE',
        value: value
    }
}

const equal = () =>{
    return {
        type: 'EQUAL'
    }
}

export {continueCurrentNum, add, subtract, multiply, divide, equal}