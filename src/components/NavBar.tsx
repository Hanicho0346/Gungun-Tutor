import {
  Box,
  Button,
  Flex,
  Image,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  useDisclosure,
  Link,
  List,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/Images/Logo Image.png";

interface NavItem {
  label: string;
  path: string;
  isPopover?: boolean;
}

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const isMobile = useBreakpointValue({ base: true, md: false });
  const navbarWidth = useBreakpointValue({ base: "100%", md: "95%" });

  const navItems: NavItem[] = useMemo(
    () => [
      { label: t("home"), path: "/" },
      { label: t("about"), path: "/about" },
      { label: t("tutors"), path: "/tutors", isPopover: true },
      { label: t("contact"), path: "#contact" },
    ],
    [t]
  );

  const toggleLanguage = useCallback(() => {
    const newLanguage = i18n.language === "en" ? "am" : "en";
    i18n.changeLanguage(newLanguage);
  }, [i18n]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        p={{ base: 3, md: 6 }}
        bg="white"
        color="white"
        w={navbarWidth}
        position="fixed"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        boxShadow="md"
        borderRadius={{ base: "none", md: "full" }}
        zIndex="sticky"
        height={{ base: "70px", md: "100px" }}
        m={2}
      >
        {!isMobile && (
          <Box
            backgroundImage="url(/wave-lines.png)"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position="absolute"
            inset={0}
            opacity={1}
            borderRadius={{ base: "none", md: "full" }}
            zIndex={-1}
          />
        )}

        <NavLink to="/" aria-label="Home">
          <Image
            ml={{ base: 2, md: 4 }}
            src={logo}
            boxSize={{ base: "40px", md: "90px" }}
            objectFit="contain"
            alt="Company Logo"
            transition="all 0.2s ease"
            _hover={{
              transform: "scale(1.05)",
              opacity: 0.9,
            }}
          />
        </NavLink>

        {!isMobile && (
          <List
            as="ul"
            display="flex"
            gap={{ base: 3, sm: 4, md: 8 }}
            fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "lg" }}
            color="brand.500"
            fontWeight="medium"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <ListItem key={item.path}>
                {item.isPopover ? (
                  <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                      <Link
                        href="/"
                        variant="link"
                        style={{ position: "relative" }}
                      >
                        {item.label}
                      </Link>
                    </PopoverTrigger>
                    <PopoverContent
                      width="auto"
                      border="none"
                      boxShadow="lg"
                      borderRadius="lg"
                      bg="white"
                    >
                      <PopoverBody p={2}>
                        <VStack spacing={2} align="stretch">
                          <Button
                            as={NavLink}
                            to="/become-tutor?role=tutor"
                            variant="ghost"
                            colorScheme="brand"
                            size="sm"
                            _hover={{ bg: "brand.50" }}
                          >
                            {t("Become Tutor")}
                          </Button>
                          <Button
                            as={NavLink}
                            to="/findtutor"
                            variant="ghost"
                            colorScheme="brand"
                            size="sm"
                            _hover={{ bg: "brand.50" }}
                          >
                            {t("Find Tutor")}
                          </Button>
                        </VStack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link
                    as={NavLink}
                    to={item.path}
                    position="relative"
                    _after={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      width: isActive(item.path) ? "100%" : "0%",
                      height: "2px",
                      bg: "brand.500",
                      transition: "width 0.3s ease",
                    }}
                    _hover={{
                      textDecoration: "none",
                      _after: {
                        width: "100%",
                      },
                    }}
                    color={isActive(item.path) ? "brand.600" : "brand.500"}
                  >
                    {item.label}
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        )}

        <Flex align="center" gap={{ base: 2, md: 3 }}>
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
            _hover={{ bg: "brand.600" }}
            aria-label={`Switch to ${
              i18n.language === "en" ? "Amharic" : "English"
            } language`}
          >
            {i18n.language === "en" ? "Am" : "En"}
          </Button>
        </Flex>
      </Flex>

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
            <VStack
              as="nav"
              spacing={4}
              align="stretch"
              mt={10}
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <Box key={item.path}>
                  {item.isPopover ? (
                    <>
                      <Link
                        as={NavLink}
                        to="/become-tutor"
                        onClick={onClose}
                        p={3}
                        fontSize="lg"
                        fontWeight="medium"
                        color={
                          isActive("/become-tutor") ? "brand.600" : "brand.500"
                        }
                        bg={
                          isActive("/become-tutor") ? "gray.50" : "transparent"
                        }
                        borderRadius="md"
                        _hover={{
                          bg: "gray.50",
                          textDecoration: "none",
                        }}
                        display="block"
                      >
                        {t("Become Tutor")}
                      </Link>
                      <Link
                        as={NavLink}
                        to="/find-tutor"
                        onClick={onClose}
                        p={3}
                        fontSize="lg"
                        fontWeight="medium"
                        color={
                          isActive("/find-tutor") ? "brand.600" : "brand.500"
                        }
                        bg={isActive("/find-tutor") ? "gray.50" : "transparent"}
                        borderRadius="md"
                        _hover={{
                          bg: "gray.50",
                          textDecoration: "none",
                        }}
                        display="block"
                      >
                        {t("Find Tutor")}
                      </Link>
                    </>
                  ) : (
                    <Link
                      as={NavLink}
                      to={item.path}
                      onClick={onClose}
                      p={3}
                      fontSize="lg"
                      fontWeight="medium"
                      color={isActive(item.path) ? "brand.600" : "brand.500"}
                      bg={isActive(item.path) ? "gray.50" : "transparent"}
                      borderRadius="md"
                      _hover={{
                        bg: "gray.50",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </Box>
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
