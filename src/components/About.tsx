import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import BgImage from "../assets/Images/gungun9.jpg";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import GROUP from "../assets/Images/group.png";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import KID from "../assets/Images/kid1.png";
import { keyframes } from "@emotion/react";
import BOOK from "../assets/Images/book1.png";
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(0deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const Count = () => {
  const [clientCount, setClientCount] = useState(0);
  const [locationCount, setLocationCount] = useState(0);
  const countRef = useRef(null);

  const targetClients = 500;
  const targetLocations = 300;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const clientInterval = setInterval(() => {
            setClientCount((prev) => {
              if (prev >= targetClients) {
                clearInterval(clientInterval);
                return prev;
              }
              return prev + 1;
            });
          }, 10);

          const locationInterval = setInterval(() => {
            setLocationCount((prev) => {
              if (prev >= targetLocations) {
                clearInterval(locationInterval);
                return prev;
              }
              return prev + 1;
            });
          }, 10);
        } else {
          setClientCount(0);
          setLocationCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [targetClients, targetLocations]);

  return (
    <Flex
      ref={countRef}
      direction={{ base: "column", md: "row" }}
      gap={6}
      justifyContent="center"
      alignItems="center"
      mt={10}
    >
      <VStack>
        <Button
          background={"green.400"}
          width={"170px"}
          height={"80px"}
          borderRadius={"50px"}
          color="white"
          fontSize={"3xl"}
          _hover={{ background: "brand.500" }}
        >
          <Text fontWeight="bold">{clientCount}</Text>
          <Text fontWeight={"bold"}>+</Text>
        </Button>
        <Text fontSize="xl" color="orange.300">
          Clients
        </Text>
      </VStack>
      <VStack>
        <Button
          background={"green.400"}
          width={"170px"}
          height={"80px"}
          borderRadius={"50px"}
          color={"white"}
          fontSize={"3xl"}
          _hover={{ background: "brand.500" }}
        >
          <Text fontWeight="bold">{locationCount}</Text>
          <Text fontWeight={"bold"}>+</Text>
        </Button>
        <Text fontSize="xl" color="orange.300">
          Location
        </Text>
      </VStack>
    </Flex>
  );
};
const About = () => {
  const floatAnimation = `${float} 4s ease-in-out infinite`;
  return (
    <VStack overflow={"hidden"}>
      <Box
        w="100vw"
        h="60vh"
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BgImage})`}
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
      <Flex dir="row" width={"100%"}>
        <Box width={"100%"} marginLeft={"200px"} marginTop="100px">
          <Flex width={"100%"} overflow={"hidden"} marginBottom={"30px"}>
            <Image src={GROUP} alt="about" width="110px" height="110px" />
          </Flex>
          <Flex width={"100%"} color={"orange.300"} marginBottom={"20px"}>
            <Text fontSize={20} fontWeight={400}>
              ABOUT OUR COMPANY
            </Text>
          </Flex>
          <Flex width={"100%"} mt={5}>
            <Heading
              fontFamily={"'Poppins', sans-serif"}
              bgGradient="linear(to-r, brand.500, orange.400)"
              bgClip="text"
              fontWeight="bold"
              fontSize="5xl"
            >
              We are a team of experts
              <br /> creating engaging tutorials.
            </Heading>
          </Flex>
          <Flex width={"100%"} mt={5}>
            <Text
              fontFamily="Pacifico, cursive"
              fontSize={"21px"}
              color={"gray.400"}
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
          <Flex dir="row" gap={5} marginLeft={"100px"} mt={5}>
            <Count />
          </Flex>
        </Box>
        <Image
          src={KID}
          alt="about"
          width="500px"
          height="500px"
          animation={floatAnimation}
          marginRight={"300px"}
          marginTop={"150px"}
        />
      </Flex>
      <Box
        marginTop={"100px"}
        position="relative"
        w={"100%"}
        py={16}
        bg="blue.50"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          background: `
          radial-gradient(circle at center, 
            rgba(255, 179, 71, 0.1) 0%, 
            transparent 70%
          ),
          linear-gradient(to bottom right, 
            transparent 60%, 
            rgba(255, 179, 71, 0.05) 100%
          )`,
          zIndex: 0,
        }}
      >
        <VStack
          position="relative"
          zIndex={1}
          spacing={4}
          maxW="1200px"
          mx="auto"
          px={4}
          textAlign="center"
        >
          <Image src={BOOK} width={"140px"} height={"130px"} />
          <Text
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="2px"
            color="green.500"
            textTransform="uppercase"
          >
            PROJECTS WE DONE
          </Text>

          <Heading
            fontFamily={"'Poppins', sans-serif"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Our recent creative projects
          </Heading>

          <Text fontSize="lg" color="green.500" maxW="3xl" fontWeight={"bold"}>
            Let's check some of our perfect projects.
          </Text>
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/1sJvoB3AsMU"
            width={{ base: "100%", md: "80%", lg: "70%" }}
            height="auto"
            borderRadius="xl"
            border="none"
            marginTop={8}
            marginBottom={8}
            boxShadow="xl"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.01)",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              aspectRatio: "16/9",
              minHeight: "250px",
              display: "block",
              mx: "auto",
            }}
          />
        </VStack>
      </Box>
    </VStack>
  );
};

export default About;
