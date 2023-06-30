import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

export const InputLabel = styled.span`
  margin-bottom: 4px;
`;

export const InputField = styled.input`
  width: 200px;
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
