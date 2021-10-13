const defaultState = {
    currentValue: '',
    total: 0,
    operator: '',
    equation: '',
}

const calculateTotal = (stringNum, intNum, operator) =>{
    const value = parseInt(stringNum, 10);
    switch(operator){
        case "+":
            return intNum + value
        case "-":
            return intNum - value
        case '*':
            return intNum * value
        case '/':
            return intNum / value
        default:
            console.error(`calculateTotal error: stringNum: ${stringNum}, intNum: ${intNum}, operator: ${operator}`)
    }
}

const getPercent = stringValue =>{
    let intValue = parseInt(stringValue, 10)
    let percent = intValue / 100
    return percent.toString()
}

const switchValue = stringValue =>{
    let intValue = parseInt(stringValue, 10)
    let switchedVal = intValue * -1
    return switchedVal.toString()
}


const calculatorReducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'CURRENT_NUM':
            return {...state, currentValue: state.currentValue + action.value, equation: state.equation + action.value}
        case 'OPERATOR':
            if (state.total === 0){
                return {...state, currentValue: '', total: parseInt(state.currentValue, 10), operator: action.value , equation: state.equation + action.value}
            } else {
                let operatorTotal = calculateTotal(state.currentValue, state.total, action.value)
                return {...state, currentValue: '', total: operatorTotal, operator: action.value , equation: state.equation + action.value}
            }
        case "EQUAL":
            let equalTotal = calculateTotal(state.currentValue, state.total, state.operator)
            return {...state,currentValue: "", total: equalTotal, operator: '' }
        case 'CLEAR':
            return {...state, currentValue: '', total: 0, operator: ''}
        case 'PERCENT':
            let percentValue = getPercent(state.currentValue)
            return { ...state, currentValue: percentValue}
        case 'SWITCH_ABSOLUTE_VALUE':
            let switchedValue = switchValue(state.currentValue)
            return {...state, currentValue: switchedValue}
        default:
            return state
    }
}

export default calculatorReducer