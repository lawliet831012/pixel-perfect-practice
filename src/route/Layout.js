import React from 'react';
import { Outlet } from 'react-router-dom';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import useStyles from './Layout.style';
import Nav from '../components/Nav';
import FollowersTab from '../components/FollowersTab';

function Layout() {
  const theme = useTheme();
  const showFriendsTab = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.navBar}><Nav /></div>
      <div className={classes.outlet}><Outlet /></div>
      {showFriendsTab && <div className={classes.friendsTab}><FollowersTab /></div>}
    </div>
  );
}

export default Layout;
