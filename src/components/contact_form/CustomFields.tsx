import { Field, useField, FieldHookConfig } from 'formik'
import { PropsWithChildren } from 'react'
import { ReactNode } from 'react'
import { FC } from 'react'
import { StringLocale } from 'yup/lib/locale'

interface textFieldInterface {
	name: string
	label_text: string
	type: string
}

const TextField = (props: textFieldInterface & FieldHookConfig<string>) => {
	const [field, meta] = useField(props)
	// console.log('field:', field)
	// console.log('meta:', meta)
	return (
		<fieldset>
			<label htmlFor={props.name}>{props.label_text}</label>
			{props.type === 'text' ? (
				<Field
					id={props.name}
					{...props}
					{...field}
					className={meta.touched && meta.error ? 'input_error' : ''}
				/>
			) : (
				<Field
					as='textarea'
					id={props.name}
					{...props}
					{...field}
					className={meta.touched && meta.error ? 'input_error' : ''}
				/>
			)}
			{meta.touched && meta.error && (
				<div className='error_message'>{meta.error}</div>
			)}
		</fieldset>
	)
}
interface selectFieldInterface {
	name: string
	label_text: string
	type: string
}
interface childrenInterface {
	children: HTMLOptionElement
}
const SelectField = (
	props: selectFieldInterface,
	{ children }: PropsWithChildren<childrenInterface>
) => {
	const [field, meta] = useField(props)

	return (
		<>
			<label htmlFor={props.name}>{props.label_text}</label>
			<select
				id={props.name}
				{...props}
				{...field}
				className={meta.touched && meta.error ? 'input_error' : ''}
			>
				{children}
			</select>
			{meta.touched && meta.error && (
				<div className='error_message'>{meta.error}</div>
			)}
		</>
	)
}

export { TextField, SelectField }
