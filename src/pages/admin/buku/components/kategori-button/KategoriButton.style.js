import React from "react";
import styled from "styled-components";
import Colors from "../../../../../styles/colors";
const ButtonWrapper = styled.section `
margin-right: 1rem;
  button {
    width: 11rem;
    background-color: ${Colors.Brown};
    color: white;
    border: 0;
    border-radius: 1.75rem;
    padding: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  button:hover{
    color: black;
    background-color: ${Colors.Mustard};
  }
`;

export default ButtonWrapper;