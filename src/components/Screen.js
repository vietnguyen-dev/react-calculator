import React from 'react'
import styled from 'styled-components'

const ScreenContainer = styled.div`
    background-color: grey;
    color: white;
    height: 25px;
    display: grid;
    grid-template-columns: 1fr
`

const Total = styled.p`
    text-align: right;
`

const Screen = props => {
    return (
       <ScreenContainer>
        {props.equation}
        <Total>{props.total}</Total>
       </ScreenContainer>
    )
}

export default Screen
