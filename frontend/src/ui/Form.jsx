import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
  ${(props) =>
    props.type === "regular" &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    `}
  

  /* Box */
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  column-gap: 1.5rem;
  align-items: center;

  overflow: hidden;
  font-size: 1.4rem;

  padding: 3.2rem 4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
