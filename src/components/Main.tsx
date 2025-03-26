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
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLightbulb, FaCode, FaQuoteRight, FaCheck } from "react-icons/fa";
import MapWithMarkers from "./MapWithMarker";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import picture from "../assets/Images/Ethiopian Kids Children.png";
import picture2 from "../assets/Images/One-on-One-Tutoring.jpg";
import chat from "../assets/Images/chat.png";
import { Link } from "react-router-dom";

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
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const HOVER_BOX_WIDTH = { base: "100%", md: "23%" };
const IMAGE_SIZES = { base: "250px", md: "400px", lg: "500px" };

const HoverBox = ({ icon, title, description, color }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      width={isMobile ? "90%" : HOVER_BOX_WIDTH}
      height={isMobile ? "300px" : "350px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p={isMobile ? 6 : 14}
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
      border="2px solid"
      borderColor="gray.100"
      mx={isMobile ? "auto" : 0}
      mb={isMobile ? 6 : 0}
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
        <Icon
          as={icon}
          className="icon"
          fontSize={isMobile ? "3xl" : "4xl"}
          transition="color 0.3s"
        />
      </Box>

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text fontSize={isMobile ? "xl" : "2xl"} fontWeight="bold" mb={4}>
          {title}
        </Text>
        <Text fontSize={isMobile ? "sm" : "md"} mb={4}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

const ClientCard = ({ name, relation, review }) => {
  const { t } = useTranslation();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      mt={isMobile ? 14 : 28}
      maxW={isMobile ? "90%" : "xl"}
      borderWidth="1px"
      borderRadius="2xl"
      overflow="visible"
      p={isMobile ? 8 : 14}
      boxShadow="lg"
      bg="white"
      position="relative"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.02)",
        transition: "0.3s ease",
      }}
      mx={isMobile ? "auto" : 0}
    >
      <VStack align="start" spacing={5}>
        <Flex flexDir="row" alignItems="center" w="100%">
          <Divider orientation="horizontal" flex={1} borderColor="orange.300" />
          <Box ml={4}>
            <FaQuoteRight size={isMobile ? 20 : 24} color="#FFA500" />
          </Box>
        </Flex>
        <Flex flexDir="column" justifyContent="center" gap={5}>
          <Text
            fontSize={isMobile ? "md" : "lg"}
            color="gray.700"
            lineHeight="tall"
          >
            <Box as="span" fontSize={isMobile ? "lg" : "xl"} color="orange.500">
              "
            </Box>
            {t(review)}
            <Box as="span" fontSize={isMobile ? "lg" : "xl"} color="orange.500">
              "
            </Box>
          </Text>
          <Text
            align="center"
            fontWeight="md"
            color="brand.500"
            fontSize={isMobile ? "lg" : "xl"}
          >
            {t(name)}
          </Text>
          <Text
            align="center"
            fontSize={isMobile ? "sm" : "md"}
            color="gray.500"
          >
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
        <Avatar name={t(name)} size={isMobile ? "md" : "lg"} />
      </Flex>
    </Box>
  );
};

const FeatureItem = ({ text }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      flexDir="row"
      alignItems="center"
      gap={5}
      mt={isMobile ? 5 : 10}
      w={isMobile ? "100%" : "auto"}
    >
      <Box
        borderRadius="full"
        border="2px solid"
        borderColor="orange.400"
        bg="orange.400"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        boxSize={isMobile ? "20px" : "24px"}
      >
        <FaCheck size={isMobile ? "10px" : "12px"} color="white" />
      </Box>
      <Text
        fontSize={isMobile ? "sm" : "md"}
        fontWeight="medium"
        color="gray.700"
        align={isMobile ? "left" : "center"}
      >
        {text}
      </Text>
    </Flex>
  );
};

