import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { Body, Spinner, View, Toast, Content, Button, Text } from "native-base";
import { AuthContext } from "../../../contexts/auth";

import { Container, Divider, Title, AddButton } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome5";
import api from "../../../services/api";

const ItemInfo = ({ navigation }) => {
  const { signOut, token, user } = useContext(AuthContext);
  const [autor, setAutor] = useState([]);
  const [isLoading, setLoading] = useState(false);

  return (
    <Container>
      <Divider>
        <Title>Usuario</Title>

        <TouchableOpacity onPress={signOut}>
          <Icon name="sign-out-alt" color="#f2f2f2" size={30} />
        </TouchableOpacity>
      </Divider>
      <Divider>
        <AddButton
          onPress={() => {
            navigation.navigate("EditarAutor", { usuario: user });
          }}
        >
          <Icon name="edit" color="#fff" size={25} />
        </AddButton>
      </Divider>

      {isLoading ? (
        <View>
          <Spinner style={{ margin: 15 }} />
        </View>
      ) : user.length > 0 ? (
        <>
          <Content>
            <Text style={{ color: "#FFF" }}>Nome</Text>
            <Text>{user[0].user.nome}</Text>
            <Text style={{ color: "#FFF" }}>Email</Text>
            <Text> {user[0].user.email}</Text>
            <Text style={{ color: "#FFF" }}>Idade</Text>
            <Text>{user[0].user.idade}</Text>
            <Text>Projetos: {user[0].projetos.length}</Text>
          </Content>
        </>
      ) : (
        <Text>Nenhum Item a ser mostrado</Text>
      )}
    </Container>
  );
};

export default ItemInfo;
