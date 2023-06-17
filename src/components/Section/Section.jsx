import React from "react";
import styled from "styled-components";


const SectionStyle = styled.section`
  position:relative;
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