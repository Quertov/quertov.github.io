'use client';

import { FC } from "react";
import styles from '@/styles/Services/ServiceOption.module.css';
import { useTranslations } from "next-intl";
import { Button } from "../utils/Button";

interface ServiceOptionProps {
	width?: number,
	height?: number,
	originalWidth?: number,
	originalHeight?: number,
	icon: string,
	title: string,
	description: string,
	detailsList: { icon: string, text: string }[],
	price: string | number
};

export const ServiceOption: FC<ServiceOptionProps> = ({ width, height, originalWidth, originalHeight, icon, title, description, detailsList, price	 }) => {
	const t = useTranslations('services');

	return (
		<article className={ styles.service__container }>
			<div className={ styles.service__icon_container }>
				<div
					className={ styles.service__icon }
					style={{
						backgroundImage: `url(${icon})`,
						width,
						height,
						aspectRatio: `${originalWidth} / ${originalHeight}`
						 }}></div>
			</div>
			<div className="flex flex-col items-center justify-between h-full">
				<div className="flex items-center flex-col">
					<h1 className={ styles.service__title }>{ title }</h1>
					<p className={ styles.sevice__description }>{ description }</p>
				</div>
				<div className="flex flex-col justify-between items-center">
					<ul className={ styles.services__details_list }>
						{ detailsList.map((detail, index) => (
							<li key={index} className={ styles.services__details_item }>
								<div
									className={ styles.details__item_icon }
									style={{ backgroundImage: `url('${detail.icon}')` }}></div>
								<p>{ detail.text }</p>
							</li>
						)) }
					</ul>
					<span className={ styles.service__price }>{ t('priceFrom') } <span className="font-bold text-[24px] ml-[5px]">{ price } $</span></span>
					<Button text={ t('order') } />
				</div>
			</div>
		</article>
	)
}