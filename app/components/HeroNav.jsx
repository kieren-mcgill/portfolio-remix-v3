import {useState} from "react";


const HeroNav = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <nav>
            <ul>
                {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                    <li
                        key={index}
                        className={`mb-2 ${hoveredIndex === index ? 'focus' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <a className="py-1">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeroNav;
