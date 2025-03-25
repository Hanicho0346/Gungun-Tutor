import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Icon,
  VStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import picture from "../assets/Images/Ethiopian Kids Children.png";
import picture2 from "../assets/Images/One-on-One-Tutoring.jpg";
import chat from "../assets/Images/chat.png";
import {
  FaRocket,
  FaLightbulb,
  FaCode,
  FaQuoteRight,
  FaCheck,
} from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const float = keyframes`
  0% { transform: translateY(0) rotate(-10deg); }
  50% { transform: translateY(-20px) rotate(-10deg); }
  100% { transform: translateY(0) rotate(-10deg); }
`;

const floatOpposite = keyframes`
  0% { transform: translateY(0) rotate(10deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0) rotate(10deg); }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HoverBox = ({ icon, title, description, color }) => (
  <Box
    width={{ base: "100%", md: "23%" }}
    height={"350px"}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    p={"14"}
    textAlign="center"
    borderRadius="lg"
    transition="0.3s ease"
    _hover={{
      "& > .icon-container > .icon": {
        animation: `${rotate} 0.5s linear`,
        color: color,
      },
      transform: "scale(1.05)",
      boxShadow: "lg",
    }}
    border={"2px solid green"}
  >
    <Box
      className="icon-container"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      bg="brand.100"
      p={4}
      mb={6}
    >
      <Icon as={icon} className="icon" fontSize="4xl" transition="color 0.3s" />
    </Box>

    <Box flex={1} display="flex" flexDirection="column" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Text fontSize="md" mb={4}>
        {description}
      </Text>
    </Box>
  </Box>
);

const ClientCard = ({ name, relation, review }) => {
  const { t } = useTranslation();

  return (
    <Box
      mt={"28"}
      maxW="xl"
      borderWidth="1px"
      borderRadius="2xl"
      overflow="visible"
      p={"14"}
      boxShadow="lg"
      bg="white"
      position="relative"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.02)",
        transition: "0.3s ease",
      }}
    >
      <VStack align="start" spacing={5}>
        <Flex flexDir="row" alignItems="center" w="100%">
          <Divider orientation="horizontal" flex={1} borderColor="orange.300" />
          <Box ml={4}>
            <FaQuoteRight size={24} color="#FFA500" />
          </Box>
        </Flex>
        <Flex flexDir={"column"} justifyContent={"center"} gap={5}>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            <Box as="span" fontSize="xl" color="orange.500">
              "
            </Box>
            {t(review)}
            <Box as="span" fontSize="xl" color="orange.500">
              "
            </Box>
          </Text>
          <Text
            align={"center"}
            fontWeight="md"
            color={"brand.500"}
            fontSize="xl"
          >
            {t(name)}
          </Text>
          <Text align={"center"} fontSize="md" color="gray.500">
            {t(relation)}
          </Text>
        </Flex>
      </VStack>

      <Flex
        position="absolute"
        bottom="0"
        left="50%"
        transform="translate(-50%, 50%)"
      >
        <Avatar name={t(name)} size="lg" />
      </Flex>
    </Box>
  );
};

const Main = () => {
  const floatAnimation = `${float} 4s ease-in-out infinite`;
  const floatOppositeAnimation = `${floatOpposite} 4s ease-in-out infinite`;
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const clients = [
    {
      name: t("client1.name"),
      relation: t("client1.relation"),
      review: t("client1.review"),
    },
    {
      name: t("client2.name"),
      relation: t("client2.relation"),
      review: t("client2.review"),
    },
    {
      name: t("client3.name"),
      relation: t("client3.relation"),
      review: t("client3.review"),
    },
  ];

  return (
    <Box width="100%" overflow={"hidden"}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mt={"52"}
        px={7}
      >
        <Flex flexDir="column" maxWidth={{ base: "100%", md: "40%" }}>
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              mt={{ base: 10, md: "24" }}
              lineHeight="1.2"
            >
              Empower Your{" "}
              <Box as="span" color="brand.500">
                Child’s
              </Box>{" "}
              Future with Expert Tutoring
            </Text>
          </Box>
          <Button
            width="32"
            height="14"
            mt={10}
            alignSelf={{ base: "center", md: "flex-start" }}
            color="white"
            bg="brand.500"
            borderRadius="xl"
            boxShadow="xl"
            _hover={{ bg: "brand.600", transform: "scale(1.05)" }}
          >
            Get Tutor
          </Button>
        </Flex>

        <Box
          overflow="hidden"
          width={{ base: "300px", md: "400px", lg: "500px" }}
          height={{ base: "300px", md: "400px", lg: "500px" }}
          boxShadow="2xl"
          transform="rotate(-10deg)"
          borderRadius="xl"
          mt={{ base: 10, md: "16" }}
          animation={floatAnimation}
        >
          <Image
            src={picture2}
            alt="Tutoring Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        <Box
          overflow="hidden"
          width={{ base: "300px", md: "400px", lg: "500px" }}
          height={{ base: "300px", md: "400px", lg: "500px" }}
          boxShadow="2xl"
          transform="rotate(10deg)"
          borderRadius="xl"
          mt={{ base: 10, md: 0 }}
          animation={floatOppositeAnimation}
        >
          <Image
            src={picture}
            alt="Tutoring Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
      <Box mt={"32"}>
        <Text
          textAlign={"center"}
          align={"center"}
          fontSize={"5xl"}
          fontWeight="bold"
          mb={0}
        >
          What We
          <Box as="span" color={"brand.500"} mx={2}>
            Do
          </Box>
        </Text>
        <Text align={"center"} size={"sm"} color={"gray.500"}>
          Goongun Tutor provides world-class educational services without
          compromising quality.
        </Text>
      </Box>
      <Flex mt={20} justifyContent="center" flexWrap="wrap" gap={10}>
        <HoverBox
          icon={FaRocket}
          title="Social Marketing"
          description="Social marketing is an approach used to develop activities aimed."
          color="white"
        />
        <HoverBox
          icon={FaLightbulb}
          title="Business Ideas"
          description="Based on client needs, we will provide some good business solutions."
          color="white"
        />
        <HoverBox
          icon={FaCode}
          title="Development"
          description="Creating your own website was never that easy. Come and check it out!"
          color="white"
        />
      </Flex>

      <Flex
        flexDir={"row"}
        align="center"
        mt={"24"}
        gap={10}
        justifyContent={"space-around"}
      >
        <Box maxW="600px" mt={10} mx="auto" textAlign="left">
          <Text fontSize="5xl" fontWeight={"bold"} color="black">
            More Engaging ,More{" "}
            <Box as="span" color={"brand.400"} letterSpacing="widest">
              Sucessfull{" "}
            </Box>{" "}
            Result
          </Text>
          <Text fontSize={"md"} color={"gray.500"} mb={8}>
            Our range of online study tools prepared by university teachers and
            experts in the field that individuals can enroll in to practice and
            assess where they are standing.
          </Text>
          <Divider orientation="horizontal" />
          <Flex
            flexDir="row"
            alignItems="center"
            gap={3} 
          >
            <Box
              borderRadius="full"
              border="2px solid"
              borderColor="orange.400"
              p={2} 
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="orange.400"
              boxSize="24px" 
            >
              <FaCheck size="30px" />
            </Box>
            <Text fontSize="md" fontWeight="medium" color="gray.700">
              Trained Tutor
            </Text>
          </Flex>
        </Box>

        <Box>
          <Image src={picture} />
        </Box>
      </Flex>

      <Divider mt={20} />
      <Flex
        mt={20}
        flexDir={"row"}
        align="center"
        m={2}
        gap={10}
        justifyContent={"space-around"}
      >
        <Flex justifyContent={"flex-start"}>
          <Box maxW="600px" mt={10} mx="auto" textAlign="left">
            <Image src={chat} color="brand.500" boxSize={"100px"} mb={4} />
            <Text
              fontSize="3xl"
              fontWeight={"md"}
              fontFamily={"monospace"}
              color="brand.500"
              letterSpacing="widest"
              mb={4}
            >
              Our Testimonials
            </Text>
            <Text fontSize="5xl" fontWeight="bold" mb={4}>
              Our
              <Box as="span" color="brand.500" mx={2}>
                Client's
              </Box>
              Says
            </Text>
            <Text fontSize="md" color="gray.500" mb={8}>
              Discover how our tutoring services have empowered countless
              parents and students alike to achieve academic success.
            </Text>
          </Box>
        </Flex>
        <Flex flexDir={"column"} align="center" m={2} gap={10}>
          <ClientCard
            name={clients[activeIndex].name}
            relation={clients[activeIndex].relation}
            review={clients[activeIndex].review}
          />
          <Flex justifyContent="center" mt={4}>
            {clients.map((_, index) => (
              <Box
                key={index}
                as="button"
                w={3}
                h={3}
                borderRadius="full"
                bg={index === activeIndex ? "brand.500" : "gray.300"}
                mx={1}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Main;
