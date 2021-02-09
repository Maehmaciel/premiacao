import React from "react";

import { ID, Description } from "./styles";
import { Text } from "native-base";
import Card from "../Card";
const ItemProjetos = ({ item, navigation }) => {
  return (
    <Card
      state={2}
      onPress={() => {
        navigation.navigate("ProjetoItem", { item });
      }}
    >
      <ID>Titulo</ID>
      <Description>{item.titulo}</Description>
      <ID>Resumo</ID>
      <Description>{item.resumo}</Description>
      {item.avaliacoes && (
        <Text>Avaliações: {item.avaliacoes.length.toString()}</Text>
      )}
      <Text>Autores: {item.autores.length.toString()}</Text>
    </Card>
  );
};

export default ItemProjetos;
