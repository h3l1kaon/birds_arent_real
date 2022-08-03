import { FC } from 'react'

import './_search_form.scss'
const SearchForm: FC = () => {
	return (
		<div className='search_form_container'>
			<h2>QUE RECHERCHEZ VOUS?</h2>
			<form action='#'>
				<fieldset className='f1'>
					<div className='field'>
						<label className='label' htmlFor='type'>
							Type de bien
						</label>
						<input type='text' id='type' />
					</div>
					<div className='field'>
						<label className='label' htmlFor='localisation'>
							localisation
						</label>
						<input type='text' id='localisation' />
					</div>
				</fieldset>
				<fieldset className='f2'>
					<p className='label'>Budget</p>
					<div className='budget'>
						<div className='from'>
							<span>€</span>
							<input type='text' />
						</div>
						<div className='to'>
							<span>€</span>
							<input type='text' />
						</div>
					</div>
				</fieldset>
			</form>
			<input type='submit' value='Lancer la recherche' />
		</div>
	)
}

export default SearchForm
