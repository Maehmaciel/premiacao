import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./contexts/auth";
import { Root } from "native-base";
import Routes from "./routes";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Root>
          <Routes />
        </Root>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
