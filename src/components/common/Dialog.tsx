import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface IProps {
    title: string;
    content: string;
    open: boolean;
    handleClose: () => void;
    children?: React.ReactNode;
}

export default function ConfirmDialog({ open, title, content, handleClose, children }: IProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className='font-semibold'>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions className='flex h-16 justify-center pb-4'>{children}</DialogActions>
        </Dialog>
    );
}
