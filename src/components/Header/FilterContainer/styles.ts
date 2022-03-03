import styled from 'styled-components/native';

export const SortContainer = styled.ScrollView`
  flex: 1;
  width: 90%;
  height: 30px;
`;

export const SortButton = styled.View`
  flex: 1;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 20px;
`;

export const SortButtonText = styled.Text`
  color: rgba(0, 0, 0, 0.87);
  margin-left: 10px;
`;
