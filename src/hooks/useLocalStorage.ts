import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string) {
    const [value, setValue] = useState('en');
    useEffect(() => {
        const stored = localStorage.getItem(key);
        // console.log(stored);
        if (stored) {
            setValue(JSON.parse(stored));
        }
    }, [key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}
