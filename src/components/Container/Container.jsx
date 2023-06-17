import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  ${props => props.display};
  box-sizing: border-box;
  max-width:1230px;
  margin:0 auto;
  width: 100%;
  height: 100%;
  padding: 0 8rem;
`

const Container = (props) => {
  return (
    <ContainerStyle {...props}/>
  )
}

export default Container;