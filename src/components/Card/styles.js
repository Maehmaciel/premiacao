import styled from "styled-components/native";
import { Body } from "native-base";
export const Container = styled(Body)`
  background: #fff;
  padding: 5px;
  border-radius: 10px;
  border-color: ${(props) =>
    props.state == 1
      ? "yellow"
      : props.state == 2
      ? "green"
      : props.state == 3
      ? "red"
      : "blue"};
  border-left-width: 15px;
  margin: 4px;
`;
