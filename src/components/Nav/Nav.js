import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import usePath from '../usePath';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as NavButton } from '../../images/navButton.svg';
import useStyle from './Nav.style';

function Nav() {
  const classes = useStyle();
  const path = usePath();
  const navigate = useNavigate();

  const keyword = useSelector((state) => state.search.keyword);

  const shouldActiveTab = useCallback((tabValues) => tabValues.includes(path[0]), [path]);

  const toHome = useCallback(() => {
    // return if already in home or result page
    if (!path[0] || path[0] === 'result') return;
    // redirect to result page if previous result haven't empty yet
    if (keyword) {
      navigate(`/result/${keyword}`);
    }
    navigate('/');
  }, [keyword, navigate, path]);

  const toTag = useCallback(() => {
    // return if already in tags page
    if (path[0] === 'tag') return;

    navigate('/tags');
  }, [navigate, path]);

  // console.log(path, ['tag'].includes(path[0]));

  return (
    <div>
      <div className={classes.logo}><Logo /></div>
      <List className={classes.navButtons} component="nav">
        <ListItemButton onClick={toHome} selected={shouldActiveTab(['', 'result'])}><NavButton /></ListItemButton>
        <ListItemButton onClick={toTag} selected={shouldActiveTab(['tags'])}><NavButton /></ListItemButton>
      </List>
    </div>
  );
}
export default Nav;
