import React from 'react'
import buttonValues from './buttonValues'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

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
    const dispatch = useDispatch()

    return (
        <ButtonGrid>
            {buttonValues.map(button =>
                <CalculatorButton key={button.id} value={button.value} onClick={() =>dispatch(button.action)}>{button.value}</CalculatorButton>)}
        </ButtonGrid>
    )
}

export default ButtonPad
