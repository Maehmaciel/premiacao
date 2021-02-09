import styled from 'styled-components/native';

import { Platform } from 'react-native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #72A6A6;

`;

export const Title = styled.Text`
  color: #F2F2F2;
  font-size: 40px;
  font-weight: bold;
  margin: 20px 20px 0px 20px;

`

export const Description = styled.Text`
  color: #F2F2F2;
  font-size: 20px;
  opacity: 0.7;
  margin: 10px 20px 0px 20px;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  background: rgba(255,255,255,0.6);
  margin: 20px 20px 0 20px;
  border-radius: 10px;
  padding: 20px;
`

export const ButtonText = styled.Text`
  color: #72A6A6;
  font-size: 30px;
  font-weight: bold;
  width: 70%;
`
