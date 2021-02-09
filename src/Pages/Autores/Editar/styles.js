import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #72A6A6;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  color: #F2F2F2;
  font-size: 35px;
  font-weight: bold;
  margin: 50px 20px 0px 20px;

`

export const Description = styled.Text`
  color: #F2F2F2;
  font-size: 20px;
  opacity: 0.7;
  margin: 10px 20px 30px 20px;
`
export const Mensagem = styled.Text`
  margin: 10px 20px 30px 20px;
`
export const Button = styled.TouchableOpacity`
  height: 52px;
  background: #fff;
  margin: 10px 20px 0 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: #72A6A6;
  font-size: 20px;
  font-weight: bold;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)'
})`
  margin: 10px 20px 10px 20px;
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 10px;
  font-weight: bold;
  
  border: 1px solid #fff;
`

export const InputPassword = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)'

})`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`
export const InputView = styled.View`
  margin: 10px 20px 10px 20px;
  padding:0px 10px;
  border-radius: 10px;
  
  border: 1px solid #fff;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

`
export const Span = styled.Text`
  color: #fff;
  text-align: center;
  margin-top: 10px;
`

