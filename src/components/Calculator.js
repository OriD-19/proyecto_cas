import React, { useRef } from "react";
import styled from "styled-components";
import { MathComponent } from "mathjax-react";

const Title = styled.h1`
  color: papayawhip;
  background: rgba(255, 99, 71, 0.8);
  padding: 10px;
  border-radius: 5px;
`;

const Desc = styled.p`
  text-align: center;
  margin: 10px 0;
`;

const GridAdjust = styled.div`
  grid-column: 1 / 6;
`;

const Sect = styled.section`
  background-color: steelblue;
  margin: 0 10px;
  min-height: 100%;
  padding: 20px;
`;

const DaysInput = styled.input`
  border-radius: 10px;
  width: 25%;
  text-align: center;
  height: 40px;
  font-size: 25px;
  background-color: rgb(255, 255, 213);
  border: none;
`;

const Result = styled.div`
  background-color: salmon;
  text-align: center;
  font-size: 1.5rem;
  padding: 15px;
  margin: 10px;
  margin-top: 10%;
  border: 2px solid papayawhip;
  border-radius: 8px;
`;

const Highlight = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NotableDates = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
  background: papayawhip;
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
  transition: ease-in 0.1s;

  &:hover {
    background-color: tomato;
    color: papayawhip;
  }
`;

const getRainDays = (days) => {
  if (isNaN(days) || days === "" || days < 1) return "";
  // return Math.round(300 * (Math.log10(days + 1)));
  let real = +days + 1;

  return Math.round(300 * Math.log10(real));
};

const Calculator = ({ changeRain, rain }) => {
  const input = useRef();

  const addMax = () => {
    input.current.value = 1792;
    changeRain(getRainDays(1792));
  };

  const addYear = () => {
    let change = +input.current.value + 365;
    input.current.value = change;
    changeRain(getRainDays(change));
  };

  const addMonth = () => {
    let change = +input.current.value + 30;
    input.current.value = change;
    changeRain(getRainDays(change));
  };

  return (
    <>
      <GridAdjust>
        <Sect>
          <Title>Calculadora de lluvia</Title>
          <Desc>
            Inserte un número <i>n</i> de días para obtener la cantidad de
            lluvia.
          </Desc>
          <MathComponent
            tex={String.raw`\large f(n) = 300 \times \log{(n+1)}`}
          />
          <NotableDates>
            <Button onClick={addMax}>Máx. Duración</Button>
            <Button onClick={addMonth}>+1 mes</Button>
            <Button onClick={addYear}>+1 año</Button>
          </NotableDates>

          <DaysInput
            ref={input}
            type="number"
            placeholder="Días"
            onChange={(e) => changeRain(getRainDays(e.target.value))}
          ></DaysInput>

          {rain === 0 || rain === "" ? (
            ""
          ) : (
            <Result>
              Lo que se traduce en <Highlight>{rain}</Highlight> milímetros de
              lluvia (litros por metro cuadrado)
            </Result>
          )}
        </Sect>
      </GridAdjust>
    </>
  );
};

export default Calculator;
