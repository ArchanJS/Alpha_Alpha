import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {MdLibraryMusic} from 'react-icons/md';
import {GoInfo} from 'react-icons/go';
import {RiAliensFill} from 'react-icons/ri';
import {BsPersonFill} from 'react-icons/bs';
import {GiPistolGun} from 'react-icons/gi';
import {FaRunning} from 'react-icons/fa';

export const SidebarData = 
[
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title:'Music',
    path:'/music',
    icon: <MdLibraryMusic/>,
    cName: 'nav-text'
  },
  {
    title:'Characters',
    path:'/characters',
    icon: <BsPersonFill/>,
    cName: 'nav-text'
  },
  {
    title:'Gun Shooter',
    path:'/gunshooter',
    icon: <GiPistolGun/>,
    cName: 'nav-text'
  },
  {
    title:'Dali Go',
    path:'/daligo',
    icon: <FaRunning/>,
    cName: 'nav-text'
  },
  {
    title:'About us',
    path:'/about',
    icon: <GoInfo/>,
    cName: 'nav-text'
  }
]
;