import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Avatar,
  Badge,
  useBreakpointValue
} from "@chakra-ui/react";
import { FaChartLine, FaRegSmile, FaStar } from "react-icons/fa";
import { FiBookOpen, FiAward } from "react-icons/fi";
import pcscreen from "../assets/Images/pcscreen.png";

const TutorDashboard = () => {
  const benefits = [
    {
      title: "Share Your Knowledge",
      description: "Teach what you love and inspire the next generation of learners.",
      icon: <FiBookOpen size="24px" />,
      color: "purple",
    },
    {
      title: "Work From Anywhere",
      description: "Teach online from the comfort of your home or anywhere in the world.",
      icon: <FaRegSmile size="24px" />,
      color: "green",
    },
    {
      title: "Set Your Own Rates",
      description: "You decide how much to charge based on your expertise and experience.",
      icon: <FaChartLine size="24px" />,
      color: "orange",
    },
    {
      title: "Make a Difference",
      description: "Help students achieve their goals and see the impact of your teaching.",
      icon: <FiAward size="24px" />,
      color: "red",
    },
  ];

  const topTutors = [
    {
      name: "Dr. Priya Sharma",
      subject: "Mathematics",
      rating: 4.9,
      students: 1200,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      sessions: 4500,
      price: "₹1500/hr",
    },
    {
      name: "Prof. Rohan Patel",
      subject: "Physics",
      rating: 4.8,
      students: 950,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      sessions: 3800,
      price: "₹1800/hr",
    },
    {
      name: "Ms. Ananya Gupta",
      subject: "English Literature",
      rating: 4.95,
      students: 1500,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      sessions: 5200,
      price: "₹1200/hr",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
      {/* Hero Section */}
      <Flex 
        flexDir={{ base: "column", md: "row" }} 
        alignItems="center" 
        justifyContent="space-between"
        mb={16}
      >
        <Box maxW={{ base: "100%", md: "50%" }} mb={{ base: 8, md: 0 }}>
          <Text fontSize={"lg"} fontWeight={"semibold"} color="blue.600" mb={2}>
            Join our team and Share Your Knowledge & Earn on Your Terms
          </Text>
          <Heading as="h1" size="2xl" fontWeight={"bold"} mb={4}>
            Become a Tutor
          </Heading>
          <Text fontSize="lg" mb={6} color="gray.600">
            Empower students with your expertise while earning competitive rates on your own schedule.
          </Text>
          <Button 
            colorScheme="blue" 
            size="lg" 
            px={8}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            Apply Now
          </Button>
        </Box>

        <Image
          src={pcscreen}
          width={{ base: "100%", md: "45%" }}
          maxWidth="600px"
          objectFit="contain"
          alt="Tutor teaching online"
        />
      </Flex>

      {/* Benefits Section */}
      <Box mb={16}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Why Become a Tutor With Us?
        </Heading>
        <Text 
          textAlign="center" 
          mb={12} 
          color="gray.500" 
          maxW="2xl" 
          mx="auto"
          fontSize="lg"
        >
          We provide everything you need to build a successful tutoring business
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {benefits.map((item, index) => (
            <Card 
              key={index} 
              borderTop="4px" 
              borderColor={`${item.color}.400`}
              boxShadow="lg"
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              transition="all 0.3s"
            >
              <CardBody p={6}>
                <Flex 
                  mb={4} 
                  w={12} 
                  h={12} 
                  bg={`${item.color}.100`} 
                  align="center" 
                  justify="center" 
                  rounded="full"
                >
                  <Icon as={() => item.icon} color={`${item.color}.600`} />
                </Flex>
                <Heading size="md" mb={2}>{item.title}</Heading>
                <Text color="gray.600">{item.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* Top Tutors Section */}
      <Box mb={16}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Our Top Tutors
        </Heading>
        <Text 
          textAlign="center" 
          mb={8} 
          color="gray.500" 
          maxW="2xl" 
          mx="auto"
          fontSize="lg"
        >
          Join our community of expert educators
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {topTutors.map((tutor, index) => (
            <Card key={index} boxShadow="md" _hover={{ boxShadow: "xl" }} transition="all 0.3s">
              <CardBody>
                <Flex direction="column" align="center" textAlign="center">
                  <Avatar 
                    size="xl" 
                    src={tutor.avatar} 
                    name={tutor.name} 
                    mb={4}
                    border="2px solid"
                    borderColor="blue.300"
                  />
                  <Heading size="md" mb={1}>{tutor.name}</Heading>
                  <Badge colorScheme="blue" mb={2}>{tutor.subject}</Badge>
                  
                  <Flex align="center" mb={2}>
                    <Icon as={FaStar} color="yellow.400" mr={1} />
                    <Text fontWeight="bold">{tutor.rating}</Text>
                    <Text color="gray.500" ml={1}>({tutor.students}+ students)</Text>
                  </Flex>
                  
                  <Text color="gray.600" mb={2}>{tutor.sessions.toLocaleString()} sessions</Text>
                  <Text fontSize="xl" fontWeight="bold" color="green.600">{tutor.price}</Text>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* CTA Section */}
      <Box 
        bg="blue.50" 
        p={8} 
        rounded="lg" 
        textAlign="center"
        border="1px solid"
        borderColor="blue.100"
      >
        <Heading as="h2" size="xl" mb={4}>
          Ready to Start Teaching?
        </Heading>
        <Text fontSize="lg" mb={6} color="gray.600" maxW="2xl" mx="auto">
          Join thousands of tutors making an impact while earning on their own terms.
        </Text>
        <Button 
          colorScheme="blue" 
          size="lg" 
          px={8}
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.2s"
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default TutorDashboard;