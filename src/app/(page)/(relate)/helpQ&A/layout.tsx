'use client';

//chakra-ui
import { Box } from '@chakra-ui/react';

//components
import Sidebar from 'src/components/chatAI/sidebar/Sidebar';
import Footer from 'src/components/chatAI/FooterAI';
import Navbar from 'src/components/chatAI/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box width='100%' height='100%'>
            <Sidebar />
            <Box
                pt={{ base: '60px', md: '100px' }}
                float='right'
                minHeight='100vh'
                height='100%'
                overflow='auto'
                position='relative'
                maxHeight='100%'
                w={'80%'}
                transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
                transitionDuration='.2s, .2s, .35s'
                transitionProperty='top, bottom, width'
                transitionTimingFunction='linear, linear, ease'
            >
                <Box mt='30px'>
                    <Navbar />
                </Box>
                <Box width='full' mx='auto' p={{ base: '20px', md: '30px' }} pe='20px' minH='100vh'>
                    {children}
                </Box>
                <Box className='w-full'>
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}
