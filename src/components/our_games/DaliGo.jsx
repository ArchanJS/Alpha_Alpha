import Iframe from 'react-iframe';
import './iframe.css';
import {Helmet} from "react-helmet";

function DaliGo() {

  return (
    <div className="iframe">
       <Helmet>
            <meta name="description" content="Dali Go"/>
      </Helmet>
      <Iframe url="https://dali-go.netlify.app/"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname iframe-body m-auto"
        display="initial"
        frameBorder = "0"
        scrolling="no"
        position="relative"/>
    </div>
  )
}

export default DaliGo;