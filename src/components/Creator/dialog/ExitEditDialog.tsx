import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import DialogButton from 'src/components/common/DialogButton';
import ConfirmDialog from 'src/components/common/Dialog';

// Constants
import paths from 'src/constants/paths';

// Redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { addDraftQuiz, saveQuizFromCreator } from 'src/app/redux/slices/quizSlice';
import { useUpdateQuizMutation } from 'src/app/redux/services/quizApi';
import { saveQuiz } from 'src/app/redux/slices/quizCreatorSlice';

interface IProps {
    open: boolean;
    setIsOpenExitEditDialog: (isOpen: boolean) => void;
}

export default function ExitEditDialog({ open, setIsOpenExitEditDialog }: IProps) {
    const dispatch = useAppDispatch();
    const { quiz, isUpdate } = useAppSelector((state) => state.quizCreator);

    const [updateQuiz, { data, isSuccess, isLoading, isError, error }] = useUpdateQuizMutation();

    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            router.push(paths.library);
            data && dispatch(saveQuizFromCreator(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    // useEffect(() => {
    //     console.log(error);
    // }, [error]);

    const handleClose = () => {
        setIsOpenExitEditDialog(false);
    };

    const handleExit = () => {
        if (!isUpdate) {
            dispatch(addDraftQuiz(quiz));
            router.push(paths.library);
            return;
        } else {
            dispatch(saveQuiz());
            updateQuiz({
                quizId: quiz._id,
                updateQuiz: quiz
            })
                .unwrap()
                .then((res) => {
                    dispatch(saveQuizFromCreator(res));
                });
        }
    };

    return (
        <ConfirmDialog
            open={open}
            title='Exit'
            content='Are you sure you want to exit? This action can&#39;t be undone. Quiz may be saved as draft.'
            handleClose={handleClose}
        >
            <DialogButton title='No' handleClick={handleClose} backgroundColor='bg-gray-500' />
            <DialogButton title='Yes' handleClick={handleExit} backgroundColor='bg-red-500' />
        </ConfirmDialog>
    );
}
