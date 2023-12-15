import { useMemo } from 'react';
import { useAppSelector } from 'src/app/redux/hooks';

export const useAuth = () => {
    const user = useAppSelector((state) => state.auth.authData.user);
    return useMemo(() => ({ user }), [user]);
};
