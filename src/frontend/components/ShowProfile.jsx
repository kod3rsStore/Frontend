import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/ShowProfile.styl';
import avatarGrey from '../assets/images/avatar-grey.png';

const ShowProfile = (props) => {
  const { user } = props;

  return (
    <div className='Profile__card'>
      <img src={user.photo ? user.photo : avatarGrey} alt={user.first_name} />
      <h1>{user.first_name}</h1>
      <p className='Profile__card--title'>{user.email}</p>
      <p>
        internal id:
        {user.id_users}
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ShowProfile);
