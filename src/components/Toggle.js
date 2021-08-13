import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
        background-color:transparent;
        border:none;
        font-size:1rem;
    `

function Toggle(props){
    const { showInfo, setShowInfo } = props;
    return(
        <StyledButton onClick ={() => setShowInfo(!showInfo)}>{showInfo===true ? '-' : '+' }</StyledButton>
    )
}
 


export default Toggle;