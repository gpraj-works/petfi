import AboutSection from '../components/AboutSection';
import AdoptionProcess from '../components/AdoptionProcess';
import Categories from '../components/Categories';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';
import PetsContainer from '../components/PetsContainer';
import ReachUs from '../components/ReachUs';

const HomePage = () => {
	return (
		<div>
			<HomeHeader />
			<AboutSection />
			<Categories />
			<PetsContainer />
			<AdoptionProcess />
			<ReachUs />
			<Footer />
		</div>
	);
};

export default HomePage;
