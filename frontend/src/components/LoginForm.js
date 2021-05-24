import React, { useState, useEffect } from 'react';
import { Select, Button, Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const LoginForm = ({ dispatch, users }) => {
  const [user, setUser] = useState('');
  const [avatar, setAvatar] = useState('');
  const [submitFailed, setSubmitFailed] = useState(false);

  let history = useHistory();

  const formUsers = [
    {
      text: users['Mike'].id,
      value: users['Mike'].id,
      image: {
        avatar: true,
        src: users['Mike'].avatar,
      },
    },
    {
      text: users['Carol'].id,
      value: users['Carol'].id,
      image: {
        avatar: true,
        src: users['Carol'].avatar,
      },
    },
    {
      text: users['Jennifer'].id,
      value: users['Jennifer'].id,
      image: {
        avatar: true,
        src: users['Jennifer'].avatar,
      },
    },
    {
      text: users['Victor'].id,
      value: users['Victor'].id,
      image: {
        avatar: true,
        src: users['Victor'].avatar,
      },
    },
  ];

  const handleChange = e => {
    const target = e.target;

    // Get name and avatar from select element
    const selectName = target.children[1].innerText;
    const selectAvatar = target.children[0].currentSrc;

    setUser(selectName);
    setAvatar(selectAvatar);
  };

  const handleClick = e => {
    // Validate a user has been selected
    if (user !== '') {
      // If submit failed previously, change to false
      if (submitFailed === true) {
        setSubmitFailed(false);
      }

      dispatch(setAuthedUser(user, avatar));

      history.push('/home');
    } else {
      setSubmitFailed(true);
    }
  };

  return (
    <div className="login-form align-center">
      <div className="login-form__container">
        <h3>Welcome to "Would you Rather"!</h3>
        <p>Select a user to start using the app</p>
        <Select
          className="login-form__select"
          placeholder="Select user"
          options={formUsers}
          onChange={handleChange}
        />
        {submitFailed === true ? (
          <Message error content="Please select a user before proceeding" />
        ) : null}
        <Button className="btn login-form__btn" onClick={handleClick}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(LoginForm);
