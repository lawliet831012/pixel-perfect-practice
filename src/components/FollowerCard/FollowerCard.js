import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import useStyle from './FollowerCard.style';

function FollowerCard({
  avater, isFollowing, name, username,
}) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <img src={avater} alt={name} />

      <div>
        <Typography>{name}</Typography>
        <Typography>
          @
          {username}
        </Typography>
      </div>

      <Button>{isFollowing ? 'Following' : 'Follow'}</Button>
    </div>
  );
}

export default FollowerCard;

FollowerCard.propTypes = {
  avater: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
