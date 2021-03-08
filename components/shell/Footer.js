import React from 'react';

import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="container-fluid pt-5 pb-2">
      <div className="row justify-content-sm-center">
        <div className="col-sm-3">
          <ul>
            <li className="text-center"><a href="mailto:admin@vrg.live" target="_blank">Contact</a></li>
          </ul>          
        </div>    
        <div className="col-sm-3">
          <ul>
            <li className="text-center"><a href="https://instagram.com/vrg.live/" target="_blank">Instagram</a></li>
          </ul>
        </div>  
      </div>
      <div className="row justify-content-md-center mt-3">
        <div className="col">
          <p className="small text-center">© VRG 2021</p>
        </div>        
      </div>      
    </footer>
  );
}

export default Footer;
