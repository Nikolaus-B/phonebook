import styled from 'styled-components';

export const PhonebookList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 20px;
`;

export const PhonebookItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ItemName = styled.p`
  margin-right: 10px;
`;

export const PhonebookNumber = styled.p`
  color: #149bf3;
  margin-right: 15px;
`;
