'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const ClientRefresh = () => {
    const router = useRouter();

    const handleAdd = () => {
        router.refresh();
    };

    useEffect(()=>{
        handleAdd();
    }, [])

    return null
};
