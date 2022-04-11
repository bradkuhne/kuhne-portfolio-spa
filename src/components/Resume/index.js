import React from "react";
import Doc1 from "../../assets/BradKuhneResume2022.pdf";

const Resume = () => {

    return (
        <section className="my-1" id="resume">
            <h1>Proficiencies and Resume</h1>
            <h2 className="my-5"> Recently Acquired Skills:</h2>
            <ul className="b">
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Sequelize</li>
                <li>Restful APIs</li>
                <li>Git</li>
            </ul>
            <h2 className="my-5">Prior Career Skills:</h2>
            <ul className="b">
                <li>Project Management (20 yrs)</li>
                <li>Scrum Master (4 years)</li>
                <li>Client Relationship Management (15 years)</li>
                <li>Business Analysis (20 years)</li>
            </ul>
            <h2 className="my-5">Downloadable Resume:</h2>
            <iframe src={Doc1} width="100%" height="500px"></iframe>
        </section>
    )
}
export default Resume;