import React, { useRef, useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../../../contexts/auth";
import { Form } from "@unform/mobile";
import AsyncStorage from "@react-native-community/async-storage";
import { Container, Divider, Title, Subtitle, AddButton, Span } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome5";

import Input from "../../../components/Input";

import api from "../../../services/api";

const NewTruck = ({ navigation }) => {
  const formRef = useRef(null);
  const [error, setError] = useState(null);
  const { token, loadCaminhoes, projetos } = useContext(AuthContext);
  const handleSubmit = async (form) => {
    try {
      if (
        form.resumo == null ||
        form.areaAtuacao == null ||
        form.titulo == null
      ) {
        setError("Preencha os dados");
        return;
      }
      // } else if (form.titulo.length != 8) {
      //   setError("A titulo possui 8 digitos");
      //   return;
      // }

      //api.defaults.headers.Authorization = `Bearer ${token}`;
      const { data } = await api.post("/projeto", form);
      projetos.push(data);

      await AsyncStorage.mergeItem(
        "@Grison: projetos",
        JSON.stringify(projetos)
      );

      navigation.goBack();
    } catch (error) {}
  };

  return (
    <Container>
      <Divider>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" color="#fff" size={20} />
        </TouchableOpacity>

        <Title>Criar novo caminhão</Title>
      </Divider>

      <Form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <Input name="titulo" placeholder="Titulo" />

        <Input name="resumo" placeholder="Resumo" />
        <Input
          name="areaAtuacao"
          required="true"
          placeholder="Area de Atuacao"
        />
        {error && <Span>{error}</Span>}
        <AddButton onPress={() => formRef.current.submitForm()}>
          <Span>CRIAR CAMINHÃO</Span>
        </AddButton>
      </Form>
    </Container>
  );
};

export default NewTruck;
