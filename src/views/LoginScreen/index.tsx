import {Platform, Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

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

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Login = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keyBoardIsOpen, setKeyBoardIsOpen] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () =>
      setKeyBoardIsOpen(true),
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () =>
      setKeyBoardIsOpen(false),
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleClick = () => {
    if (email === 'teste@mail.com' && password === '123456') {
      navigation.navigate('Home');
    } else {
      console.warn('Usuário ou senha inválidos!');
    }
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background source={require('../../../assets/login_background.png')}>
        {keyBoardIsOpen ? (
          <></>
        ) : (
          <ContainerLogo>
            <LogoImg source={require('../../../assets/login_title.png')} />
          </ContainerLogo>
        )}

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
                onChangeText={text => setEmail(text)}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{height: 60}}
              />

              <TextInput
                label="Senha"
                secureTextEntry={hidePassword}
                onChangeText={text => setPassword(text)}
                right={
                  <TextInput.Icon
                    name="eye"
                    onPress={() => {
                      setHidePassword(!hidePassword);
                    }}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{opacity: 0.6}}
                  />
                }
                // eslint-disable-next-line react-native/no-inline-styles
                style={{height: 60}}
              />

              <Button
                mode="contained"
                color="#2E6EB5"
                onPress={handleClick}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  height: 60,
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
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
