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

export const AddButton = styled.TouchableOpacity`
  background-color: #61358c;
  width: 60px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
