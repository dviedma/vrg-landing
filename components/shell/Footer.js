import React from 'react';

import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="container-fluid pt-5 pb-2">
      <div className="row justify-content-sm-center">
        <div className="col-sm-3">
          <ul>
            <li className="text-center"><Link href="/about"><a>About Us</a></Link></li>
            <li className="text-center"><Link href="/contact"><a>Contact</a></Link></li>
          </ul>          
        </div>    
        <div className="col-sm-3">
          <ul>
            <li className="text-center"><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li className="text-center"><a href="https://facebook.com" target="_blank">Facebook</a></li>
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
