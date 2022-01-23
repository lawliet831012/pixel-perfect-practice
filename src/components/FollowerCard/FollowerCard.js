import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import useStyle, { StyledButton } from './FollowerCard.style';

function FollowerCard({
  avater, isFollowing, name, username,
}) {
  const classes = useStyle();

  const [fallbackIMGSrc, setFallbackIMGSrc] = useState(undefined);
  const [isIMGLoaded, setIsIMGLoaded] = useState(false);

  // use served img if link is not accessible
  const onIMGError = useCallback(() => {
    setFallbackIMGSrc('/images/sampleAvater.png');
  }, []);

  const onIMGLoad = useCallback(() => setIsIMGLoaded(true), []);

  return (
    <div className={classes.container}>
      <div className={classes.avater}>
        {!isIMGLoaded && <CircularProgress color="inherit" />}
        <img
          onLoad={onIMGLoad}
          onError={onIMGError}
          src={fallbackIMGSrc || avater}
          alt={name}
        />
      </div>

      <div className={classes.name}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">
          @
          {username}
        </Typography>
      </div>

      <StyledButton variant={isFollowing ? 'contained' : 'outlined'}>{isFollowing ? 'Following' : 'Follow'}</StyledButton>
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
