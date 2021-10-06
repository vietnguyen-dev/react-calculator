import React from 'react'
import buttonValues from './buttonValues'
import styled from 'styled-components'

const ButtonGrid = styled.div`
    width: 250px;
    height: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const ButtonPad = props => {

    const newVal = val =>{
        props.addValue(val)
    }

    return (
        <ButtonGrid>
            {buttonValues.map(button =>
                <button key={button.id} value={button.value} onClick={(e) => newVal(e.target.value)}>{button.value}</button>)}
        </ButtonGrid>
    )
}

export default ButtonPad
