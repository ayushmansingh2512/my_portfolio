import Header from "./compnents/Header";
import SectionDivider from "./compnents/SectionDivider";
import CurrentlyWorking from "./compnents/CurrentlyWorking";
import Experience from "./compnents/Experience";
import Skills from "./compnents/Skills";
import Education from "./compnents/Education";
import Footer from "./compnents/Footer";
const App = () => {
	return(
	 	<div>
			<Header/>
			<SectionDivider/>
			<CurrentlyWorking/>
			<SectionDivider/>
			<Experience/>
			<SectionDivider/>
			<Skills/>
			<SectionDivider/>
			<Education/>
			<SectionDivider/>
			<Footer/>
		</div>
	)
}

export default App;
