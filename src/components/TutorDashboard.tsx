import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Input,
  Checkbox,
  Alert,
  AlertIcon,
  useToast,
  Icon,
  Badge,
  Container,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  CheckCircleIcon,
  WarningIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import {
  FaChalkboardTeacher,
  FaUniversity,
  FaFemale,
  FaTelegram,
} from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import headerPattern from "../assets/Images/chat.png";

const pulse = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const TutorDashboard = () => {
  const toast = useToast();
  const pulseAnimation = `${pulse} 2s infinite`;

  const handleSubmit = () => {
    toast({
      position: "top",
      title: "Application Submitted!",
      description:
        "We've received your application. Our team will review it shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const accentColor = "green.500";
  const gradientFrom = "green.600";
  const gradientTo = "green.400";
  const formBorderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient={`linear(to-r, ${gradientFrom}, ${gradientTo})`}
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Image
          src={headerPattern}
          position="absolute"
          opacity="0.1"
          top="0"
          left="0"
          w="full"
          h="full"
          objectFit="cover"
        />
        <Container maxW="container.lg" position="relative">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box flex="1" mb={{ base: 8, md: 0 }}>
              <Badge
                variant="subtle"
                colorScheme="whiteAlpha"
                px={4}
                py={1}
                borderRadius="full"
                mb={4}
              >
                Join Our Team
              </Badge>
              <Heading as="h1" size="2xl" mb={4} lineHeight="1.2">
                Become a Tutor with Us
              </Heading>
              <Text fontSize="xl" mb={6} maxW="600px">
                Share your knowledge and help students achieve their academic
                goals.
              </Text>
              <Button
                colorScheme="whiteAlpha"
                size="lg"
                rightIcon={<ArrowForwardIcon />}
                onClick={() => {
                  document
                    .getElementById("application-form")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Apply Now
              </Button>
            </Box>
            <Box flex="1" display="flex" justifyContent="center">
              <Image
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Tutoring illustration"
                borderRadius="lg"
                boxShadow="xl"
                maxH="300px"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

     
      <Container maxW="container.md" py={16} id="application-form">
       
        <Box
          bg="white"
          borderTop="8px solid"
          borderTopColor={accentColor}
          borderRadius="8px 8px 0 0"
          boxShadow="sm"
          p={6}
          border="1px solid"
          borderColor={formBorderColor}
          borderBottom="none"
        >
          <Heading as="h2" size="lg" color="gray.700">
            🌼 Application for Tutor Position 🌼
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={2}>
            * Indicates required question
          </Text>
        </Box>

  
        <Box
          bg="white"
          borderRadius="0 0 8px 8px"
          boxShadow="md"
          p={{ base: 4, md: 8 }}
          border="1px solid"
          borderColor={formBorderColor}
          borderTop="none"
        >
         
          <Box
            border="1px solid"
            borderColor={formBorderColor}
            borderRadius="md"
            p={6}
            mb={8}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              bg: "gray.50",
              borderBottom: "1px solid",
              borderColor: formBorderColor,
            }}
          >
            <Text
              fontSize="sm"
              color="gray.500"
              position="absolute"
              top="2"
              left="4"
            >
              Section 1 of 4
            </Text>

            <VStack spacing={8} align="stretch" mt={6}>
         
              <Box>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  *This information is required.
                </Text>
                <Alert
                  status="info"
                  variant="left-accent"
                  borderRadius="md"
                  fontSize="sm"
                >
                  <AlertIcon />
                  Thank you for your interest in becoming a tutor with our
                  organization. We appreciate your enthusiasm and dedication to
                  education.
                </Alert>
              </Box>

          
              <Box>
                <Heading
                  as="h3"
                  size="sm"
                  mb={4}
                  color="gray.700"
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={WarningIcon} mr={2} color="orange.500" /> Before You
                  Apply
                </Heading>
                <Text fontSize="sm" mb={6}>
                  Please ensure that you have met the following requirements:
                </Text>

                <VStack spacing={4} align="stretch">
                 
                  <Box
                    p={4}
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor="orange.300"
                    bg="gray.50"
                  >
                    <HStack align="flex-start">
                      <Icon
                        as={FaChalkboardTeacher}
                        color={accentColor}
                        fontSize="lg"
                        mt={1}
                      />
                      <Box>
                        <Text fontWeight="bold" fontSize="sm">
                          A. Grade 12 Entrance Examination/Teaching Experience
                        </Text>
                        <Text fontSize="sm">
                          Please be certain that you have either a minimum score
                          of 400 in the entrance examination for grade 12 or
                          have two years of teaching experience at a reputable
                          school or educational institution.
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

                 
                  <Box
                    p={4}
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor="blue.300"
                    bg="gray.50"
                  >
                    <HStack align="flex-start">
                      <Icon
                        as={FaUniversity}
                        color={accentColor}
                        fontSize="lg"
                        mt={1}
                      />
                      <Box>
                        <Text fontWeight="bold" fontSize="sm">
                          B. University/College Experience
                        </Text>
                        <Text fontSize="sm">
                          To be considered for this position, it is necessary to
                          have spent at least one year in a university or
                          college. If you haven't met this requirement, we regret
                          to inform you that we will not be able to accept your
                          application at this time.
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

              
                  <Box
                    p={4}
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor="pink.300"
                    bg="gray.50"
                  >
                    <HStack align="flex-start">
                      <Icon
                        as={FaFemale}
                        color={accentColor}
                        fontSize="lg"
                        mt={1}
                      />
                      <Box>
                        <Text fontWeight="bold" fontSize="sm">
                          C. Gender
                        </Text>
                        <Text fontSize="sm">
                          Currently we only accept tutors that are female.
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Box>

        
          <Box
            border="1px solid"
            borderColor={formBorderColor}
            borderRadius="md"
            p={6}
            mb={8}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              bg: "gray.50",
              borderBottom: "1px solid",
              borderColor: formBorderColor,
            }}
          >
            <Text
              fontSize="sm"
              color="gray.500"
              position="absolute"
              top="2"
              left="4"
            >
              Section 2 of 4
            </Text>

            <VStack spacing={6} align="stretch" mt={6}>
              <HStack mb={4}>
                <Badge
                  colorScheme="green"
                  variant="solid"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                >
                  Step 1
                </Badge>
                <Heading as="h4" size="sm" color="gray.700">
                  Application Form
                </Heading>
              </HStack>
              <Text fontSize="sm" mb={4}>
                Fill out the appropriate form based on your academic background:
              </Text>

              <VStack spacing={4} align="stretch">
                <Box
                  p={4}
                  borderRadius="md"
                  bg="gray.50"
                  border="1px dashed"
                  borderColor="green.200"
                >
                  <HStack mb={2}>
                    <Icon as={MdOutlineAssignment} color={accentColor} />
                    <Text fontWeight="semibold" fontSize="sm">
                      A) Current Student or Recent Graduate
                    </Text>
                  </HStack>
                  <Text fontSize="xs" color="gray.600" mb={3}>
                    If you are currently a university/college student or have
                    graduated within the past two years
                  </Text>
                  <Button
                    as="a"
                    href="https://forms.gle/ZKaANRUUdwPR9veu7"
                    target="_blank"
                    colorScheme="green"
                    size="sm"
                    rightIcon={<ExternalLinkIcon />}
                    w="fit-content"
                    fontSize="sm"
                  >
                    Access Form
                  </Button>
                </Box>

                <Box
                  p={4}
                  borderRadius="md"
                  bg="gray.50"
                  border="1px dashed"
                  borderColor="green.200"
                >
                  <HStack mb={2}>
                    <Icon as={MdOutlineAssignment} color={accentColor} />
                    <Text fontWeight="semibold" fontSize="sm">
                      B) Experienced Graduate
                    </Text>
                  </HStack>
                  <Text fontSize="xs" color="gray.600" mb={3}>
                    If it has been more than two years since you graduated
                  </Text>
                  <Button
                    as="a"
                    href="https://forms.gle/bBQykpqQqeZp5Bdx5"
                    target="_blank"
                    colorScheme="green"
                    size="sm"
                    rightIcon={<ExternalLinkIcon />}
                    w="fit-content"
                    fontSize="sm"
                  >
                    Access Form
                  </Button>
                </Box>
              </VStack>
            </VStack>
          </Box>

         
          <Box
            border="1px solid"
            borderColor={formBorderColor}
            borderRadius="md"
            p={6}
            mb={8}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              bg: "gray.50",
              borderBottom: "1px solid",
              borderColor: formBorderColor,
            }}
          >
            <Text
              fontSize="sm"
              color="gray.500"
              position="absolute"
              top="2"
              left="4"
            >
              Section 3 of 4
            </Text>

            <VStack spacing={6} align="stretch" mt={6}>
              <HStack mb={4}>
                <Badge
                  colorScheme="green"
                  variant="solid"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                >
                  Step 2
                </Badge>
                <Heading as="h4" size="sm" color="gray.700">
                  Subscription Form
                </Heading>
              </HStack>
              <Text fontSize="sm" mb={4}>
                Please follow/Subscribe/Join/Like/Start our different platforms
                and upload screenshots of confirmation using the form below, and
                send us a screenshot of the final messages that is displayed
                through this account.
              </Text>
              <Button
                as="a"
                href="https://forms.gle/4LFTy2PhxU8MoWrs7"
                target="_blank"
                colorScheme="green"
                size="sm"
                rightIcon={<ExternalLinkIcon />}
                w="fit-content"
                fontSize="sm"
              >
                Subscription Form Link
              </Button>
            </VStack>
          </Box>

        
          <Box
            border="1px solid"
            borderColor={formBorderColor}
            borderRadius="md"
            p={6}
            mb={8}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              bg: "gray.50",
              borderBottom: "1px solid",
              borderColor: formBorderColor,
            }}
          >
            <Text
              fontSize="sm"
              color="gray.500"
              position="absolute"
              top="2"
              left="4"
            >
              Section 4 of 4
            </Text>

            <VStack spacing={8} align="stretch" mt={6}>
              {/* Step 3 */}
              <Box>
                <HStack mb={4}>
                  <Badge
                    colorScheme="green"
                    variant="solid"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                  >
                    Step 3
                  </Badge>
                  <Heading as="h4" size="sm" color="gray.700">
                    Group Invitation
                  </Heading>
                </HStack>
                <Text fontSize="sm" mb={4}>
                  Add a minimum of 50 people to the group provided below. Please
                  take a screenshot as proof of completion. We understand that
                  some individuals may have restrictions on being added to
                  groups, so please ensure that you have added at least 50 people
                  to maximize your chances of approval.
                </Text>
                <Button
                  as="a"
                  href="https://t.me/GungunTutor"
                  target="_blank"
                  colorScheme="telegram"
                  leftIcon={<FaTelegram />}
                  size="sm"
                  rightIcon={<ExternalLinkIcon />}
                  w="fit-content"
                  fontSize="sm"
                >
                  Join Telegram Group
                </Button>
              </Box>

           
              <Box>
                <HStack mb={4}>
                  <Badge
                    colorScheme="green"
                    variant="solid"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                  >
                    Step 4
                  </Badge>
                  <Heading as="h4" size="sm" color="gray.700">
                    Your Information
                  </Heading>
                </HStack>
                <Text fontSize="sm" mb={4}>
                  Kindly provide us with your full name for our records.
                </Text>
                <Box maxW="400px">
                  <Text fontSize="xs" color="gray.600" mb={1}>
                    Your full name *
                  </Text>
                  <Input
                    placeholder="Type your answer here..."
                    bg="white"
                    focusBorderColor={accentColor}
                    size="sm"
                    borderColor={formBorderColor}
                    _hover={{ borderColor: "gray.400" }}
                  />
                </Box>
              </Box>

            
              <Box>
                <Text fontSize="sm" mb={4}>
                  *This information is required.
                </Text>
                <Checkbox
                  defaultChecked
                  colorScheme="green"
                  size="sm"
                  spacing="1rem"
                >
                  <Text fontSize="sm">
                    I confirm that I meet all requirements and have completed all
                    steps
                  </Text>
                </Checkbox>
              </Box>

           
              <Box textAlign="right" mt={6}>
                <Button
                  colorScheme="green"
                  size="sm"
                  onClick={handleSubmit}
                  rightIcon={<CheckCircleIcon />}
                  px={6}
                  fontSize="sm"
                  animation={pulseAnimation}
                  _hover={{ animation: "none" }}
                >
                  Submit
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Container>

      
    </Box>
  );
};

export default TutorDashboard;