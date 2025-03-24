import { Box, Flex, Text, VStack, Image, Heading } from "@chakra-ui/react";
import BgImage from "../assets/Images/gungun8.webp";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import GROUP from "../assets/Images/group.png";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <VStack overflow={"hidden"}>
      <Box
        w="100vw"
        h="80vh"
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BgImage})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={10}
      >
        <Box display="flex" flexDirection="column" marginTop={60}>
          <Text fontWeight={650} fontSize={40} color="white">
            About
          </Text>
          <Flex dir="row" gap={3}>
            <NavLink to={"/"} style={{ textDecoration: "none" }}>
              <AiFillHome
                size={20}
                color="white"
                style={{ marginTop: "10px" }}
              />
            </NavLink>
            <AiOutlineRight
              size={17}
              color="white"
              style={{ marginTop: "13px" }}
            />
            <Text
              fontSize={15}
              fontWeight={"bold"}
              color="gray.300"
              style={{ marginTop: "10px" }}
            >
              About
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box width={"100%"} marginLeft={"200px"}>
        <Flex
          width={"100%"}
          marginTop="200px"
          overflow={"hidden"}
          marginLeft={"200px"}
        >
          <Image src={GROUP} alt="about" width="110px" height="110px" />
        </Flex>
        <Flex width={"100%"} marginLeft={"200px"} color={"orange.300"}>
          <Text fontSize={20} fontWeight={400}>
            ABOUT OUR COMPANY
          </Text>
        </Flex>
        <Flex width={"100%"} mt={5} marginLeft={"200px"}>
          <Heading
            fontFamily={"'Poppins', sans-serif"}
            bgGradient="linear(to-r, brand.500, orange.400)"
            bgClip="text"
            fontWeight="bold"
            fontSize="4xl"
          >
            We are a team of experts
            <br /> creating engaging tutorials.
          </Heading>
        </Flex>
        <Flex width={"100%"} marginLeft={"200px"} mt={5}>
          <Text
            fontFamily="Pacifico, cursive"
            fontSize={"19px"}
            color={"gray.500"}
          >
            Experience personalized home-to-home tutoring with expert female
            <br />
            tutors, designed to empower women in a safe and supportive
            environment.
            <br />
            Achieve your goals with flexible schedules and tailored lessons,
            <br />
            right at your doorstep!
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export default About;
