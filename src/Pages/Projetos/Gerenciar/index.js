import React, { useRef, useContext, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../../../contexts/auth";
import { Form } from "@unform/mobile";
import AsyncStorage from "@react-native-community/async-storage";
import { Container, Divider, Title, Subtitle, AddButton, Span } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome5";

import Input from "../../../components/Input";

import api from "../../../services/api";
import { Picker } from "native-base";

const Gerenciar = ({
  navigation,
  item,
  adicionarAutor,
  adicionarPremio,
  autores,
  premios,
}) => {
  useEffect(() => {
    if (autores.length > 0) setAutorNovo(autores[0].id);
    if (premios.length > 0) setPremioNovo(premios[0].id);
  }, []);
  const formRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const [premioNovo, setPremioNovo] = useState(0);
  const [autorNovo, setAutorNovo] = useState(0);

  return (
    <Form ref={formRef} style={{ marginTop: 20 }}>
      {autores.length > 0 && (
        <>
          <Picker
            mode="dropdown"
            iosHeader="Selecione um autor para adicionar"
            style={{ width: 200 }}
            selectedValue={autorNovo}
            onValueChange={(autor) => {
              setAutorNovo(autor);
            }}
          >
            {autores.map((autor) => {
              return (
                <Picker.Item
                  label={autor.user.nome}
                  value={autor.id}
                  key={autor.id}
                />
              );
            })}
          </Picker>

          <AddButton
            onPress={() => {
              let ner = adicionarAutor(autorNovo);
              if (ner.length > 0) setAutorNovo(ner[0].id);
            }}
          >
            <Span>Adicionar Autor</Span>
          </AddButton>
        </>
      )}
      {premios.length > 0 && (
        <>
          <Picker
            mode="dropdown"
            iosHeader="Selecione uma premiação para concorrer"
            style={{ width: 200 }}
            selectedValue={premioNovo}
            onValueChange={(premio) => {
              setPremioNovo(premio);
            }}
          >
            {premios.map((premio) => {
              return (
                <Picker.Item
                  label={premio.nome}
                  value={premio.id}
                  key={premio.id}
                />
              );
            })}
          </Picker>

          <AddButton
            onPress={() => {
              let ner = adicionarPremio(premioNovo);
              if (ner.length > 0) setPremioNovo(ner[0].id);
            }}
          >
            <Span>Adicionar Premio</Span>
          </AddButton>
        </>
      )}
    </Form>
  );
};

export default Gerenciar;
