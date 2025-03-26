import { Box, Button, Flex, Image, useBreakpointValue, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, VStack, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Images/Logo Image.png";
import background from "../assets/Images/Wave Lines.png";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface NavItem {
  label: string;
  path: string;
}

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarWidth = useBreakpointValue({ base: "100%", md: "95%" });
  const isMobile = useBreakpointValue({ base: true, md: false });

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
    <>
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        p={{ base: 3, md: 6 }}
        background="white"
        color="white"
        width={navbarWidth}
        position="fixed"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        boxShadow="md"
        borderRadius={{ base: "none", md: "full" }}
        zIndex="sticky"
        height={{ base: "70px", md: "100px" }}
      >
        {/* Background for desktop view only */}
        {!isMobile && (
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
            borderRadius={{ base: "none", md: "full" }}
          />
        )}

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

        {/* Desktop Navigation */}
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
              style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}
            >
              <Box as="li" _hover={{ textDecoration: "underline" }}>
                {item.label}
              </Box>
            </NavLink>
          ))}
        </Flex>

        {/* Mobile Menu Button and Action Buttons */}
        <Flex alignItems="center" gap={{ base: 2, md: 3 }}>
          {isMobile && (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              color="brand.500"
              size="lg"
              mr={1}
            />
          )}

          <Button
            onClick={toggleLanguage}
            size={{ base: "sm", md: "md" }}
            border="none"
            borderRadius="md"
            bg="brand.500"
            color="white"
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
              borderRadius="full"
              size={{ base: "sm", md: "md" }}
              fontSize={{ base: "xs", md: "md" }}
            >
              {t("findTutor")}
            </Button>
          </NavLink>
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex p={4} justifyContent="flex-end">
            <IconButton
              aria-label="Close menu"
              icon={<CloseIcon />}
              onClick={onClose}
              variant="ghost"
              color="brand.500"
            />
          </Flex>
          <DrawerBody>
            <VStack spacing={6} align="stretch" mt={10}>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={onClose}
                >
                  <Box
                    p={3}
                    fontSize="lg"
                    fontWeight="medium"
                    color="brand.500"
                    borderBottom="1px solid"
                    borderColor="gray.100"
                    _hover={{ bg: "gray.50" }}
                  >
                    {item.label}
                  </Box>
                </NavLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box height={{ base: "70px", md: "100px" }} />
    </>
  );
};

export default NavBar;