import React from 'react';
import styles from './Navbar.module.css';
import { AiFillHome }  from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { MdWork } from 'react-icons/md'


export const SidebarData = [
  {
    title: 'INÍCIO',
    path: '/',
    icon: <AiFillHome  className='btnList'/>,
    cName: styles.nav_text
  },
  {
    title: 'SOBRE',
    path: '/aboutme',
    icon: <IoIosPaper  className='btnList'/>,
    cName: styles.nav_text
  },
  {
    title: 'MEUS PROJETOS',
    path: '/experience',
    icon: <MdWork className='btnList'/>,
    cName: styles.nav_text
  }
];