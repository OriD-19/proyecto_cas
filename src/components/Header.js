import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: papayawhip;
  font-size: 3rem;
`;

const Wrapper = styled.header`
  height: 10%;
  background-color: steelblue;
  padding: 10px;
  margin: 0 10px 10px 10px;
  text-align: center;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <Title>Cien años de soledad</Title>
      </Wrapper>
    </>
  );
};

export default Header;
