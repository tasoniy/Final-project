import React from "react";
import styled from "styled-components";

const ListStyle = styled.ul`
  margin: 0;
`

const List = (props) => {
  const {children} = props;
  return (
    <ListStyle>
      {children}
    </ListStyle>
  )
}

export default List;