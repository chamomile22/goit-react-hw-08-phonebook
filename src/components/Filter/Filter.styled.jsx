import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  align-items: center;

  margin-left: 20px;
`;

export const InputField = styled.input`
  width: 250px;
  height: 27px;
  margin-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
  border: 1.5px solid rgb(173, 173, 173);
  border-radius: 20px;

  &:focus {
    outline-color: #538e53;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 600;
  }
`;
