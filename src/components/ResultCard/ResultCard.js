import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import useStyle from './ResultCard.style';

function ResultCard({
  avater, name, username,
}) {
  const classes = useStyle();

  const [fallbackIMGSrc, setFallbackIMGSrc] = useState(undefined);
  const [isIMGLoaded, setIsIMGLoaded] = useState(false);

  // use served img if link is not accessible
  const onIMGError = useCallback(() => {
    setFallbackIMGSrc('/images/sampleResult.png');
  }, []);

  const onIMGLoad = useCallback(() => setIsIMGLoaded(true), []);

  return (
    <div className={classes.container}>
      <div className={classes.resultIMG}>
        {!isIMGLoaded && <Skeleton variant="rectangular" height={146} />}
        <img
          onLoad={onIMGLoad}
          onError={onIMGError}
          src={fallbackIMGSrc || avater}
          alt={name}
        />
      </div>

      <Typography variant="body1">This is a title</Typography>
      <Typography variant="body2">
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
