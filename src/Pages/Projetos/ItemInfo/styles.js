import { Button, Text } from "native-base";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #72a6a6;
  padding: 20px;
`;

export const Title = styled.Text`
  color: #f2f2f2;
  font-size: 40px;
  font-weight: bold;
`;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
