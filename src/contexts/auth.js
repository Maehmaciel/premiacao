import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({
  token: "",
  user: {},
  error: false,
  isAvaliador: false,
  signIn: () => {},
  signOut: () => {},
  clearError: () => {},
});

import api from "../services/api";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(false);
  const [isAvaliador, setIsAvaliador] = useState(false);
  const [projetos, setProjetos] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storagedToken = await AsyncStorage.getItem("@Grison:token");
        const storagedCond = await AsyncStorage.getItem("@Grison:avaliador");

        setIsAvaliador(storagedCond);

        if (storagedToken) {
          setToken(storagedToken);
          api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
          if (!isAvaliador) {
            console.log("Não é avaliador");
            const { data } = await api.get("/autor");
            console.log(data);
            setUser(data);
          } else {
            console.log("é avaliador");
            const { data } = await api.get("/avaliador");
            console.log(data);
            setUser(data);
          }
        }
      } catch (error) {
        setError("Erro ao buscar dados");
      }
    }

    loadStorageData();
  }, []);

  async function signIn(email, password) {
    setError(null);

    try {
      if (email == null || password == null)
        throw new Error("Insira email e senha.");

      const { data } = await api.post("/login", { email, password });

      setToken(data.token);
      setIsAvaliador(data.isAvaliador);
      await AsyncStorage.setItem("@Grison:token", data.token);
      await AsyncStorage.setItem(
        "@Grison:avaliador",
        data.isAvaliador.toString()
      );
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
    } catch (error) {
      setError("Verifique os dados inseridos e tente novamente.");
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ token, signIn, signOut, user, error, isAvaliador }}
    >
      {children}
    </AuthContext.Provider>
  );
};
