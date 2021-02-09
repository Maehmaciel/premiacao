import React, { useContext, useEffect, useState } from "react";
import {
  Content,
  Card,
  CardItem,
  Text,
  Body,
  List,
  ListItem,
  View,
} from "native-base";
import { AuthContext } from "../../../contexts/auth";

import { Container, ButtonNB, ButtonText } from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome5";
import api from "../../../services/api";

import ItemProjetos from "../../../components/ItemProjetos";
import Gerenciar from "../Gerenciar";

const ItemInfo = ({ route, navigation }) => {
  const { signOut } = useContext(AuthContext);
  // const [filtro, setFiltro] = useState(0);
  const { item } = route.params;
  const [projetos, setProjetos] = useState([]);
  const [filtroUsado, setFiltroUsado] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isGerenciando, setGerenciando] = useState(false);
  const [autores, setAutores] = useState([]);
  const [premios, setPremios] = useState([]);
  const [adicionar, setAdicionar] = useState({ premios: [], autores: [] });

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    setLoading(true);
    try {
      const autoresData = await api.get("/autorProjeto", {
        params: { projeto: item.id },
      });
      setAutores(autoresData.data);
      // const premiosData = await api.get("/premio");
      // setPremios(premiosData.data);
      setPremios([
        {
          id: 1,
          nome: "premio1",
          descricao: "descricao premio 1",
          ano: 2020,
          projeto_id: null,
          created_at: "2021-02-06 20:28:27",
          updated_at: "2021-02-06 20:28:27",
        },
        {
          id: 2,
          nome: "premio1",
          descricao: "descricao premio 1",
          ano: 2020,
          projeto_id: null,
          created_at: "2021-02-07 20:04:43",
          updated_at: "2021-02-07 20:04:43",
        },
        {
          id: 3,
          nome: "premio2",
          descricao: "descricao premio 2",
          ano: 2020,
          projeto_id: null,
          created_at: "2021-02-07 20:04:53",
          updated_at: "2021-02-07 20:04:53",
        },
      ]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const update = async () => {
    try {
      let aut = adicionar.autores.map((autor) => {
        return autor.id;
      });

      let pre = adicionar.premios.map((premio) => {
        return premio.id;
      });
      const { data } = await api.put(`/projeto/${item.id}`, {
        premios: pre,
        autores: aut,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const adicionarAutor = (autor) => {
    let and = autores.filter((a) => {
      if (a.id === autor) return a;
    });
    adicionar.autores.push(and[0]);
    setAdicionar(adicionar);
    let novos = autores.filter((a) => {
      if (a.id !== autor) return a;
    });

    setAutores(novos);
    return novos;
  };
  const adicionarPremio = (premio) => {
    let and = premios.filter((a) => {
      if (a.id === premio) return a;
    });
    adicionar.premios.push(and[0]);
    setAdicionar(adicionar);
    let novos = premios.filter((a) => {
      if (a.id !== premio) return a;
    });
    setPremios(novos);
    return novos;
  };

  return (
    <Container>
      <Content>
        <Text>{item.titulo}</Text>
        <Text>{item.areaAtuacao}</Text>

        <Text>{item.resumo}</Text>
        <List>
          <ListItem itemHeader first>
            <Text style={{ color: "#FFF" }}>Autores</Text>
          </ListItem>
          {item.autores.map((item) => {
            return (
              <ListItem key={item.id}>
                <Body>
                  <Text>Nome: {item.user.nome}</Text>
                  <Text>Email: {item.user.email}</Text>
                  <Text>Profissão: {item.profissao}</Text>
                </Body>
              </ListItem>
            );
          })}
        </List>
        <List>
          <ListItem itemHeader first>
            <Text style={{ color: "#FFF" }}>Premios</Text>
          </ListItem>
          {item.premios.map((item) => {
            return (
              <ListItem key={item.id}>
                <Body>
                  <Text>Nome: {item.nome}</Text>
                  <Text>Descrição: {item.descricao}</Text>
                  <Text>Ano: {item.ano}</Text>
                </Body>
              </ListItem>
            );
          })}
        </List>
        <List>
          <ListItem itemHeader first>
            <Text style={{ color: "#FFF" }}>Avaliações</Text>
          </ListItem>
          {item.avaliacoes.map((item) => {
            return (
              <ListItem key={item.id}>
                <Body>
                  <Text>Parecer: {item.parecer}</Text>
                  <Text>Nota: {item.nota}</Text>
                  <Text>
                    Data: {moment(item.updated_at).format("DD/MM/YYYY")}
                  </Text>
                </Body>
              </ListItem>
            );
          })}
        </List>
        {isGerenciando && (
          <>
            <Gerenciar
              adicionarAutor={adicionarAutor}
              adicionarPremio={adicionarPremio}
              autores={autores}
              premios={premios}
            />

            <List>
              <ListItem itemHeader first>
                <Text style={{ color: "#FFF" }}>Autores</Text>
              </ListItem>
              {adicionar.autores.map((item) => {
                return (
                  <ListItem key={item.id}>
                    <Body>
                      <Text>Nome: {item.user.nome}</Text>
                      <Text>Email: {item.user.email}</Text>
                      <Text>Profissão: {item.profissao}</Text>
                    </Body>
                  </ListItem>
                );
              })}
            </List>
            <List>
              <ListItem itemHeader first>
                <Text style={{ color: "#FFF" }}>Premios</Text>
              </ListItem>
              {adicionar.premios.map((item) => {
                return (
                  <ListItem key={item.id}>
                    <Body>
                      <Text>Nome: {item.nome}</Text>
                      <Text>Descrição: {item.descricao}</Text>
                      <Text>Ano: {item.ano}</Text>
                    </Body>
                  </ListItem>
                );
              })}
            </List>
          </>
        )}

        <ButtonNB
          onPress={() => {
            if (
              (isGerenciando && adicionar.autores.length > 0) ||
              adicionar.premios.length > 0
            )
              update();
            setGerenciando(!isGerenciando);
          }}
        >
          <ButtonText>{isGerenciando ? "Finalizar" : "Gerenciar"}</ButtonText>
        </ButtonNB>

        <ButtonNB>
          <ButtonText>Avaliar</ButtonText>
        </ButtonNB>
      </Content>
    </Container>
  );
};

export default ItemInfo;
