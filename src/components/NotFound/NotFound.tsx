
import { Box, Text, Button, Flex, Image,  } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import dollImage from "../../assets/icons/20602777_6325255.svg"; 
import {keyframes} from "@emotion/react";
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const NotFound = () => {
  const floatAnimation = `${float} 3s ease-in-out infinite`;

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      bg="gray.50"
      p={8}
      textAlign="center"
    >
      <Box
        animation={floatAnimation}
        mb={8}
        maxW="300px"
        width="100%"
        height="auto"
      >
        <Image src={dollImage} alt="Cute Doll" width="100%" height="auto" />
      </Box>

      <Text fontSize="6xl" fontWeight="bold" color="gray.800" mb={4}>
        404
      </Text>
      <Text fontSize="2xl" color="gray.600" mb={8}>
        Oops! The page you're looking for doesn't exist.
      </Text>

      <Button
        as={RouterLink}
        to="/"
        colorScheme="teal"
        size="lg"
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.2s"
      >
        Go Back Home
      </Button>

      <Text mt={8} fontSize="sm" color="gray.500">
        Don't worry, our cute doll will guide you back!
      </Text>
    </Flex>
  );
};

export default NotFound;