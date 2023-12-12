'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import paths from 'src/constants/paths';

function CreatorPage() {
    const { push } = useRouter();

    useEffect(() => {
        push(paths.library);
    }, [push]);
    return <></>;
}

export default CreatorPage;
