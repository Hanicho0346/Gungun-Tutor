import {  Box, Button, Flex, Image } from "@chakra-ui/react";
import Logo from "../assets/Images/Logo Image.png";
import { NavLink } from "react-router-dom";
import background from "../assets/Images/Wave Lines.png";
const NavBar = () => {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
    <Flex
      flexDir={"row"}
      mx={10}
      my={6}
      border={"2px solid"}
      borderRadius={"xl"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={4}
      backgroundImage={"linear-gradient(90deg, white, #FFD59A, white)"}
      color={"white"}
      width={"95%"}
      position={"relative"}
    boxShadow={"md"}
    bg={background}

    >
      <Box>
        <Image  src={Logo} height={"100vh"} width={"full"} boxSize={"20"} />
      </Box>
      <Flex dir="row" gap={7} fontSize={["xs", "sm", "md", "lg", "xl"]} textColor={"brand.500"} fontWeight={"bold"}>
        <Box >Home</Box>
        <Box>About</Box>
        <Box>Services</Box>
        <Box>Tutors</Box>
        <Box>Contact</Box>
      </Flex>
      <Box>
      <Button _hover={{
        boxShadow: "lg",
        bg: "#FFD59A",
        color: "black",
      }} boxShadow={"md"} textAlign={"center"} textColor={"black"} p={6} bg={"#FBB040"}>Find Your Tutor</Button>
      </Box>
    </Flex>
    </NavLink>
  );
};

export default NavBar;
