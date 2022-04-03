import React from 'react'
import AudioPlayer from "./AudioPlayer";
import Tracks from "./Tracks";
import {Helmet} from "react-helmet";

function Music() {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Explore Music"/>
            </Helmet>
            <AudioPlayer tracks={Tracks} />
        </div>
    )
}

export default Music;