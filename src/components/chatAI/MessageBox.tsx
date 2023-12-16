//markdowns
import ReactMarkdown from 'react-markdown';

//chakra
import { useColorModeValue } from '@chakra-ui/react';

//component
import Card from 'src/components/chatAI/Card';

export default function MessageBox(props: { output: string; isQuestion: boolean }) {
    const { output, isQuestion } = props;

    const textColor = useColorModeValue('navy.700', 'white');
    return (
        <Card
            maxW='100%'
            display={output ? 'flex' : 'none'}
            // px='22px !important'
            // pl='22px !important'
            color={textColor}
            maxH='450px'
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight={{ base: '24px', md: '26px' }}
            fontWeight='500'
        >
            <ReactMarkdown className={`${isQuestion ? 'font-bold' : 'font-medium'} maxW='100%'`}>{output ? output : ''}</ReactMarkdown>
        </Card>
    );
}
