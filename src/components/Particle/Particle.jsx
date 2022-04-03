import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';

const Particle = () => {

    const [totalParticles,setTotalParticles]=useState(window.outerWidth<=500?24:(window.outerWidth<=850?36:50));

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setTotalParticles(window.outerWidth<=500?24:(window.outerWidth<=850?36:50));
        })
    },[])

    return (
        <Particles
        params={{
            particles:{
                number:{
                    value:totalParticles
                },
                size:{
                    value:3
                }
            },
            interactivity:{
                events:{
                    onhover:{
                        enable:true,
                        mode:"repulse"
                    }
                }
            }
        }}
        height={"90vh"}
        width={"90vw"}
        />
    )
}

export default Particle;