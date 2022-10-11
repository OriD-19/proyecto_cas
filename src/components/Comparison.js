import React from "react";
import styled from "styled-components";
import { MathComponent } from "mathjax-react";

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: steelblue;
`;

const DisplayList = styled.section`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ListData = styled.article`
  list-style-type: none;
  background-color: salmon;
  margin: 10px 1rem;
  text-align: center;
  padding: 2rem;
  border-radius: 5px;
  border: 3px dotted papayawhip;
`;

const FinalAnswer = styled.article`
  margin: 2rem;
  padding: 2rem;
  font-size: 1.4rem;
  background-color: salmon;
  border: 3px dotted papayawhip;
`;

const Highlight = styled.span`
  font-size: 1.5rem;
  color: papayawhip;
  font-weight: bold;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const displayName = (zone) => {
  if (zone === "sm") return "San Miguel";
  else if (zone === "ss") return "San Salvador";
  else if (zone === "st") return "Santa Tecla";

  return "El Salvador";
};

const Comparison = ({ zone, rain }) => {
  const areaData = {
    ss: 72.25e6,
    sm: 593.98e6,
    st: 112.2e6,
    sv: 21.04e10,
  };

  const format = new Intl.NumberFormat("en-US");

  return (
    <>
      <Wrapper>
        <h1>
          Comparación con <Highlight>{displayName(zone)}</Highlight>
        </h1>
        <DisplayList>
          <ListData>
            Superficie de la zona:{" "}
            <Underline>{format.format(areaData[zone])}</Underline>{" "}
            <MathComponent display={false} tex={String.raw`m^2`} />
          </ListData>
          <ListData>
            Lluvia total para el día: <Underline>{rain}</Underline>{" "}
            <MathComponent display={false} tex={String.raw`\frac{l}{m^2}`} />
          </ListData>
        </DisplayList>

        <FinalAnswer>
          Por lo tanto, se puede concluir que caerían{" "}
          <Highlight>{format.format((areaData[zone] * rain) / 1e6)}</Highlight>{" "}
          millones de litros de lluvia.
        </FinalAnswer>

        <h1>
          Comparado con una superficie de{" "}
          <Highlight>
            <MathComponent display={false} tex={String.raw`500 m^2`} />
          </Highlight>
          :
        </h1>

        <FinalAnswer>
          Se tendría un volumen de lluvia de{" "}
          <Highlight>{format.format((500 * rain) / 1e3)}</Highlight> mil litros
        </FinalAnswer>
      </Wrapper>
    </>
  );
};

export default Comparison;
