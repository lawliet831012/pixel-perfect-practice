import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './InfiniteLoading.style';

function InfiniteLoading({ onLoadMore, isEndOfData }) {
  // const classes = useStyle();
  return !isEndOfData && (
  <StyledButton onClick={onLoadMore}>More</StyledButton>
  );
}

export default InfiniteLoading;

InfiniteLoading.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isEndOfData: PropTypes.bool.isRequired,
};
