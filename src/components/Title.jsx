import React from "react";
import TitleBackground from "../assets/TitleBackground.png";
import style, { keyframes } from "styled-components";
import Container from 'react-bootstrap/Container'

const slideIn = keyframes`
  from {
    margin-left:100%;
    width:300%
  }

  to {
  margin-left:0%;
  width:100%;
  }
`;

const Header = style(Container)`
    margin-bottom: 5px;

    font-family: Georgia, serif;
    font-size: 28px;
    font-weight: 400;
    text-decoration: underline solid rgb(131, 166, 243);
    font-style: italic;
    font-variant: small-caps;
    text-align: center;

    text-transform: capitalize;
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px rgb(0, 174, 255),
    0 -10px 20px rgb(4, 89, 248), 0 -18px 40px rgb(0, 81, 255);

    letter-spacing: 3.6px;
    word-spacing: 1.6px;

    color: rgb(109, 117, 134);

    border: 6px inset #2e7d08;
    border-radius: 23px 23px 23px 23px;

    background: rgba(208, 228, 245, 0.52) url(${TitleBackground}) no-repeat scroll;
    background-size: 100%;
    background-position: bottom 25% right 100%;

    animation-duration: 3s;
    animation-name: ${slideIn};
    animation-iteration-count: 1;
    animation-direction: alternate;
`;

function Title() {
  return (
    <Header fluid>
      <h1>5Ntrol</h1>
    </Header>
  );
}

export default Title;
