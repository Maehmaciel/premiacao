import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import {
  List,
  Form,
  Picker,
  Spinner,
  View,
  Toast,
  Content,
  Button,
  Text,
} from "native-base";
import { AuthContext } from "../../../contexts/auth";

import { Container, Divider, Title, AddButton } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome5";
import api from "../../../services/api";

import ItemProjetos from "../../../components/ItemProjetos";

const Projetos = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  // const [filtro, setFiltro] = useState(0);
  const [projetos, setProjetos] = useState([]);
  const [filtroUsado, setFiltroUsado] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    filtrar(null);
  }, []);
  const filtrar = async (filtro) => {
    setLoading(true);
    try {
      setFiltroUsado(filtro);
      const { data } = await api.get("/projeto", {
        params: {
          avaliado: filtro,
        },
      });

      setProjetos(data);
      Toast.show({
        text: "Itens Listados",
        buttonText: "Okay",
        style: { margin: 10 },
        position: "top",
        type: "success",
      });
      setLoading(false);
    } catch (error) {
      Toast.show({
        text: "Erro ao listar Projetos",
        buttonText: "Okay",
        style: { margin: 10 },
        position: "top",
        type: "danger",
      });
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <Container>
      <Divider>
        <Title>Projetos</Title>

        <TouchableOpacity onPress={signOut}>
          <Icon name="sign-out-alt" color="#f2f2f2" size={30} />
        </TouchableOpacity>
      </Divider>
      <Divider>
        <Form>
          <Picker
            mode="dropdown"
            Icon={<Icon color="#61358C" size={25} name="filter" />}
            style={{ width: 200 }}
            selectedValue={filtroUsado}
            onValueChange={(filtro) => {
              filtrar(filtro);
            }}
          >
            <Picker.Item label="Todos" value={null} />
            <Picker.Item label="Avaliados" value={true} />
            <Picker.Item label="Não Avaliados" value={false} />
          </Picker>
        </Form>

        <AddButton
          onPress={() => {
            navigation.navigate("ProjetosCadastro");
          }}
        >
          <Icon name="plus" color="#fff" size={25} />
        </AddButton>
      </Divider>

      {isLoading ? (
        <View>
          <Spinner style={{ margin: 15 }} />
        </View>
      ) : projetos.length > 0 ? (
        <List
          dataArray={projetos}
          keyExtractor={(item) => item.id.toString()}
          renderRow={(item) => (
            <ItemProjetos item={item} navigation={navigation} />
          )}
        ></List>
      ) : (
        <Text>Nenhum Item a ser mostrado</Text>
      )}
    </Container>
  );
};

export default Projetos;
