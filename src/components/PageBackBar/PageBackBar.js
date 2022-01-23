import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import { ReactComponent as Arrow } from '../../images/arrow.svg';
import useStyle from './PageBackBar.style';

function PageBackBar({ text }) {
  const classes = useStyle();
  const navigate = useNavigate();

  const toHome = useCallback(() => navigate('/'), [navigate]);

  return (
    <div className={classes.container}>
      <IconButton onClick={toHome}><Arrow /></IconButton>

      {text}
    </div>
  );
}

export default PageBackBar;

PageBackBar.propTypes = {
  text: PropTypes.string,
};

PageBackBar.defaultProps = {
  text: '',
};
