'use client';

import { FC, useCallback } from "react";
import styles from '@/styles/ScrollToTop.module.css';
import { useAppSelector } from "@/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollToTop: FC = () => {
	const isScrolled = useAppSelector((state) => state.ui.isScrolled);

	const handleScrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<div className={ isScrolled ? `${ styles.scroll__container } opacity-100` : `opacity-0` } onClick={ handleScrollToTop }>
			<FontAwesomeIcon icon={ faChevronUp } />
		</div>
	)
}