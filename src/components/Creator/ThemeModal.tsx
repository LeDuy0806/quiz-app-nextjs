import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { setTheme } from 'src/app/redux/slices/quizCreatorSlice';

import { creatorBackground } from 'src/constants/image';
import { cn } from 'src/utils/tailwind.util';

const customStylesModal: any = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 298,
        cursor: ''
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        padding: '0',
        border: 'none',
        outline: 'none',
        zIndex: 299
    }
};

interface IProps {
    isOpenModal: boolean;
    setIsOpenModal: (isOpenModal: boolean) => void;
}

export default function ThemeModal({ isOpenModal, setIsOpenModal }: IProps) {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.quizCreator);

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    const handleChangeTheme = (background: string) => {
        dispatch(setTheme(background));
        setIsOpenModal(false);
    };

    return (
        <Modal isOpen={isOpenModal} style={customStylesModal} onRequestClose={handleCloseModal}>
            <div className='grid h-screen w-screen grid-cols-2 gap-4 rounded p-4 md:h-[90vh] md:w-[90vw] md:grid-cols-3 lg:w-[80vw] lg:grid-cols-4 xl:w-[70vw] xl:grid-cols-5'>
                {creatorBackground.map((background, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleChangeTheme(background)}
                            className={cn('w-full rounded bg-cover bg-center', {
                                'outline outline-4 outline-red-500': background === theme
                            })}
                            style={{ backgroundImage: `url(${background})` }}
                        />
                    );
                })}
            </div>
        </Modal>
    );
}
