'use client';

import { FC } from "react";
import styles from '@/styles/Hero.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store/store";
import { Button } from "./utils/Button";
import Image from "next/image";
import { faTelegram, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Hero: FC = () => {
	const isMobile = useAppSelector((state) => state.ui.isMobile);
	const isDesktop = useAppSelector((state) => state.ui.isDesktop);
	const t = useTranslations('hero');

	return (
		<div className={ styles.hero__container }>
			{ isDesktop
				? <div className={ styles.hero__socials_container }>
					<div className={ styles.hero__social }>
						<FontAwesomeIcon icon={ faTelegram } color="black" fontSize={28} />
					</div>
				<div className={ styles.hero__social }>
					<FontAwesomeIcon icon={ faInstagram } color="black" fontSize={28}/>
				</div>
			</div>
			: '' }
			<div className="lg:flex lg:justify-center lg:w-full lg:gap-[50px]">
				<div className={ styles.hero__left_container }>
					<div className={ styles.hero_info_container }>
						<h1 className={ styles.hero__info_slogan }>
							<span className={ styles.hero__info_realize }>{ t('realize') } </span>
							{ t('slogan') } { isMobile ? <br /> : '' } { t('withUs') }
						</h1>
						<p className={ styles.hero__info_about }>{ t('info') }</p>
					</div>
					<div className={ styles.hero__buttons }>
						<Button
							text={ t('orderWebsite') }
							icon={ <FontAwesomeIcon
								icon={ faArrowDown }
								className="ml-[10px]"
								style={{transform: 'rotate(-135deg)'}} /> } />
					</div>
				</div>
				{ isDesktop
					? <div className={ styles.hero__right_container }>
					<Image src="/hero-image.png" alt="Q Web image" width={500} height={580} />
				</div>
				: '' }
			</div>
		</div>
	)
}