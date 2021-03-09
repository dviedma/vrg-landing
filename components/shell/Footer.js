import React from 'react';

import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="container-fluid pt-4 pb-2">
      
      <div className="row justify-content-md-center mt-3">
        <div className="col">
          <p className="text-center"><a className="text-center" href="mailto:admin@vrg.live" target="_blank">Contact</a></p>
          <p className="small text-center">© VRG 2021</p>
        </div>        
      </div>      
    </footer>
  );
}

export default Footer;
