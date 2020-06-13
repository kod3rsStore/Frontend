import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/ShowProfile.styl';

const ShowProfile = (props) => {
  const { user } = props;

  return (
    <div className='Profile__card'>
      <img src={user[0].photo} alt={user[0].first_name} />
      <h1>{user[0].first_name}</h1>
      <p className='Profile__card--title'>{user[0].email}</p>
      <p>
        internal id:
        {user[0].id_users}
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
