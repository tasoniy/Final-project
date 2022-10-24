import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";


const MainStyle = styled.main`
  min-height: 70vh;
`

const Main = (props) => {
  const {children} = props;
  return (
    <MainStyle>
      <Container>
        {children}
      </Container>
    </MainStyle>
  )
}

export default Main;