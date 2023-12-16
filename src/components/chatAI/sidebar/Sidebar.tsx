'use client';
import React from 'react';

//chakra-ui
import { Box, Flex, Drawer, DrawerBody, Icon, useColorModeValue, DrawerOverlay, useDisclosure, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';

//components
import Content from './component/Content';
import { renderThumb, renderTrack, renderView } from '../Scrollbar';
import { Scrollbars } from 'react-custom-scrollbars-2';

//icons
import { IoMenuOutline } from 'react-icons/io5';

//window
import { isWindowAvailable } from 'src/utils/navigation.until';

const Sidebar = () => {
    let shadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');

    return (
        <Box mt='10px' display={{ base: 'none', xl: 'block' }} position='fixed' minH='100%'>
            <Box
                bg='14px'
                transition='0.2s linear'
                w='300px'
                ms={{
                    sm: '16px'
                }}
                my={{
                    sm: '16px'
                }}
                h='calc(100vh - 32px)'
                m='0px'
                borderRadius='14px'
                minH='100%'
                overflowX='hidden'
                boxShadow={shadow}
            >
                <Scrollbars autoHide renderTrackVertical={renderTrack} renderThumbVertical={renderThumb} renderView={renderView}>
                    <Content />
                </Scrollbars>
            </Box>
        </Box>
    );
};

// FUNCTIONS
export function SidebarResponsive(props: { routes: any[] }) {
    let sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
    let menuColor = useColorModeValue('gray.400', 'white');
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex display={{ sm: 'flex', xl: 'none' }} alignItems='center'>
            <Flex w='max-content' h='max-content' onClick={onOpen}>
                <Icon as={IoMenuOutline} color={menuColor} my='auto' w='20px' h='20px' me='10px' _hover={{ cursor: 'pointer' }} />
            </Flex>
            <Drawer isOpen={isOpen} onClose={onClose} placement={isWindowAvailable() && document.documentElement.dir === 'rtl' ? 'right' : 'left'}>
                <DrawerOverlay />
                <DrawerContent
                    w='285px'
                    maxW='285px'
                    ms={{
                        sm: '16px'
                    }}
                    my={{
                        sm: '16px'
                    }}
                    borderRadius='16px'
                    bg={sidebarBackgroundColor}
                >
                    <DrawerCloseButton zIndex='3' onClick={onClose} _focus={{ boxShadow: 'none' }} _hover={{ boxShadow: 'none' }} />
                    <DrawerBody maxW='285px' px='0rem' pb='0'>
                        <Scrollbars autoHide renderTrackVertical={renderTrack} renderThumbVertical={renderThumb} renderView={renderView}>
                            {/* <Content routes={routes} /> */}
                        </Scrollbars>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}
// PROPS

export default Sidebar;
