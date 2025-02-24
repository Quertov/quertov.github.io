import { FC } from "react";
import styles from '@/styles/Developments/DesignDevelopment.module.css';
import templateStyles from '@/styles/Developments/DevelopmentTemplate.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export const DesignDevelopment: FC = () => {
	const t = useTranslations('developments.design');

	return (
		<div className={ styles.development__container }>
			<div className={ styles.development__image_container }>
				<div className={ styles.development__image }></div>
			</div>
			<div>
				<h1 className={ templateStyles.development__title }>{ t('innerTitle') } <FontAwesomeIcon icon={ faPalette } color="black" /></h1>
				<div className="lg:w-[500px]">
					<p className={ templateStyles.development__paragraph }>{ t('info') }</p>
					<p className={ templateStyles.development__paragraph }>{ t('postInfo') }</p>
				</div>
			</div>
		</div>
	)
};