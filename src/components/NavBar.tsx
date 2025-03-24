import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Images/Logo Image.png";
import background from "../assets/Images/Wave Lines.png";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface NavItem {
  label: string;
  path: string;
}

const NavBar = () => {
  const { t, i18n } = useTranslation(); 


  const navItems: NavItem[] = useMemo(
    () => [
      { label: t("home"), path: "/" },
      { label: t("about"), path: "/about" },
      { label: t("services"), path: "/services" },
      { label: t("tutors"), path: "/tutors" },
      { label: t("contact"), path: "/contact" },
    ],
    [t] 
  );


  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "am" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      p={4}
      background="white"
      color="white"
      width="full"
      position="relative"
      boxShadow="md"
    >
      <Box
        backgroundImage={`url(${background})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="1"
      />

      <NavLink to="/" aria-label="Home">
        <Image
          ml={4}
          src={Logo}
          width={"full"}
          height={"100vh"}
          boxSize="24"
          alt="Logo"
        />
      </NavLink>

      <Flex
        as="ul"
        direction="row"
        gap={7}
        fontSize={["xs", "sm", "md", "lg", "xl"]}
        textColor="brand.500"
        fontWeight="md"
        listStyleType="none"
        role="navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{ textDecoration: "none",cursor:"pointer", color: "inherit" }}
          >
            <Box as="li" _hover={{ textDecoration: "underline" }}>
              {item.label}
            </Box>
          </NavLink>
        ))}
      </Flex>

      <Flex alignItems="center" gap={4}>

        <Button
          onClick={toggleLanguage} 
          size="sm"
          border={"none"}
          colorScheme="brand"
        >
          {i18n.language === "en" ? "Am" : "En"}
        </Button>

        <NavLink to="/find-tutor" aria-label="Find Your Tutor">
          <Button
            _hover={{
              boxShadow: "lg",
              bg: "#FFD59A",
              color: "black",
            }}
            boxShadow="md"
            textColor="brand.400"
            p={6}
            background="linear-gradient(90deg, white, #FFD59A, white)"
            mr={4}
            borderRadius={"full"}
          >
            {t("findTutor")} 
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;