import styled from "styled-components";
import React from "react";

const StyledTextArea = styled.textarea`
  width: 97%;
  height: 100px;
  margin-left: 9px;
  resize: none;
`;

const TextInput = React.forwardRef((props, ref) => {
  return <StyledTextArea ref={ref} {...props} />;
});

export default TextInput;
