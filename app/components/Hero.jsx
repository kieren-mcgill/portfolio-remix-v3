import HeroNav from "./HeroNav.jsx";

const Hero = () => {

    return (
        <section className="hero-section d-flex flex-col mb-6 h-full">
            <div>
                <h1 className="mb-1">Kieren McGill</h1>
                <h2 className="mb-3">Software/Web developer</h2>
                <p className="mb-3">Based in Sheffield, UK, I craft modern software and web solutions.</p>
            </div>

            <HeroNav/>

            <ul>
                <li>
                    <a>
                        <i className="ri-linkedin-box-fill"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="ri-github-fill"></i>
                    </a>
                </li>
            </ul>

        </section>
        )
}

export default Hero