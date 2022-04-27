import React from "react";
import { Center, Container, Desc, Left, Logo, Right, Wrapper } from "./topbar";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>FitnessHUB</Logo>
        </Left>
        <Center>
          <Desc>Your Fitness Journey Begins...</Desc>
        </Center>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
