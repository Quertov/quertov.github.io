import { FC, useMemo } from "react";
import styles from '@/styles/FAQ/FAQ.module.css';
import { useTranslations } from "next-intl";
import { Question } from "./Question";

export const FAQ: FC = () => {
	const t = useTranslations('faq');
	const questions = useMemo(() => t.raw('questions'), [t]);

	return (
		<div className={ styles.faq__container }>
			<div>
				<h1 className={ styles.faq__title }>{ t('title') }</h1>
				<div className={ styles.faq__questions_container }>
					{ questions.map((q: { question: string, answer: string, steps: { title: string, description: string }[] }, index: number) => (
						<Question
							key={ index }
							number={ `0${index + 1}` }
							question={q.question}
							answer={ q.answer }
							steps={ !q.steps ? [] : q.steps  } />
					)) }
				</div>
			</div>
		</div>
	)
}