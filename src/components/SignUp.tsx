import { Formik, Field, FormikHelpers } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
  Link,
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useSearchParams, useNavigate } from "react-router-dom";

type UserRole = "tutor" | "student";

type LoginFormValues = {
  email: string;
  password: string;
};

type SignupFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
};

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(100, "Email must be less than 100 characters"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must be less than 50 characters")
      .regex(/^[a-zA-Z'-]+$/, "First name contains invalid characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must be less than 50 characters")
      .regex(/^[a-zA-Z'-]+$/, "Last name contains invalid characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address")
      .max(100, "Email must be less than 100 characters"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be less than 50 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    role: z.enum(["tutor", "student"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const roleFromUrl = searchParams.get("role");
  const defaultRole: UserRole =
    roleFromUrl === "tutor" || roleFromUrl === "student"
      ? roleFromUrl
      : "student";

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const navigateToDashboard = (role: UserRole) => {
    localStorage.setItem("userRole", role);

    navigate(role === "tutor" ? "/tutor-dashboard" : "/student-dashboard");
  };

  const handleLoginSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const storedData = localStorage.getItem(`user_${values.email}`);
      if (!storedData) {
        throw new Error("User not found.");
      }

      const { userData, role } = JSON.parse(storedData);

      if (userData.password !== values.password) {
        throw new Error("Incorrect password.");
      }

      const token = "fake_token_for_" + values.email;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userEmail", values.email);

      toast({
        title: "Logged in successfully",
        description: "You've been logged in to your account.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigateToDashboard(role || userData.role || defaultRole);
    } catch (error: any) {
      toast({
        title: "Login failed",
        description:
          error.message || "There was an error logging in. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleSignupSubmit = async (
    values: SignupFormValues,
    actions: FormikHelpers<SignupFormValues>
  ) => {
    try {
      if (localStorage.getItem(`user_${values.email}`)) {
        throw new Error("User with this email already exists.");
      }

      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        role: values.role,
      };

      localStorage.setItem(
        `user_${values.email}`,
        JSON.stringify({
          userData,
          role: values.role,
        })
      );

      const token = "fake_token_for_" + values.email;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userEmail", values.email);

      toast({
        title: "Account created",
        description: "We've created your account successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigateToDashboard(values.role);
    } catch (error: any) {
      toast({
        title: "Signup failed",
        description:
          error.message ||
          "There was an error creating your account. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Flex
      as={motion.div}
      maxH="100vh"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition="all 0.3s ease-in-out"
    >
      <Box
        as={motion.div}
        w={{ base: "100%", md: "50%" }}
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        order={{ md: isLogin ? 2 : 1 }}
        initial={{ x: isLogin ? -50 : 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 } as any}
      >
        <Box maxW="md" mx="auto" w="100%">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {isLogin ? (
                <>
                  <Heading as="h1" size="xl" mb={6} textAlign="center">
                    Welcome Back
                  </Heading>
                  <Text
                    fontSize="lg"
                    mb={8}
                    textAlign="center"
                    color="gray.500"
                  >
                    Log in to continue your journey
                  </Text>

                  <Formik<LoginFormValues>
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={toFormikValidationSchema(loginSchema)}
                    onSubmit={handleLoginSubmit}
                  >
                    {(props) => (
                      <form onSubmit={props.handleSubmit}>
                        <VStack spacing={4}>
                          <Field name="email">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.email && form.touched.email
                                }
                              >
                                <FormLabel htmlFor="email">
                                  Email address
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="email"
                                  type="email"
                                  placeholder="your@email.com"
                                  size="lg"
                                  focusBorderColor="teal.300"
                                />
                                <FormErrorMessage>
                                  {form.errors.email}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="password">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.password && form.touched.password
                                }
                              >
                                <FormLabel htmlFor="password">
                                  Password
                                </FormLabel>
                                <InputGroup size="lg">
                                  <Input
                                    {...field}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    focusBorderColor="teal.300"
                                  />
                                  <InputRightElement>
                                    <IconButton
                                      aria-label={
                                        showPassword
                                          ? "Hide password"
                                          : "Show password"
                                      }
                                      icon={
                                        showPassword ? (
                                          <ViewOffIcon />
                                        ) : (
                                          <ViewIcon />
                                        )
                                      }
                                      variant="ghost"
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                    />
                                  </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                  {form.errors.password}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Button
                            mt={6}
                            width="100%"
                            colorScheme="teal"
                            size="lg"
                            isLoading={props.isSubmitting}
                            type="submit"
                            loadingText="Logging in..."
                            as={motion.button}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Log In
                          </Button>
                        </VStack>
                      </form>
                    )}
                  </Formik>
                  <Flex
                    flexDir="row"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                    justify={"center"}
                  >
                    <Text mt={4} color="gray.500">
                      Don't have an account?
                    </Text>
                    <Link
                      mt={"4"}
                      textAlign={"center"}
                      color="teal.500"
                      fontWeight="semibold"
                      onClick={handleToggleForm}
                      cursor="pointer"
                      as={motion.div}
                      whileHover={{ scale: 1.05 }}
                    >
                      Sign up
                    </Link>
                  </Flex>
                </>
              ) : (
                <>
                  <Heading as="h1" size="xl" mb={6} textAlign="center">
                    Create Your Account
                  </Heading>
                  <Text
                    fontSize="lg"
                    mb={8}
                    textAlign="center"
                    color="gray.500"
                  >
                    Join our community and start your journey
                  </Text>

                  <Formik<SignupFormValues>
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                      role: defaultRole,
                    }}
                    validationSchema={toFormikValidationSchema(signupSchema)}
                    onSubmit={handleSignupSubmit}
                  >
                    {(props) => (
                      <form onSubmit={props.handleSubmit}>
                        <VStack spacing={2}>
                          <Field name="firstName">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.firstName &&
                                  form.touched.firstName
                                }
                              >
                                <FormLabel htmlFor="firstName">
                                  First name
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="firstName"
                                  placeholder="Enter your first name"
                                  size="lg"
                                  focusBorderColor="teal.300"
                                />
                                <FormErrorMessage>
                                  {form.errors.firstName}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="lastName">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.lastName && form.touched.lastName
                                }
                              >
                                <FormLabel htmlFor="lastName">
                                  Last name
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="lastName"
                                  placeholder="Enter your last name"
                                  size="lg"
                                  focusBorderColor="teal.300"
                                />
                                <FormErrorMessage>
                                  {form.errors.lastName}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="email">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.email && form.touched.email
                                }
                              >
                                <FormLabel htmlFor="email">
                                  Email address
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="email"
                                  type="email"
                                  placeholder="your@email.com"
                                  size="lg"
                                  focusBorderColor="teal.300"
                                />
                                <FormErrorMessage>
                                  {form.errors.email}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="password">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.password && form.touched.password
                                }
                              >
                                <FormLabel htmlFor="password">
                                  Password
                                </FormLabel>
                                <InputGroup size="lg">
                                  <Input
                                    {...field}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    focusBorderColor="teal.300"
                                  />
                                  <InputRightElement>
                                    <IconButton
                                      aria-label={
                                        showPassword
                                          ? "Hide password"
                                          : "Show password"
                                      }
                                      icon={
                                        showPassword ? (
                                          <ViewOffIcon />
                                        ) : (
                                          <ViewIcon />
                                        )
                                      }
                                      variant="ghost"
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                    />
                                  </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                  {form.errors.password}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="confirmPassword">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.confirmPassword &&
                                  form.touched.confirmPassword
                                }
                              >
                                <FormLabel htmlFor="confirmPassword">
                                  Confirm Password
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="confirmPassword"
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Confirm your password"
                                  size="lg"
                                  focusBorderColor="teal.300"
                                />
                                <FormErrorMessage>
                                  {form.errors.confirmPassword}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="role">
                            {({ field, form }: any) => (
                              <FormControl
                                isInvalid={
                                  form.errors.role && form.touched.role
                                }
                              >
                                <FormLabel htmlFor="role">Role</FormLabel>
                                <Select
                                  {...field}
                                  id="role"
                                  placeholder="Select role"
                                >
                                  <option value="student">Student</option>
                                  <option value="tutor">Tutor</option>
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.role}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Button
                            mt={6}
                            width="100%"
                            colorScheme="teal"
                            size="lg"
                            isLoading={props.isSubmitting}
                            type="submit"
                            loadingText="Creating account..."
                            as={motion.button}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Sign Up
                          </Button>
                        </VStack>
                      </form>
                    )}
                  </Formik>
                  <Flex justify={"center"} flexDir={"row"} gap={2}>
                    <Text mt={4} textAlign="center" color="gray.500">
                      Already have an account?
                    </Text>
                    <Link
                      mt={4}
                      color="teal.500"
                      fontWeight="semibold"
                      onClick={handleToggleForm}
                      cursor="pointer"
                      as={motion.div}
                      whileHover={{ scale: 1.05 }}
                    >
                      Log in
                    </Link>
                  </Flex>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>

      <Box
        as={motion.div}
        display={{ base: "none", md: "block" }}
        w="50%"
        h="100vh"
        bgGradient="linear(to-b, teal.400, teal.600)"
        borderLeftRadius={{ md: isLogin ? "none" : "3xl" }}
        borderRightRadius={{ md: isLogin ? "3xl" : "none" }}
        position="relative"
        overflow="hidden"
        order={{ md: isLogin ? 1 : 2 }}
        key="green-panel"
        initial={{ x: isLogin ? -50 : 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 } as any}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          w="80%"
          color="white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Heading as="h2" size="lg" mb={4}>
              {isLogin ? "Welcome Back!" : "Join Us Today"}
            </Heading>
            <Text fontSize="lg" opacity={0.9}>
              {isLogin
                ? "Log in to access your personalized dashboard and continue your journey."
                : "Join thousands of happy users who are already enjoying our services."}
            </Text>
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
};

export default AuthForm;
