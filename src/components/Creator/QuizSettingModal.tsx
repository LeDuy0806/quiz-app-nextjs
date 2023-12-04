import { FaPlus } from 'react-icons/fa';
import Modal from 'react-modal';

const customStylesModal: any = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9998,
        cursor: ''
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '0',
        padding: '0',
        border: 'none',
        outline: 'none',
        zIndex: 9999
    }
};

function QuizSettingModal({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean; setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    return (
        <Modal isOpen={isOpenModal} style={customStylesModal} onRequestClose={handleCloseModal}>
            <div className='bg-white max-sml:h-screen max-sml:w-screen'>
                <h1 className=''>Quiz Summary</h1>

                {/* Content */}
                <div className='flex'>
                    <div className=''>
                        <div>
                            <h2 className=''>Title</h2>
                            <input className='outline' />
                        </div>
                    </div>
                    <div className=''></div>
                </div>

                {/* Buttons */}
                <div className='inline-flex'>
                    <div className='flex flex-shrink-0 flex-grow basis-auto items-center justify-start px-3 lg:min-w-full lg:flex-col lg:px-6'>
                        <div className='mb-2 mt-4'>
                            <button
                                onClick={handleCloseModal}
                                className='rounded bg-[#f2f2f2] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                            >
                                <span className='font-semibold text-black max-lg:hidden'>Cancel</span>
                                {/* <FaPlus className='hidden text-white max-lg:inline' /> */}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-shrink-0 flex-grow basis-auto items-center justify-start px-3 lg:min-w-full lg:flex-col lg:px-6'>
                        <div className='mb-2 mt-4'>
                            <button className='rounded bg-[#26890c] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'>
                                <span className='font-semibold text-white max-lg:hidden'>Save</span>
                                {/* <FaPlus className='hidden text-white max-lg:inline' /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default QuizSettingModal;
