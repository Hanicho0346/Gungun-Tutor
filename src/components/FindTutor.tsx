import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Select, Textarea, VStack,Text } from "@chakra-ui/react";
import Tutor from "../assets/Images/tutor.png";
import * as Yup from "yup";
import {Formik} from "formik";
import {Tutore} from "./types"
interface FindTutorProps{
  tutours:Tutore;
}
export default function FindTutor (props:FindTutorProps) {
  const {tutours}=props;
   const validationSchema =() =>
    Yup.object().shape({
      fname:Yup.string().required("First nameis required"),
      lname:Yup.string().required("Last name is required"),
      phone:Yup.string().required("Parent Phone number is required"),
      email:Yup.string().email().required("Email is required"),
      hadress:Yup.string().required("home adress is required"),
      gofstudent:Yup.string().required("Grade of student is required"),
      hperday:Yup.string().required("Hours per day is required"),
      dperweek:Yup.string().required("Day per week is required"),
      subject:Yup.string().required("subject is required")
    })

    const onSubmit =()=>{
      console.log("hh");
    }
  return (
    <Box w="100vw" minH="100vh" py="20" display="flex" justifyContent="center">
         <Flex bgColor="brand.500" width="70%"  p={10} justify={"center"} borderRadius={"10px"}>
      <VStack width="100%" bg="gray.100" boxShadow="lg" borderRadius="25px"  mt={90} >
        <Flex gap={40}>
          <Heading color="orange.400" mt={20}>Tutoring Request<br/> Form</Heading>
          <Box width="500px">
            <Image src={Tutor} objectFit="contain" width="100%" height="auto" mt={"-20"}/>
          </Box>
          </Flex>
          <Formik<Tutore>
            initialValues={{
              ...tutours
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
        <VStack spacing={5} p={10} width="100%" bgSize={"lg"}>
          <HStack width="70%">
            <FormControl isRequired size={"lg"}>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Abebech" size="lg" h={16} bg={"white"}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Gobena" size="lg" h={16} bg={"white"}/>
            </FormControl>
          </HStack>
           <FormControl isRequired width="70%">
           <FormLabel>Parents PhoneNumber</FormLabel>
           <Input type="number" placeholder="0912131415" size="lg" h={16} bg={"white"}/>
           </FormControl>
          <FormControl isRequired width="70%">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="abc21@Gmail.com" size="lg" h={16} bg={"white"}/>
          </FormControl>
          <FormControl isRequired width="70%">
              <FormLabel>Home Address + (Specific address)</FormLabel>
              <Input placeholder="Bole(Edna mall)" size="lg" h={16} bg={"white"}/>
            </FormControl>
            <FormControl isRequired width="70%">
            <FormLabel>Grade of Student</FormLabel>
            <Select placeholder="Select..." size="lg" h={16} bg={"white"}>
              <option>KG</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Select>
          </FormControl>
          <FormControl isRequired width="70%">
            <FormLabel>Hours per Day</FormLabel>
            <Select placeholder="Select..." size="lg" h={16} bg={"white"}>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
              <option>4 hours</option>
              <option>5 hours</option>
            </Select>
          </FormControl>
          <FormControl isRequired width="70%">
            <FormLabel>Days per Week</FormLabel>
            <Select placeholder="Select..." size="lg" h={16} bg={"white"}>
              <option>1 day</option>
              <option>2 days</option>
              <option>3 days</option>
              <option>4 days</option>
              <option>5 days</option>
              <option>6 days</option>
              <option>7 days</option>
            </Select>
          </FormControl>
          <FormControl isRequired width="70%">
            <FormLabel>Subject</FormLabel>
            <Select placeholder="Select..." size="lg" h={16} bg={"white"}>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
              <option>Science</option>
              <option>Geography</option>
              <option>History</option>
              <option>Programming</option>
            </Select>
          </FormControl>
          <FormControl width="70%">
            <FormLabel>Preferred Schedule</FormLabel>
            <Input type="datetime-local" size="lg" h={16} bg={"white"}/>
          </FormControl>
          <FormControl width="70%">
            <FormLabel>Special Requirements</FormLabel>
            <Textarea size="lg" h={44} bg={"white"}/>
          </FormControl>
          <Button
          width={"50%"}
          h={16}
          mt={5}
          bgGradient="linear(to-l, orange.300, brand.200)"
          borderRadius={"60px"}
          >
            <Text color={"white"}
            fontFamily={"'Open Sans', sans-serif"}
            fontSize={25}
            >REQUEST TUTOR</Text>
            </Button>
        </VStack>
        </Formik>
      </VStack>
      </Flex>
    </Box>
  );
};

