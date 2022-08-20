import React from "react";
import { Button, Container, Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      gap="10px"
      maxWidth={"400px"}
    >
      <Text textAlign={"center"} fontSize="4xl">
        Welcome Back
      </Text>
      <Text>Login account to continue...</Text>

      <Input placeholder="Enter Email address" />

      <Input placeholder="Enter Password" />

      <Button>Login</Button>
      <Flex gap="15px" padding="10px">
        <Text> Don't have account ?</Text>
        <Link color={"green"}>Sign Up</Link>
      </Flex>
      
    </Container>
  );
};

export default Login;
