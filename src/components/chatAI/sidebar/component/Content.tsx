//chakra-ui
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Flex,
    HStack,
    Text,
    List,
    Icon,
    ListItem,
    useColorModeValue,
    Link,
    Heading
} from '@chakra-ui/react';

//images
import Image from 'next/image';
import { logoImg } from '../../../../../public/assets/images/auth';

//icons
import { MdAutoAwesome, MdHome, MdLayers, MdFileCopy, MdLock } from 'react-icons/md';

//route
import { useRouter } from 'next/navigation';

const Content = () => {
    const router = useRouter();
    return (
        <Flex direction='column' height='100%' pt='20px' pb='26px' borderRadius='30px' maxW='285px' px='20px' gap='20px'>
            <Flex
                onClick={() => {
                    router.back();
                }}
                mt='8px'
                justifyContent='center'
                alignItems='center'
                borderRadius='30px'
                p='14px'
                gap='10px'
                _hover={{ cursor: 'pointer' }}
            >
                <Image height={60} width={60} src={logoImg} className='obj' alt='' />
                <Heading fontSize='24' fontWeight={5100}>
                    Quizzes AI
                </Heading>
            </Flex>
            <Flex w='100%' alignItems='center' justifyContent='center'>
                <Box color='#4A25E1' me='12px'>
                    <MdAutoAwesome />
                </Box>
                <Text me='auto' color={'black'} fontWeight='600' letterSpacing='0px' fontSize='sm'>
                    ChatUI
                </Text>
            </Flex>
            <Flex w='100%' alignItems='center' justifyContent='center' cursor='not-allowed'>
                <Box opacity='0.4' color={'gray.500'} me='12px'>
                    <MdHome />
                </Box>
                <Text opacity='0.4' me='auto' color={'gray.500'} fontWeight='500' letterSpacing='0px' fontSize='sm'>
                    All Template
                </Text>
                <Link isExternal href='https://horizon-ui.com/ai-template'>
                    <Badge
                        bgColor='#E5D4FF'
                        display={{ base: 'flex', lg: 'none', xl: 'flex' }}
                        fontWeight='5100'
                        colorScheme='brand'
                        borderRadius='25px'
                        color='#4A25E1'
                        textTransform={'none'}
                        letterSpacing='0px'
                        px='8px'
                        py='4px'
                    >
                        PRO
                    </Badge>
                </Link>
            </Flex>
            <Flex w='100%' alignItems='center' justifyContent='center' cursor='not-allowed'>
                <Box opacity='0.4' color={'gray.500'} me='12px'>
                    <MdLayers />
                </Box>
                <Text opacity='0.4' me='auto' color={'gray.500'} fontWeight='500' letterSpacing='0px' fontSize='sm'>
                    My Projects
                </Text>
                <Link isExternal href='https://horizon-ui.com/ai-template'>
                    <Badge
                        bgColor='#E5D4FF'
                        display={{ base: 'flex', lg: 'none', xl: 'flex' }}
                        fontWeight='5100'
                        colorScheme='brand'
                        borderRadius='25px'
                        color='#4A25E1'
                        textTransform={'none'}
                        letterSpacing='0px'
                        px='8px'
                        py='4px'
                    >
                        PRO
                    </Badge>
                </Link>
            </Flex>
            <Flex w='100%' alignItems='center' justifyContent='center' cursor='not-allowed'>
                <Box opacity='0.4' color={'gray.500'} me='12px'>
                    <MdFileCopy />
                </Box>
                <Text opacity='0.4' me='auto' color={'gray.500'} fontWeight='500' letterSpacing='0px' fontSize='sm'>
                    Other Pages
                </Text>
                <Link isExternal href='https://horizon-ui.com/ai-template'>
                    <Badge
                        bgColor='#E5D4FF'
                        display={{ base: 'flex', lg: 'none', xl: 'flex' }}
                        fontWeight='5100'
                        colorScheme='brand'
                        borderRadius='25px'
                        color='#4A25E1'
                        textTransform={'none'}
                        letterSpacing='0px'
                        px='8px'
                        py='4px'
                    >
                        PRO
                    </Badge>
                </Link>
            </Flex>
            <Flex w='100%' alignItems='center' justifyContent='center' cursor='not-allowed'>
                <Box opacity='0.4' color={'gray.500'} me='12px'>
                    <MdLock />
                </Box>
                <Text opacity='0.4' me='auto' color={'gray.500'} fontWeight='500' letterSpacing='0px' fontSize='sm'>
                    Admin Pages
                </Text>
                <Link isExternal href='https://horizon-ui.com/ai-template'>
                    <Badge
                        bgColor='#E5D4FF'
                        display={{ base: 'flex', lg: 'none', xl: 'flex' }}
                        fontWeight='5100'
                        colorScheme='brand'
                        borderRadius='25px'
                        color='#4A25E1'
                        textTransform={'none'}
                        letterSpacing='0px'
                        px='8px'
                        py='4px'
                    >
                        PRO
                    </Badge>
                </Link>
            </Flex>
        </Flex>
    );
};

export default Content;
