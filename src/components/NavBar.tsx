import { Box, Button, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Images/Logo Image.png";
import background from "../assets/Images/Wave Lines.png";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

interface NavItem {
  label: string;
  path: string;
}

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarWidth = useBreakpointValue({ base: "100%", md: "95%" });

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      p={{ base: 2, md: 6 }} 
      background="white"
      color="white"
      width={navbarWidth}
      position="fixed"
      top={5}
      left="50%"
      transform="translateX(-50%)"
      boxShadow={isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "md"}
      borderRadius="full"
      zIndex="sticky"
      transition="all 0.3s ease"
      height="100px" 
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
        borderRadius="full"
      />

      <NavLink to="/" aria-label="Home">
        <Image
          ml={{ base: 2, md: 4 }}
          src={Logo}
          boxSize={{ base: "40px", md: "90px" }} 
          objectFit="contain" 
          alt="Logo"
          transition="all 0.2s ease" 
          _hover={{
            transform: "scale(1.05)", 
            opacity: 0.9,
          }}
        />
      </NavLink>

      <Flex
        as="ul"
        direction="row"
        gap={{ base: 3, sm: 4, md: 8 }}
        fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "lg" }} 
        textColor="brand.500"
        fontWeight="md"
        listStyleType="none"
        role="navigation"
        display={{ base: "none", md: "flex" }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box as="li" _hover={{ textDecoration: "underline" }}>
              {item.label}
            </Box>
          </NavLink>
        ))}
      </Flex>

      <Flex alignItems="center" gap={{ base: 2, md: 3 }}>
        <Button
          onClick={toggleLanguage}
          size="md" 
          border="none"
          borderRadius="md"
          bg="brand.500"
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
            p={{ base: 3, md: 6 }}
            background="linear-gradient(90deg, white, #FFD59A, white)"
            mr={{ base: 1, md: 3 }}
            borderRadius="full"
            size={{ base: "xs", md: "md" }} 
            fontSize={{ base: "xs", md: "md" }} 
          >
            {t("findTutor")}
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;