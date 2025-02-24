import { FC } from "react";
import styles from '@/styles/Category.module.css';

interface CategoryProps {
	children: React.ReactNode
};

export const Category: FC<CategoryProps> = ({ children }) => {
	return (
		<section className={ styles.category__container }>
			{ children }
		</section>
	)
}