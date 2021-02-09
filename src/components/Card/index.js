import React, { Children } from "react";

import { Container } from "./styles";
import { ListItem } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
const Card = ({ children, state, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <ListItem>
          <Container state={state}>{children}</Container>
        </ListItem>
      </TouchableOpacity>
    </>
  );
};

export default Card;
