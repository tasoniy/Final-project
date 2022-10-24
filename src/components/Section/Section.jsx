import React from "react";
import styled from "styled-components";


const SectionStyle = styled.section`
  width: 100%;
  height: 70vh;
  background: no-repeat url(${props => props.background || "grey"});
  background-position: right top;
  background-size: contain; 
`

const Section = (props) => {
  return (
    <SectionStyle {...props}/>
  )
}

export default Section;