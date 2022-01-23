import React, { useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import useCheckScreen from '../components/useCheckScreen';
import InfiniteLoading from '../components/InfiniteLoading/InfiniteLoading';
import ResultCard from '../components/ResultCard';
import * as searchActions from '../redux/actions/searchActions';
import PageBackBar from '../components/PageBackBar';
import useStyle from './Search.style';

function Search() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { pageSize, keyword } = params;
  const isMobile = useCheckScreen('md', 'down');

  const search = useSelector((state) => state.search);
  const { result, resultPage, keyword: prevKeyword } = search;

  useEffect(() => {
    // navigate back to home page if params is not valid
    if (Number.isNaN(pageSize) || !keyword) navigate('/');
    // if there are no cache data in redux, then initialize search result
    if (keyword !== prevKeyword) dispatch(searchActions.initail({ pageSize, keyword }));
  }, [dispatch, keyword, navigate, pageSize, prevKeyword, resultPage]);

  const onLoadMore = useCallback(() => dispatch(searchActions.next()), [dispatch]);

  const renderResultCrads = useMemo(() => result.map(({
    avater, name, username, id,
  }) => (
    <ResultCard
      key={id}
      avater={avater}
      name={name}
      username={username}
    />
  )), [result]);

  return (
    <div className={classes.container}>
      <PageBackBar text={isMobile ? 'Home Page' : 'Results'} />
      {isMobile && <Typography variant="h2">Results</Typography>}
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        spacing={0}
        className={classes.cardsContainer}
      >
        {!resultPage ? <CircularProgress color="inherit" /> : renderResultCrads}
      </Grid>
      <InfiniteLoading onLoadMore={onLoadMore} isEndOfData={resultPage < 1} />
    </div>
  );
}

export default Search;
