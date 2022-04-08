import React from 'react';

import profileImage from "../../assets/profile/bkuhne-image.jpg";

function About() {
    const shortBio = `SMU Full Stack Coding Bootcamp student and consistently high-performing project leader. 
    Certified Scrum Master (CSM) and Project Management Professional (PMP). Performance management, data warehouse, 
    ERP and custom application development domain expertise. Twenty years consulting experience with Accenture, 
    IBM, Hitachi Consulting, Saxony Partners and Dialexa. Reliably high utilization while commanding premium rates with 
    exceptional client satisfaction. Broad industry knowledge and entrepreneurial experience. MBA`;
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={profileImage} className="my-2" style={{ width: "15%", float: "left", margin: "25px" }} alt="profile" />
            <p className="my-2">
                {shortBio}
            </p>
        </section>
    );
}

export default About;