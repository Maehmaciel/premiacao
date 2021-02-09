import React, { useState, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import api from "../../services/api";
import { AuthContext } from "../../contexts/auth";
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

const Register = ({ route, navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [areaAtuacao, setAreaAtuacao] = useState(null);
  const [nome, setNome] = useState(null);
  const [idade, setIdade] = useState(null);
  const { isAvaliador } = route.params;
  const [mensagem, setMensagem] = useState(false);
  const [hidePassoword, sethidePassoword] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const { signIn, error } = useContext(AuthContext);
  const signUp = async () => {
    setMensagem(false);
    setLoading(true);
    if (nome == null || email == null || idade == null || password == null) {
      setError("Preencha os dados");
      return;
    }
    let info = {
      user: {
        nome,
        email,
        password,
        idade,
        isAvaliador: isAvaliador,
      },
    };
    if (isAvaliador) {
      info.areaAtuacao = areaAtuacao;
    } else {
      info.profissao = profissao;
    }

    try {
      let data = {};
      if (isAvaliador) {
        data = await api.post("/avaliador", info);
      } else {
        data = await api.post("/autor", info);
      }

      signIn(info.email, info.password);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMensagem("Erro, tente novamento mais tarde.");
    }
  };
  return (
    <Container>
      <Title>Crie uma conta</Title>
      <Description>Cadastre-se.</Description>

      {!isAvaliador ? (
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

      <InputView>
        <InputPassword
          secureTextEntry={hidePassoword}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          onPress={() => {
            sethidePassoword(!hidePassoword);
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            {hidePassoword ? "mostrar" : "esconder"}
          </Text>
        </TouchableOpacity>
      </InputView>

      {mensagem && <Mensagem>{mensagem}</Mensagem>}

      {isLoading ? (
        <ActivityIndicator color="#fff" size="large" style={{ margin: 20 }} />
      ) : (
        <Button onPress={signUp}>
          <ButtonText>Criar Conta</ButtonText>
        </Button>
      )}
    </Container>
  );
};

export default Register;
