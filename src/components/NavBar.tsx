import {
  Box,
  Button,
  Flex,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
import Logo from "../assets/Images/Logo Image.png";
import background from "../assets/Images/Wave Lines.png";

interface NavItem {
  label: string;
  path: string;
}

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navbarWidth = useBreakpointValue({ base: "100%", md: "95%" });
  const textColor = useColorModeValue("brand.500", "white");

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

  const toggleLanguage = useCallback(() => {
    const newLanguage = i18n.language === "en" ? "am" : "en";
    i18n.changeLanguage(newLanguage);
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    inset: 0,
    opacity: 1,
    borderRadius: "full",
  };

  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      p={{ base: 2, md: 6 }}
      bg="white"
      color="white"
      w={navbarWidth}
      position="fixed"
      top={5}
      left="50%"
      transform="translateX(-50%)"
      boxShadow={isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "md"}
      borderRadius="full"
      zIndex="sticky"
      transition="all 0.3s ease"
      h="100px"
      role="navigation"
      aria-label="Main navigation"
    >
      <Box {...backgroundStyles} />

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
        color={textColor}
        fontWeight="medium"
        listStyleType="none"
        role="list"
        display={{ base: "none", md: "flex" }}
      >
        {navItems.map((item) => (
          <Box as="li" key={item.path}>
            <NavLink 
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "bold" : "normal",
                color: textColor,
                padding: "8px 12px",
                borderRadius: "4px",
                transition: "all 0.2s ease",
              })}
            >
              {item.label}
            </NavLink>
          </Box>
        ))}
      </Flex>

      <Flex align="center" gap={{ base: 2, md: 3 }}>
        <Button
          onClick={toggleLanguage}
          size="md"
          border="none"
          borderRadius="md"
          bg="brand.500"
          color="white"
          _hover={{ bg: "brand.600" }}
          aria-label="Toggle language"
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
            color="brand.400"
            p={{ base: 3, md: 6 }}
            bg="linear-gradient(90deg, white, #FFD59A, white)"
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