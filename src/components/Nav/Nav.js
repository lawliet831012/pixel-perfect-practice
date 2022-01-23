import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import usePath from '../usePath';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as NavButton } from '../../images/navButton.svg';
import useStyle from './Nav.style';

function Nav() {
  const classes = useStyle();
  const path = usePath();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const keyword = useSelector((state) => state.search.keyword);
  const pageSize = useSelector((state) => state.search.pageSize);

  const shouldActiveTab = useCallback((tabValues) => tabValues.includes(path[0]), [path]);

  const toHome = useCallback(() => {
    // return if already in home or result page
    if (!path[0] || path[0] === 'result') return;
    // redirect to result page if previous result haven't empty yet
    if (keyword && pageSize) {
      navigate(`/result/${pageSize}/${keyword}`);
    }
    navigate('/');
  }, [keyword, navigate, pageSize, path]);

  const toTag = useCallback(() => {
    // return if already in tags page
    if (path[0] === 'tag') return;

    navigate('/tags');
  }, [navigate, path]);

  return (
    <div className={classes.container}>
      <div className={classes.logo}><Logo /></div>
      <div className={classes.navBar}>
        <List className={classes.navButtons} component="nav">
          <ListItemButton onClick={toHome} className={shouldActiveTab(['', 'result']) ? classes.active : ''}>
            <NavButton />
            {!isMobile && shouldActiveTab(['', 'result']) && <p>Home</p>}
          </ListItemButton>
          <ListItemButton onClick={toTag} className={shouldActiveTab(['tags']) ? classes.active : ''}>
            <NavButton />
            {!isMobile && shouldActiveTab(['tags']) && <p>Tags</p>}
          </ListItemButton>
        </List>
      </div>

    </div>
  );
}
export default Nav;
