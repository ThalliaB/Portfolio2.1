import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import styles from './Navbar.module.css';
import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (

    <IconContext.Provider value={{ color: '#000' }}>
      <div className={styles.navbar} >
        <Link to='/' exact='true' className={styles.h1}>Thallia Julliana Brum</Link>
        <Link to='/' exact='true' className={styles.h1_menor}>Thallia</Link>
        {/* <h1 className={styles.h1}><a href='/'>Thallia Julliana Brum</a></h1> */}
        {/* <h1 className={styles.h1_menor}>Thallia</h1> */}
        <Link to='#' className={styles.menu_bars}>
          <FaBars onClick={showSidebar} />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item} >
            <Link exact='true' to='/'>INÍCIO</Link>
          </li>
          <li className={styles.item}>
            <Link to='/aboutme'>SOBRE</Link>
          </li>
          <li className={styles.item}>
            <Link to='/experience'>MEUS PROJETOS</Link>
          </li>
        </ul>
      </div>
      {/* <nav className={sidebar ? 'nav_menu active' : 'nav_menu'}> */}
      <nav className={`${sidebar && styles.active} ${styles.nav_menu}`}>
        <ul className={styles.nav_menu_items} onClick={showSidebar}>
          <li className={styles.navbar_toggle}>
            <Link to='#' className={styles.menu_bars}>
              <AiOutlineClose className={styles.btnList} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={styles.nav_text}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>




    // <nav className={styles.navbar}>
    //     <Container>
    //         <h1 className={styles.h1}>Thallia Julliana Brum</h1>
    //         <p className={styles.menu}><FaBars onClick={showSidebar}/></p>
    //         <ul className={styles.list}>
    //             <li className={styles.item} style={{navLinkStyle}}>
    //                 <Link exact='true' to='/'>HOME</Link>
    //             </li>
    //             <li className={styles.item} style={{navLinkStyle}}>
    //                 <Link to='/aboutMe'>ABOUT ME</Link>
    //             </li>
    //             <li className={styles.item} style={{navLinkStyle}}>
    //                 <Link to='/experience'>EXPERIENCE</Link>
    //             </li>
    //         </ul>

    //     </Container>
    // </nav>
  )
}

export default Navbar