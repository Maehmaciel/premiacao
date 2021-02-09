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

const Dashboard = ({ navigation }) => {
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
        <ButtonNB
          block
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <ButtonText>Avaliador</ButtonText>
        </ButtonNB>
        <ButtonNB
          block
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <ButtonText>Avaliacao</ButtonText>
        </ButtonNB>
        <ButtonNB
          block
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <ButtonText>Autor</ButtonText>
        </ButtonNB>
        <ButtonNB
          block
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <ButtonText>Premio</ButtonText>
        </ButtonNB>
        <ButtonNB
          block
          onPress={() => {
            navigation.navigate("Projetos");
          }}
        >
          <ButtonText>Projetos*</ButtonText>
        </ButtonNB>
      </Content>
    </ContainerNB>
  );
};
export default Dashboard;
