import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Container, FormControl, FormHelperText, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Select } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";




const Form = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [sport, setSport] = useState(false);
    const [reading, setReading] = useState(false);
    const [codding, setCodding] = useState('codding')
    const [swimming, setSwimming] = useState('swimming');
    const [date, setDate] = useState('');

    const handleShow1 = () => setShow1(!show1)
    const handleShow2 = () => setShow2(!show2)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setAge('');
        setCountry('');
        setSport(false);
        setReading(false);
        setCodding('');
        setSwimming('');
        setDate('');
    }


    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const handleAge = (valueString: string) => {
        setAge(valueString)
    }

    const handleCountry = (e: ChangeEvent<HTMLSelectElement>) => {
        setCountry(e.target.value)
    }

    const handleSport = (e: ChangeEvent<HTMLInputElement>) => {
        setSport(e.target.checked)
    }

    const handleReading = (e: ChangeEvent<HTMLInputElement>) => {
        setReading(e.target.checked)
    }

    const handleCodding = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setCodding(e.target.value)
    }

    const handleSwimming = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setSwimming(e.target.value)
    }

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }

    const reset = () => {
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setAge('');
        setCountry('');
        setSport(false);
        setReading(false);
        setCodding('');
        setSwimming('');
        setDate('');
    }

    return (
        <>
            <Container maxW='md' py={10}>
                <form id="formField" onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>First name </FormLabel>
                        <Input
                            onChange={handleChangeName}
                            value={name}
                            type="text"
                            placeholder='First name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            onChange={handleLastName}
                            value={lastName}
                            type="text"
                            placeholder='Last name'
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            onChange={handleEmail}
                            value={email}
                            type="email"
                            placeholder='Your email'
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <InputGroup >
                            <InputLeftElement>
                                <PhoneIcon color='gray.300' />
                            </InputLeftElement>
                            <Input
                                onChange={handlePhone}
                                value={phone}
                                type="tel"
                                placeholder='Phone number'
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input
                                onChange={handlePassword}
                                value={password}
                                type={show1 ? 'tex' : "password"}
                                placeholder='Password'
                            />
                            <InputRightElement width='4.5rem'>{ }
                                <Button
                                    h='1.75rem' size='sm'
                                    onClick={handleShow1}
                                >
                                    {show1 ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup>
                            <Input
                                onChange={handleConfirmPassword}
                                value={confirmPassword}
                                type={show2 ? 'tex' : "password"}
                                placeholder='Password'
                            />
                            <InputRightElement width='4.5rem'>{ }
                                <Button
                                    h='1.75rem' size='sm'
                                    onClick={handleShow2}
                                >
                                    {show2 ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Age</FormLabel>
                        <NumberInput
                            onChange={handleAge}
                            value={age}
                            min={18}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select
                            onChange={handleCountry}
                            value={country}
                            placeholder='Select country'
                        >
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Netherlands</option>
                        </Select>
                    </FormControl>
                    <FormControl >
                        <FormLabel >
                            Hobbies
                        </FormLabel>
                        <HStack>
                            <HStack spacing='24px'>
                                <Checkbox
                                    onChange={handleSport}
                                    isChecked={sport}
                                    id="sport"
                                >
                                    Sport
                                </Checkbox>
                                <Checkbox
                                    onChange={handleReading}
                                    isChecked={reading}
                                    id="reading"
                                >
                                    Reading
                                </Checkbox>
                            </HStack>
                            <RadioGroup >
                                <HStack>
                                    <Radio
                                        onChange={handleCodding}
                                        value={codding}
                                        colorScheme="green"
                                    >
                                        Codding
                                    </Radio>
                                    <Radio
                                        onChange={handleSwimming}
                                        colorScheme="blue"
                                        value={swimming}
                                    >
                                        Swimming
                                    </Radio>
                                </HStack>
                            </RadioGroup>
                        </HStack>
                        <FormHelperText>Select only if you're a fan.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input
                            onChange={handleDate}
                            value={date}
                            size="md"
                            type="datetime-local"
                        />
                    </FormControl>
                    <HStack my={5} spacing={10}>
                        <Button type="submit">Submit</Button>
                    </HStack>
                    <Button onClick={reset}>Reset</Button>
                </form>
            </Container >
        </>
    )
}

export default Form

