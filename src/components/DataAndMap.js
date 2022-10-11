import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: papayawhip;
  background: rgba(255, 99, 71, 0.8);
  padding: 10px;
  border-radius: 5px;
`;

const GridAdjust = styled.div`
  grid-column: 6 / 13;
`;

const Sect = styled.section`
  background-color: steelblue;
  margin: 0 10px;
  min-height: 100%;
  padding: 20px;
`;

const Places = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 15px;
  margin: 15px;
  background-color: papayawhip;
  border-radius: 10px;
  border: 2px solid tomato;
`;

const Button = styled.button`
  border-radius: 5px;
  border: 2px solid tomato;
  background: none;
  color: tomato;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
`;

const Data = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
`;

const Map = styled.img`
  max-width: 70%;
  height: auto;
  filter: drop-shadow(8px 8px 10px papayawhip) sepia(50%);
`;

const DisplayZone = ({ zone }) => {
  if (zone === "ss") {
    return (
      <>
        <Map src="./img/san_salvador.PNG" alt="Mapa de San Salvador" />
      </>
    );
  } else if (zone === "sm") {
    return (
      <>
        <Map src="./img/san_miguel.png" alt="Mapa de San Salvador" />
      </>
    );
  } else if (zone === "st") {
    return (
      <>
        <Map src="./img/santa_tecla.PNG" alt="Mapa de San Salvador" />
      </>
    );
  }

  return (
    <>
      <Map src="./img/el_salvador.PNG" alt="Mapa de San Salvador" />
    </>
  );
};

const DataAndMap = ({ rain, zone, setZone }) => {
  return (
    <>
      <GridAdjust>
        <Sect>
          <Title>Lluvia aplicada a El Salvador</Title>
          <Places>
            <Button
              id={zone === "ss" ? "active" : ""}
              onClick={() => setZone("ss")}
            >
              San Salvador
            </Button>
            <Button
              id={zone === "sm" ? "active" : ""}
              onClick={() => setZone("sm")}
            >
              San Miguel
            </Button>
            <Button
              id={zone === "st" ? "active" : ""}
              onClick={() => setZone("st")}
            >
              Santa Tecla
            </Button>
            <Button
              id={zone === "sv" ? "active" : ""}
              onClick={() => setZone("sv")}
            >
              El Salvador
            </Button>
          </Places>
          <Data>
            <div style={{ width: "100%" }}>
              <DisplayZone zone={zone} />
            </div>
          </Data>
        </Sect>
      </GridAdjust>
    </>
  );
};

export default DataAndMap;
