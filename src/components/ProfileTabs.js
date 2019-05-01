import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import UserProfileContainer from '../containers/UserProfileContainer';
import RepositoriesContainer from '../containers/RepositoriesContainer';
import FollowersContainer from '../containers/FollowersContainer';

const ProfileTabs = (props) => {
  const { username } = props;

  const tabs = [
    {
      path: `/${username}`,
      title: 'Profile',
      component: UserProfileContainer,
    },
    {
      path: `/${username}/repos`,
      title: 'Repos',
      component: RepositoriesContainer,
    },
    {
      path: `/${username}/followers`,
      title: 'Followers',
      component: FollowersContainer,
    },
  ];

  return (
    <div className="tabs">
      <Nav tabs>
        {tabs.map((tab) => (
          <NavItem key={tab.path}>
            <NavLink tag={RRNavLink} exact to={tab.path}>
              {tab.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <Switch>
        {tabs.map((tab) => (
          <Route
            key={tab.path}
            exact
            path={tab.path}
            render={() => <tab.component username={username} />}
          />
        ))}
      </Switch>
    </div>
  );
};

ProfileTabs.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileTabs;
