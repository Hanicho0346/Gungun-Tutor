import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box >
      <Divider my={10} />
      <Box
        as="footer"
        width="full"
        bg="brand.500"
        color="white"
        mt={20}
        position="relative"
      >
        <Flex justifyContent="center">
          <Flex
            flexDir={{ base: "column", md: "row" }}
            align="center"
            gap={6}
            p={6}
            borderRadius="full"
            bg="white"
            maxW="95%"
            mx="auto"
            width={"80%"}
            height={"150px"}
            position="relative"
            top="-30px"
            zIndex="1"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
            justifyContent={"space-between"}
          >
            <Box textAlign={{ base: "center", md: "left" }} ml={6}>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                fontFamily="monospace"
                color="black"
                letterSpacing="widest"
              >
                <Box as="span" color={"brand.500"} >
                  Ready?
                </Box>
                Get Tutor
              </Text>
              <Text fontSize="sm" color="black" textColor={"gray.500"}>
                We provide tutoring services in multiple locations across the
                globe.
              </Text>
            </Box>
            <Button
              fontSize="lg"
              fontWeight="bold"
              color="white"
              borderRadius={"xl"}
              bg="brand.500"
              px={8}
              py={6}
              _hover={{ bg: "brand.300", color: "white",boxShadow:"xl" }}
            >
              Find Match Tutor
            </Button>
          </Flex>
        </Flex>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "30px", display: "block" }}
        >
          <path
            d="M0,25 Q180,0 360,25 T720,25 T1080,25 T1440,25 L1440,50 L0,50 Z"
            fill="currentColor"
          />
        </svg>

        <Box width="full" bg="brand.500" >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="flex-start"
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8 }}
            py={6}
            gap={6}
            height={"300px"}
          >
            <Box flex={1} minW={{ base: "full", md: "200px" }}>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Goongun Tutor
              </Text>
              <Text fontSize="sm" mb={4}>
                Empowering students with world-class tutoring services to
                achieve academic success.
              </Text>
              <Flex gap={4}>
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                  (IconComponent, index) => (
                    <Icon
                      key={index}
                      as={IconComponent}
                      boxSize={6}
                      cursor="pointer"
                      _hover={{ color: "brand.200" }}
                    />
                  )
                )}
              </Flex>
            </Box>

            <Box flex={1} minW={{ base: "full", md: "200px" }}>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Quick Links
              </Text>
              <VStack align="start" spacing={3}>
                {["Home", "About Us", "Services", "Contact Us"].map((link) => (
                  <Text
                    key={link}
                    fontSize="sm"
                    _hover={{ color: "brand.200", cursor: "pointer" }}
                  >
                    {link}
                  </Text>
                ))}
              </VStack>
            </Box>

            <Box flex={1} minW={{ base: "full", md: "200px" }}>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Contact Us
              </Text>
              <VStack align="start" spacing={3}>
                <Text fontSize="sm">Email: info@goonguntutor.com</Text>
                <Text fontSize="sm">Phone: +1 (123) 456-7890</Text>
                <Text fontSize="sm">
                  Address: 123 Tutor St, Education City, World
                </Text>
              </VStack>
            </Box>

            <Box flex={1} minW={{ base: "full", md: "250px" }}>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Newsletter
              </Text>
              <Text fontSize="sm" mb={4}>
                Subscribe to our newsletter to get the latest updates and
                offers.
              </Text>
              <Flex>
                <Input
                  placeholder="Your email"
                  bg="white"
                  color="black"
                  borderRadius="md"
                  borderRightRadius={0}
                  _focus={{ outline: "none" }}
                />
                <Button
                  bg="brand.600"
                  color="white"
                  borderRadius="md"
                  borderLeftRadius={0}
                  _hover={{ bg: "brand.700" }}
                  px={6}
                >
                  Subscribe
                </Button>
              </Flex>
            </Box>
          </Flex>

          <Box bg="brand.700" py={4} width="full">
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="center"
              align="center"
              maxW="1200px"
              mx="auto"
              px={4}
              gap={2}
            >
              <Text fontSize="sm">
                © {new Date().getFullYear()} Goongun Tutor. All rights reserved.
              </Text>
              <Flex gap={4}>
                <Text
                  fontSize="sm"
                  _hover={{ color: "brand.200", cursor: "pointer" }}
                >
                  Privacy Policy
                </Text>
                <Text
                  fontSize="sm"
                  _hover={{ color: "brand.200", cursor: "pointer" }}
                >
                  Terms of Service
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
