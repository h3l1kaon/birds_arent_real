import React, { FC, useState } from 'react'
import './_carousel.scss'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'
interface CarouselProps {
	srcs: string[]
}

const Carousel: FC<CarouselProps> = ({ srcs }) => {
	if (!Array.isArray(srcs) || srcs.length === 0) return null
	const [current, setCurrent] = useState<number>(0)
	const length: number = srcs.length
	const prevSlide = (): void => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	const nextSlide = (): void => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	return (
		<section className='carousel'>
			<div className='background'></div>
			{srcs.map((src, i) => {
				return (
					<div
						className={
							i === current ? 'slide active_slide' : 'slide dead_slide'
						}
						key={i}
					>
						{i === current && <img className='image' src={src} alt='image' />}
					</div>
				)
			})}
			<div className='buttons'>
				{srcs.map((src, i) => {
					return (
						<span className='btn' key={i}>
							{i === current ? (
								<IoIosRadioButtonOn className='active_btn' />
							) : (
								<IoIosRadioButtonOff onClick={() => setCurrent(i)} />
							)}
						</span>
					)
				})}
			</div>
		</section>
	)
}

export default Carousel
