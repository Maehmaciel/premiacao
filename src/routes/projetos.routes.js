import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Projetos from "../Pages/Projetos/Lista";
import ProjetoInfo from "../Pages/Projetos/ItemInfo";
import ProjetosCadastro from "../Pages/Projetos/Cadastro";
const Stack = createStackNavigator();

function ProjetoRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Projetos" component={Projetos} />
      <Stack.Screen name="ProjetosCadastro" component={ProjetosCadastro} />
      <Stack.Screen name="ProjetoItem" component={ProjetoInfo} />
    </Stack.Navigator>
  );
}

export default ProjetoRouter;
