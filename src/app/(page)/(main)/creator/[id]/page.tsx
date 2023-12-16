'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Modal from 'react-modal';

// Components
import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';
import QuizSettingModal from 'src/components/Creator/QuizSettingModal';

// Types
import { QuizType } from 'src/app/types/creator';

// Hooks
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';

// Redux
import DeleteQuestionDialog from 'src/components/Creator/dialog/DeleteQuestionDialog';
import { setQuizFromParams } from 'src/app/redux/slices/quizCreatorSlice';
import { setCategories, setGrades } from 'src/app/redux/slices/quizSlice';

// Services
import { useGetAllCategoriesQuery } from 'src/app/redux/services/categoryApi';
import { useGetAllGradesQuery } from 'src/app/redux/services/gradeApi';
import { useGetDraftQuizQuery, useGetQuizByIdQuery } from 'src/app/redux/services/quizApi';

export default function QuizCreator() {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const { quiz, openDeleteQuestionDialog } = useAppSelector((state) => state.quizCreator);

    const { data: draftQuizData, isSuccess: isGetDraftQuizSuccess, isLoading: isGetDraftQuizLoading } = useGetDraftQuizQuery({ quizId: id as string });
    const { data: quizIdData, isSuccess: isGetQuizByIdSuccess, isLoading: isGetQuizByIdLoading } = useGetQuizByIdQuery({ quizId: id as string });

    const { data: categoriesData, isSuccess: isGetCategoriesSuccess } = useGetAllCategoriesQuery();
    const { data: gradesData, isSuccess: isGetGradesSuccess } = useGetAllGradesQuery();

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        document.title = 'Quizzes Creator';
    }, []);
    Modal.setAppElement('body');

    useEffect(() => {
        if (!isGetDraftQuizLoading && !isGetQuizByIdLoading) {
            if (isGetDraftQuizSuccess && !isGetQuizByIdSuccess && draftQuizData) {
                dispatch(
                    setQuizFromParams({
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
                dispatch(setQuizFromParams(quizIdData as QuizType));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGetDraftQuizSuccess, isGetQuizByIdSuccess, isGetDraftQuizLoading, isGetQuizByIdLoading, draftQuizData, quizIdData]);

    useEffect(() => {
        console.log('id', id);
        console.log(quiz);
    }, [quiz, id]);

    useEffect(() => {
        if (isGetCategoriesSuccess) {
            dispatch(setCategories(categoriesData));
        }
        if (isGetGradesSuccess) {
            dispatch(setGrades(gradesData));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGetCategoriesSuccess, isGetGradesSuccess, categoriesData, gradesData]);

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
