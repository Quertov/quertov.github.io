'use client';

import { FC, useEffect } from "react";
import { setIsMobile, setIsScrolled, setIsDesktop } from "@/store/slices/uiSlice";
import { useAppDispatch } from "@/store/store";

interface ClientProviderProps {
	children: React.ReactNode
};

export const ClientProvider: FC<ClientProviderProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		const handleResize = () => {
			dispatch(setIsMobile(window.innerWidth <= 640));
			dispatch(setIsDesktop(window.innerWidth >= 1024))
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [dispatch]);

	useEffect(() => {
		const handleScroll = () => ( dispatch(setIsScrolled(window.scrollY > 80)) );
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [dispatch]);
	return ( <>
		{ children }
	</>
	)
}