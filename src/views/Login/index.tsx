import * as React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {
  Container,
  Background,
  ContainerLogo,
  LogoImg,
  ContainerForm,
  Form,
  TitleArea,
  Title,
  SubTitle,
  FormArea,
} from './styles';

import {Platform} from 'react-native';

const Login = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background source={require('../../../assets/login_background.png')}>
        <ContainerLogo>
          <LogoImg source={require('../../../assets/login_title.png')} />
        </ContainerLogo>

        <ContainerForm>
          <Form>
            <TitleArea>
              <Title>Bem-vindo</Title>

              <SubTitle>Insira os seus dados para acessar</SubTitle>
            </TitleArea>

            <FormArea>
              <TextInput
                label="Email"
                autoCorrect={false}
                onChange={() => {}}
                style={{height: 60}}
              />

              <TextInput
                label="Senha"
                secureTextEntry
                right={<TextInput.Icon name="eye" style={{opacity: 0.6}} />}
                style={{height: 60}}
              />

              <Button
                mode="contained"
                color="#2E6EB5"
                onPress={() => {}}
                style={{height: 60, justifyContent: 'center'}}>
                Login
              </Button>
            </FormArea>
          </Form>
        </ContainerForm>
      </Background>
    </Container>
  );
};

export default Login;
