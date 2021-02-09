import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #72a6a6;
  padding: 20px;
`;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
`;

export const Subtitle = styled.Text`
  color: #61358c;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,255,255,0.8)",
})`
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 10px;
  font-weight: bold;
  flex-grow: 1;
  border: 1px solid #fff;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #61358c;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const Span = styled.Text`
  color: #fff;
  font-size: 18px;
`;
