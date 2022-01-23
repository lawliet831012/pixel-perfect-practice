import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import useStyle from './InfiniteLoading.style';

function InfiniteLoading({ onLoadMore, isEndOfData }) {
  const classes = useStyle();
  return isEndOfData ? '' : (
    <div className={classes.container}>
      <Button onClick={onLoadMore}>More</Button>
    </div>
  );
}

export default InfiniteLoading;

InfiniteLoading.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isEndOfData: PropTypes.bool.isRequired,
};
