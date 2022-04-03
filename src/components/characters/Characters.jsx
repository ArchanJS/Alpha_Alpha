import React, { useEffect } from 'react';
import Card from './Card';
import CharData from './CharData';
import './characters.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import {Helmet} from "react-helmet"
function Characters() {


    useEffect(() => {
		AOS.init({
		  duration : 1000
		});
	  }, []);

    return (
        <>
        
        <Helmet>
                <meta name="description" content="Explore Characters"/>
            </Helmet>
            <div className="characters" style={{ color: "red" }}>
                <h1 className="characters-header"  data-aos={"fade-down"}>MONEY HEIST <span className="characters-header">CHARACTERS</span></h1>
                <div className="characters-cards">
                    {
                        CharData.map((val, ind) => {
                            return <Card charImg={val.charImg} charName={val.charName} description={val.description} website={val.website} orgName={val.orgName} key={ind} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Characters;