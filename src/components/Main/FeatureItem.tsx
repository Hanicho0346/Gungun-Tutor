import { Box, Flex, useMediaQuery,Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

interface FeatureItemProps {
  text: string;
}


const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      flexDir="row"
      alignItems="center"
      gap={5}
      mt={isMobile ? 5 : 6}
      w={isMobile ? "100%" : "auto"}
    >
      <Box
        borderRadius="full"
        border="2px solid"
        borderColor="orange.400"
        bg="orange.400"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        boxSize={isMobile ? "20px" : "24px"}
      >
        <FaCheck size={isMobile ? "10px" : "12px"} color="white" />
      </Box>
      <Text
        fontSize={isMobile ? "sm" : "md"}
        fontWeight="medium"
        color="gray.700"
        align={isMobile ? "left" : "center"}
      >
        {text}
      </Text>
    </Flex>
  );
};
export default FeatureItem;