import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const LogoImg = styled.Image``;

export const ContainerForm = styled.View`
  flex: 2.2;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  width: 90%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
`;

export const TitleArea = styled.View`
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  color: #000;
`;

export const FormArea = styled.View`
  flex: 2;
  justify-content: space-around;
`;
