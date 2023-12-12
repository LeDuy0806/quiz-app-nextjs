'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Modal from 'react-modal';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';
import QuizSettingModal from 'src/components/Creator/QuizSettingModal';

import { useAppSelector } from 'src/app/redux/hooks';
import DeleteQuestionDialog from 'src/components/Creator/dialog/DeleteQuestionDialog';
export default function QuizCreator() {
    const { id } = useParams();

    const { quiz, openDeleteQuestionDialog } = useAppSelector((state) => state.quizCreator);

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        document.title = 'Quizzes Creator';
    }, []);
    Modal.setAppElement('body');

    useEffect(() => {
        console.log('id', id);
        console.log(quiz);
    }, [quiz, id]);

    return (
        <>
            <main>
                <CreatorNavbar setIsOpenModal={setIsOpenModal} />
                <CreatorSidebar />
                <ContentEditor />
            </main>

            <DeleteQuestionDialog open={openDeleteQuestionDialog} />

            <QuizSettingModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </>
    );
}
