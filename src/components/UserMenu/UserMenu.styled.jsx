import styled from '@emotion/styled';

export const UserName = styled.span`
  margin-right: 15px;
  color: white;
  font-weight: 600;
`;

export const BtnLogOut = styled.button`
  width: 70px;
  height: 30px;
  font-size: 13px;
  font-weight: 600;
  border: 1.5px solid white;
  border-radius: 15px;
  color: #ffffff;
  background-color: #ffffff31;

  transition-property: color, background-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    color: #447444;
    background-color: white;
  }
`;
