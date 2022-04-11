import React from 'react';
import Image1 from "../../assets/run-buddy.png";
import Image2 from "../../assets/pw-generator.png";
import Image3 from "../../assets/work-day.png";
import Image4 from "../../assets/git-it-done.png";
import Image5 from "../../assets/zoo-keepr.png";
import Image6 from "../../assets/pizza-hunt.png";




const Projects = () => {

    return (
        <div>
            <div className="flex-row space-between" style={{ textAlign: "center" }}>
                <div className= "card my-2 py-2">
                    <p>Run Buddy</p>
                    <img src={Image1} className="my-2" alt="Run Buddy" />
                    <p>First full stack project utilizing HTML, CSS and JavaScript</p>
                    <a href="https://github.com/bradkuhne/run-buddy" className="button">GitHub Link</a> <br></br>
                    <a href="https://bradkuhne.github.io/run-buddy/" className="button">Deployed Link</a>
                </div>
                <div className= "card py-2 my-2">
                    <p>PW Generator</p>
                    <img src={Image2} className="my-2" alt="Password Generator" />
                    <p>Generate a random password based upon selected criteria</p>
                    <a href="https://github.com/bradkuhne/pw-generator" className="button">GitHub Link</a> <br></br>
                    <a href="https://bradkuhne.github.io/pw-generator/" className="button">Deployed Link</a>
                </div>
                <div className= "card py-2 my-2">
                    <p>Work Day</p>
                    <img src={Image3} className="my-2" alt="Work Day Scheduler" />
                    <p>A simple daily planner</p>
                    <a href="https://github.com/bradkuhne/work-day" className="button">GitHub Link</a> <br></br>
                    <a href="https://bradkuhne.github.io/work-day/" className="button">Deployed Link</a>
                </div>
                <div className= "card py-2 my-2">
                    <p>Git Search</p>
                    <img src={Image4} className="my-2" alt="Git it done" />
                    <p>Git repository search app utilizing server side APIs</p>
                    <a href="https://github.com/bradkuhne/git-it-done" className="button">GitHub Link</a> <br></br>
                    <a href="https://bradkuhne.github.io/git-it-done/" className="button">Deployed Link</a>
                </div>
                <div className= "card py-2 my-2">
                    <p>Zoo Keepr</p>
                    <img src={Image5} className="my-2" alt="Zoo Keeper" />
                    <p>Simple zoo animal and employee Catalog using ExpressJS and NodeJS</p>
                    <a href="https://github.com/bradkuhne/zookeepr" className="button">GitHub Link</a> <br></br>
                    <a href="https://salty-plains-76549.herokuapp.com/" className="button">Deployed Link</a>
                </div>
                <div className= "card py-2 my-2">
                    <p>Pizza Hunt</p>
                    <img src={Image6} className="my-2" alt="Zoo Keeper" />
                    <p>A favorite pizza social media application</p>
                    <a href="https://github.com/bradkuhne/pizza-hunt" className="button">GitHub Link</a> <br></br>
                    <a href="https://guarded-garden-09177.herokuapp.com/" className="button">Deployed Link</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;