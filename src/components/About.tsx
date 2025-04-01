import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  Heading,
  Button,
  HStack,
  useBreakpointValue,
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

  const buttonSize = useBreakpointValue({ base: "150px", md: "170px" });
  const fontSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const labelSize = useBreakpointValue({ base: "lg", md: "xl" });

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
          width={buttonSize}
          height={"80px"}
          borderRadius={"50px"}
          color="white"
          fontSize={fontSize}
          _hover={{ background: "brand.500" }}
        >
          <Text fontWeight="bold">{clientCount}</Text>
          <Text fontWeight={"bold"}>+</Text>
        </Button>
        <Text fontSize={labelSize} color="orange.300">
          Clients
        </Text>
      </VStack>
      <VStack>
        <Button
          background={"green.400"}
          width={buttonSize}
          height={"80px"}
          borderRadius={"50px"}
          color={"white"}
          fontSize={fontSize}
          _hover={{ background: "brand.500" }}
        >
          <Text fontWeight="bold">{locationCount}</Text>
          <Text fontWeight={"bold"}>+</Text>
        </Button>
        <Text fontSize={labelSize} color="orange.300">
          Location
        </Text>
      </VStack>
    </Flex>
  );
};

const About = () => {
  const floatAnimation = `${float} 4s ease-in-out infinite`;
  const droplets = Array.from({ length: 70 }, (_, i) => i);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const headingSize = useBreakpointValue({ base: "3xl", md: "5xl" });
  const subTextSize = useBreakpointValue({ base: "18px", md: "21px" });
  const videoHeight = useBreakpointValue({ base: "250px", md: "400px" });
  const heroHeight = useBreakpointValue({ base: "40vh", md: "60vh" });
  const bottomSectionHeight = useBreakpointValue({ base: "30vh", md: "35vh" });

  return (
    <VStack overflow={"hidden"} spacing={0}>
      <Box
        w="100vw"
        h={heroHeight}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BgImage})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Box
          display="flex"
          flexDirection="column"
          marginTop={isMobile ? 40 : 60}
        >
          <Text
            fontWeight={650}
            fontSize={{ base: "30px", md: "40px" }}
            color="white"
            textAlign="center"
          >
            About
          </Text>
          <Flex dir="row" gap={3} justifyContent="center">
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
              fontSize={{ base: "12px", md: "15px" }}
              fontWeight={"bold"}
              color="gray.300"
              style={{ marginTop: "10px" }}
            >
              About
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box w="100%" px={{ base: 4, md: 8 }} maxW="1400px" mx="auto">
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          width={"100%"}
          alignItems="center"
          justifyContent="space-between"
          py={{ base: 8, md: 16 }}
        >
          <Box
            width={{ base: "100%", md: "50%" }}
            pr={{ md: 8 }}
            mt={{ base: 8, md: 0 }}
          >
            <Flex width={"100%"} overflow={"hidden"} marginBottom={"30px"}>
              <Image src={GROUP} alt="about" width="110px" height="110px" />
            </Flex>
            <Flex width={"100%"} color={"orange.300"} marginBottom={"20px"}>
              <Text fontSize={{ base: "16px", md: "20px" }} fontWeight={400}>
                ABOUT OUR COMPANY
              </Text>
            </Flex>
            <Flex width={"100%"} mt={5}>
              <Heading
                fontFamily={"'Poppins', sans-serif"}
                bgGradient="linear(to-r, brand.500, orange.400)"
                bgClip="text"
                fontWeight="bold"
                fontSize={headingSize}
                lineHeight="1.2"
              >
                We are a team of experts creating engaging tutorials.
              </Heading>
            </Flex>
            <Flex width={"100%"} mt={5}>
              <Text
                fontFamily="Pacifico, cursive"
                fontSize={subTextSize}
                color={"gray.400"}
              >
                Experience personalized home-to-home tutoring with expert female
                tutors, designed to empower women in a safe and supportive
                environment. Achieve your goals with flexible schedules and
                tailored lessons, right at your doorstep!
              </Text>
            </Flex>
            <Flex
              dir="row"
              gap={5}
              mt={5}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Count />
            </Flex>
          </Box>

          <Box width={{ base: "100%", md: "40%" }} mt={{ base: 4, md: 0 }}>
            <Image
              src={KID}
              alt="about"
              width="100%"
              maxW="500px"
              mx="auto"
              animation={floatAnimation}
            />
          </Box>
        </Flex>
      </Box>
      <Box w="100%" bg="blue.50" py={16} px={{ base: 4, md: 8 }}>
        <VStack spacing={8} maxW="1400px" mx="auto" textAlign="center">
          <Image src={BOOK} width={"140px"} height={"80px"} />
          <Heading
            fontFamily={"'Poppins', sans-serif"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Our recent creative activities
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="green.500"
            maxW="3xl"
            fontWeight={"bold"}
          >
            Let's check some of our YouTube.
          </Text>

          <Box
            as="iframe"
            src="https://www.youtube.com/embed/1sJvoB3AsMU"
            width="100%"
            maxW="950px"
            height={videoHeight}
            borderRadius="xl"
            border="none"
            boxShadow="xl"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.01)",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </VStack>
      </Box>
      <Box w="100%" py={16} px={{ base: 4, md: 8 }} bg="blue.50">
        <HStack
          gap={8}
          alignItems="flex-start"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          maxW="1400px"
          mx="auto"
        >
          {[
            {
              icon: USER,
              title: "Creative Ideas",
              text: "Creative ideas spark innovation and inspire new possibilities, turning imagination into impactful solutions.",
            },
            {
              icon: PHONE,
              title: "Conversations",
              text: "Conversation is a powerful tool for connection, learning, and sharing ideas, fostering understanding through meaningful dialogue.",
            },
            {
              icon: LIKE,
              title: "Make it Possible!",
              text: "Make it possible through creative tutoring, turning challenges into opportunities for learning and growth.",
            },
          ].map((item, index) => (
            <Flex
              key={index}
              gap={4}
              alignItems="flex-start"
              flexDirection={{ base: "row", sm: "row" }}
              width={{ base: "100%", md: "30%" }}
            >
              <Box
                position="relative"
                width={20}
                height={20}
                transition="transform 0.3s ease"
                _hover={{
                  transform: "rotateY(180deg)",
                }}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  mt={1}
                  transition="transform 0.2s ease"
                />
              </Box>
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold" fontSize="2xl">
                  {item.title}
                </Text>
                <Text textAlign="left">{item.text}</Text>
              </VStack>
            </Flex>
          ))}
        </HStack>
      </Box>
      <Box
        position="relative"
        w="100vw"
        h={bottomSectionHeight}
        bg="brand.300"
        overflow="hidden"
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
          direction={{ base: "column", md: "row" }}
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          zIndex="2"
          textAlign="center"
          px={4}
        >
          <Box
            bg={"white"}
            w={"120px"}
            h={"125px"}
            borderRadius={"10%"}
            marginRight={{ base: 0, md: "25px" }}
            mb={"10px"}
            display={{ base: "100px", md: "flex" }}
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
            maxW="1000px"
          >
            Expert Tutors Come to You – Safe, Convenient, and Effective!
          </Heading>
        </Flex>
      </Box>
    </VStack>
  );
};

export default About;
