import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';
import Head from 'next/head';

import fire from '../config/fire-config';
import CreatePost from '../components/CreatePost';


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
          <input style={{borderRadius:'0', backgroundClip:'none'}} className="form-control" type="email" value="" name="EMAIL" id="mce-EMAIL"/>
          <input style={{width:'100px', display:"block", margin:'auto'}} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn mt-3"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;