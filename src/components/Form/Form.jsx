import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styled from "styled-components";

const FormStyle = styled.form`
  display:flex;
  padding 2rem;
  flex-direction: column;
  background-color: #FFFFFF;
`

const CloseButton = styled.button`
  border: none;
  align-self: flex-end;
  text-align: center;
`

const Form = () => {
  return (
    <FormStyle>
      <CloseButton>✖</CloseButton>
      <p >Field with <span style={{color: "red"}}>*</span> are required</p>
      <Input type="text" placeholder="Enter your full name"/>
      <Button type="submit" color='#524EB7'>Submit</Button>
    </FormStyle>
  )
}

export default Form