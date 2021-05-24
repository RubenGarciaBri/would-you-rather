import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Poll from './Poll';

const HomePanel = ({
  unansweredPollIds,
  answeredPollIds,
  userPollIds,
  authedUser,
}) => {
  const [activeCategory, setActiveCategory] = useState('unanswered');

  const handleClick = e => {
    setActiveCategory(e.target.innerText.toLowerCase().replace(/\s/g, ''));
  };

  return (
    <div className="home-panel main-container">
      <Button.Group className="home-panel__btn-group">
        <Button
          onClick={handleClick}
          className={`home-panel__btn-group__btn ${
            activeCategory === 'unanswered'
              ? 'home-panel__btn-group__btn--active'
              : ''
          }`}
        >
          Unanswered
        </Button>
        <Button
          onClick={handleClick}
          className={`home-panel__btn-group__btn ${
            activeCategory === 'answered'
              ? 'home-panel__btn-group__btn--active'
              : ''
          }`}
        >
          Answered
        </Button>
        <Button
          onClick={handleClick}
          className={`home-panel__btn-group__btn ${
            activeCategory === 'mypolls'
              ? 'home-panel__btn-group__btn--active'
              : ''
          }`}
        >
          My polls
        </Button>
      </Button.Group>
      <div className="home-panel__list">
        {
          // Conditional rendering of poll categories and pass their ids
          activeCategory === 'unanswered'
            ? unansweredPollIds.map(id => {
                return <Poll key={id} id={id} />;
              })
            : activeCategory === 'answered'
            ? answeredPollIds.map(id => {
                return <Poll key={id} id={id} />;
              })
            : userPollIds.map(id => {
                return <Poll key={id} id={id} />;
              })
        }
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, polls }) {
  // Filter polls by answered and unanswered by the authed user
  const answeredPolls = Object.fromEntries(
    Object.entries(polls).filter(([key, value]) =>
      value.answeredBy.includes(authedUser.id)
    )
  );
  const unansweredPolls = Object.fromEntries(
    Object.entries(polls).filter(
      ([key, value]) =>
        !value.answeredBy.includes(authedUser.id) &&
        !value.author.id.includes(authedUser.id)
    )
  );
  const userPolls = Object.fromEntries(
    Object.entries(polls).filter(([key, value]) =>
      value.author.id.includes(authedUser.id)
    )
  );

  return {
    authedUser,
    // Extract the ids of both types of polls to map over in the UI
    answeredPollIds: Object.keys(answeredPolls),
    unansweredPollIds: Object.keys(unansweredPolls),
    userPollIds: Object.keys(userPolls),
  };
}

export default connect(mapStateToProps)(HomePanel);
