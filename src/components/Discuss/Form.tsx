'use client';

import { FC, useRef } from "react";
import styles from '@/styles/Discuss/Form.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/Button";

interface Inputs {
	name: string,
	email: string,
	phone: string,
	description: string
};

export const Form: FC = () => {
	const t = useTranslations('discuss.form');
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			description: ""
		}
	});	
	const name = watch("name", "");
	const email = watch("email", "");
	const phone = watch("phone", "");

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data); 

	return (
		<form onSubmit={ handleSubmit(onSubmit) } className={ styles.form__container }>
			<div className="lg:flex-row lg:flex lg:gap-[80px] w-full lg:justify-center h-full">
				<div className={ styles.form__left }>
					<div className={ styles.form__item }>
						<label
							htmlFor="name"
							className={
								!name
								? `${ styles.form__label } text-[18px]`
								: `${ styles.form__label } text-[14px] translate-y-[-20px]` }>{ t('name') }</label>
						<input
							autoComplete="off" 
							spellCheck="false" 
							autoCorrect="off"
							type="text"
							id="name"
							{ ...register('name', { required: true }) }
							className={ styles.form__input }
							contentEditable
							placeholder=" " />
						{ errors.name ? <span className={ styles.form__required }>{ t('requiredField') }</span> : '' }
					</div>
					<div className={ styles.form__item }>
						<label
							htmlFor="email"
							className={
								!email
								? `${ styles.form__label } text-[18px]`
								: `${ styles.form__label } text-[14px] translate-y-[-20px]` }>Email</label>
						<input
							autoComplete="off" 
							spellCheck="false" 
							autoCorrect="off"
							type="text"
							id="email"
							{ ...register('email', { required: true }) }
							className={ styles.form__input }
							contentEditable
							placeholder=" " />
						{ errors.email ? <span className={ styles.form__required }>{ t('requiredField') }</span> : '' }
					</div>
					<div className={ styles.form__item }>
						<label
							htmlFor="phone"
							className={
								!phone
								? `${ styles.form__label } text-[18px]`
								: `${ styles.form__label } text-[14px] translate-y-[-20px]` }>{ t('phone') }</label>
						<input
							autoComplete="off" 
							spellCheck="false" 
							autoCorrect="off"
							type="text"
							id="phone"
							{ ...register('phone', { required: true }) }
							className={ styles.form__input }
							contentEditable
							placeholder=" " />
						{ errors.phone ? <span className={ styles.form__required }>{ t('requiredField') }</span> : '' }
					</div>
				</div>
				<div className={ styles.form__right }>
					<div className={ `${ styles.form__item } mt-[30px] lg:m-0` }>
						<label
							htmlFor="description"
							className="text-[16px]">{ t('description') }</label>
						<textarea
							autoComplete="off" 
							spellCheck="false" 
							autoCorrect="off"
							id="description"
							{ ...register('description', { required: true }) }
							className={ styles.form__input }
							placeholder=" "
							contentEditable
							ref={ textareaRef } />
						{ errors.description ? <span className={ styles.form__required }>{ t('requiredField') }</span> : '' }
					</div>
				</div>
			</div>
			<Button
				text={ t('send') }
				icon={ <FontAwesomeIcon icon={ faArrowDown }
				className="ml-[10px]"
				style={{transform: 'rotate(-135deg)'}} /> } />
		</form>
	)
}