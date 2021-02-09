import React, { useState, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import api from "../../../services/api";
import { AuthContext } from "../../../contexts/auth";
import {
  Container,
  Title,
  Description,
  Button,
  ButtonText,
  Input,
  Mensagem,
  InputView,
  InputPassword,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";

const Editar = ({ route, navigation }) => {
  const [email, setEmail] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [areaAtuacao, setAreaAtuacao] = useState(null);
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState(null);
  const { usuario } = route.params;
  const [mensagem, setMensagem] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { signIn, error, token } = useContext(AuthContext);
  useEffect(() => {
    console.log(usuario);
    setProfissao(usuario[0].profissao);
    setIdade(usuario[0].user.idade.toString());
    setNome(usuario[0].user.nome);
    setEmail(usuario[0].user.email);
  }, []);
  const signUp = async () => {
    setMensagem(false);
    setLoading(true);

    if (nome == null || email == null || idade == null) {
      setError("Preencha os dados");
      return;
    }
    let info = {
      user: {
        nome,
        email,
        idade,
        isAvaliador: usuario.isAvaliador,
      },
      profissao,
    };

    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      const { data } = await api.put("/autor", info);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMensagem("Erro, tente novamento mais tarde.");
    }
  };
  return (
    <Container>
      <Title>Editar usuario</Title>

      {!usuario.isAvaliador ? (
        <Input
          placeholder="Profissao"
          onChangeText={(text) => setProfissao(text)}
          value={profissao}
        />
      ) : (
        <Input
          placeholder="Area de Atuação"
          onChangeText={(text) => setAreaAtuacao(text)}
          value={areaAtuacao}
        />
      )}

      <Input
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      <Input
        placeholder="Idade"
        keyboardType="numeric"
        onChangeText={(text) => setIdade(text)}
        value={idade}
      />

      <Input
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      {mensagem && <Mensagem>{mensagem}</Mensagem>}

      {isLoading ? (
        <ActivityIndicator color="#fff" size="large" style={{ margin: 20 }} />
      ) : (
        <Button onPress={signUp}>
          <ButtonText>Editar</ButtonText>
        </Button>
      )}
    </Container>
  );
};

export default Editar;
