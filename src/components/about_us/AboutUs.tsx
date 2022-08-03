import React from 'react'
import { FC } from 'react'
import './_about.scss'
import { AiFillPlusCircle } from 'react-icons/ai'

interface plusProps {
	text: string
}
const Plus: FC<plusProps> = ({ text }) => {
	return (
		<div className='item'>
			<div className='circle'>
				<AiFillPlusCircle className='icon' />
			</div>
			<span className='small_desc'>{text}</span>
		</div>
	)
}

const AboutUs: FC = () => {
	return (
		<div className='about_us_container'>
			<h2>Qui sommes nous?</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, alias
				cum atque dignissimos tempore officiis dolorem molestiae nihil? Quae
				quibusdam laboriosam iusto modi alias vero, necessitatibus vel dolore
				iste accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Dolor explicabo laboriosam ducimus. Accusamus beatae error ea
				labore sit in, facilis eligendi dolore eaque quo, ipsam molestias eius
				aliquam iusto maiores.
			</p>

			<div className='icons_plus'>
				<Plus text='Blalallalalalaalal alalaalalalalaalal' />
				<Plus text='Blalallalalalaalal alalaalalalalaalal' />
				<Plus text='Blalallalalalaalal alalaalalalalaalal' />
				<Plus text='Blalallalalalaalal alalaalalalalaalal' />
			</div>

			<button>En savoir plus sur nos prestations</button>
		</div>
	)
}

export default AboutUs
