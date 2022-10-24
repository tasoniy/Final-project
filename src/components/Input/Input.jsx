import React, { useState } from "react";
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
  font-size: 13px;
  margin: 5px 0;
`

const Input = (props) => {
  const {type, placeholder, label, required} = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => { 
    setInputValue(e.target.value);
    console.log(inputValue);
  }
  return (
    <>
      <LabelStyle>{label} {required ? <span style={{color: "red"}}>*</span> : ''}</LabelStyle>
      <InputStyle onChange={handleChange} value={inputValue} type={type} required={required} placeholder={placeholder}/>
    </>
  )
}

export default Input;