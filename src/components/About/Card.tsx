import { FC } from "react";
import styles from '@/styles/About/Card.module.css';
import { useTranslations } from "next-intl";

interface CardProps {
	text: string,
	number: number,
	plus?: boolean
};

export const Card: FC<CardProps> = ({ text, number, plus }) => {
	return (
		<div className={ styles.about__card }>
			<span className={ styles.about__card_number }>{ number }{ plus && '+' }</span>
			<span className={ styles.about__card_info }>{ text }</span>
		</div>
	)
}