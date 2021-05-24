import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../screens/Login';
import Home from '../screens/Home';
import NewPoll from '../screens/NewPoll';
import Leaderboard from '../screens/Leaderboard';
import PollPage from '../screens/PollPage';
import { handleInitialData } from '../actions/shared';
import { ToastContainer } from 'react-toastify';

const App = ({ dispatch }) => {
  // Load initial data
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/add" component={NewPoll} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/questions/:id" component={PollPage} />
      <ToastContainer
        limit={7}
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        pauseOnHover
      />
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
