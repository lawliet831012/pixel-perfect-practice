import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import useStyle from './ResultCard.style';

function ResultCard({
  avater, name, username,
}) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <img src={avater} alt={name} />
      <Typography>This is a title</Typography>
      <Typography>
        by
        {' '}
        {username}
      </Typography>
    </div>
  );
}

export default ResultCard;

ResultCard.propTypes = {
  avater: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
