import { FC } from "react";
import styles from '@/styles/About/About.module.css';
import { useTranslations } from "next-intl";
import { Card } from "./Card";

export const About: FC = () => {
	const t = useTranslations('about');

	return (
		<div className={ styles.about__container }>
			<div className="lg:w-1/2 xl:w-1/3">
				<h1 className={ styles.about__title }>{ t('title') }</h1>
				<p className={ styles.about__paragraph }>{ t('paragraphs.first') }</p>
				<p className={ styles.about__paragraph }>{ t('paragraphs.second') }</p>
			</div>
			<div className={ styles.about__cards_container }>
				<div className={ styles.about__cards_row }>
					<Card
						text={ t('satisfiedCustomers') }
						number={ 200 }
						plus />
					<Card
						text={ t('readyProjects') }
						number={ 150 }
						plus />
				</div>
				<div className={ styles.about__cards_row }>
					<Card
						text={ t('experience') }
						number={ 8 }
						plus />
					<Card
						text={ t('employees') }
						number={ 6 } />
				</div>
			</div>
		</div>
	)
}