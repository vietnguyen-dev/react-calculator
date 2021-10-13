import React from 'react'
import styled from 'styled-components'

const ScreenContainer = styled.div`
    color: white;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr;
    margin:0% 30% 0%;
    padding: 2% 3%;
`

const Total = styled.p`
    text-align: right;
    font-size: 10vh
`

const Equation = styled.h3`
    font-weight: bold;
    font-size: 50px;
`

const Screen = props => {
    return (
       <ScreenContainer>
        {props.currentValue}
        <Equation>{props.equation}</Equation>
        <Total>{props.total}</Total>
       </ScreenContainer>
    )
}

export default Screen
