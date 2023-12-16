import { useEffect } from 'react';
import { toast } from 'react-toastify';

import QuizType from 'src/app/types/quizType';

// redux
import { useAppDispatch } from 'src/app/redux/hooks';
import { useDeleteQuizMutation } from 'src/app/redux/services/quizApi';
import { deleteQuiz } from 'src/app/redux/slices/quizSlice';

// constants
import { LibraryMessages } from 'src/constants/messages';
import { ToastOptions } from 'src/constants/toast';
import DialogButton from '../common/DialogButton';
import ConfirmDialog from '../common/Dialog';

interface IProps {
    open: boolean;
    deletedQuiz: QuizType;
    setOpenDeleteQuizDialog: (isOpen: boolean) => void;
}

export default function DeleteQuizDialog({ open, deletedQuiz, setOpenDeleteQuizDialog }: IProps) {
    const dispatch = useAppDispatch();

    const [deleteQuizMutation, { isSuccess }] = useDeleteQuizMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success(LibraryMessages.SUCCESS.DELETE_QUIZ, ToastOptions);
            dispatch(deleteQuiz(deletedQuiz));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, deleteQuiz]);

    const handleClose = () => {
        setOpenDeleteQuizDialog(false);
    };

    const handleDeleteQuiz = () => {
        deleteQuizMutation({ quizId: deletedQuiz._id });
    };

    return (
        <ConfirmDialog
            open={open}
            title='Delete Quiz'
            content='Are you sure you want to delete this quiz? This action can&#39;t be undone.'
            handleClose={handleClose}
        >
            <DialogButton title='Cancle' backgroundColor='bg-gray-500' handleClick={handleClose} />
            <DialogButton title='Delete' backgroundColor='bg-red-500' handleClick={handleDeleteQuiz} />
        </ConfirmDialog>
    );
}
