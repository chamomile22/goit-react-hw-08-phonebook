import styled from '@emotion/styled';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 260px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 40px;
  padding-bottom: 30px;

  background-color: white;
  border-radius: 23px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.19);

  transform: translate(-50%, -50%);
`;

export const Label = styled.label`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const LabelContent = styled.span`
  margin-left: 15px;
  margin-bottom: 5px;
  color: rgb(87, 87, 87);
  font-size: 15px;
  font-weight: 700;
`;

export const Input = styled.input`
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
  border: 1.5px solid rgb(173, 173, 173);
  border-radius: 20px;

  &:focus {
    outline-color: #538e53;
  }
`;

export const BtnLogin = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;

  font-size: 15px;
  font-weight: 700;
  border: 2px solid #538e53;
  background-color: #538e5321;
  border-radius: 20px;

  transition-property: color, background-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: #538e53;
  }
`;
