import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Head from 'next/head';

import fire from '../config/fire-config';

import Mailchimp from 'react-mailchimp-form';


const Home = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const user = useSelector ((state) => state.user);

  useEffect(() => {
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
        <div className="row justify-content-sm-center">
            <img src="/images/logo.png" style={{maxWidth:'100%'}}/>             
        </div>
        <div className="row justify-content-center mt-3">
          <h2>The Future of Hobby, Coming Soon</h2>          
        </div>
        <div className="row justify-content-center mt-3">
        
          <div id="mc_embed_signup input-group">
          <h3 >Don't miss the latest updates!</h3>
          <Mailchimp
            action='https://live.us1.list-manage.com/subscribe/post?u=7ec1df689d77dcdd641f57998&amp;id=9cba6535e6'
            
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true
              }
            ]}

            messages = {
              {
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Subscribe"
              }
            }

          />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;