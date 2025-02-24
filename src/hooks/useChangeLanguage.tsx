'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export const useChangeLanguage = () => {
	const router = useRouter();
	const pathname = usePathname();
	const currentLanguage = pathname.split('/')[1];
	return [ useCallback((locale: string) => {
		router.push(`/${locale}`);
	}, [router]), currentLanguage ] as const;
};