import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import useCheckScreen from '../components/useCheckScreen';
import usePath from '../components/usePath';
import useStyles from './Layout.style';
import Nav from '../components/Nav';
import FollowersTab from '../components/FollowersTab';

function Layout() {
  const path = usePath();
  const isTagsPage = path[0] === 'tags';
  const isHomePage = path[0] === '';
  const isLargeScreen = useCheckScreen('lg', 'up');
  const isMobile = useCheckScreen('md', 'down');
  const classes = useStyles({ isTagsPage });

  const showNav = useMemo(() => !isMobile || isHomePage, [isHomePage, isMobile]);

  const showFriendsTab = useMemo(() => isLargeScreen && !isTagsPage, [isLargeScreen, isTagsPage]);

  return (
    <div className={classes.pageContainer}>
      {showNav && <div className={classes.navBar}><Nav /></div>}
      <div className={classes.outlet}><Outlet /></div>
      {showFriendsTab && <div className={classes.friendsTab}><FollowersTab /></div>}
    </div>
  );
}

export default Layout;
