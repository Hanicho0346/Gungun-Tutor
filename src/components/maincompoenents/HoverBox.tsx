import { Box, Icon, useMediaQuery, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { JSX} from "react";
import { IconType } from "react-icons";

interface HoverBoxProps {
  icon: IconType | JSX.Element;
  title: string;
  description: string;
  color: string;
}
const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;

const HOVER_BOX_WIDTH = { base: "100%", md: "23%" };
const HoverBox: React.FC<HoverBoxProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      width={isMobile ? "90%" : HOVER_BOX_WIDTH}
      height={isMobile ? "300px" : "350px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p={isMobile ? 6 : 14}
      textAlign="center"
      borderRadius="lg"
      transition="0.3s ease"
      _hover={{
        "& > .icon-container > .icon": {
          animation: `${rotate} 0.5s linear`,
          color: color,
        },
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
      border="2px solid"
      borderColor="gray.100"
      mx={isMobile ? "auto" : 0}
      mb={isMobile ? 6 : 0}
    >
      <Box
        className="icon-container"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        bg="brand.100"
        p={4}
        mb={6}
      >
        {typeof icon === "function" ? (
          <Icon
            as={icon}
            className="icon"
            fontSize={isMobile ? "3xl" : "4xl"}
            transition="color 0.3s"
          />
        ) : (
          <Box
            className="icon"
            fontSize={isMobile ? "3xl" : "4xl"}
            transition="color 0.3s"
          >
            {icon}
          </Box>
        )}
      </Box>

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text fontSize={isMobile ? "2xl" : "3xl"} fontWeight="bold" mb={4}>
          {title}
        </Text>
        <Text fontSize={isMobile ? "md" : "lg"} mb={4}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};
export default HoverBox;
