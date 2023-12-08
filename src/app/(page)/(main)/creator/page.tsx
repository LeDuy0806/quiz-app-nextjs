'use client';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';
import QuizSettingModal from 'src/components/Creator/QuizSettingModal';

import { useAppSelector } from 'src/app/redux/hooks';

function CreatorPage() {
    const { quiz } = useAppSelector((state) => state.quizCreator);

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        document.title = 'Quizzes Creator';
    }, []);
    Modal.setAppElement('body');

    useEffect(() => {
        console.log(quiz);
    }, [quiz]);

    return (
        <>
            <main>
                <CreatorNavbar setIsOpenModal={setIsOpenModal} />
                <CreatorSidebar />
                <ContentEditor />
            </main>

            <QuizSettingModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </>
    );
}

export default CreatorPage;
