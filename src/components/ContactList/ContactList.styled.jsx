import styled from '@emotion/styled';

export const ContactsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 6px;
  }

  &::marker {
    color: #f59d23;
  }
`;

export const BtnDelete = styled.button`
  margin-left: 10px;

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
