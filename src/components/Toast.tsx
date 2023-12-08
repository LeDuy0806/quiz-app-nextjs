import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

export default function Toast() {
    const [isAlert, setIsAlert] = useState(false);

    const handleCloseAlert = () => {
        setIsAlert(false);
    };

    return (
        <Snackbar
            open={isAlert}
            autoHideDuration={1000}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            onClose={handleCloseAlert}
        >
            <Alert severity='error' onClose={handleCloseAlert}>
                Toast
            </Alert>
        </Snackbar>
    );
}
