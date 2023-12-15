'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Modal from 'react-modal';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';
import QuizSettingModal from 'src/components/Creator/QuizSettingModal';

import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import DeleteQuestionDialog from 'src/components/Creator/dialog/DeleteQuestionDialog';
import { useGetDraftQuizQuery, useGetQuizByIdQuery } from 'src/app/redux/services/quizApi';
import { setQuiz, setQuizFromParams } from 'src/app/redux/slices/quizCreatorSlice';
import { QuizType } from 'src/app/types/creator';

export default function QuizCreator() {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const { quiz, openDeleteQuestionDialog } = useAppSelector((state) => state.quizCreator);

    const { data: draftQuizData, isSuccess: isGetDraftQuizSuccess, isLoading: isGetDraftQuizLoading } = useGetDraftQuizQuery({ quizId: id as string });
    const { data: quizIdData, isSuccess: isGetQuizByIdSuccess, isLoading: isGetQuizByIdLoading } = useGetQuizByIdQuery({ quizId: id as string });

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        document.title = 'Quizzes Creator';
    }, []);
    Modal.setAppElement('body');

    useEffect(() => {
        if (!isGetDraftQuizLoading && !isGetQuizByIdLoading) {
            if (isGetDraftQuizSuccess && !isGetQuizByIdSuccess && draftQuizData) {
                console.log('hicwehcehw');
                dispatch(
                    setQuiz({
                        ...quiz,
                        name: draftQuizData.name,
                        description: draftQuizData.description ? draftQuizData.description : quiz.description,
                        backgroundImage: draftQuizData.backgroundImage ? draftQuizData.backgroundImage : quiz.backgroundImage,
                        isPublic: draftQuizData.isPublic,
                        tags: draftQuizData.tags.length !== 0 ? draftQuizData.tags : quiz.tags,
                        pointsPerQuestion: draftQuizData.pointsPerQuestion ? draftQuizData.pointsPerQuestion : quiz.pointsPerQuestion,
                        category: draftQuizData.category ? draftQuizData.category : quiz.category,
                        grade: draftQuizData.grade ? draftQuizData.grade : quiz.grade
                    })
                );
            }
            if (isGetQuizByIdSuccess && !isGetDraftQuizSuccess && quizIdData) {
                dispatch(setQuiz({ ...quiz, ...(quizIdData as QuizType) }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGetDraftQuizSuccess, isGetQuizByIdSuccess, isGetDraftQuizLoading, isGetQuizByIdLoading, draftQuizData, quizIdData]);

    useEffect(() => {
        console.log('id', id);
        console.log(quiz);
    }, [quiz, id]);

    if (isGetDraftQuizLoading || isGetQuizByIdLoading) return <div>Loading...</div>;

    if (!isGetDraftQuizSuccess && !isGetQuizByIdSuccess) return <div>Not found</div>;

    // if (isGetDraftQuizSuccess || isGetQuizByIdSuccess) return <div>Success</div>;

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
