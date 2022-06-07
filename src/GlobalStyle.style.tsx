import styled, { createGlobalStyle } from "styled-components";

type Props = {
  wrap?: string;
  backgroundColor?: string;
  flexDirection?: string;
  color?: string;
  tamaño?: string;
};

export const GlobalStyles = createGlobalStyle`
    html {
      width: 100%;
      scroll-behavior: smooth;

    }
    body {
      background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);


      text-align: center;
      font-family: montserrat;
      font-size: 10px;
    }
`;

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: ${(props) => props.wrap};
  flex-direction: ${(props) => props.flexDirection};
  margin: 10px;
  padding: 10px;
  background: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

export const Button = styled.a<Props>`
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: montserrat;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
  border-style: none;
  background-color: white;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #e8d9ff;
  }
`;

export const Input = styled.input<Props>`
  display: flex;
  flex: 1 1 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: montserrat;
  font-weight: 600;
  color: #000000;
  border-style: none;
  background-color: white;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #e8d9ff;
  }
`;

export const Select = styled.select<Props>`
  cursor: pointer;
  width: 80px;
  padding: 10px;
  margin: 0px;
  border-radius: 10px;
  font-family: montserrat;
  font-weight: 600;
  color: #000000;
  border-style: none;
  background-color: white;
`;

export const Form = styled.form<Props>`
  display: flex;
  flex-direction: row;
`;

export const Texto = styled.h1<Props>`
  margin: 1px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.tamaño};
`;
