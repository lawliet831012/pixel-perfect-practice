import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListItemButton from '@mui/material/ListItemButton';

import useCheckScreen from '../useCheckScreen';
import usePath from '../usePath';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as NavButton } from '../../images/navButton.svg';
import useStyle, { StyledNav } from './Nav.style';

function Nav() {
  const classes = useStyle();
  const path = usePath();
  const navigate = useNavigate();
  const isMobile = useCheckScreen('md', 'down');

  const keyword = useSelector((state) => state.search.keyword);
  const pageSize = useSelector((state) => state.search.pageSize);
  const tags = useSelector((state) => state.tags);

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
        <StyledNav component="nav">
          <ListItemButton onClick={toHome} className={shouldActiveTab(['', 'result']) ? classes.active : ''}>
            <NavButton />
            {!isMobile && shouldActiveTab(['', 'result']) && <p>Home</p>}
          </ListItemButton>
          <ListItemButton onClick={toTag} className={shouldActiveTab(['tags']) ? classes.active : ''}>
            <span className={tags.length ? '' : classes.noTagData} />
            <NavButton />
            {!isMobile && shouldActiveTab(['tags']) && <p>Tags</p>}
          </ListItemButton>
        </StyledNav>
      </div>

    </div>
  );
}
export default Nav;
