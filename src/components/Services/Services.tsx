'use client';

import { FC, useMemo, useState, useCallback, useRef, useEffect } from "react";
import styles from '@/styles/Services/Services.module.css';
import { useTranslations } from "next-intl";
import { ServiceOption } from "./ServiceOption";
import serviceOptions from '@/data/serviceOptions.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/store/store";

export const Services: FC = () => {
	const [currentOption, setCurrentOption] = useState<number>(0);
	const [translateX, setTranslateX] = useState<number>(0);
	const isDesktop = useAppSelector((state) => state.ui.isDesktop);
	const servicesContainerRef = useRef<HTMLDivElement>(null);
	const step = useMemo(() => 378, []);

	const t = useTranslations('services');
	const translatedOptions = useMemo(() => {
		return serviceOptions.map((option) => ({
			...option,
			title: t(option.title),
			description: t(option.description),
			detailsList: option.detailsList.map((detail) => ({
				...detail,
				text: t(detail.text)
			}))
		}));
	}, [t]);

	const handleLeftClick = useCallback(() => {
		if (currentOption > 0) {
			setCurrentOption((prev) => prev - 1);
			setTranslateX((prev) => prev + step);
		}
	}, [currentOption, step]);

	const handleRightClick = useCallback(() => {
		if (isDesktop) {
			const maxIndex = serviceOptions.length - (isDesktop ? 2 : 1);
			if (currentOption < maxIndex) {
        setCurrentOption((prev) => prev + 1);
        setTranslateX((prev) => prev - step);
    	}
		} else {
				if (currentOption < serviceOptions.length - 1) {
					setCurrentOption((prev) => prev + 1);
					setTranslateX((prev) => prev - step);
				}
		}
	}, [currentOption, isDesktop, step]);

	useEffect(() => {
		if (isDesktop && servicesContainerRef.current) {
			const children = servicesContainerRef.current.children;
        Array.from(children).forEach((child, index) => {
					const element = child as HTMLElement;
					const position = index - currentOption;
					
					if (position >= 0 && position <= 2) {
						element.style.opacity = '1';
						element.style.pointerEvents = 'auto';
					} else {
						element.style.opacity = '0.5';
						element.style.pointerEvents = 'none';
					}
        });

			servicesContainerRef.current.style.transform = `translateX(${translateX}px)`;
			servicesContainerRef.current.style.transition = "transform 0.3s ease-in-out";
		}
	}, [translateX, isDesktop, currentOption]);

	return (
		<div className={ styles.services__container }>
			<h1 className={ styles.services__title }>{ t('title') }</h1>
			{ !isDesktop
				? <div className={ styles.services__carousel }>
				<div className={ styles.services__carousel_wrapper }>
					{ translatedOptions.map((option, index) => {
						const position = index - currentOption;
	
						return (
							<div
								key={ index }
								className={ styles.services__carousel_option }
								style={{
									transform: `translateX(${position * 95}%) scale(${position === 0 ? 1 : 0.8})`,
									opacity: position === 0 ? 1 : 0.6
								}}>
								<ServiceOption { ...option } />
							</div>
						)
					}) }
				</div>
			</div>
			: <div className={ styles.services__options_container } ref={ servicesContainerRef }>
				{ translatedOptions.map((option, index) => (
					<div key={ index } className={ styles.services__carousel_option }>
						<ServiceOption { ...option } />
					</div>
				)) }
			</div> }
			<div className={ styles.services__buttons_container }>
				<button
					className={ currentOption !== 0 ? styles.services__button : `${styles.services__button} ${styles.inactive}` }
					onClick={ handleLeftClick }>
					<FontAwesomeIcon icon={ faChevronLeft } />
				</button>
				<button
					className={ currentOption !== ( isDesktop ? serviceOptions.length - 2 : serviceOptions.length - 1 ) ? styles.services__button : `${styles.services__button} ${styles.inactive}` }
					onClick={ handleRightClick }>
					<FontAwesomeIcon icon={ faChevronRight } />
				</button>
			</div>
		</div>
	);
}