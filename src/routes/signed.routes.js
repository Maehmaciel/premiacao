import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";

import AutorRouter from "./autores.routes";
import ProjetoRouter from "./projetos.routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Autor") {
            iconName = "receipt";
          } else if (route.name === "Projeto") {
            iconName = "truck";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#72A6A6",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Autor" component={AutorRouter} />
      <Tab.Screen name="Projeto" component={ProjetoRouter} />
    </Tab.Navigator>
  );
}
