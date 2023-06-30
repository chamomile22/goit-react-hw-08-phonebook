import styled from '@emotion/styled';

export const ContactsForm = styled.form`
  display: inline-block;
  margin-left: 20px;
  padding: 20px;

  border: 2px solid #737c46;
  border-radius: 6px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const InputLabel = styled.span`
  margin-bottom: 4px;
`;

export const InputField = styled.input`
  height: 20px;
  padding-left: 4px;
  padding-right: 4px;
  border: none;
  border-radius: 3px;
  outline: 1px solid black;

  &:focus {
    outline-color: #ffae3d;
    outline-width: 2px;
  }
`;

export const BtnSubmit = styled.button`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  background-color: white;
  border-width: 1px;
  border-radius: 4px;

  transition-property: background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    background-color: #97a168;
  }
`;
