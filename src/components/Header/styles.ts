import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled.Image`
  width: 117px;
  height: 41px;
  margin-top: 10px;
`;

export const ContainerSearch = styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  height: 50px;
  background-color: #e5e5e5;
  border-radius: 30px;
  text-align: center;
`;

export const FilterModal = styled.Modal`
  flex: 1;
  width: 80%;
  background-color: '#f00';
`;
