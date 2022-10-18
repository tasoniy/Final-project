// clientID 14a1e215-70ba-49b8-8071-22c5732b3b7a
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Content/>
        <Footer/>
      </BrowserRouter>  
    </>
  );
}

export default App;
