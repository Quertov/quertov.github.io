'use client';

import { FC, useState, useEffect } from "react";
import styles from '@/styles/Menu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";

export const Menu: FC = () => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const t = useTranslations('menu');
	const [changeLanguage, currentLanguage ] = useChangeLanguage();
	
	useEffect(() => {
		if (menuOpened) {
			setScrollPosition(window.scrollY);
			window.scrollTo({ top: 0 });
			document.body.classList.add('overflow-hidden');
		} else {
			window.scrollTo({ top: scrollPosition });
			document.body.classList.remove('overflow-hidden');
		}
		return () => {
			if (menuOpened) {
				document.body.classList.remove('overflow-hidden');
			}
		}
	}, [menuOpened]);

	return (
		<>
			<div className={ styles.menu_icon__container } onClick={() => setMenuOpened((prev) => !prev)}>
				<FontAwesomeIcon icon={ ( menuOpened ? faXmark : faBars ) } fontSize={24} />
			</div>
			{ menuOpened &&
					<nav className={ styles.menu__container }>
						<ul className={ styles.menu__list_container }>
							<li className={ styles.menu__list_item }>{ t('development') }</li>
							<li className={ styles.menu__list_item }>{ t('services') }</li>
							<li className={ styles.menu__list_item }>{ t('about') }</li>
							<li className={ styles.menu__list_item }>{ t('contacts') }</li>
						</ul>
						<ul className={ styles.menu__language_list }>
							<li
								className={ currentLanguage === 'ua' ? `${ styles.menu__language_item } text-primary` : styles.menu__language_item }
								onClick={ () => changeLanguage('ua') }>UA</li>
							<li
								className={ currentLanguage === 'en' ? `${ styles.menu__language_item } text-primary` : styles.menu__language_item }
								onClick={ () => changeLanguage('en') }>EN</li>
							<li
								className={ currentLanguage === 'ru' ? `${ styles.menu__language_item } text-primary` : styles.menu__language_item }
								onClick={ () => changeLanguage('ru') }>RU</li>
						</ul>
						<div className={ styles.menu__contacts_container }>
							<button className={ styles.menu__contacts_btn } style={{ borderColor: 'var(--primary)' }}>{ t('contactUs') }</button>
							<div className={ styles.menu__contacts_socials }>
								<div className={ styles.menu__contacts_social }><FontAwesomeIcon icon={ faTelegram } color="black" fontSize={22} /></div>
								<div className={ styles.menu__contacts_social }><FontAwesomeIcon icon={ faInstagram } color="black" fontSize={22} /></div>
							</div>
						</div>
					</nav> }
		</>
	)
};