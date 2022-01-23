import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import usePath from '../components/usePath';
import useStyles from './Layout.style';
import Nav from '../components/Nav';
import FollowersTab from '../components/FollowersTab';

function Layout() {
  const theme = useTheme();
  const path = usePath();
  const isTagsPage = path[0] === 'tags';
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useStyles({ isTagsPage });

  const showFriendsTab = useMemo(() => isLargeScreen && !isTagsPage, [isLargeScreen, isTagsPage]);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.navBar}><Nav /></div>
      <div className={classes.outlet}><Outlet /></div>
      {showFriendsTab && <div className={classes.friendsTab}><FollowersTab /></div>}
    </div>
  );
}

export default Layout;
