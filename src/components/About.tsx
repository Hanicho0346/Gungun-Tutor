import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  Heading,
  Button,
  HStack,
} from "@chakra-ui/react";
import BgImage from "../assets/Images/gungun9.jpg";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import GROUP from "../assets/Images/group.png";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import KID from "../assets/Images/kid1.png";
import { keyframes } from "@emotion/react";
import BOOK from "../assets/Images/Logo Image.png";
import { motion } from "framer-motion";
import { GoBook } from "react-icons/go";
import USER from "../assets/Images/user.png";
import PHONE from "../assets/Images/smartphone.png";
import LIKE from "../assets/Images/like.png";

const MotionBox = motion(Box);
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
  const droplets = Array.from({ length: 70 }, (_, i) => i);
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
        <Box width={"100%"} maxW={"70%"} marginLeft={"200px"} marginTop="100px">
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
          maxWidth={"30%"}
        />
      </Flex>
      <Box marginTop={"100px"} position="relative" w={"100%"} py={16}>
        <VStack
          position="relative"
          w={"100%"}
          zIndex={1}
          spacing={4}
          mx="auto"
          px={4}
          textAlign="center"
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
          <Image src={BOOK} width={"140px"} height={"80px"} mt={20} />
          <Heading
            fontFamily={"'Poppins', sans-serif"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Our recent creative activities
          </Heading>

          <Text fontSize="lg" color="green.500" maxW="3xl" fontWeight={"bold"}>
            Let's check some of our YouTube.
          </Text>
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/1sJvoB3AsMU"
            width="950px"
            height="400px"
            borderRadius="xl"
            border="none"
            marginTop={8}
            mb={40}
            boxShadow="xl"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.01)",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sx={{
              aspectRatio: "16/9",
              minHeight: "250px",
              display: "block",
              mx: "auto",
            }}
          />
          <HStack
            marginBottom={20}
            marginTop={-20}
            gap={8}
            alignItems="flex-start"
          >
            <Flex gap={4} alignItems="flex-start">
              <Image
                src={USER}
                width={20}
                height={20}
                mt={1}
                transition="transform 0.3s ease"
                _hover={{
                  transform: "translateX(-5px)"
                }}
              />
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold" fontSize="2xl">
                  Creative Ideas
                </Text>
                <Box textAlign="left" whiteSpace="pre-line">
                  <Text display="inline-block" textAlign="left">
                    Lorem ipsum dolor sit amet, conse ctetur adipi
                    {"\n"}
                    scing elit. duis odio nisl, tinci dunt eturn
                    {"\n"}
                    sed molis velit.
                  </Text>
                </Box>
              </VStack>
            </Flex>
            <Flex gap={4} alignItems="flex-start">
              <Image
                src={PHONE}
                width={20}
                height={20}
                mt={1}
                _hover={{
                  animation:
                    "moveRightToLeft 0.5s ease-in-out infinite alternate",
                }}
              />
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold" fontSize="2xl" lineHeight="short">
                  Creative Ideas
                </Text>
                <Box textAlign="left" whiteSpace="pre-line">
                  <Text display="inline-block" textAlign="left">
                    Lorem ipsum dolor sit amet, conse ctetur adipi
                    {"\n"}
                    scing elit. duis odio nisl, tinci dunt eturn
                    {"\n"}
                    sed molis velit.
                  </Text>
                </Box>
              </VStack>
            </Flex>
            <Flex gap={4} alignItems="flex-start">
              <Image
                src={LIKE}
                width={20}
                height={20}
                mt={1}
                _hover={{
                  animation:
                    "moveRightToLeft 0.5s ease-in-out infinite alternate",
                }}
              />
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold" fontSize="2xl" lineHeight="short">
                  Creative Ideas
                </Text>
                <Box textAlign="left" whiteSpace="pre-line">
                  <Text display="inline-block" textAlign="left">
                    Lorem ipsum dolor sit amet, conse ctetur adipi
                    {"\n"}
                    scing elit. duis odio nisl, tinci dunt eturn
                    {"\n"}
                    sed molis velit.
                  </Text>
                </Box>
              </VStack>
            </Flex>
          </HStack>
        </VStack>
        <Box
          position="relative"
          w="100vw"
          h="35vh"
          bg="brand.300"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 70%, brand.200 100%)",
            zIndex: 1,
          }}
        >
          {droplets.map((_, index) => {
            const left = Math.random() * 100;
            const duration = Math.random() * 5 + 5;
            const delay = Math.random() * 2;
            const xOffset = Math.random() * 20 - 10;
            const size = Math.random() * 10 + 8;
            const opacity = Math.random() * 0.5 + 0.5;

            return (
              <MotionBox
                key={index}
                position="absolute"
                top="-20px"
                left={`${left}vw`}
                width={`${size}px`}
                height={`${size}px`}
                bg="blue.100"
                borderRadius="50%"
                initial={{ opacity: 0 }}
                animate={{
                  x: [`${xOffset}vw`, `${xOffset + 17}vw`],
                  y: ["0vh", "100vh"],
                  opacity: [opacity, opacity * 0.8, 0],
                  scale: [1, 1.1, 0.9],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay,
                  repeatDelay: 0,
                }}
                _hover={{
                  bg: "blue.100",
                  transform: "scale(1.5)",
                }}
              />
            );
          })}
          <Flex
            dir="row"
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            zIndex="2"
            textAlign="center"
          >
            <Box
              bg={"white"}
              w={"120px"}
              h={"125px"}
              borderRadius={"10%"}
              marginRight={"25px"}
              mb={"10px"}
            >
              <GoBook
                size={60}
                color="#16C47F"
                style={{ marginTop: "30px", marginLeft: "30px" }}
              />
            </Box>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              color="white"
              fontWeight="bold"
            >
              Expert Tutors Come to You – Safe, Convenient,
              <br />
              and Effective!
            </Heading>
          </Flex>
          <MotionBox
            position="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="20px"
            bg="linear-gradient(to top, brand.200, transparent)"
            zIndex="2"
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default About;
