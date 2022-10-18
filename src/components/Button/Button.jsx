import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin: 7px auto;
  color: #FFFFFF;
  background-color: ${props => props.color || "#64D370"};
  border: none;
  border-radius: ${props => props.borderRadius || "30px"};
  padding: 10px 60px;
  font-size: 18px;
  cursor: pointer;
`

const Button = (props) => {
  const {click} = props
  return (
    <ButtonStyle onClick={click} {...props}/>
  )
}

export default Button;