'use client';
import { useState, useRef } from 'react';

//chakra-ui
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Icon, Img, Input, Text } from '@chakra-ui/react';

//icons
import { MdAutoAwesome } from 'react-icons/md';

//image
import Bg from '../../../../../public/assets/images/chatAI/thunder.jpg';

//components
import Link from 'src/components/chatAI/Link';
import MessageBox from 'src/components/chatAI/MessageBox';

const ChatAI = () => {
    const prompt = useRef<HTMLInputElement>(null);
    const history = useRef<string[]>([]);
    const questions = useRef<boolean[]>([]);

    const [loading, setLoading] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string>('');

    const [loadingClear, setLoadingClear] = useState<boolean>(false);

    const handleSubmit = async () => {
        setLoadingClear(false);
        setValueInput('');
        setLoading(true);
        questions.current.push(true);
        history.current.push(prompt.current?.value!);
        const response = await fetch('http://localhost:4000/api/ai/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt.current?.value })
        });
        const res = await response.json();
        if (res) {
            setLoading(false);
            questions.current.push(false);
            history.current.push(res);
        }
    };

    const handleClear = () => {
        setLoadingClear(true);
        setValueInput('');
        questions.current = [];
        history.current = [];
    };

    return (
        <Flex w='100%' h='100%' direction='column' position='relative'>
            <Img src={Bg.src} position={'absolute'} w='350px' left='50%' top='50%' transform={'translate(-50%, -50%)'} />
            <Flex direction='column' mx='auto' maxW='1000px' h='600px'>
                <Flex direction={'column'} w='100%' mb={'20px'} justifyContent={'space-between'}>
                    <Flex mx='auto' zIndex='2' w='max-content' mb='10px' borderRadius='60px'>
                        <Flex
                            cursor={'pointer'}
                            transition='0.3s'
                            justify={'center'}
                            align='center'
                            bg={'white'}
                            w='200px'
                            h='70px'
                            boxShadow={'4px'}
                            borderRadius='14px'
                            color={'black'}
                            fontSize='18px'
                            fontWeight={'700'}
                        >
                            <Flex
                                borderRadius='full'
                                justify='center'
                                align='center'
                                bg={'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'}
                                me='20px'
                                h='40px'
                                minH='40px'
                                minW='40px'
                                rounded='50%'
                            >
                                <Icon as={MdAutoAwesome} width='20px' height='20px' color='white' />
                            </Flex>
                            Quizzes-Chat
                        </Flex>
                    </Flex>

                    <Accordion zIndex={1} color={'gray'} allowToggle w='100%' my='0px' mx='auto'>
                        <AccordionItem border='none'>
                            <AccordionButton
                                borderBottom='0px solid'
                                maxW='max-content'
                                mx='auto'
                                _hover={{ border: '0px solid', bg: 'none' }}
                                _focus={{ border: '0px solid', bg: 'none' }}
                            >
                                <Box flex='1' textAlign='left'>
                                    <Text color={'gray'} fontWeight='500' fontSize='sm'>
                                        No plugins added
                                    </Text>
                                </Box>
                                <AccordionIcon color={'gray'} />
                            </AccordionButton>
                            <AccordionPanel mx='auto' w='max-content' p='0px 0px 10px 0px'>
                                <Text color={'gray'} fontWeight='500' fontSize='sm' textAlign={'center'}>
                                    This is a cool text example.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>

                <Flex zIndex={1} direction='column' w='900px' mx='auto' display={'flex'} mb={'auto'}>
                    <Flex w='100%' maxW='100%' flexDirection='column'>
                        {history.current.map((text, index) => (
                            <MessageBox key={index} output={text} isQuestion={questions.current[index]} />
                        ))}
                    </Flex>
                </Flex>

                <Flex w={'100%'} mt='20px' justifySelf={'flex-end'}>
                    <Input
                        value={valueInput}
                        ref={prompt!}
                        zIndex='1'
                        w='100%'
                        minH='54px'
                        h='100%'
                        border='1px solid'
                        borderColor={'black'}
                        borderRadius='45px'
                        p='15px 20px'
                        me='10px'
                        fontSize='sm'
                        fontWeight='500'
                        _focus={{ borderColor: 'none' }}
                        color={'black'}
                        placeholder='Type your question here...'
                        onChange={(e) => setValueInput(e.target.value)}
                    />
                    <Button
                        mr='20px'
                        variant='primary'
                        py='20px'
                        px='16px'
                        fontSize='sm'
                        borderRadius='45px'
                        ms='auto'
                        className='w-[100px] lgl:w-[210px]'
                        h='54px'
                        _hover={{
                            boxShadow: '0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important',
                            bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%) !important',
                            _disabled: {
                                bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'
                            }
                        }}
                        bg={'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'}
                        isLoading={loading}
                        color={'white'}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Button
                        variant='primary'
                        py='20px'
                        px='16px'
                        fontSize='sm'
                        borderRadius='45px'
                        ms='auto'
                        className='w-[100px] lgl:w-[210px]'
                        h='54px'
                        _hover={{
                            boxShadow: '0px 21px 27px -10px RGBA( 127, 255, 212, 1 ) !important',
                            bg: 'linear-gradient(15.46deg, #00DFA2 26.3%, #A6FF96 86.4%) !important',
                            _disabled: {
                                bg: 'linear-gradient(15.46deg, #00DFA2 26.3%, #A6FF96 86.4%)'
                            }
                        }}
                        bg={'linear-gradient(15.46deg, #00DFA2 26.3%, #A6FF96 86.4%)'}
                        color={'white'}
                        onClick={handleClear}
                    >
                        Clear
                    </Button>
                </Flex>

                <Flex zIndex={'1'} justify='center' mt='20px' alignItems='center'>
                    <Text fontSize='xs' textAlign='center' color={'gray'}>
                        Free Research Preview. Quizzes-Chat may produce inaccurate information about people, places, or facts.
                    </Text>
                    <Link href='https://help.openai.com/en/articles/6825453-chatgpt-release-notes'>
                        <Text fontSize='xs' color={'black'} fontWeight='500' textDecoration='underline'>
                            QuizzesGPT May 12 Version
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ChatAI;
