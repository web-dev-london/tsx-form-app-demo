import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";




const Form = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [name, setName] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const nameInvalid = nameMessage !== '';
    const [lastName, setLastName] = useState('');
    const [lastNameMessage, setLastNameMessage] = useState('');
    const lastNameInvalid = lastNameMessage !== '';
    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const emailInvalid = emailMessage !== '';
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('')
    const passwordInvalid = passwordMessage !== '';
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('');
    const confirmPasswordMessageInvalid = confirmPasswordMessage !== '';
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [sport, setSport] = useState(false);
    const [reading, setReading] = useState(false);
    const [codding, setCodding] = useState('')
    const [date, setDate] = useState('');

    const handleShow1 = () => setShow1(!show1)
    const handleShow2 = () => setShow2(!show2)

    const validateForm = () => {
        if (!name) {
            setNameMessage('Name is required.')
            return
        }
        if (!lastName) {
            setLastNameMessage('Last Name is required.')
            return
        }

        if (!email.match(/^\S+@\S+\.\S+$/)) {
            setEmailMessage('Email is required.')
            return
        }

        const isValidPassword = (password: string) => {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,30}$/;
            return regex.test(password)
        }

        if (!password) {
            setPasswordMessage('Password is required.')
        } else if (!isValidPassword(password)) {
            setPasswordMessage(`Password must be at least 8 character long and contain at leat one symbol, one number, one lowercase one uppercase`)
        }

        if (!confirmPassword) {
            setConfirmPasswordMessage('Confirm password is required.')
        } else if (confirmPassword !== password) {
            setConfirmPasswordMessage('Password does not mutch.')
        }

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        validateForm();


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
        setDate('');
    }

    return (
        <>
            <Container maxW='md' py={10}>
                <form id="formField" onSubmit={handleSubmit}>
                    <FormControl isInvalid={nameInvalid}>
                        <FormLabel>First name </FormLabel>
                        <Input
                            onChange={handleChangeName}
                            value={name}
                            type="text"
                            placeholder='First name'
                        />
                        {/* <FormHelperText>At least 10 characters</FormHelperText> */}
                        <FormErrorMessage>{nameMessage}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={lastNameInvalid}>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            onChange={handleLastName}
                            value={lastName}
                            type="text"
                            placeholder='Last name'
                        />
                        <FormErrorMessage>{lastNameMessage}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={emailInvalid}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            onChange={handleEmail}
                            value={email}
                            // type="email"
                            placeholder='Your email'
                        />
                        <FormErrorMessage>{emailMessage}</FormErrorMessage>
                    </FormControl>
                    <FormControl >
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
                        <FormHelperText>(optional)</FormHelperText>
                    </FormControl>
                    <FormControl isInvalid={passwordInvalid}>
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
                        <FormHelperText>At least 8 character</FormHelperText>
                        <FormErrorMessage>{passwordMessage}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={confirmPasswordMessageInvalid}>
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
                        <FormHelperText>At least 8 character</FormHelperText>
                        <FormErrorMessage>{confirmPasswordMessage}</FormErrorMessage>
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
                        <HStack spacing={6}>
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
                            <RadioGroup
                                onChange={setCodding}
                                value={codding}
                            >
                                <Stack
                                    spacing={7}
                                    direction='row'>
                                    <Radio
                                        colorScheme="green"
                                        value="codding"
                                    >
                                        Codding
                                    </Radio>
                                    <Radio
                                        colorScheme="blue"
                                        value="swimming"
                                    >
                                        Swimming
                                    </Radio>
                                </Stack>
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
                    <HStack my={8} spacing={20}>
                        <Button type="submit">Submit</Button>
                        <Button onClick={reset}>Reset</Button>
                    </HStack>
                </form>
            </Container >
        </>
    )
}

export default Form

