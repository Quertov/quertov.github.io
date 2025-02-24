import { FC } from "react";
import styles from '@/styles/Developments/WebDevelopment.module.css';
import templateStyles from '@/styles/Developments/DevelopmentTemplate.module.css';
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const WebDevelopment: FC = () => {
	const t = useTranslations('developments.web');

	return (
		<div className={ styles.development__container }>
			<div className={ styles.development__img_container }>
				<div className={ styles.development__img }></div>
			</div>
			<div className={ styles.development__info_container }>
				<div className={ templateStyles.development__title_container }>
					<h1 className={ templateStyles.development__title }>{ t('title') }</h1>
					<div className={ styles.rocket_icon }></div>
				</div>
				<p className={ templateStyles.development__paragraph }>{ t('info') }</p>
				<ul className={ templateStyles.development__details_container }>
					<li className={ `${ templateStyles.development__details_row } items-center` }>
						<div className={ templateStyles.development__details_icon }>
							<FontAwesomeIcon icon={ faKey } style={{ rotate: '-90deg', transform: 'scaleX(-1)' }} color="white" fontWeight={300} width={17} height={18} />
						</div>
						<p className={ templateStyles.development__details_info }>{ t('keyWebsite') }</p>
					</li>
					<li className={ `${ templateStyles.development__details_row } items-center` }>
						<div className={ templateStyles.development__details_icon }>
							<FontAwesomeIcon icon={ faCartShopping } color="white" fontWeight={300} width={17} height={18} />
						</div>
						<p className={ templateStyles.development__details_info }>{ t('keyInternetStore') }</p>
					</li>
					<li className={ `${ templateStyles.development__details_row } mb-[10px]` }>
						<div className={ templateStyles.development__details_icon }>
							<div className={ styles.apps_icon }></div>
						</div>
						<p className={ templateStyles.development__details_info }>{ t('webApp') }</p>
					</li>
				</ul>
				<p className={ templateStyles.development__paragraph }>{ t('postInfo') }</p>
			</div>
			</div>
	)
};