'use client';

// Chakra-ui
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex
            w='80%'
            flexDirection={{
                base: 'column',
                md: 'row'
            }}
            alignItems={{ xl: 'center' }}
            mb={'10px'}
        >
            <Box mb={{ base: '8px', md: '0px' }}>
                <Flex
                    w='100%'
                    flexDirection={{
                        base: 'column',
                        md: 'row'
                    }}
                    alignItems={{ xl: 'center' }}
                    mb={'10px'}
                >
                    <Box mb={{ base: '8px', md: '0px' }}>
                        <Breadcrumb>
                            <BreadcrumbItem color={'gray'} fontSize='sm' mb='5px'>
                                <BreadcrumbLink href='#' color={'gray'}>
                                    Pages
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem color={'black'} fontSize='sm'>
                                <BreadcrumbLink href='#' color={'black'}>
                                    Chat UI
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Link
                            color='black'
                            href='#'
                            bg='inherit'
                            borderRadius='inherit'
                            fontWeight='bold'
                            fontSize='34px'
                            p='0px'
                            _hover={{ color: 'black' }}
                            _active={{
                                bg: 'inherit',
                                transform: 'none',
                                borderColor: 'transparent'
                            }}
                            _focus={{
                                boxShadow: 'none'
                            }}
                        >
                            Question Answer
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Navbar;
