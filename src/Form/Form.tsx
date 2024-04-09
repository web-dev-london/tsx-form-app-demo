import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Container, FormControl, FormHelperText, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Select } from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleShow1 = () => setShow1(!show1)
    const handleShow2 = () => setShow2(!show2)

    return (
        <>
            <Container maxW='md' py={10}>
                <form >
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder='Last name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Your email' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <InputGroup >
                            <InputLeftElement>
                                <PhoneIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type="tel" placeholder='Phone number' />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={show1 ? 'tex' : "password"}
                                placeholder='Password'

                            />
                            <InputRightElement width='4.5rem'>{ }
                                <Button h='1.75rem' size='sm' onClick={handleShow1}>
                                    {show1 ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={show2 ? 'tex' : "password"}
                                placeholder='Password'

                            />
                            <InputRightElement width='4.5rem'>{ }
                                <Button h='1.75rem' size='sm' onClick={handleShow2}>
                                    {show2 ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Age</FormLabel>
                        <NumberInput max={120} min={18}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select placeholder='Select country'>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Netherlands</option>
                        </Select>
                    </FormControl>
                    <FormControl as='fieldset'>
                        <FormLabel as='legend'>
                            Hobbies
                        </FormLabel>
                        <RadioGroup defaultValue='Codding'>
                            <HStack spacing='24px'>
                                <Checkbox>Sport</Checkbox>
                                <Checkbox>Reading</Checkbox>
                                <Radio value='Codding'>Codding</Radio>
                                <Radio value='Swimming'>Swimming</Radio>
                            </HStack>
                        </RadioGroup>
                        <FormHelperText>Select only if you're a fan.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                    </FormControl>
                    <HStack my={5} spacing={10}>
                        <Button type="submit">Submit</Button>
                        <Button >Reset</Button>
                    </HStack>
                </form>
            </Container >
        </>
    )
}

export default Form