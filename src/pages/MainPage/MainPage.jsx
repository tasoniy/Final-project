import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/report"><Button>Report a theft</Button></Link>
    </>
  )
}

export default MainPage;