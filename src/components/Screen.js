import React from 'react'
import styled from 'styled-components'

const ScreenContainer = styled.div`
    color: white;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr;
    margin:0% 30% 0%;
    padding: 2% 3%;
`

const Total = styled.p`
    text-align: right;
    font-size: 10vh
`

const Screen = props => {
    return (
       <ScreenContainer>
        {/* {props.equation} */}
        <Total>{props.total}</Total>
       </ScreenContainer>
    )
}

export default Screen
