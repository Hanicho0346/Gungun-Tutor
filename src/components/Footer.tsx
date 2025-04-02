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
} from "@chakra-ui/react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const links = [
  {
    Icon: FaFacebook,
    to: "https://www.youtube.com/@GoonGoonTube",
  },
  {
    Icon: FaTiktok,
    to: "https://www.tiktok.com/@goongoontutors",
  },
  {
    Icon: MdOutlineEmail,
    to: "info@goongoon.net",
  },
  {
    Icon: RiSendPlaneFill,
    to: "https://t.me/GoongoonTutor",
  },
];
const Footer = () => {


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
            height={{ base: "auto", md: "350px" }}
          >
            <Box
              flex={1}
              minW={{ base: "full", md: "200px" }}
              mb={{ base: 6, md: 0 }}
            >
              <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Goongun Tutor
              </Text>
              <Text fontSize="md" mb={4}>
                Empowering students with world-class tutoring services to
                achieve academic success.
              </Text>
              <Flex gap={4} justify={{ base: "center", md: "flex-start" }}>
                {links.map((IconComponent, index) => (
                  <Link to={IconComponent.to}>
                    <Icon
                      key={index}
                      as={IconComponent.Icon}
                      boxSize={6}
                      cursor="pointer"
                      _hover={{ color: "brand.200" }}
                    />
                  </Link>
                ))}
              </Flex>
            </Box>

            <Box
              flex={1}
              minW={{ base: "full", md: "200px" }}
              mb={{ base: 6, md: 0 }}
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb={4}
                textAlign={{ base: "center", md: "left" }}
              >
                Quick Links
              </Text>
              <VStack align={{ base: "center", md: "start" }} spacing={3}>
                {["Home", "About Us", "Services", "Contact Us"].map((link) => (
                  <Text
                    key={link}
                    fontSize="md"
                    _hover={{ color: "brand.200", cursor: "pointer" }}
                  >
                    {link}
                  </Text>
                ))}
              </VStack>
            </Box>

            <Box
              flex={1}
              minW={{ base: "full", md: "200px" }}
              mb={{ base: 6, md: 0 }}
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb={4}
                textAlign={{ base: "center", md: "left" }}
              >
                Contact Us
              </Text>
              <VStack align={{ base: "center", md: "start" }} spacing={3}>
                <Text fontSize="md">Email: info@goonguntutor.com</Text>
                <Text fontSize="md">Phone: +1 (123) 456-7890</Text>
                <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
                  Address: 123 Tutor St, Education City, World
                </Text>
              </VStack>
            </Box>

            <Box flex={1} minW={{ base: "full", md: "250px" }}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb={4}
                textAlign={{ base: "center", md: "left" }}
              >
                Newsletter
              </Text>
              <Text
                fontSize="md"
                mb={4}
                textAlign={{ base: "center", md: "left" }}
              >
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
              <Text fontSize="md" mt={{ base: 2, md: 0 }}>
                © {new Date().getFullYear()} Goongun Tutor. All rights reserved.
              </Text>
              <Flex gap={{ base: 2, md: 4 }}>
                <Text
                  fontSize="md"
                  _hover={{ color: "brand.200", cursor: "pointer" }}
                >
                  Privacy Policy
                </Text>
                <Text
                  fontSize="md"
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
