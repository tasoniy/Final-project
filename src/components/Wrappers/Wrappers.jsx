import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  ${props => props.display};
  box-sizing: border-box;
  width: 100%;
  padding: 0 80px;
`

const Container = (props) => {
  return (
    <ContainerStyle {...props}/>
  )
}

export {Container};