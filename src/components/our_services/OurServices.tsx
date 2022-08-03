import React from 'react'
import { DOMAttributes } from 'react'
import { ReactNode } from 'react'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'
import './_our_services.scss'
import { FaStethoscope } from 'react-icons/fa'

interface serviceProps {
	icon: ReactNode
	title: string
	text: string
}
const Service: FC<serviceProps> = ({ icon, title, text }) => {
	return (
		<div className='service'>
			<div className='icon_group'>
				{icon}
				<h4>{title}</h4>
			</div>
			<p>{text}</p>
			<button>En savoir +</button>
		</div>
	)
}
const OurServices = () => {
	const lorem =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque aliquam labore optio officia. '
	return (
		<div className='services_container'>
			<div className='box'>
				<h1>Nos services en ligne</h1>
				<div className='services'>
					<Service icon={<FaStethoscope />} title='Diagnostics' text={lorem} />
					<Service icon={<FaStethoscope />} title='Diagnostics' text={lorem} />
					<Service icon={<FaStethoscope />} title='Diagnostics' text={lorem} />
					<Service icon={<FaStethoscope />} title='Diagnostics' text={lorem} />
				</div>
			</div>
		</div>
	)
}

export default OurServices