const Main = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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

  const features = [
    "Trained Tutor",
    "Personalized Learning",
    "Flexible Scheduling",
    "Progress Tracking",
  ];

  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  const center = {
    lat: 9.022736,
    lng: 38.749999,
  };

  return (
    <Box width="100%" overflow="hidden" px={isMobile ? 4 : 8}>
      {/* Hero Section */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mt={{ base: 20, md: 52 }}
        px={isMobile ? 0 : 7}
      >
        <Flex
          flexDir="column"
          maxWidth={{ base: "100%", md: "40%" }}
          textAlign={isMobile ? "center" : "left"}
        >
          <Box>
            <Text
              fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
              fontWeight="bold"
              mt={{ base: 10, md: 24 }}
              lineHeight="1.2"
            >
              Empower Your{" "}
              <Box as="span" color="brand.500">
                Child's
              </Box>{" "}
              Future with Expert Tutoring
            </Text>
            {isMobile && (
              <Text mt={4} color="gray.600" fontSize="md">
                Personalized one-on-one tutoring for all subjects and grade
                levels
              </Text>
            )}
          </Box>
          <Button
            width={{ base: "100%", sm: "32" }}
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

        {!isMobile ? (
          <>
            <Box
              overflow="hidden"
              width={IMAGE_SIZES}
              height={IMAGE_SIZES}
              boxShadow="2xl"
              transform="rotate(-10deg)"
              borderRadius="xl"
              mt={{ base: 10, md: 16 }}
              animation={`${float} 4s ease-in-out infinite`}
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
              width={IMAGE_SIZES}
              height={IMAGE_SIZES}
              boxShadow="2xl"
              transform="rotate(10deg)"
              borderRadius="xl"
              mt={{ base: 10, md: 0 }}
              animation={`${floatOpposite} 4s ease-in-out infinite`}
            >
              <Image
                src={picture}
                alt="Tutoring Image"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
          </>
        ) : (
          <Box
            overflow="hidden"
            width="300px"
            height="300px"
            boxShadow="2xl"
            borderRadius="xl"
            mt={10}
            mx="auto"
          >
            <Image
              src={picture2}
              alt="Tutoring Image"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        )}
      </Flex>

      <Box mt={{ base: 20, md: 32 }}>
        <Text
          textAlign="center"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          mb={0}
        >
          What We{" "}
          <Box as="span" color="brand.500" mx={2}>
            Do
          </Box>
        </Text>
        <Text
          align="center"
          fontSize={{ base: "sm", md: "md" }}
          color="gray.500"
          px={isMobile ? 4 : 0}
        >
          Goongun Tutor provides world-class educational services without
          compromising quality.
        </Text>
      </Box>

      <Flex
        mt={10}
        justifyContent="center"
        flexWrap="wrap"
        gap={isMobile ? 6 : 10}
        flexDir={isMobile ? "column" : "row"}
        alignItems={isMobile ? "center" : "flex-start"}
      >
        <Box
          maxW={isMobile ? "90%" : "350px"}
          height="350px"
          borderRadius="xl"
          overflow="visible"
          p={5}
          boxShadow="lg"
          position="relative"
          transition="0.3s ease"
          bgGradient="linear(to-r, green.100, blue.100)"
          _hover={{
            boxShadow: "xl",
            transform: "scale(1.02)",
          }}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mt={isMobile ? 6 : 12}
          >
            <Text
              p={2}
              fontSize={{ base: "xl", md: "2xl" }}
              letterSpacing="widest"
              fontFamily="monospace"
              fontWeight="bold"
              mb={2}
            >
              Our Services
            </Text>
            <Text
              px={isMobile ? 2 : 5}
              maxW={"400px"}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              We will help your <br /> child with their academics
            </Text>
          </Box>
        </Box>

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
        flexDir={{ base: "column", md: "row" }}
        align="center"
        mt={{ base: 16, md: 24 }}
        gap={10}
        justifyContent="space-around"
        px={isMobile ? 0 : 4}
      >
        <Box
          maxW={isMobile ? "90%" : "600px"}
          mt={isMobile ? 0 : 10}
          mx="auto"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            color="black"
          >
            More Engaging, More{" "}
            <Box as="span" color="brand.400" letterSpacing="widest">
              Successful{" "}
            </Box>{" "}
            Result
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.500" mb={8}>
            Our range of online study tools prepared by university teachers and
            experts in the field that individuals can enroll in to practice and
            assess where they are standing.
          </Text>
          <Divider orientation="horizontal" />

          <Flex
            flexWrap="wrap"
            justifyContent={{ base: "center", md: "space-between" }}
            gap={1}
            maxW={isMobile ? "100%" : "500px"}
          >
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
            <Divider my={7} orientation="horizontal" />
            <Button
              background="brand.400"
              borderRadius={"50px"}
              p={7}
              transition="0.3s ease"
              boxShadow={"xl"}
              _hover={{
                bg: "brand.300",
                textColor: "white",
              }}
              as={Link}
              to={"/about"}
              width={isMobile ? "100%" : "auto"}
            >
              More About Us
            </Button>
          </Flex>
        </Box>

        {isMobile ? (
          <Box width="80%" mt={8}>
            <Image
              src={picture}
              alt="Features illustration"
              borderRadius="xl"
            />
          </Box>
        ) : (
          <Box>
            <Image src={picture} alt="Features illustration" />
          </Box>
        )}
      </Flex>

      <Divider mt={{ base: 10, md: 20 }} />

      <Flex
        mt={{ base: 10, md: 20 }}
        flexDir={{ base: "column", md: "row" }}
        align="center"
        m={2}
        gap={10}
        justifyContent="space-around"
        px={isMobile ? 0 : 4}
      >
        <Box
          maxW={isMobile ? "90%" : "600px"}
          mt={isMobile ? 0 : 10}
          mx="auto"
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            src={chat}
            color="brand.500"
            boxSize={isMobile ? "80px" : "100px"}
            mb={4}
            mx={isMobile ? "auto" : 0}
            display={{ base: "block", md: "block" }}
          />
          <Text
            fontSize={{ base: "xl", md: "3xl" }}
            fontWeight="md"
            fontFamily="monospace"
            color="brand.500"
            letterSpacing="widest"
            mb={4}
          >
            Our Testimonials
          </Text>
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={4}>
            Our{" "}
            <Box as="span" color="brand.500" mx={2}>
              Client's
            </Box>
            Says
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.500" mb={8}>
            Discover how our tutoring services have empowered countless parents
            and students alike to achieve academic success.
          </Text>
        </Box>

        <Flex
          flexDir="column"
          align="center"
          m={2}
          gap={10}
          width={isMobile ? "100%" : "auto"}
        >
          <ClientCard
            name={clients[activeIndex].name}
            relation={clients[activeIndex].relation}
            review={clients[activeIndex].review}
          />
          <Flex justifyContent="center" mt={4} width="100%">
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

      <Box width="100%" mt={10} px={isMobile ? 0 : 4}>
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Box>
    </Box>
  );
};

export default Main;
