'use client';

import { FC, useMemo } from "react";
import styles from '@/styles/Worldwide.module.css';
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store/store";

export const Worldwide: FC = () => {
	const t = useTranslations('worldwide');
	const paragraphs = useMemo(() => t.raw('paragraphs'), [t]);
	const listItems = useMemo(() => t.raw('listItems'), [t]);
	const isDesktop = useAppSelector((state) => state.ui.isDesktop);

	return (
		<div className={ styles.worldwide__container }>
			<h1 className={ styles.worldwide__title }>{ t('title') }</h1>
			<div className={ styles.worldwide__image_container }>
				<div className={ styles.worldwide__image }></div>
			</div>
			<div>
				<div className={ styles.worldwide__info_container }>
						{ !isDesktop
							? <>
							<h1 className={ styles.worldwide__paragraph_title }>{ paragraphs[0].title }</h1>
							{ paragraphs[0].text.map((text: string, index: string) => (
								<p key={ index } className={ styles.worldwide__paragraph }>{ text }</p>
							)) }
							<ul className={ styles.worldwide__list }>	
								{ listItems.map((item: string, index: number) => (
									<li key={ index } className={ styles.worldwide__list_item }>
										<p>{ item }</p>
									</li>
								)) }
							</ul>
							<div>
								<h1 className={ styles.worldwide__paragraph_title }>{ paragraphs[1].title }</h1>
								<p className={ styles.worldwide__paragraph }>{ paragraphs[1].text }</p>
							</div>
							</>
							: <>
							<div className={ styles.worldwide__info_left }>
								<h1 className={ styles.worldwide__paragraph_title }>{ paragraphs[0].title }</h1>
								<p className={ styles.worldwide__paragraph }>{ paragraphs[0].text[0] }</p>
								<p className={ styles.worldwide__paragraph }>{ paragraphs[0].text[1] }</p>
								<ul className={ styles.worldwide__list }>
									<li className={ styles.worldwide__list_item }>
										<p>{ listItems[0] }</p>
									</li>
									<li className={ styles.worldwide__list_item }>
										<p>{ listItems[1] }</p>
									</li>
								</ul>
							</div>
							<div className={ styles.worldwide__info_right }>
									<ul className={ styles.worldwide__list }>
										<li className={ styles.worldwide__list_item }>
											<p>{ listItems[2] }</p>
										</li>
										<li className={ styles.worldwide__list_item }>
											<p>{ listItems[3] }</p>
										</li>
									</ul>
								<h1 className={ styles.worldwide__paragraph_title }>{ paragraphs[1].title }</h1>
								<p className={ styles.worldwide__paragraph }>{ paragraphs[1].text }</p>
							</div>
							</> }
					</div>
			</div>
		</div>
	)
}