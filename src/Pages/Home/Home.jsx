import AboutMe from "../../Components/AboutMe/AboutMe";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import MySkills from "../../Components/MySkills/MySkills";

const Home = () => {
    
    return (
      <div>
            <Hero></Hero>
            <section><AboutMe></AboutMe></section>
            <section><MySkills></MySkills></section>
            <section><Footer></Footer></section>
      </div>
    );
};

export default Home;