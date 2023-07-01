import styled from '@emotion/styled';

export const ContactsItemList = styled.ul`
  list-style: none;
`;

export const ContactsItem = styled.li`
  width: 360px;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 7px;

  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.19);

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const ContactName = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;

export const BtnDelete = styled.button`
  display: block;
  width: 80px;
  height: 30px;

  font-size: 14px;
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
