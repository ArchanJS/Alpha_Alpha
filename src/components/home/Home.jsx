import React, { useContext, useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import Particle from '../Particle/Particle';
import logo from './assets/logo.png';
import AOS from 'aos';
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
		AOS.init({
		  duration : 1000
		});
	  }, []);
      

    return (
        <div className="home-page">
            <div className="home-body">
                <Particle />
            </div>
            <div className="logo-div"  data-aos={"fade-left"}>
                <img src="https://i.postimg.cc/7LSY7BwR/mh-0.png" alt="" className="logo-png"/>
                {/* <a href="https://www.istebits.com/" target="blank" style={{color:"aqua", fontSize:"16px",textDecoration:"none",cursor:"pointer"}}>istebits.com</a> */}
            </div>
            <div className="website-name">
                <h2 className="website-title" data-aos={"zoom-in"}>Welcome</h2>
            </div>
        </div>
    )
}

export default Home
