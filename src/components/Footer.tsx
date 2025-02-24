import { FC, useMemo } from "react";
import styles from '@/styles/Footer.module.css';
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const Footer: FC = () => {
	const t = useTranslations('footer');
	const services = useMemo(() => ( t.raw('services.items') ), [t]);
	const promotion = useMemo(() => t.raw('promotion.items'), [t]);

	return (
		<footer className={ styles.footer__container }>
			<div className={ styles.footer__info_container }>
				<h1 className={ styles.footer__info_title }>{ t('services.title') }</h1>
				<ul className={ styles.footer__info_list }>
					{ services.map((service: string, index: number) => (
						<li key={ index } className={ styles.footer__info_item }>
							<p>{ service }</p>
						</li>
					)) }
				</ul>
			</div>
			<div className={ styles.footer__info_container }>
				<h1 className={ styles.footer__info_title }>{ t('promotion.title') }</h1>
				<ul className={ styles.footer__info_list }>
					{ promotion.map((promotionText: string, index: number) => (
						<li key={ index } className={ styles.footer__info_item }>
							<p>{ promotionText }</p>
						</li>
					)) }
				</ul>
			</div>
			<div className={ styles.footer__info_container }>
				<h1 className={ styles.footer__info_title }>{ t('contact.title') }</h1>
				<span className={ styles.footer__info_item }>email</span>
				<span className={ styles.footer__info_item }>+380 (050) 265 47 98</span>
				<span className={ styles.footer__info_item }>+380 (050) 265 47 98</span>
			</div>
			<div className="lg:flex lg:flex-col">
				<div className={ styles.footer__socials }>
					<Link href="#" className={ styles.footer__social_link }>
						<FontAwesomeIcon icon={ faTelegram } color="white" />
					</Link>
					<Link href="#" className={ styles.footer__social_link }>
						<FontAwesomeIcon icon={ faInstagram } color="white"  />
					</Link>
					<Link href="#" className={ styles.footer__social_link }>
						<FontAwesomeIcon icon={ faFacebook } color="white"  />
					</Link>
				</div>
				<div className="text-[16px] font-light">
					<span>Copyright 2024. All Rights Reserved</span>
				</div>
			</div>
		</footer>
	)
}