'use client';

import { FC, useState, useMemo } from "react";
import styles from '@/styles/Developments/Developments.module.css';
import { useTranslations } from "next-intl";
import { DevelopmentTemplate } from "./DevelopmentTemplate";
import { WebDevelopment } from "./WebDevelopment";
import { MobileDevelopment } from "./MobileDevelopment";
import { DesignDevelopment } from "./DesignDevelopment";

export const Developments: FC = () => {
	const t = useTranslations('developments');
	const developmentTexts = useMemo(() => ( [ t('web.title'), t('mobile.title'), t('design.title')] ), []);
	const developments = useMemo(() => ( [<WebDevelopment />, <MobileDevelopment />, <DesignDevelopment />] ), []);
	const [activeDevelopment, setActiveDevelopment] = useState<number>(0);

	return (
		<div className={ styles.developments__container }>
			<ul className={ styles.developments__list }>
				{ developmentTexts.map((text, index) => (
					<li key={ index } className={ styles.developments__item } onClick={ () => setActiveDevelopment(index) }>
						<span
							className={
								activeDevelopment === index
								? `${ styles.developments__item_text } ${ styles.developments__text_active }`
								: styles.developments__item_text }>{ text }</span>
					</li>
				)) }
			</ul>
			<DevelopmentTemplate>
				{ developments[activeDevelopment] }
			</DevelopmentTemplate>
		</div>
	)
};