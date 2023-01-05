import React from "react";
import TextSectionHeader from "./components/about_header/TextSectionHeader";
import TextSectionBody from "./components/about_body/TextSectionBody";
import { TextSectionContainer } from "./components/TextSection.style";
import propTypes from "prop-types";

function TextSection({ header, body }) {
  return (
    <TextSectionContainer className="Text Section Container">
      <TextSectionHeader text={header} />
      <TextSectionBody text={body} />
    </TextSectionContainer>
  );
}

export default TextSection;

TextSection.propTypes = {
  header: propTypes.string,
  body: propTypes.string
};
