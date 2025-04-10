import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Divider,
  useMediaQuery,
  chakra,
  shouldForwardProp,
  SimpleGrid,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import picture from "../../assets/Images/photo_2025-03-19_09-24-01.jpg";
import picture2 from "../../assets/Images/photo_2025-03-19_09-24-02 (2).jpg";
import picture3 from "../../assets/Images/photo_2025-03-19_09-24-03.jpg";
import chat from "../../assets/Images/chat.png";
import picture4 from "../../assets/Images/Ethiopian Kids Children.png";
import { Link } from "react-router-dom";
import { isValidMotionProp, motion } from "framer-motion";
import AddisAbabaMap from "../Map/AddisAbabaMap";
import pcscreen from "../../assets/Images/pcscreen.png";
import ClientCard from "./ClientCard";
import FeatureItem from "./FeatureItem";
import HoverBox from "./HoverBox";
import parents from "../../assets/Images/parents.png";
import goongoontutor from "../../assets/Images/goongoon-tutor.png";
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featureCardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const featuresforScreen = [
    {
      number: "1",
      title: "Easy fill form",
      description:
        "Families fill form with their needs - Tutors create profiles with their qualifications",
    },
    {
      number: "2",
      title: "Instant Matching",
      description:
        "We connect families with suitable tutors through our Telegram network",
    },
    {
      number: "3",
      title: "Secure Start",
      description:
        "After prepayment confirmation, lessons begin with direct contact between tutor and family",
    },
  ];
  const sliderSettings = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    grabCursor: true,
    effect: "slide",
  };

  const images = [picture, picture2, picture3];

  return (
    <Box width="100%" overflow="hidden" px={isMobile ? 4 : 8}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mt={{ base: 20, md: 28 }}
        px={isMobile ? 0 : 7}
      >
        {isMobile && (
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
        <Flex
          flexDir="column"
          maxWidth={{ base: "100%", md: "40%" }}
          textAlign={isMobile ? "center" : "left"}
          gap={4} // Added consistent gap between children
        >
          {/* Improved badge component with better structure */}
          <Flex
            alignItems="center"
            mt={{ base: 10, md: 16 }}
            mb={2} // Added margin bottom for separation
            gap={2} // Consistent gap between items
          >
            <Box
              width={2}
              height={2}
              bg="brand.500"
              borderRadius="full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              as={motion.span}
            
             
            />
            <Text
              color="brand.600"
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="semibold"
              letterSpacing="wide"
              textTransform="uppercase" // Makes the text more badge-like
            >
              Join Our Trusted Tutor Network
            </Text>
          </Flex>

          {/* Improved heading with better spacing */}
          <Text
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="1.2"
            mb={isMobile ? 2 : 4} // Responsive margin bottom
          >
            Empower Your{" "}
            <Box as="span" color="brand.500">
              Child's
            </Box>{" "}
            Future with Expert Tutoring
          </Text>

          {/* Subtext with improved readability */}
          {isMobile && (
            <Text color="gray.600" fontSize="md" mb={6}>
              Personalized one-on-one tutoring for all subjects and grade levels
            </Text>
          )}

          {/* Enhanced button with better hover states */}
          <Button
            width={{ base: "100%", sm: "auto" }} // Changed to auto for better proportions
            height="14"
            px={8} // Added horizontal padding
            mt={isMobile ? 4 : 6} // Responsive top margin
            alignSelf={{ base: "center", md: "flex-start" }}
            color="white"
            bg="brand.500"
            borderRadius="xl"
            boxShadow="xl"
            _hover={{
              bg: "brand.600",
              transform: "scale(1.05)",
              boxShadow: "2xl", // Enhanced shadow on hover
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s ease"
          >
            Find a Tutor
          </Button>
        </Flex>

        {!isMobile && (
          <>
            <Box width="100%" maxW="700px" mx="auto">
              <Swiper {...sliderSettings} style={{ padding: "40x 0" }}>
                {images.map((picture, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      position="relative"
                      width="100%"
                      height={{ base: "400px", md: "600px" }} // Responsive height
                      borderRadius="xl"
                      overflow="hidden"
                      boxShadow="xl"
                      transition="transform 0.3s ease" // Smooth hover effect
                      _hover={{
                        transform: "scale(1.02)",
                        zIndex: 1,
                      }}
                    >
                      <Image
                        src={picture}
                        alt={`Educational tutoring slide ${index + 1}`} // More descriptive alt text
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        loading={index < 2 ? "eager" : "lazy"} // Eager load first 2 images
                        decoding="async"
                        style={{
                          filter: "brightness(0.95)", // Slight brightness adjustment
                          transition: "filter 0.3s ease",
                        }}
                        _hover={{
                          filter: "brightness(1)",
                        }}
                      />
                      {/* Optional overlay/caption */}
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        p={4}
                        bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                        color="white"
                      >
                        <Text fontSize="lg" fontWeight="bold">
                          {index === 0
                            ? "Personalized Tutoring"
                            : index === 1
                            ? "Expert Educators"
                            : "Flexible Scheduling"}
                        </Text>
                        <Text fontSize="sm">
                          {index === 0
                            ? "Tailored to your child's needs"
                            : index === 1
                            ? "Qualified and experienced tutors"
                            : "Learn at your own pace"}
                        </Text>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </>
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
              p={{ base: 6, md: 4 }}
              fontSize={{ base: "3xl", md: "2xl" }}
              letterSpacing="widest"
              fontFamily="sans-serif"
              fontWeight="bold"
              mb={{ base: 4, md: 2 }}
            >
              Our Services
            </Text>
            <Text
              px={isMobile ? 2 : 5}
              maxW={"400px"}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              textAlign={{ base: "center", md: "center" }}
              lineHeight="shorter"
            >
              We will help your child with their academics
            </Text>
          </Box>
        </Box>

        <HoverBox
          icon={<Image src={parents} color={"white"} boxSize={10} />}
          title="Consultation"
          description="We will help you to find the best solution for your child."
          color="white"
        />
        <HoverBox
          icon={<Image src={goongoontutor} color={"white"} boxSize={10} />}
          title="Goongun Tutor"
          description="Become Tutor and make money and also gain experince."
          color="white"
        />
      </Flex>

      <Flex
        flexDir={{ base: "column", md: "row" }}
        align="center"
        mt={{ base: 16, md: 32 }}
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
            Our tutors are trained to provide personalized learning experiences
          </Text>
          <Divider orientation="horizontal" />

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={3}
            justifyContent={{ base: "center", md: "space-between" }}
            gap={1}
            maxW={isMobile ? "100%" : "500px"}
          >
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
            <Divider my={7} orientation="horizontal" />
          </SimpleGrid>
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
        </Box>

        {isMobile ? (
          <Box width="80%" mt={8}>
            <Image
              src={picture4}
              alt="Features illustration"
              borderRadius="xl"
            />
          </Box>
        ) : (
          <Box>
            <Image src={picture4} alt="Features illustration" />
          </Box>
        )}
      </Flex>

      <Divider mt={{ base: 10, md: 20 }} />

      <Flex
        mt={{ base: 10, md: 2 }}
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
      <Flex
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
        py={6}
        px={4}
        mt={20}
      >
        <Box
          as={motion.div}
          variants={itemVariants}
          textAlign="center"
          maxWidth="2xl"
          mb={2}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            color="brand.400"
            fontWeight="bold"
            mb={2}
          >
            How We Work
          </Text>
          <Text fontSize={{ base: "sm", md: "lg" }} m={3} color="gray.500">
            Lessons to fit your schedule, from the comfort of home
          </Text>
        </Box>

        <Image
          as={motion.img}
          variants={itemVariants}
          src={pcscreen}
          width={{ base: "90%", md: "90%", lg: "3xl" }}
          maxWidth="800px"
          objectFit="contain"
          alt="PC Screen"
        />

        <Flex
          as={motion.div}
          variants={containerVariants}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "flex-start" }}
          gap={{ base: 4, md: "28" }}
          maxWidth="6xl"
          px={2}
          flexWrap="wrap"
          mt={10}
        >
          {featuresforScreen.map((feature, index) => (
            <Flex
              as={motion.div}
              key={index}
              variants={featureCardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              width={{ base: "100%", md: "300px" }}
              gap={2}
              p={6}
              bg="white"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                width="50px"
                height="50px"
                borderRadius="full"
                bg="green.500"
                color="white"
                fontSize="xl"
                fontWeight="bold"
                mb={2}
              >
                {feature.number}
              </Flex>
              <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                {feature.title}
              </Text>
              <Text fontSize="md" color="gray.500">
                {feature.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box as="section" mt={{ base: 16, md: 24 }} textAlign="center">
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition="0.3s ease"
        >
          <Text fontSize="3xl" fontWeight="bold" color="brand.400" mb={4}>
            Where We've Tutored
          </Text>
          <Text fontSize={"lg"} color="gray.500" maxW="4xl" mx="auto" px={4}>
            Our dedicated tutors serve students across Ethiopia, bringing
            quality education to every corner.
          </Text>
          <Text
            fontSize="md"
            lineHeight="tall"
            color="gray.500"
            maxW="2xl"
            mx="auto"
            px={4}
          >
            Our network of qualified tutors spans across Ethiopia, providing
            comprehensive educational support to students in need of quality
            learning opportunities.
          </Text>
        </MotionBox>

        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mt={10}
          gap={8}
        >
          <MotionBox
            width="100%"
            maxWidth={{ base: "100%", md: "100%" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition="0.6s ease"
          >
            <AddisAbabaMap />
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  );
};

export default Main;
