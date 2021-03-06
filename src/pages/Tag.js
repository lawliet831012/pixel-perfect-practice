import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import useCheckScreen from '../components/useCheckScreen';
import PageBackBar from '../components/PageBackBar';
import TagCard from '../components/TagCard';
import * as tagsActions from '../redux/actions/tagsActions';
import useStyle from './Tag.style';

function Tags() {
  const classes = useStyle();
  const dispatch = useDispatch();

  const isMobile = useCheckScreen('md', 'down');
  const tags = useSelector((state) => state.tags);

  useEffect(() => {
    if (!tags.length) dispatch(tagsActions.initail());
  }, [dispatch, tags.length]);

  const renderTagCards = useMemo(() => tags.map(({ count, name, id }) => (
    <TagCard
      key={id}
      count={count}
      name={name}
    />
  )), [tags]);

  return (
    <div className={classes.container}>
      {isMobile && <PageBackBar text="Home Page" /> }
      <Typography variant="h2">Tags</Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        {!tags.length ? <CircularProgress color="inherit" /> : renderTagCards}
      </Grid>
    </div>
  );
}

export default Tags;
