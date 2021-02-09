import React from "react";
import { ScrollView, Text } from "react-native";

import { Container, Title, Description, Button, ButtonText } from "./styles";

const HomeRegister = ({ navigation }) => {
  return (
    <Container>
      <Title>Bem vindo(a).</Title>
      <Description>Cadastre-se .</Description>

      <Button
        onPress={() => {
          navigation.navigate("Register", { isAvaliador: false });
        }}
      >
        <ButtonText>Sou Autor</ButtonText>
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Register", { isAvaliador: true });
        }}
      >
        <ButtonText>Sou Avaliador</ButtonText>
      </Button>
    </Container>
  );
};

export default HomeRegister;
