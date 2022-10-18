import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  background: #FBFBFB;
  border: 1px solid #EEEEEE;
  border-radius: 3px;
  padding:10px;
  font-size: 14px;
  font-weight: 500;
  color: #2B2B37;
  outline: none;
  &::placeholder {
    opacity: 0.3;
  }
`

const LabelStyle = styled.label`
  color: #2B2B37;
`

const Input = (props) => {
  const {type, placeholder} = props
  return (
    <>
      <LabelStyle>Name</LabelStyle>
      <InputStyle type={type} placeholder={placeholder}/>
    </>
  )
}

export default Input;