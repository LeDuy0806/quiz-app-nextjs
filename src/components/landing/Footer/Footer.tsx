//components
import Bottom from './Bottom';
import Header from './Header';
import Middle from './MIddle';

//animation
import { motion } from 'framer-motion';

interface ManageProps {
    language: string;
}
const Footer = (props: ManageProps) => {
    const { language } = props;

    return (
        <motion.section
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.2 }}
            id='information'
            className='w-screen rounded-t-[32px] bg-bgBlack'
        >
            <Header language={language} />
            <Middle language={language} />
            <Bottom language={language} />
        </motion.section>
    );
};

export default Footer;
