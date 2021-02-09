import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../Pages/Dashboard";

import HomeRegister from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeRegister" component={HomeRegister} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Avaliador" component={Dashboard} />
      <Stack.Screen name="Avaliacao" component={Dashboard} />
      <Stack.Screen name="Autor" component={Dashboard} />
      <Stack.Screen name="Premio" component={Dashboard} />

      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default App;
