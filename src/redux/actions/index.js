export const continueCurrentNum = value =>{
    return {
        type: 'CURRENT_NUM',
        value: value
    }
}

export const operator = value =>{
    return {
        type: 'OPERATOR',
        value: value
    }
}

export const equal = () =>{
    return {
        type: 'EQUAL'
    }
}

export const clear = () =>{
    return{
        type: 'CLEAR'
    }
}

export const percent = () =>{
    return {
        type: 'PERCENT'
    }
}

export const switchAbsoluteValue = () =>{
    return{
        type: 'SWITCH_ABSOLUTE_VALUE'
    }
}