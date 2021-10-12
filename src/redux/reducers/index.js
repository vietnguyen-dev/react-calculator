const defaultState = {
    currentValue: '',
    total: 0,
    operator: ''
}

const calculateTotal = (stringNum, intNum, operator) =>{
    const value = parseInt(stringNum, 10);
    switch(operator){
        case "+":
            return value + intNum
        case "-":
            return intNum - value
        case '*':
            return value * intNum
        case '/':
            return intNum / value
        default:
            console.error(`calculateTotal error: stringNum: ${stringNum}, intNum: ${intNum}, operator: ${operator}`)
    }
}

const calculatorReducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'CURRENT_NUM':
            return {...state, currentValue: state.currentValue + action.value}
        case 'ADD':
            return {...state, currentValue: '', total: parseInt(state.currentValue, 10) + state.total, operator: '+'}
        case "SUBTRACT":
            return {...state, currentValue: '', total: parseInt(state.currentValue, 10) - state.total, operator: '-'}
        case 'MULTIPLY':
            return {...state, currentValue: '', total: parseInt(state.currentValue, 10) * state.total, operator: '*'}
        case 'DIVIDE':
            return {...state, currentValue: '', total: parseInt(state.currentValue, 10) / state.total, operator: '/'}
        case "EQUAL":
            let newtotal = calculateTotal(state.currentValue, state.total, state.operator)
            return {...state, currentValue: '', total: newtotal, operator: '' }
        default:
            return state
    }
}

export default calculatorReducer