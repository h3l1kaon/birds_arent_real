import AboutUs from './components/about_us/AboutUs'
import Carousel from './components/carousel/Carousel'
import ContactForm from './components/contact_form/ContactForm'
import Navigation from './components/navigation/Navigation'
import OurServices from './components/our_services/OurServices'
import RecentProducts from './components/recent_products/RecentProducts'
import SearchForm from './components/search_form/SearchForm'
import './styles/_main.scss'
const srcs: string[] = [
	'https://images.unsplash.com/photo-1657092587752-1514c2632707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUxNTg0Ng&ixlib=rb-1.2.1&q=80&w=1080',
	'https://images.unsplash.com/photo-1657959113862-bcb6875ac485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUxNTcyOQ&ixlib=rb-1.2.1&q=80&w=1080',
	'https://images.unsplash.com/photo-1656964001105-f58ff9b5b995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTUxNTgwOQ&ixlib=rb-1.2.1&q=80&w=1080',
]

function App() {
	return (
		<div className='App'>
			{/* <Carousel srcs={srcs} />
			<Navigation />
			<AboutUs />
			<OurServices />
			<SearchForm />
			<RecentProducts /> */}
			<ContactForm />
		</div>
	)
}

export default App
