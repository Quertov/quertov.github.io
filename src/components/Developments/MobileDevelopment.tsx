import { FC } from "react";
import styles from '@/styles/Developments/MobileDevelopment.module.css';
import templateStyles from '@/styles/Developments/DevelopmentTemplate.module.css';
import { useTranslations } from "next-intl";

export const MobileDevelopment: FC = () => {
	const t = useTranslations('developments.mobile');

	return (
		<div className={ styles.development__container }>
			<div className={ styles.development__images_container }>
				<div className={ styles.first_image_container }>
					<div className={ styles.first_image }></div>
				</div>
				<div className={ styles.second_image_container }>
					<div className={ styles.second_image }></div>
				</div>
			</div>
			<div>
				<div className={ styles.development__info_container	 }>
					<div className={ templateStyles.development__title_container }>
						<h1 className={ templateStyles.development__title }>{ t('title') }</h1>
						<div className={ styles.mobile_icon }></div>
					</div>
					<p className={ templateStyles.development__paragraph }>{ t('info') }</p>
				</div>
				<ul className={ `${ templateStyles.development__details_container } px-[20px]` }>
					<li className={ templateStyles.development__details_row }>
						<div className={ styles.development__details_icons }>
							<div className={ styles.development__details_icon }></div>
						</div>
						<p className={ templateStyles.development__details_info }>{ t('appDevelopment') }</p>
					</li>
				</ul>
				<p className={ `${ templateStyles.development__paragraph } px-[20px]` }>{ t('postInfo') }</p>
			</div>
		</div>
	)
};