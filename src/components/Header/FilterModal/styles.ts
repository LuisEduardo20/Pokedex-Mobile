import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  height: 10%;
  padding: 0 5% 0 5%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  color: #3f3f3f;
  font-size: 24px;
`;

export const ClearFiltersButton = styled.Button`
  background-color: #fff;
  color: #4a7dff;
  text-decoration: underline;
`;

export const FiltersContainer = styled.View`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
`;

export const ApplyButton = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  background-color: #2e6eb5;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ApplyButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
