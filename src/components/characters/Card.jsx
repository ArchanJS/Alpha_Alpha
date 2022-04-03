import React from 'react';

const Card = ({ charImg, charName, description, website, orgName }) => {
    return (
        <div className="card" data-aos={"flip-left"}>
            <div className="card-content">
                <img src={charImg} alt="Games" className="card-img" />
                <div className="game-name">{charName}</div>
                <div className="game-publisher">{orgName}</div>
                <div className="about-game">{description}</div>
                <a href={website} className="card-btn" target="blank">Visit website</a>
            </div>
        </div>
    )
}

export default Card;