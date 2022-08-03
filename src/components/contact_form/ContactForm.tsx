import React from 'react'
import './contact_form.scss'

import { Formik, Form } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'
import { SelectField, TextField } from './CustomFields'

interface formInitialValues {
	gender: string
	fname: string
	lname: string
	email: string
	tel: string
	message: string
}

const ContactForm: FC = () => {
	// yup validation
	const validate = Yup.object({
		gender: Yup.string().oneOf(['Homme', 'Femme']).required(),
		fname: Yup.string()
			.max(15, 'Doit avoir 15 caractères ou moins')
			.required('obligatoire'),
		lname: Yup.string()
			.max(20, 'Doit avoir 20 caractères ou moins')
			.required('obligatoire'),
		email: Yup.string().email('email invalide').required('obligatoire'),
		tel: Yup.string()
			.max(10, 'Doit avoir 20 caractères ou moins')
			.required('obligatoire'),
		message: Yup.string().required('obligatoire'),
	})

	const initialValues: formInitialValues = {
		gender: '',
		fname: '',
		lname: '',
		email: '',
		tel: '',
		message: '',
	}

	return (
		<div className='contact_container'>
			<h1>contactez-nous</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validate}
				onSubmit={() => {
					console.log('submitted')
				}}
			>
				{(formik) => (
					<Form>
						<SelectField name='gender' label_text='Civilité' type='text'>
							<option value='test'>test</option>
						</SelectField>
						<TextField name='fname' label_text='Prénom' type='text' />
						<TextField name='lname' label_text='Prénom' type='text' />
						<TextField name='email' label_text='Adresse Email' type='text' />
						<TextField name='tel' label_text='Téléphone' type='text' />
						<TextField
							name='message'
							label_text='Message'
							type='textarea'
							className='textarea'
						/>

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ContactForm
