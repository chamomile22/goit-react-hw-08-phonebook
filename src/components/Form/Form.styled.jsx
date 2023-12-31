import styled from '@emotion/styled';

export const ContactsForm = styled.form`
  width: 370px;
  display: inline-block;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;

  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.19);
`;

export const FormHeading = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const InputLabel = styled.span`
  margin-left: 15px;
  margin-bottom: 5px;
  color: rgb(87, 87, 87);
  font-size: 15px;
  font-weight: 700;
`;

export const InputField = styled.input`
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

export const BtnSubmit = styled.button`
  display: block;
  width: 130px;
  height: 40px;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;

  font-size: 15px;
  font-weight: 600;
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
