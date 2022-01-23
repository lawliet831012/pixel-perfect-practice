import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import useStyle from './TagCard.style';

function TagCard({ count, name }) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div><Typography>{name}</Typography></div>
      <Typography>{name}</Typography>
      <Typography>
        {count}
        {' '}
        result
      </Typography>
    </div>
  );
}

export default TagCard;

TagCard.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
