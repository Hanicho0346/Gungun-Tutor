import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  Input,
  Button,
  Divider,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
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
            p={{ base: 4, md: 6 }}
            borderRadius={{ base: "xl", md: "full" }}
            bg="white"
            maxW="95%"
            mx="auto"
            width={{ base: "90%", md: "80%" }}
            height={{ base: "auto", md: "150px" }}
            position="relative"
            top={{ base: "-20px", md: "-30px" }}
            zIndex="1"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
            justifyContent={"space-between"}
            textAlign={{ base: "center", md: "left" }}
          >
            <Box ml={{ base: 0, md: 6 }} px={{ base: 4, md: 0 }}>
              <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                fontFamily="monospace"
                color="black"
                letterSpacing="widest"
              >
                <Box as="span" color={"brand.500"}>
                  Ready?
                </Box>
                Get Tutor
              </Text>
              <Text fontSize="sm" color="gray.500" mt={1}>
                We provide tutoring services in multiple locations across the
                globe.
              </Text>
            </Box>
            <Button
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="bold"
              color="white"
              borderRadius={"xl"}
              bg="brand.500"
              px={8}
              py={{ base: 4, md: 6 }}
              _hover={{ bg: "brand.300", color: "white", boxShadow: "xl" }}
              width={{ base: "full", md: "auto" }}
              mx={{ base: 4, md: 0 }}
              mb={{ base: 4, md: 0 }}
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

        <Box width="full" bg="brand.500">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="flex-start"
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8 }}
            py={6}
            gap={6}
            height={{ base: "auto", md: "300px" }}
          >
            <Box flex={1} minW={{ base: "full", md: "200px" }} mb={{ base: 6, md: 0 }}>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Goongun Tutor
              </Text>
              <Text fontSize="sm" mb={4}>
                Empowering students with world-class tutoring services to
                achieve academic success.
              </Text>
              <Flex gap={4} justify={{ base: "center", md: "flex-start" }}>
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

            <Box flex={1} minW={{ base: "full", md: "200px" }} mb={{ base: 6, md: 0 }}>
              <Text fontSize="lg" fontWeight="bold" mb={4} textAlign={{ base: "center", md: "left" }}>
                Quick Links
              </Text>
              <VStack 
                align={{ base: "center", md: "start" }} 
                spacing={3}
              >
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

            <Box flex={1} minW={{ base: "full", md: "200px" }} mb={{ base: 6, md: 0 }}>
              <Text fontSize="lg" fontWeight="bold" mb={4} textAlign={{ base: "center", md: "left" }}>
                Contact Us
              </Text>
              <VStack 
                align={{ base: "center", md: "start" }} 
                spacing={3}
              >
                <Text fontSize="sm">Email: info@goonguntutor.com</Text>
                <Text fontSize="sm">Phone: +1 (123) 456-7890</Text>
                <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
                  Address: 123 Tutor St, Education City, World
                </Text>
              </VStack>
            </Box>

            <Box flex={1} minW={{ base: "full", md: "250px" }}>
              <Text fontSize="lg" fontWeight="bold" mb={4} textAlign={{ base: "center", md: "left" }}>
                Newsletter
              </Text>
              <Text fontSize="sm" mb={4} textAlign={{ base: "center", md: "left" }}>
                Subscribe to our newsletter to get the latest updates and
                offers.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} spacing={0}>
                <Input
                  placeholder="Your email"
                  bg="white"
                  color="black"
                  borderRadius="md"
                  borderRightRadius={{ base: "md", sm: 0 }}
                  _focus={{ outline: "none" }}
                  size="md"
                />
                <Button
                  bg="brand.600"
                  color="white"
                  borderRadius="md"
                  borderLeftRadius={{ base: "md", sm: 0 }}
                  _hover={{ bg: "brand.700" }}
                  px={6}
                  width={{ base: "full", sm: "auto" }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Flex>

          <Box bg="brand.700" py={4} width="full">
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              justify="center"
              align="center"
              maxW="1200px"
              mx="auto"
              px={4}
              gap={{ base: 2, md: 4 }}
            >
              <Text fontSize="sm" mt={{ base: 2, md: 0 }}>
                © {new Date().getFullYear()} Goongun Tutor. All rights reserved.
              </Text>
              <Flex gap={{ base: 2, md: 4 }}>
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