import React, { useState, useContext, useEffect } from "react";

import api from "../../services/api";

import { AuthContext } from "../../contexts/auth";
import {
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Spinner,
  CheckBox,
  ListItem,
  Body,
} from "native-base";

import {
  ContainerNB,
  Title,
  Description,
  //   Button,
  ButtonText,
  //   TextButton,
  ItemNB,
  Span,
  Mensagem,
  ButtonNB,
  //   InputPassword,
  //   InputView,
} from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [showPassoword, setshowPassoword] = useState(true);
  const [mensagem, setMensagem] = useState(null);
  const { signIn, error } = useContext(AuthContext);

  useEffect(() => {
    setMensagem(error);
  }, [!isLoading]);

  const handleSign = async (email, senha) => {
    setMensagem(null);
    setLoading(true);
    await signIn(email, senha);
    setLoading(false);
  };

  return (
    <ContainerNB>
      <Title>Entre em sua conta</Title>

      <Description>
        Digite seu email e senha para acessar sua conta Grison.
      </Description>
      <Content>
        <Form>
          <ItemNB regular>
            <Input
              placeholder="Email"
              placeholderTextColor="white"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </ItemNB>
          <ItemNB regular>
            <Input
              placeholder="Senha"
              placeholderTextColor="white"
              secureTextEntry={showPassoword}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </ItemNB>
          <ListItem
            style={{ borderColor: "transparent" }}
            button
            onPress={() => setshowPassoword(!showPassoword)}
          >
            <CheckBox
              checked={!showPassoword}
              onPress={() => setshowPassoword(!!showPassoword)}
            />
            <Body>
              <Text>Mostrar Senha</Text>
            </Body>
          </ListItem>
          {mensagem && <Mensagem>{mensagem}</Mensagem>}
          {isLoading ? (
            <Spinner style={{ margin: 15 }} />
          ) : (
            <ButtonNB block onPress={() => handleSign(email, password)}>
              <ButtonText>Login</ButtonText>
            </ButtonNB>
          )}
          <Span> OU </Span>

          <ButtonNB
            block
            onPress={() => {
              navigation.navigate("HomeRegister");
            }}
          >
            <ButtonText>Criar uma conta</ButtonText>
          </ButtonNB>
          <ButtonNB
            block
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          >
            <ButtonText>Dash</ButtonText>
          </ButtonNB>
        </Form>
      </Content>
    </ContainerNB>
  );
};
export default Login;
