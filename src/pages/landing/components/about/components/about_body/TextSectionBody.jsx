import React from "react";
import { BodyWrapper, BodyText } from "./TextSectionBody.style";

function TextSectionBody({ text }) {
  const paragraphs = text.split(/\n\n/);
  return (
    <BodyWrapper className="Text Body">
      {paragraphs.map((paragraph, _) => (
        <BodyText key={paragraph} className="Text">
          {paragraph}
        </BodyText>
      ))}
    </BodyWrapper>
  );
}

export default TextSectionBody;
