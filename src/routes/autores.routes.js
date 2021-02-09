import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthContext from "../contexts/auth";

import EditarAutor from "../Pages/Autores/Editar";
import Autor from "../Pages/Autores/ItemInfo";

const Stack = createStackNavigator();

function AtorRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Autor" component={Autor} />
      <Stack.Screen name="EditarAutor" component={EditarAutor} />
    </Stack.Navigator>
  );
}

export default AtorRouter;
