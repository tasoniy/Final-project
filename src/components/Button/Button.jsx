import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin: 7px ;
  color: #FFFFFF;
  background-color: ${props => props.color || "#64D370"};
  border: none;
  border-radius: ${props => props.borderRadius || "30px"};
  padding: 10px 40px;
  font-size: 25px;
  cursor: pointer;
  transform: scale(1);
  transition: .2S linear;
  &:hover{
    transform: scale(1.1);
  }
`

const Button = (props) => {
  const {click} = props;
  return (
    <ButtonStyle onClick={click} {...props}/>
  )
}

export default Button;