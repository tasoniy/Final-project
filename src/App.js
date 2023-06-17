import { BrowserRouter, Routes, Route  } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignIn/SignIn";
import ReportForm from "./pages/ReportForm/ReportForm";
import SignUp from "./pages/SignUp/SignUp";
import OfficersList from "./pages/OfficerList/OfficersList";
import reportImage from "./assets/report.png";
import signInImage from "./assets/auth.png";
import signupImage from "./assets/signup.png"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Main>
          <Routes>
            <Route path="/" element={
              <Section>
                <MainPage/>
              </Section>}/>
            <Route path="/login" element={
              <Section background={signInImage}>
                <SignInPage/>
              </Section>}/>
            <Route path="/report" element={
              <Section background={reportImage}>
                <ReportForm/>
              </Section>}/>
            <Route path="/registration" element={
              <Section background={signupImage}>
                <SignUp/>
              </Section>}> 
            </Route>
            <Route path="/officers" element={<OfficersList/>}/>
          </Routes>
        </Main>
        <Footer/>
      </BrowserRouter>  
    </>
  );
}

export default App;
