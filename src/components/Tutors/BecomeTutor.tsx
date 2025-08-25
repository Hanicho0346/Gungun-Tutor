import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  Card,
  CardBody,
  Avatar,
  Collapse,
  Image,
  useBreakpointValue,
  useColorModeValue,
  Badge,
  AbsoluteCenter,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import {
  DollarSign,
  Clock,
  Users,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Star,
  GraduationCap,
  Lightbulb,
  Bookmark,
  CheckCircle,
  CreditCard,
} from "lucide-react";
import growth from "../../assets/Images/trend.png";
import picture from "../../assets/Images/tutor-girl.png";
import Hana from "../../assets/Images/user1.jpg";
import Sarah from "../../assets/Images/user3.jpg";
import Tsion from "../../assets/Images/user2.jpg";

const colors = {
  primary: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  accent: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardHover = {
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const pulse = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionButton = motion(Button);
const MotionCard = motion(Card);
const MotionCircle = motion(Circle);
const MotionFlex = motion(Flex);

const BecomeTutor = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const starSize = useBreakpointValue({ base: 14, md: 18 });
  const bgColor = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the requirements to become a tutor?",
      answer: (
        <>
          To become a tutor with our organization, you must meet the following
          requirements:
          <UnorderedList mt={2} spacing={1}>
            <ListItem>
              <Text fontWeight="semibold">
                A. Grade 12 Entrance Examination/Teaching Experience:
              </Text>
              Minimum score of 400 in the entrance examination for grade 12 OR
              two years of teaching experience at a reputable school/educational
              institution.
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">
                B. University/College Experience:
              </Text>
              At least one year spent in a university or college.
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">C. Gender:</Text>
              Currently we only accept female tutors.
            </ListItem>
          </UnorderedList>
        </>
      ),
      icon: GraduationCap,
    },
    {
      question: "How does the prepayment system work?",
      answer: (
        <>
          We offer two payment options for tutors:
          <UnorderedList mt={2} spacing={2}>
            <ListItem>
              <Text fontWeight="semibold">Option 1:</Text> Make a single
              prepayment of 75% of your monthly salary before starting the job,
              with no additional monthly payments required.
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">Option 2:</Text> Make an initial
              prepayment of 50% of your monthly salary before starting the job,
              followed by another 50% payment from your first month salary,
              after which there will be no more payments.
            </ListItem>
          </UnorderedList>
          <Text mt={4} fontStyle="italic">
            Note: All money will be refunded if a tutor doesn't get a job, but
            only if the job fails due to our company or the family. If the job
            fails because of the tutor, no refund will be given.
          </Text>
        </>
      ),
      icon: CreditCard,
    },
    {
      question: "What is the application process?",
      answer: (
        <>
          Once you confirm you meet the requirements, follow these steps:
          <UnorderedList mt={2} spacing={2}>
            <ListItem>
              <Text fontWeight="semibold">1. Application Form:</Text> Fill out
              the appropriate form based on your academic background and send us
              the confirmation screenshot through{" "}
              <Link
                fontWeight={"bold"}
                color={"brand.800"}
                href="https://t.me/GoonGoonInfoBot"
                isExternal
              >
                @GungunTutorBot
              </Link>
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">2. Subscription Form:</Text>{" "}
              Follow/Subscribe/Join our platforms and upload confirmation
              screenshots
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">3. Group Invitation:</Text> Add at
              least 50 people to our group{" "}
              <Link
                fontWeight={"bold"}
                color={"brand.800"}
                href="https://t.me/GoonGoonTutor"
                isExternal
              >
                {" "}
                @GungunTutor
              </Link>
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">4. Full Name:</Text> Provide your full
              name through{" "}
              <Link
                fontWeight={"bold"}
                color={"brand.800"}
                href="https://t.me/GoonGoonTutors"
                isExternal
              >
                {" "}
                @GungunTutor
              </Link>
            </ListItem>
          </UnorderedList>
        </>
      ),
      icon: BookOpen,
    },
  ];

  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: "Competitive Pay",
      description:
        "Set your own rates and receive payments directly to your account. Tutors earn up to 250birr-400birr/hr for specialized subjects.",
      badge: "Earn more",
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Schedule",
      description:
        "Work when it suits you. Set your availability and accept sessions that fit your schedule. Perfect for students, professionals, and retirees.",
      badge: "Work anytime",
    },
    {
      icon: <Users size={24} />,
      title: "Global Community",
      description:
        "Join thousands of tutors helping students worldwide. Network and share teaching strategies in our exclusive tutor community.",
      badge: "500+ tutors",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Apply Now",
      description:
        "Complete our application form with your qualifications, subjects, and teaching experience.",
      icon: Bookmark,
    },
    {
      step: 2,
      title: "Get Verified",
      description: "Our team will review your application ..",
      icon: CheckCircle,
    },
    {
      step: 3,
      title: "Start Tutoring",
      description:
        "Set up your profile, define your availability, and begin connecting with students who need your expertise. We'll help you get your first students!",
      icon: Lightbulb,
    },
  ];

  const testimonials = [
    {
      name: "Hana Gebremedhin",
      role: "Mathematics Tutor ",
      quote: "I've been tutoring for 1 years across multiple platforms.",
      subjects: ["Maths"],
      image: Hana,
    },
    {
      name: "Sarah Honelgn",
      role: "Science Tutor ",
      quote: "The flexibility allows me to tutor while pursuing my degree.",
      subjects: ["Chemistry", "Biology"],
      image: Sarah,
    },
    {
      name: "Tsion Alemayehu",
      role: "All Subject",
      quote: "I started as a part-time tutor and now it's my full-time career.",
      subjects: ["All"],
      image: Tsion,
    },
  ];

  return (
    <Box bg={bgColor} minH="100vh" overflowX="hidden">
      <Box position="relative" pt="32" pb="20" overflow="hidden">
        <Container maxW="container.xl" px={4} position="relative" zIndex="10">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={12}
            alignItems="center"
          >
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              position="relative"
            >
              <Box position="relative" zIndex={1}>
                <Badge
                  variant="subtle"
                  color={"black"}
                  px={3}
                  py={1}
                  borderRadius="full"
                  mb={4}
                  bg={"white"}
                  fontSize="sm"
                >
                  Join our Goongoon tutor community
                </Badge>
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="bold"
                  mb={6}
                  lineHeight="1.1"
                >
                  Transform Lives Through{" "}
                  <Text as="span" bg={"brand.400"} bgClip="text">
                    Tutoring
                  </Text>
                </Heading>
                <Text fontSize="xl" color="gray.600" mb={8}>
                  Join our community of expert educators and help students
                  achieve their dreams while earning competitive rates on your
                  own schedule. Make an impact while building your career.
                </Text>
                <HStack spacing={4} mt={8}>
                  <Link href="https://t.me/GoongoonTutor" isExternal>
                    <MotionButton
                      bg={"brand.400"}
                      color="white"
                      px={8}
                      py={6}
                      borderRadius="full"
                      fontSize="lg"
                      fontWeight="semibold"
                      _hover={{
                        bg: "brand.100",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      rightIcon={<GraduationCap size={20} />}
                    >
                      Start Tutoring
                    </MotionButton>
                  </Link>
                </HStack>
              </Box>
              <MotionBox
                position="absolute"
                top="-20%"
                left="-20%"
                w="200px"
                h="200px"
                bg={colors.primary[100]}
                borderRadius="full"
                filter="blur(60px)"
                opacity={0.5}
                animate={pulse}
                zIndex={0}
              />
            </MotionBox>
            <MotionBox
              display={{ base: "none", md: "block" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              position="relative"
              mt={{ base: 8, md: 0 }}
            >
              <Box
                position="relative"
                w="full"
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="2xl"
                h={{ base: "300px", md: "500px" }}
              >
                <Image
                  src={picture}
                  alt="Tutor helping student"
                  objectFit="cover"
                  w="full"
                  h="full"
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-b, transparent, rgba(0,0,0,0.2))"
                />
              </Box>
              <MotionBox
                position="absolute"
                bottom={{ base: "-20px", md: "-40px" }}
                left={{ base: "20px", md: "-40px" }}
                bg="white"
                p={6}
                borderRadius="2xl"
                boxShadow="xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <HStack spacing={3}>
                  <Circle
                    size={{ base: "10", md: "14" }}
                    bg={colors.primary[100]}
                    color={colors.primary[500]}
                  >
                    <Image boxSize={10} src={growth} />
                  </Circle>
                  <Box>
                    <Text
                      fontWeight="md"
                      fontSize={{ base: "sm", md: "md" }}
                      color={colors.primary[500]}
                    >
                      Increase academic success
                    </Text>
                  </Box>
                </HStack>
              </MotionBox>
              <MotionBox
                position="absolute"
                top={{ base: "-20px", md: "-40px" }}
                right={{ base: "20px", md: "-40px" }}
                bg={"brand.400"}
                color="white"
                p={{ base: 4, md: 6 }}
                borderRadius="2xl"
                boxShadow="xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <VStack spacing={1} align="center">
                  <HStack>
                    {[...Array(5)].map((i) => (
                      <Star key={i} size={starSize ?? 14} fill="currentColor" />
                    ))}
                  </HStack>
                  <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
                    4.98/5
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }}>Best Method</Text>
                </VStack>
              </MotionBox>
            </MotionBox>
          </Grid>
        </Container>
      </Box>

    
      <Box py={20} bg={bgColor} position="relative">
        <Container maxW="container.xl" px={4}>
          <MotionVStack
            textAlign="center"
            mb={10}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge
              variant="subtle"
              bg={"white"}
              color={"black"}
              px={3}
              py={1}
              borderRadius="full"
              mb={4}
              fontSize="sm"
              fontWeight={"bold"}
            >
              Why Choose Us
            </Badge>
            <Heading as="h2" fontSize="4xl" fontWeight="bold" mb={4}>
              The Best Platform for{" "}
              <Text as="span" color={"brand.400"}>
                Educators
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
              We've built everything you need to succeed as an online tutor,
              whether you're teaching part-time or building a full-time career.
            </Text>
          </MotionVStack>

          <MotionBox
            as={Grid}
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <MotionCard
                key={index}
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="md"
                border="1px"
                borderColor="gray.100"
                p={8}
                transition={{ duration: 0.3 }}
                variants={cardHover}
                whileHover="hover"
                position="relative"
                overflow="hidden"
                _hover={{
                  boxShadow: "xl",
                  borderColor: colors.primary[200],
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bg={"green.600"}
                />
                <HStack align="flex-start" spacing={4}>
                  <Circle
                    size="12"
                    bg="white"
                    border="1px"
                    borderColor="gray.200"
                  >
                    <Box as="span" color="black">
                      {benefit.icon}
                    </Box>
                  </Circle>
                  <Box>
                    <Badge
                      bgColor={"brand.400"}
                      variant="subtle"
                      mb={2}
                      borderRadius="full"
                      px={2}
                      color={"white"}
                    >
                      {benefit.badge}
                    </Badge>
                    <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={2}>
                      {benefit.title}
                    </Heading>
                    <Text color="gray.600">{benefit.description}</Text>
                  </Box>
                </HStack>
              </MotionCard>
            ))}
          </MotionBox>
        </Container>
      </Box>

      <Box py={20} bg={colors.primary[50]} position="relative">
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          h="20%"
          bg={bgColor}
        />
        <Container maxW="container.xl" px={2} position="relative">
          <MotionVStack
            textAlign="center"
            mb={16}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge
              variant="subtle"
              bg={"white"}
              color={"black"}
              px={3}
              py={1}
              borderRadius="full"
              mb={4}
              fontSize="xl"
            >
              Get Started
            </Badge>
            <Heading as="h2" fontSize="4xl" fontWeight="bold" mb={2}>
              Become a Tutor in
              <Text as="span" color={"brand.400"} mx={2}>
                3 Simple Steps
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
              Our streamlined process gets you teaching quickly so you can focus
              on what matters - helping students succeed.
            </Text>
          </MotionVStack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
            position="relative"
          >
            <Box
              position="absolute"
              top="50%"
              left="0"
              right="0"
              height="2px"
              bg="gray.200"
              display={{ base: "none", md: "block" }}
            >
              <AbsoluteCenter bg={"brand.400"} px="4">
                <Circle size="3" bg={"brand.400"} />
              </AbsoluteCenter>
            </Box>
            {steps.map((step, index) => (
              <MotionVStack
                key={index}
                textAlign="center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                spacing={6}
                position={"relative"}
                zIndex={1}
              >
                <MotionCircle
                  size="20"
                  bg={"brand.400"}
                  color="white"
                  mb={20}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  whileHover={{ scale: 1.1 }}
                  position="relative"
                >
                  <Box as={step.icon} size={32} />
                  <Box
                    position="absolute"
                    top="-2"
                    right="-2"
                    bg="white"
                    color={"brand.400"}
                    borderRadius="full"
                    borderWidth="2px"
                    borderColor={"brand.400"}
                    w="8"
                    h="8"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                  >
                    {step.step}
                  </Box>
                </MotionCircle>

                <Heading as="h3" fontSize="2xl" fontWeight="semibold" mb={2}>
                  {step.title}
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  {step.description}
                </Text>
              </MotionVStack>
            ))}
          </Grid>

          <MotionFlex
            justify="center"
            mt={16}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="https://t.me/GoongoonTutor" isExternal>
              <MotionButton
                bg={"brand.400"}
                color="white"
                px={10}
                py={6}
                borderRadius="full"
                fontSize="xl"
                fontWeight="semibold"
                _hover={{
                  bg: "brand.100",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                rightIcon={<GraduationCap size={24} />}
              >
                Start Your Application
              </MotionButton>
            </Link>
          </MotionFlex>
        </Container>
      </Box>

      <Box py={20} bg={bgColor} position="relative" overflow="hidden">
        <Container maxW="container.xl" px={4}>
          <MotionVStack
            textAlign="center"
            mb={16}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge
              variant="subtle"
              bg={"white"}
              px={3}
              py={1}
              borderRadius="full"
              mb={4}
              fontSize="xl"
              color={"black"}
            >
              Success Stories
            </Badge>
            <Heading as="h2" fontSize="4xl" fontWeight="bold" mb={4}>
              Hear From Our{" "}
              <Text as="span" color={"brand.400"}>
                Star Tutors
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
              Don't just take our word for it. Here's what our tutors say about
              teaching on our platform.
            </Text>
          </MotionVStack>

          {isMobile ? (
            <Box position="relative" h="500px">
              <AnimatePresence mode="wait">
                {testimonials.map(
                  (testimonial, index) =>
                    activeTestimonial === index && (
                      <MotionCard
                        key={index}
                        bg={cardBg}
                        borderRadius="2xl"
                        boxShadow="xl"
                        p={8}
                        border="1px"
                        borderColor="gray.100"
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CardBody>
                          <VStack spacing={6} align="center" textAlign="center">
                            <Avatar
                              size="xl"
                              name={testimonial.name}
                              src={testimonial.image}
                              mb={4}
                              border={`4px solid ${colors.primary[100]}`}
                            />
                            <Box>
                              <Text
                                color="gray.600"
                                mb={6}
                                fontStyle="italic"
                                fontSize="lg"
                              >
                                "{testimonial.quote}"
                              </Text>
                              <Box>
                                <Text fontWeight="bold" fontSize="xl">
                                  {testimonial.name}
                                </Text>
                                <Text fontSize="md" color="gray.500" mb={3}>
                                  {testimonial.role}
                                </Text>
                                <HStack
                                  spacing={2}
                                  justify="center"
                                  wrap="wrap"
                                >
                                  {testimonial.subjects.map((subject, i) => (
                                    <Badge
                                      key={i}
                                      colorScheme="green.400"
                                      variant="subtle"
                                      borderRadius="full"
                                      px={3}
                                      py={1}
                                    >
                                      {subject}
                                    </Badge>
                                  ))}
                                </HStack>
                              </Box>
                            </Box>
                          </VStack>
                        </CardBody>
                      </MotionCard>
                    )
                )}
              </AnimatePresence>
              <Flex justify="center" mt={4} gap={2}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    as="button"
                    w="3"
                    h="3"
                    borderRadius="full"
                    bg={
                      activeTestimonial === index
                        ? colors.primary[500]
                        : "gray.300"
                    }
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </Flex>
            </Box>
          ) : (
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={8}
            >
              {testimonials.map((testimonial, index) => (
                <MotionCard
                  key={index}
                  bg={cardBg}
                  borderRadius="2xl"
                  boxShadow="xl"
                  p={8}
                  border="1px"
                  borderColor="gray.100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardBody>
                    <VStack spacing={6} align="center" textAlign="center">
                      <Avatar
                        size="xl"
                        name={testimonial.name}
                        src={testimonial.image}
                        mb={4}
                        border={`4px solid ${colors.primary[100]}`}
                      />
                      <Box>
                        <Text
                          color="gray.600"
                          mb={6}
                          fontStyle="italic"
                          fontSize="lg"
                        >
                          "{testimonial.quote}"
                        </Text>
                        <Box>
                          <Text fontWeight="bold" fontSize="xl">
                            {testimonial.name}
                          </Text>
                          <Text fontSize="md" color="gray.500" mb={3}>
                            {testimonial.role}
                          </Text>
                          <HStack spacing={2} justify="center" wrap="wrap">
                            {testimonial.subjects.map((subject, i) => (
                              <Badge
                                key={i}
                                colorScheme="brand.400"
                                variant="subtle"
                                borderRadius="full"
                                px={3}
                                py={1}
                              >
                                {subject}
                              </Badge>
                            ))}
                          </HStack>
                        </Box>
                      </Box>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      <Box py={20} bg={bgColor}>
        <Container maxW="4xl" px={4}>
          <MotionVStack
            textAlign="center"
            mb={10}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge
              variant="subtle"
              bg={"brand.400"}
              px={3}
              py={1}
              borderRadius="full"
              mb={4}
              fontSize="lg"
              color={"white"}
            >
              Have Questions?
            </Badge>
            <Heading as="h2" fontSize="4xl" fontWeight="bold" mb={4}>
              Frequently Asked{" "}
              <Text as="span" color={"brand.400"}>
                Questions
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Everything you need to know about becoming a tutor on our
              platform.
            </Text>
          </MotionVStack>

          <VStack spacing={4} align="stretch">
            {faqs.map((faq, index) => (
              <MotionBox
                key={index}
                border="1px"
                borderColor="gray.200"
                borderRadius="xl"
                overflow="hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                _hover={{
                  borderColor: colors.primary[200],
                }}
              >
                <Button
                  w="full"
                  px={6}
                  py={5}
                  textAlign="left"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="ghost"
                  onClick={() => toggleFaq(index)}
                  _focus={{ outline: "none" }}
                  _hover={{
                    bg: colors.primary[50],
                  }}
                >
                  <HStack spacing={4}>
                    <Box color={colors.primary[500]}>
                      <faq.icon size={20} />
                    </Box>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold">
                      {faq.question}
                    </Heading>
                  </HStack>
                  {expandedFaq === index ? (
                    <ChevronUp size={20} color={colors.primary[500]} />
                  ) : (
                    <ChevronDown size={20} color={colors.primary[500]} />
                  )}
                </Button>
                <Collapse in={expandedFaq === index} animateOpacity>
                  <Box
                    px={6}
                    pb={6}
                    pl={14}
                    color="gray.600"
                    fontSize="lg"
                    lineHeight="tall"
                  >
                    {faq.answer}
                  </Box>
                </Collapse>
              </MotionBox>
            ))}
          </VStack>
        </Container>
      </Box>

      <Box
        py={20}
        bgGradient={"linear(to-r, brand.100, brand.300)"}
        color="white"
      >
        <Container maxW="container.lg" px={4} textAlign="center">
          <MotionVStack
            spacing={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <MotionBox variants={fadeIn}>
              <Heading as="h2" fontSize="4xl" fontWeight="bold" mb={4}>
                Ready to Start Tutoring?
              </Heading>
              <Text fontSize="xl" opacity={0.9} maxW="2xl" mx="auto">
                Join our community of tutors making an impact while earning on
                their own terms. Apply today!
              </Text>
            </MotionBox>

            <Link href="https://t.me/GoongoonTutor" isExternal>
              <MotionButton
                bg="white"
                color={"brand.400"}
                px={10}
                py={6}
                borderRadius="full"
                fontSize="xl"
                fontWeight="bold"
                _hover={{
                  bg: "white",
                  transform: "translateY(-2px)",
                }}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                rightIcon={<GraduationCap size={24} />}
                boxShadow="xl"
              >
                Apply Now
              </MotionButton>
            </Link>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  );
};

export default BecomeTutor;
