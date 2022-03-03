import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 90%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #3f3f3f;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
