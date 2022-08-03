import React from 'react'
import { FC } from 'react'
import './_recent_products.scss'
const imgs = [
	'https://images.unsplash.com/photo-1657072267150-8147a00d6f5d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzODQzMQ&ixlib=rb-1.2.1&q=80&w=300',
	'https://images.unsplash.com/photo-1659455284803-da26e1ddc621?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzODQ4Mg&ixlib=rb-1.2.1&q=80&w=300',
	'https://images.unsplash.com/photo-1657471419283-ce1401120611?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzODUwMA&ixlib=rb-1.2.1&q=80&w=300',
	'https://images.unsplash.com/photo-1658266212763-49bf8e9f8ac7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzODUyMA&ixlib=rb-1.2.1&q=80&w=300',
	'https://images.unsplash.com/photo-1657462629485-79ce242d837b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzODUyMg&ixlib=rb-1.2.1&q=80&w=300',
	'https://images.unsplash.com/photo-1659046885400-053c4587805d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzODUxNA&ixlib=rb-1.2.1&q=80&w=300',
	// 'https://images.unsplash.com/photo-1658728942259-fca77c5b5231?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzOTIwNQ&ixlib=rb-1.2.1&q=80&w=300',
	// 'https://images.unsplash.com/photo-1657828512890-2c449c56f9e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzOTIyOQ&ixlib=rb-1.2.1&q=80&w=300',
	// 'https://images.unsplash.com/photo-1659011927489-09d0589c4780?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUzOTIyNg&ixlib=rb-1.2.1&q=80&w=300',
]

type Prod = {
	desc: string
	location: string
	price: string | number
	img_src: string
}

const Prod: FC<Prod> = ({ desc, location, price, img_src }) => {
	return (
		<div className='prod'>
			<div className='overlay'>
				<h6>{desc}</h6>
				<span>{location}</span>
				<br />
				<h6>{price} €</h6>
				<button>En savoir +</button>
			</div>
			<img src={img_src} alt='product' />
		</div>
	)
}

const RecentProducts = () => {
	return (
		<div className='recent_prod_container'>
			<div className='prod_head'>
				<h2>derniers biens mis en ligne</h2>
				<p>
					<span>appartements</span>
					<span>-</span>
					<span>maisons</span>
					<span>-</span>
					<span>terrains</span>
				</p>
			</div>

			<div className='prod_display'>
				{imgs.map((img, i) => {
					return (
						<Prod
							img_src={img}
							desc='c cool'
							location='maïamaï'
							price='10'
							key={i}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default RecentProducts
