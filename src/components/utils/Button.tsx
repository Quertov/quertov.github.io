import { FC } from "react";
import styles from '@/styles/utils/Button.module.css';

interface ButtonProps {
	text: string,
	icon?: React.ReactNode,
	isForm?: boolean
};

export const Button: FC<ButtonProps> = ({ text, icon, isForm }) => {
	return (
		<>
			{ isForm
				? <input type="submit" className={ styles.button }>{ text } { icon }</input>
				: <button className={ styles.button }>{ text } { icon }</button>
			}
		</>
	)
}