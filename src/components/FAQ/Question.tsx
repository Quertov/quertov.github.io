'use client';

import { FC, useState } from "react";
import styles from '@/styles/FAQ/Question.module.css';
import clsx from "clsx";

interface QuestionProps {
	number: string,
	question: string,
	answer: string,
	steps?: { title: string, description: string }[]
};

export const Question: FC<QuestionProps> = ({ number, question, answer, steps }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	return (
		<div className={ styles.faq__question_container } onClick={ () => setIsOpened((prev) => !prev) }>
			<div className={ styles.faq__question }>
				<span className={ styles.faq__question_number }>{ number }</span>
				<div className={ clsx(styles.faq__question_right, !isOpened ? styles.faq__question_right_before : '') }>
					<span className={ styles.faq__question_text }>{ question }</span>
					<div className={ styles.faq__question_icon }>
						<span>{ isOpened ? '-' : '+' }</span>
					</div>
				</div>
			</div>
			{ isOpened
				? <div className="w-full">
					{ steps?.length !== 0 
						?	<ul>
							{ steps && steps.map((step: { title: string, description: string }, index: number) => (
								<li key={ index } className={ styles.faq__question_answer_list }>
									<p className={ styles.faq__question_list_answer }>
										<span className="font-medium">{ step.title }</span>
										{ step.description }
									</p>
								</li>
							)) }
						</ul>
						: <p className={ styles.faq__question_answer }>{ answer }</p> }
				</div>
				: '' }
		</div>
	)
}