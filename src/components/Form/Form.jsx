import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styled from "styled-components";
import { lightGreen, white } from "../../assets/Pallete/Pallete";

const FormStyle = styled.form`
  display:flex;
  margin-top: 20px;
  width:35%;
  padding 1.5rem;
  flex-direction: column;
  background-color: #FFFFFF;
`

const CloseButton = styled.button`
  border: none;
  background-color:${white};
  align-self: flex-end;
  text-align: center;
`

const Form = (props) => {
  const {children, submit} = props;

  const submitForm = (event) => {
    event.preventDefault();
    submit();
  }
  return (
    <FormStyle onSubmit={submitForm}>
      <CloseButton><Link to="/">✖</Link></CloseButton>
      <p>Required field <span style={{color: "red"}}>*</span></p>
      {children}
      <Button type="submit" color={lightGreen}>Submit</Button>
    </FormStyle>
  )
}

export default Form