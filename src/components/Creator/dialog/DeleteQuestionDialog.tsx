import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { deleteQuestion, setDeleteQuestionIndex, setOpenDeleteQuestionDialog } from 'src/app/redux/slices/quizCreatorSlice';

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
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className='font-semibold'>Delete Question</DialogTitle>
            <DialogContent>Are you sure you want to delete this question? This action can&#39;t be undone.</DialogContent>
            <DialogActions className='flex h-16 justify-center pb-4'>
                <button
                    onClick={handleClose}
                    className='rounded bg-gray-500 px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                >
                    <span className='font-semibold text-white'>Cancle</span>
                </button>
                <button
                    onClick={handleDeleteQuestion}
                    className='rounded bg-red-500 px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                >
                    <span className='font-semibold text-white'>Delete</span>
                </button>
            </DialogActions>
        </Dialog>
    );
}
