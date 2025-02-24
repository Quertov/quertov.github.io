'use client';

import { FC } from "react";
import styles from '@/styles/Header.module.css';
import menuStyles from '@/styles/Menu.module.css';
import { Menu } from "./Menu";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";

export const Header: FC = () => {
	const isScrolled = useAppSelector((state) => state.ui.isScrolled);
	const isDesktop = useAppSelector((state) => state.ui.isDesktop);
	const t = useTranslations('menu');
	const [changeLanguage, currentLanguage ] = useChangeLanguage();

	return (
		<div className={ isScrolled ? `${ styles.header } ${ styles.header_scrolled }` : styles.header }>
			<div className={ styles.header__logos_container }>
				<Link href='/' className={ styles.header__logo_link }>
					<Image src={ isScrolled ? '/inverted_logo.png' : '/logo.png' } unoptimized width={86} height={60} alt="Q WEB Logo" />
				</Link>
				<Link href='/' className={ styles.header__title_link }>
					<h1 className={ styles.header__title }>Q WEB</h1>
				</Link>
			</div>
			{
				!isDesktop
					? <Menu />
					: <>
					<nav className={ styles.header__nav_container }>
						<ul className={ styles.nav__list_container }>
							<li className={ clsx(menuStyles.menu__list_item, isScrolled ? 'hover:text-black' : 'hover:text-primary') }>{ t('development') }</li>
							<li className={ clsx(menuStyles.menu__list_item, isScrolled ? 'hover:text-black' : 'hover:text-primary') }>{ t('services') }</li>
							<li className={ clsx(menuStyles.menu__list_item, isScrolled ? 'hover:text-black' : 'hover:text-primary') }>{ t('about') }</li>
							<li className={ clsx(menuStyles.menu__list_item, isScrolled ? 'hover:text-black' : 'hover:text-primary') }>{ t('contacts') }</li>
						</ul>
					</nav>
					<div className="flex justify-center items-center gap-[50px]">
						<ul className={ menuStyles.menu__language_list } style={{ fontSize: '16px', margin: 0, cursor: 'pointer' }}>
							<li
								className={ currentLanguage === 'ua' ? `${ styles.menu__language_item } ${ clsx(isScrolled ? 'text-gray-400' : 'text-primary') }` : styles.menu__language_item }
								onClick={ () => changeLanguage('ua') }>UA</li>
							<li
								className={ currentLanguage === 'en' ? `${ styles.menu__language_item } ${ clsx(isScrolled ? 'text-gray-400' : 'text-primary') }` : styles.menu__language_item }
								onClick={ () => changeLanguage('en') }>EN</li>
							<li
								className={ currentLanguage === 'ru' ? `${ styles.menu__language_item } ${ clsx(isScrolled ? 'text-gray-400' : 'text-primary') }` : styles.menu__language_item }
								onClick={ () => changeLanguage('ru') }>RU</li>
						</ul>
							<button
								className={
									clsx(menuStyles.menu__contacts_btn,
									isScrolled ? 'border-white' : 'border-primary') }>{ t('contactUs') }</button>
					</div>
					</>
			}
		</div>
	)
};