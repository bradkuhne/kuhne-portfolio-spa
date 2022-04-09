import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import Contact from "../Contact";

function Section({ currentCategory }) {
    const renderCategory = () => {
        switch (currentCategory.name) {
            case 'About Me':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    };
    return (
        <div>
            {renderCategory()}
        </div>
    )
}
export default Section;


