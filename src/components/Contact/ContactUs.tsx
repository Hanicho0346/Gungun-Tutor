import { Box, Flex, Heading, Text, Card, Icon, Image, useBreakpointValue, Stack } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, ChatIcon } from "@chakra-ui/icons";
import qrcode from "../../assets/Images/QRickit (1).png";

export default function ContactPage() {
  const cardDirection = useBreakpointValue<"row" | "column">({ base: "column", md: "row" });
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const qrSize = useBreakpointValue({ base: "48", md: "64" });
  const spacing = useBreakpointValue({ base: 6, md: 8 });

  return (
    <Box maxW="container.xl" mx="auto" py={{ base: 12, md: 16 }} px={{ base: 6, md: 8 }}>
      <Heading 
        as="h1" 
        size={headingSize}
        textAlign="center" 
        mb={{ base: 12, md: 16 }}
        color="gray.800"
        fontWeight="extrabold"
        letterSpacing="tight"
      >
        Contact Us
      </Heading>

      <Box maxW="3xl" mx="auto">
        <Card 
          overflow="hidden" 
          borderRadius="xl" 
          boxShadow={{ base: "lg", md: "xl" }}
          variant="elevated"
          bg="white"
        >
          <Flex flexDir={cardDirection}>
            <Box 
              p={{ base: 6, md: 8 }} 
              flex={1}
              bg="white"
            >
              <Heading 
                as="h2" 
                size="xl" 
                mb={8}
                color="gray.700"
                fontWeight="bold"
              >
                Get in Touch
              </Heading>

              <Stack spacing={6}>
                <Flex align="center" mb={6}>
                  <Icon as={PhoneIcon} color="brand.500" boxSize={6} mr={4} />
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">+1 (234) 567-8900</Text>
                </Flex>
                <Flex align="center" mb={6}>
                  <Icon as={EmailIcon} color="brand.500" boxSize={6} mr={4} />
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">contact@example.com</Text>
                </Flex>
                <Flex align="center" mb={6}>
                  <Icon as={ChatIcon} color="brand.500" boxSize={6} mr={4} />
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">@company_support</Text>
                </Flex>
              </Stack>

              <Text 
                fontSize="md" 
                color="gray.500" 
                mt={{ base: 6, md: 8 }}
                fontWeight="medium"
              >
                Scan the QR code to save our contact information
              </Text>
            </Box>

            <Box 
              bg="brand.50" 
              p={spacing} 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              flex={1}
              borderTop={{ base: "1px solid", md: "none" }}
              borderColor={{ base: "gray.200", md: "transparent" }}
            >
              <Box 
                w={qrSize} 
                h={qrSize} 
                bg="white" 
                p={6} 
                borderRadius="lg" 
                boxShadow="md" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                position="relative"
                border="2px solid"
                borderColor="brand.100"
              >
                <Image
                  src={qrcode} 
                  alt="Contact QR Code"
                  fallbackSrc="https://via.placeholder.com/256"
                  objectFit="contain"
                  w="full"
                  h="full"
                />
                <Text 
                  position="absolute" 
                  fontSize="sm" 
                  color="brand.500"
                  bottom={4}
                  fontWeight="semibold"
                >
                  SCAN TO CONNECT
                </Text>
              </Box>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Box>
  );
}