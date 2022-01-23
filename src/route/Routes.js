import React from 'react';
import { Routes as RouteWrapper, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Tags from '../pages/Tag';

function Routes() {
  return (
    <RouteWrapper>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/result/:pageSize/:keyword" element={<Search />} />
        <Route path="/tags" element={<Tags />} />
      </Route>
    </RouteWrapper>
  );
}

export default Routes;
