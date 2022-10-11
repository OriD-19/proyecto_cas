import React, { useState } from "react";
import styled from "styled-components";
import Calculator from "./Calculator";
import DataAndMap from "./DataAndMap";
import Comparison from "./Comparison";

const Layout = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 70vh;
`;

const Wrapper = styled.div`
  margin: 10px 10px 0 10px;
  padding-bottom: 5vh;
  margin-top: 3%;
  text-align: center;
`;

const Content = () => {
  const [rain, setRain] = useState(0);
  const [zone, setZone] = useState("San Salvador");

  return (
    <>
      <Wrapper>
        <Layout>
          <Calculator changeRain={setRain} rain={rain} />
          <DataAndMap zone={zone} setZone={setZone} />
        </Layout>
        <Comparison zone={zone} rain={rain} />
      </Wrapper>
    </>
  );
};

export default Content;
