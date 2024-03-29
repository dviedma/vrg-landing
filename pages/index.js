import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Head from 'next/head';

import fire from '../config/fire-config';

//import Mailchimp from 'react-mailchimp-form';
import MailchimpSubscribe from '../components/MailChimpSubscribe'


const Home = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const user = useSelector ((state) => state.user);
  const url = "https://live.us1.list-manage.com/subscribe/post?u=7ec1df689d77dcdd641f57998&amp;id=9cba6535e6";


  useEffect(() => {

    setTimeout(()=>{
      document.querySelector("#mc_embed_signup input").addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.querySelector("#mc_embed_signup button").click();
        }
      });
    },2000)


    // Get list of users
    fire.firestore()
      .collection('users')
      .onSnapshot(snap => {
        const users = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(users);
      });
  }, []);

  return (
    <div className="index container-fluid mt-3">
      <Head>
        <title>VRG</title>
      </Head>
      
      <div className="container-fluid pt-5 pb-2">
        <div className="justify-content-sm-center logo-home" style={{textAlign:'center'}}>
            <img src="/images/landing2.gif" style={{maxWidth:'550px', width:'100%', margin:'auto'}}/>     
        </div>
        <div className="row justify-content-sm-center logo-home mt-3">
          <h2 style={{margin:'auto'}}>WATCH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BUY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SELL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRADE</h2>        
        </div>
        <div className="row justify-content-center mt-3">        
          <div id="mc_embed_signup" className="wrapper-form input-group">

          <div className="justify-content-sm-center logo-home mt-3 mb-3">
            <h3 style={{margin:'auto', textShadow:'0px 0px 10px #f140d8'}}>Welcome to the VRG Community! The future home of card breaks, rip & ships, hobby content, and more.</h3>        
          </div>                      

          <MailchimpSubscribe url={url}/>



          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;