import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';

import useCheckScreen from '../components/useCheckScreen';
import useStyle, { StyledButton, StyledInput } from './Home.style';

const sliderMarker = [{
  value: 0,
  label: '3',
},
{
  value: 18,
  label: '6',
},
{
  value: 36,
  label: '9',
},
{
  value: 54,
  label: '12',
},
{
  value: 72,
  label: '15',
},
{
  value: 100,
  label: '50',
}];

const getResultNumber = function getResultNumberFromSliderMarkerConstants(sliderValue) {
  return sliderMarker.find((marker) => marker.value === sliderValue);
};

function Home() {
  const classes = useStyle();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [sliderValue, setSliderValue] = useState(0);
  const isMobile = useCheckScreen('md', 'down');

  const onValueChange = useCallback(({ currentTarget }) => {
    setSearchValue(currentTarget.value);
  }, []);

  const onSliderChange = useCallback((event, newValue) => {
    setSliderValue(newValue);
  }, []);

  const resultNumber = useMemo(() => getResultNumber(sliderValue).label, [sliderValue]);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    if (!searchValue) return;
    navigate(`/result/${resultNumber}/${searchValue}`);
  }, [navigate, resultNumber, searchValue]);

  return (
    <div className={classes.container}>
      <Typography variant="h2">Search</Typography>
      <form onSubmit={onSubmit}>
        <StyledInput
          variant="outlined"
          fullWidth
          placeholder="keyword"
          autoComplete="off"
          onChange={onValueChange}
          value={searchValue}
        />

        {!isMobile && <Divider />}

        <Typography variant="h2"># Of Results Per Page</Typography>

        <Typography variant="body1">
          <span className={classes.resultNumber}>{resultNumber}</span>
          {' '}
          results
        </Typography>

        <Slider
          step={null}
          value={sliderValue}
          onChange={onSliderChange}
          marks={sliderMarker}
        />

        <Divider />

        <StyledButton type="submit" fullWidth>SEARCH</StyledButton>

      </form>
    </div>
  );
}

export default Home;
