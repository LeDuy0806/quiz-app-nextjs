'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import paths from 'src/constants/paths';

function DetailPage() {
    const { push } = useRouter();

    useEffect(() => {
        push(paths.discover);
    }, [push]);
    return <></>;
}

export default DetailPage;
