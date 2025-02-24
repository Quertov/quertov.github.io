'use client';

import { FC } from "react";
import styles from '@/styles//Discuss/Discuss.module.css';
import { useTranslations } from "use-intl";
import { Form } from "./Form";

export const Discuss: FC = () => {
	const t = useTranslations('discuss');

	return (
		<div className={ styles.discuss__container }>
			<div className={ styles.discuss__text_container }>
				<h1 className={ styles.discuss__title }>{ t('title') }</h1>
				<span className={ styles.discuss__description }>{ t('description') }</span>
			</div>
			<Form />
		</div>
	)
}