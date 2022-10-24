import React from "react";
import styled from "styled-components";

const LiStyle = styled.li`
  list-style-type: none;
`

const Item = (props) => {
  const {children} = props;
  return (
    <LiStyle>
      {children}
    </LiStyle>
  )
}

export default Item;
