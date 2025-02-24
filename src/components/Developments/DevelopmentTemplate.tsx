import { FC } from "react";
import styles from '@/styles/Developments/DevelopmentTemplate.module.css';

interface DevelopmentTemplateProps {
	children: React.ReactNode
};

export const DevelopmentTemplate: FC<DevelopmentTemplateProps> = ({ children }) => {
	return (
		<article className={ styles.development__container }>
			{ children }
		</article>
	)
}