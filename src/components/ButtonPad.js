import React from 'react'
import buttonValues from './buttonValues'
import styled from 'styled-components'

const ButtonGrid = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 4%;
    grid-gap: 3%;
`

const CalculatorButton = styled.button`
    border-radius: 50%;
    border: none;
`

const ButtonPad = props => {
    const newVal = val =>{
        props.addValue(val)
    }

    return (
        <ButtonGrid>
            {buttonValues.map(button =>
                <CalculatorButton key={button.id} value={button.value} onClick={(e) => newVal(e.target.value)}>{button.value}</CalculatorButton>)}
        </ButtonGrid>
    )
}

export default ButtonPad
