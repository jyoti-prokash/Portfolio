import AboutMe from "../../Components/AboutMe/AboutMe";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import MySkills from "../../Components/MySkills/MySkills";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
    
    return (
      <div>
            <Hero></Hero>
            <section><AboutMe></AboutMe></section>
            <section><MySkills></MySkills></section>
            <section><Projects></Projects></section>
            <section><Contact></Contact></section>
            <section><Footer></Footer></section>
      </div>
    );
};

export default Home;