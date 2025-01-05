import AboutMe from "../../Components/AboutMe/AboutMe";
import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";
import MySkills from "../../Components/MySkills/MySkills";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
    
    return (
      <div>
        <section>
          <Hero></Hero>
        </section>
        <section>
          <AboutMe></AboutMe>
        </section>
        <section>
          <MySkills></MySkills>
        </section>
        <section>
          <Projects></Projects>
        </section>
        <section>
          <Contact></Contact>
        </section>
      </div>
    );
};

export default Home;