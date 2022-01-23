import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TagCard from '../components/TagCard';
import * as tagsActions from '../redux/actions/tagsActions';
import useStyle from './Tags.style';

function Tags() {
  const classes = useStyle();
  const dispatch = useDispatch();

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
      <Typography variant="h2">Tags</Typography>
      <Grid container spacing={2} className={classes.cardsContainer}>{renderTagCards}</Grid>
    </div>
  );
}

export default Tags;
