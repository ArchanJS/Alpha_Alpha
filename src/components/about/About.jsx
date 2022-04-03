import React, { useEffect } from 'react';
import Particle from '../Particle/Particle';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
		AOS.init({
		  duration : 1000
		});
	  }, []);

    return (
        <div className="about-page">
            <div className="about-body">
                <Particle />
            </div>
            <div className="about-website">
                <h2 className="about-page-title" data-aos={"fade-down"}>About</h2>
                <div className="website-details">
                    <p style={{textAlign:"start"}}><strong>Alpha</strong> is an entertainment website based on the theme <strong>Money Heist</strong>. <br/>The website consists of four sections namely :</p><br />
                    <ul>
                        <li style={{textAlign:"center", listStyle:"none"}}><strong>• Money Heist Characters :</strong> Where a user can see the various characters of money heist and their small description.</li>
                        <li style={{textAlign:"center", listStyle:"none"}}><strong>• Music :</strong> In this section the client can listen cool music related to money heist. </li>
                        <li style={{textAlign:"center", listStyle:"none"}}><strong>• Gun Shooter :</strong> This is basically a shooting game where user will start with level 1 and go up to higher levels along with increasing game difficulties.</li>
                        <li style={{textAlign:"center", listStyle:"none"}}><strong>• Dali Go :</strong> In this game, user need to avoid obstacles and collect health to score as much as possible.</li>
                    </ul><br/>
                    <p>Designed and developed by :</p>
                    <ul>
                        <li><strong>Archan Banerjee</strong></li>
                        <li><strong>Jaydip Dey</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About