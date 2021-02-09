import styled from "styled-components/native";
import { Button, Container, Input, Item, Text } from "native-base";
export const ContainerNB = styled(Container)`
  flex: 1;
  background-color: #72a6a6;
  padding: 15px;
`;

export const Title = styled.Text`
  color: #f2f2f2;
  font-size: 40px;
  font-weight: bold;
  margin: 50px 20px 0px 20px;
`;

export const Description = styled.Text`
  color: #f2f2f2;
  font-size: 20px;
  opacity: 0.7;
  margin: 10px 20px 30px 20px;
`;
export const Mensagem = styled.Text`
  margin: 10px 20px;
`;
export const ButtonNB = styled(Button)`
  height: 52px;
  background: #fff;
  margin: 15px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: #72a6a6;
  font-size: 20px;
  font-weight: bold;
`;

export const ItemNB = styled(Item)`
  margin: 10px 20px 10px 20px;
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 7px;
  font-weight: bold;

  border: 1px solid #fff;
`;

export const Span = styled.Text`
  color: #fff;
  text-align: center;
  margin-top: 0px;
`;

export const InputPassword = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,255,255,0.8)",
})`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
export const InputView = styled.View`
  margin: 10px 20px 10px 20px;
  padding: 0px 10px;
  border-radius: 10px;

  border: 1px solid #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
