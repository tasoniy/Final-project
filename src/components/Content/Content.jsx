import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import mainImage from "../../assets/main-img.png"
import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import CreateAccountForm from "../CreateAccountForm/CreateAccountForm";
import Employees from "../Employees/Employees"
import MainPage from "../MainPage/MainPage";
import ReportOfTheftForm from "../ReportOfTheftForm/ReportOfTheftForm";
import { Container } from "../Wrappers/Wrappers";

const MainStyle = styled.main`
  padding-bottom: 200px;
  background: no-repeat url(${mainImage});
  background-position: top right;
  background-size: 60%;
`

const Content = () => {
  return (
    <MainStyle>
      <Container>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/authorization" element={<AuthForm/>}></Route>
          <Route path="/registration" element={<CreateAccountForm/>}></Route>
          <Route path="/employees" element={<Employees/>}></Route>
          <Route path="/report" element={<ReportOfTheftForm/>}></Route>
        </Routes>
      </Container>
    </MainStyle>
  )
}

export default Content