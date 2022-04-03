import React, { createContext, useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Music from './components/audio_player/Music';
import Characters from './components/characters/Characters';
import GunShooter from './components/our_games/GunShooter';
import DaliGo from './components/our_games/DaliGo';
import {Helmet} from "react-helmet";
import About from './components/about/About';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
    <Helmet>
      <title>Alphα</title>
      <meta name="description"
       content="get info for trending games sports music alien go and covid shooter"/>
   <meta name="keywords" content="alpha trending games alien go covid shooter games sports music "/>
    </Helmet>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/music' component={Music}/>
        <Route exact path='/characters' component={Characters}/>
        <Route exact path='/gunshooter' component={GunShooter}/>
        <Route exact path='/daligo' component={DaliGo}/>
        <Route exact path='/about' component={About}/>
        <Route path="*" component={Home}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
