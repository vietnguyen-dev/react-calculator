import {continueCurrentNum, operator, equal, clear, percent, switchAbsoluteValue } from '../redux/actions/index';

let buttonValues = [
    {id: 0, value: 'AC', action: clear()},
    {id: 1, value: '+/-', action: switchAbsoluteValue()}, 
    {id: 2, value: '%', action: percent()}, 
    {id: 4, value: '/', action: operator('/')},

    {id: 5, value: '7', action: continueCurrentNum('7') },
    {id: 6, value: '8', action: continueCurrentNum('8') },
    {id: 8, value: '9', action: continueCurrentNum('9') },
    {id: 9, value: '*', action: operator('*')},
    
    {id: 10, value: '4', action: continueCurrentNum('4') }, 
    {id: 11, value: '5', action: continueCurrentNum('5') },
    {id: 12, value: '6', action: continueCurrentNum('6') },
    {id: 13, value: '-', action: operator('-')},
    
    {id: 14, value: '1', action: continueCurrentNum('1') },
    {id: 15, value: '2', action: continueCurrentNum('2') },
    {id: 16, value: '3', action: continueCurrentNum('3') },
    {id: 17, value: '+', action: operator('+')},
    
    {id: 18, value: '0', action: continueCurrentNum('0') },
    {id: 19, value: '.', action: continueCurrentNum('.') },
    {id: 20, value: '=', action: equal()},

]

export default buttonValues