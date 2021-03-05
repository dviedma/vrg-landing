import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';
//import wowzaLogo from '../../images/wowza-logo.svg'

import fire from '../../config/fire-config';

const Nav = () => {

  const user = useSelector ((state) => state.user);

  const handleLogout = () => {
    fire.auth()
      .signOut()
      .then(() => {
        // logged out
      });
    }
      

  return (
    <nav className="navbar navbar-expand navbar-light pb-2" id="top-nav">
      {/*<a className="navbar-brand" href="https://www.wowza.com"><img className="noll"  src={wowzaLogo}} alt="Wowza Media Systems" /></a>*/}
      <Link href="/">
      <a><img src="/images/logo.svg" alt="VRG Logo" width="100px"/></a>
      </Link>

    </nav>
  );
}

export default Nav;
