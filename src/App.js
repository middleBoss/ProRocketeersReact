import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import ProfileTabs from './components/ProfileTabs';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route
            exact
            path="/"
            component={() => 'Hello! Search github user details by username.'}
          />
          <Route
            path="/:username"
            render={(props) => <ProfileTabs username={props.match.params.username} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  username: PropTypes.string,
  match: PropTypes.object,
};

App.defaultProps = {
  username: null,
  match: null,
};

export default App;
