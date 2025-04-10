import { useMediaQuery ,Box,VStack,Flex, Divider,Text,Avatar} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaQuoteRight } from "react-icons/fa";
interface ClientCardProps {
    name: string;
    relation: string;
    review: string;
  }
  


const ClientCard: React.FC<ClientCardProps> = ({ name, relation, review }) => {
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
export default ClientCard;