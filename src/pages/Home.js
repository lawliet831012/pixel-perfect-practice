import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import useStyle from './Tags.style';

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
        <TextField variant="outlined" onChange={onValueChange} value={searchValue} />

        <Typography variant="h2"># Of Results Per Page</Typography>

        <Typography variant="h3">
          {resultNumber}
          {' '}
          results
        </Typography>

        <Slider
          step={null}
          value={sliderValue}
          onChange={onSliderChange}
          marks={sliderMarker}
        />
        <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}

export default Home;
