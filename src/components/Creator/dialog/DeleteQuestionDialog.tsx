import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { deleteQuestion, setDeleteQuestionIndex, setOpenDeleteQuestionDialog } from 'src/app/redux/slices/quizCreatorSlice';
import DialogConfirmDelete from 'src/components/common/Dialog';
import DialogButton from 'src/components/common/DialogButton';

interface IProps {
    open: boolean;
}

export default function DeleteQuestionDialog({ open }: IProps) {
    const dispatch = useAppDispatch();

    const { deleteQuestionIndex } = useAppSelector((state) => state.quizCreator);

    const handleClose = () => {
        dispatch(setOpenDeleteQuestionDialog(false));

        // reset delete question index
        dispatch(setDeleteQuestionIndex(null));
    };

    const handleDeleteQuestion = () => {
        dispatch(setOpenDeleteQuestionDialog(false));

        // delete question
        dispatch(deleteQuestion(deleteQuestionIndex as number));

        // reset delete question index
        dispatch(setDeleteQuestionIndex(null));
    };

    return (
        <DialogConfirmDelete
            open={open}
            title='Delete Question'
            content='Are you sure you want to delete this question? This action can&#39;t be undone.'
            handleClose={handleClose}
        >
            <DialogButton title='Cancel' backgroundColor='bg-gray-500' handleClick={handleClose} />
            <DialogButton title='Delete' backgroundColor='bg-red-500' handleClick={handleDeleteQuestion} />
        </DialogConfirmDelete>
    );
}
