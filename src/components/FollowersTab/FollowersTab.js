import React, {
  useState, useCallback, useMemo, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import InfiniteLoading from '../InfiniteLoading/InfiniteLoading';
import * as followerActions from '../../redux/actions/followerActions';
import FollowerCard from '../FollowerCard';
import TabPanel from './TabPanel';
import useStyle from './FollowersTab.style';

function Friends() {
  const classes = useStyle();
  const dispatch = useDispatch();

  const followers = useSelector((state) => state.follower.followers);
  const followersPage = useSelector(((state) => state.follower.followersPage));
  const friends = useSelector((state) => state.follower.friends);
  const friendsPage = useSelector(((state) => state.follower.friendsPage));

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // get follower data
    dispatch(followerActions.initail());
  }, [dispatch]);

  const onTabChange = useCallback((event, newValue) => {
    setTabValue(newValue);
  }, []);

  const onFollowerLoadMore = useCallback(() => dispatch(followerActions.next('followers')), []);
  const onFriendsLoadMore = useCallback(() => dispatch(followerActions.next('friends')), []);

  const renderFollower = useMemo(() => followers.map(({
    avater, isFollowing, name, username, id,
  }) => (
    <FollowerCard
      key={id}
      avater={avater}
      isFollowing={isFollowing}
      name={name}
      username={username}
    />
  )), [followers]);

  const renderFriend = useMemo(() => friends.map(({
    avater, isFollowing, name, username, id,
  }) => (
    <FollowerCard
      key={id}
      avater={avater}
      isFollowing={isFollowing}
      name={name}
      username={username}
    />
  )), [friends]);

  return (
    <div className={classes.container}>
      <Tabs value={tabValue} onChange={onTabChange} aria-label="basic tabs example">
        <Tab label="Followers" />
        <Tab label="Followering" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        {renderFollower}
        <InfiniteLoading onLoadMore={onFollowerLoadMore} isEndOfData={followersPage === -1} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {renderFriend}
        <InfiniteLoading onLoadMore={onFriendsLoadMore} isEndOfData={friendsPage === -1} />
      </TabPanel>
    </div>
  );
}
export default Friends;
