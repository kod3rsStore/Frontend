/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import ShowProfile from '../components/ShowProfile';
import EditProfile from '../components/EditProfile';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = (props) => {
  const { edit } = props.match.params;

  return (
    <div className='Profile'>
      <Header />
      {edit === 'edit' ?
        (<EditProfile />) :
        (<ShowProfile />)}
      <Footer />
    </div>
  );
};

export default connect(null, null)(Profile);
