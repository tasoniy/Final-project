import React, { useState } from "react";
import styled from "styled-components";
import { lightPurple, purple } from "../../assets/Pallete/Pallete";
import Button from "../Button/Button";
import Form from "../Form/Form";

const TitleStyle = styled.h1`
  font-size: 200%;
  font-weight: 700;
  color: ${lightPurple};
`

const ParagraphStyle = styled.p`
  font-size: 1em;
  color: ${purple};
`

const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  return(
    <>
      <TitleStyle>Find bike</TitleStyle>
      <ParagraphStyle>
        If your bike has been stolen, please fill out the form or give us a call.
      </ParagraphStyle>
      {
        isClicked ? <Form/> : 
        <>
          <Button click={() => setIsClicked(true)}>Report theft</Button>
          <br />
          <span>or</span>
          <div>
            <h3>Call Us</h3>
            <span>+7(123)456-78-90</span>
          </div>
        </>
      }
    </>
  )
}

export default MainPage;