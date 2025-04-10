import { Box, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Select, VStack } from "@chakra-ui/react";
import Tutor from "../../assets/Images/tutor.png";

const FindTutor: React.FC = () => {
  return (
    <Box w="100vw" minH="100vh" py="20" display="flex" justifyContent="center">
         <Flex bgColor="brand.500" width="70%"  p={10} justify={"center"} borderRadius={"10px"}>
      <VStack width="100%" bg="white" boxShadow="lg" borderRadius="25px"  mt={90} >
        <Flex gap={40}>
          <Heading color="orange.400" mt={20}>Tutoring Request<br/> Form</Heading>
          <Box width="500px">
            <Image src={Tutor} objectFit="contain" width="100%" height="auto" mt={"-20"}/>
          </Box>
          </Flex>
        <VStack spacing={5} p={10} width="100%">
          <HStack width="70%">
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First name" size="lg" h={14}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last name" size="lg" h={14}/>
            </FormControl>
          </HStack>
          
          <FormControl isRequired width="70%">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your email" size="lg" h={14}/>
          </FormControl>
          <FormControl isRequired width="70%">
            <FormLabel>Subject</FormLabel>
            <Select placeholder="Select subject" size="lg" h={14}>
              <option>Mathematics</option>
              <option>Science</option>
              <option>English</option>
              <option>Programming</option>
            </Select>
          </FormControl>
          <FormControl width="70%">
            <FormLabel>Preferred Schedule</FormLabel>
            <Input type="datetime-local" size="lg" h={14}/>
          </FormControl>
          <FormControl width="70%">
            <FormLabel>Additional Notes</FormLabel>
            <Input placeholder="Any special requirements?" size="lg" h={14}/>
          </FormControl>
          <FormControl width="70%">
            <FormLabel>Additional Notes</FormLabel>
            <Input placeholder="Any special requirements?" size="lg" h={14}/>
          </FormControl>
        </VStack>
      </VStack>
      </Flex>
    </Box>
  );
};

export default FindTutor;
