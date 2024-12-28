import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import AnimatedBackground from "../components/AnimatedBackground.jsx";

const Index = () => {
    return (
        <main>
            {/*<AnimatedBackground/>*/}
            <Hero/>
            <div className="site-content">
                <About/>
                <Experience/>

            </div>
        </main>

)
}


export default Index