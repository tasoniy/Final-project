import React from "react";
import { NormalizeLink } from "../../components/Header/Header";
import styled from "styled-components";
import { lightPurple, purple } from "../../assets/Pallete/Pallete";
import Button from "../../components/Button/Button";

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
  return(
    <>
      <TitleStyle>Find bike</TitleStyle>
      <ParagraphStyle>
        If your bike has been stolen, please click button below <br />
        and fill out the form or give us a call.
      </ParagraphStyle>
      <Button><NormalizeLink to="/report">Report a theft</NormalizeLink></Button>
    </>
  )
}

export default MainPage;