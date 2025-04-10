import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Textarea,
  VStack,
  Text,
  useToast,
  Tag,
  TagLabel,
  TagCloseButton,
  Grid,
  GridItem,
  useBreakpointValue,
  Container,
  Avatar,
  Stack,
  Divider,
  IconButton,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Modal,
  Icon,
} from "@chakra-ui/react";
import Tutor from "../../assets/Images/tutor.png";
import * as Yup from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import { Tutore } from "../types";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiPlus, FiSend } from "react-icons/fi";

interface FindTutorProps {
  tutours?: Tutore;
}

interface FormValues {
  fullname: string;
  phone: string;
  email: string;
  hadress: string;
  gofstudent: string;
  hperday: string;
  dperweek: string;
  schedule?: string;
  requirements?: string;
}

export default function FindTutor({ tutours }: FindTutorProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [currentSubject, setCurrentSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const initialValues: FormValues = {
    fullname: tutours?.fname || "",
    phone: tutours?.phone || "",
    email: tutours?.email || "",
    hadress: tutours?.hadress || "",
    gofstudent: tutours?.gofstudent || "",
    hperday: tutours?.hperday || "",
    dperweek: tutours?.dperweek || "",
    schedule: "",
    requirements: "",
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be at least 10 digits"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    hadress: Yup.string().required("Address is required"),
    gofstudent: Yup.string().required("Grade is required"),
    hperday: Yup.string().required("Hours per day is required"),
    dperweek: Yup.string().required("Days per week is required"),
    subjects: Yup.array()
      .of(Yup.string())
      .min(1, "At least one subject is required"),
  });

  const onSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsSubmitting(true);

    try {
      if (selectedSubjects.length === 0) {
        throw new Error("Please select at least one subject");
      }

      const formData = {
        ...values,
        subjects: selectedSubjects.join(", "),
      };

      await emailjs.send(
        "service_0ovmtal",
        "template_b55h78s",
        formData,
        "JwUlFUwKffMX2g_m0"
      );

      onOpen();
      resetForm();
      setSelectedSubjects([]);
    } catch (error) {
      toast({
        title: "Submission Error",
        description:
          error instanceof Error ? error.message : "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddSubject = () => {
    if (currentSubject && !selectedSubjects.includes(currentSubject)) {
      setSelectedSubjects([...selectedSubjects, currentSubject]);
      setCurrentSubject("");
    }
  };

  const handleRemoveSubject = (subjectToRemove: string) => {
    setSelectedSubjects(
      selectedSubjects.filter((subject) => subject !== subjectToRemove)
    );
  };

  const Subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Science",
    "Geography",
    "History",
    "Programming",
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="xl"
        overflow="hidden"
        position="relative"
      >
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box flex={1} p={{ base: 6, md: 10 }}>
            <Stack spacing={8}>
              <Box>
                <Heading size="xl" color="brand.500" mb={2}>
                  Find Your Perfect Tutor
                </Heading>
                <Text color="gray.600">
                  Fill out this form and we'll match you with qualified tutors
                  in your area.
                </Text>
              </Box>

              <Divider />

              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Request Submitted Successfully!</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody py={6}>
                    <VStack spacing={4} textAlign="center">
                      <Icon as={FiCheckCircle} boxSize={12} color="green.500" />
                      <Text fontSize="lg">
                        We've received your request and will match you with a
                        tutor within 24 hours.
                      </Text>
                      <Button colorScheme="brand" onClick={onClose} mt={4}>
                        Close
                      </Button>
                    </VStack>
                  </ModalBody>
                </ModalContent>
              </Modal>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ errors, touched }) => (
                  <Form ref={formRef}>
                    <VStack spacing={6} align="stretch">
                      <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={6}
                      >
                        <GridItem>
                          <Field name="fullname">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={
                                  !!errors.fullname && touched.fullname
                                }
                              >
                                <FormLabel>Full Name</FormLabel>
                                <Input
                                  {...field}
                                  placeholder="Your name"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                />
                                <FormErrorMessage>
                                  {errors.fullname}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem>
                          <Field name="phone">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={!!errors.phone && touched.phone}
                              >
                                <FormLabel>Phone Number</FormLabel>
                                <Input
                                  {...field}
                                  type="tel"
                                  placeholder="0912131415"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                />
                                <FormErrorMessage>
                                  {errors.phone}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem>
                          <Field name="email">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={!!errors.email && touched.email}
                              >
                                <FormLabel>Email</FormLabel>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="your@email.com"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                />
                                <FormErrorMessage>
                                  {errors.email}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem>
                          <Field name="hadress">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={!!errors.hadress && touched.hadress}
                              >
                                <FormLabel>Home Address</FormLabel>
                                <Input
                                  {...field}
                                  placeholder="Area + specific location"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                />
                                <FormErrorMessage>
                                  {errors.hadress}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem>
                          <Field name="gofstudent">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={
                                  !!errors.gofstudent && touched.gofstudent
                                }
                              >
                                <FormLabel>Student Grade</FormLabel>
                                <Select
                                  {...field}
                                  placeholder="Select grade"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                >
                                  <option value="KG">KG</option>
                                  {[...Array(12).keys()].map((i) => (
                                    <option
                                      key={i + 1}
                                      value={`Grade ${i + 1}`}
                                    >
                                      Grade {i + 1}
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage>
                                  {errors.gofstudent}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem>
                          <Field name="hperday">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={!!errors.hperday && touched.hperday}
                              >
                                <FormLabel>Hours per Day</FormLabel>
                                <Select
                                  {...field}
                                  placeholder="Select hours"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                >
                                  {[...Array(5).keys()].map((i) => (
                                    <option
                                      key={i + 1}
                                      value={`${i + 1} hours`}
                                    >
                                      {i + 1} hours
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage>
                                  {errors.hperday}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem>
                          <Field name="dperweek">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={
                                  !!errors.dperweek && touched.dperweek
                                }
                              >
                                <FormLabel>Days per Week</FormLabel>
                                <Select
                                  {...field}
                                  placeholder="Select days"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                >
                                  {[...Array(7).keys()].map((i) => (
                                    <option key={i + 1} value={`${i + 1} days`}>
                                      {i + 1} days
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage>
                                  {errors.dperweek}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem colSpan={{ base: 1, md: 2 }}>
                          <FormControl
                          // isInvalid={selectedSubjects.length === 0}
                          >
                            <FormLabel>Subjects Needed</FormLabel>
                            <HStack>
                              <Select
                                value={currentSubject}
                                onChange={(e) =>
                                  setCurrentSubject(e.target.value)
                                }
                                placeholder="Select subject..."
                                size="lg"
                                bg="gray.50"
                                focusBorderColor="brand.500"
                              >
                                {Subjects.map((subject) => (
                                  <option key={subject} value={subject}>
                                    {subject}
                                  </option>
                                ))}
                              </Select>
                              <IconButton
                                aria-label="Add subject"
                                icon={<FiPlus />}
                                onClick={handleAddSubject}
                                size="lg"
                                colorScheme="brand"
                                isDisabled={!currentSubject}
                              />
                            </HStack>
                            <Box mt={3}>
                              {selectedSubjects.map((subject) => (
                                <Tag
                                  key={subject}
                                  size="lg"
                                  borderRadius="full"
                                  variant="solid"
                                  colorScheme="brand"
                                  mr={2}
                                  mb={2}
                                >
                                  <TagLabel>{subject}</TagLabel>
                                  <TagCloseButton
                                    onClick={() => handleRemoveSubject(subject)}
                                  />
                                </Tag>
                              ))}
                            </Box>
                            {selectedSubjects.length === 0 && (
                              <FormErrorMessage>
                                At least one subject is required
                              </FormErrorMessage>
                            )}
                            <input
                              type="hidden"
                              name="subjects"
                              value={selectedSubjects.join(",")}
                            />
                          </FormControl>
                        </GridItem>

                        <GridItem>
                          <Field name="schedule">
                            {({ field }: FieldProps) => (
                              <FormControl>
                                <FormLabel>Preferred Schedule</FormLabel>
                                <Input
                                  {...field}
                                  type="datetime-local"
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                />
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>

                        <GridItem colSpan={{ base: 1, md: 2 }}>
                          <Field name="requirements">
                            {({ field }: FieldProps) => (
                              <FormControl>
                                <FormLabel>Special Requirements</FormLabel>
                                <Textarea
                                  {...field}
                                  placeholder="Any specific needs or preferences..."
                                  size="lg"
                                  bg="gray.50"
                                  focusBorderColor="brand.500"
                                  rows={4}
                                />
                              </FormControl>
                            )}
                          </Field>
                        </GridItem>
                      </Grid>

                      <Button
                        type="submit"
                        colorScheme="brand"
                        size="lg"
                        rightIcon={<FiSend />}
                        mt={4}
                        isLoading={isSubmitting}
                        loadingText="Submitting..."
                      >
                        Find My Tutor
                      </Button>
                    </VStack>
                  </Form>
                )}
              </Formik>
            </Stack>
          </Box>

          {!isMobile && (
            <Box
              flex={1}
              bgGradient="linear(to-br, brand.100, brand.500)"
              p={3}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color="white"
            >
              <Avatar size="3xl" src={Tutor} mb={6} alignSelf={"top"} />
              <Heading size="xl" mb={4} textAlign="center">
                Personalized Tutoring
              </Heading>
              <Text fontSize="lg" mb={8} textAlign="center">
                Get matched with expert tutors tailored to your learning needs
                and schedule.
              </Text>

              <VStack spacing={4} align="stretch" w="full" maxW="md">
                <Flex align="center">
                  <Box bg="white" p={4} borderRadius="full" mr={3}>
                    <Text color="brand.500" fontWeight="bold">
                      1
                    </Text>
                  </Box>
                  <Text fontSize={"xl"}>Fill out this simple form</Text>
                </Flex>

                <Flex align="center">
                  <Box bg="white" p={4} borderRadius="full" mr={3}>
                    <Text color="brand.500" fontWeight="bold">
                      2
                    </Text>
                  </Box>
                  <Text fontSize={"xl"}>
                    We'll match you with qualified tutors
                  </Text>
                </Flex>

                <Flex align="center">
                  <Box bg="white" p={4} borderRadius="full" mr={3}>
                    <Text color="brand.500" fontWeight="bold">
                      3
                    </Text>
                  </Box>
                  <Text fontSize={"xl"}>Schedule your first session</Text>
                </Flex>
              </VStack>
            </Box>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
