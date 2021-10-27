import React from 'react';
import { Route } from 'react-router-dom';
import AdminDashboard from '../Pages/AdminDashboard';

export const RoutesAdmin: React.FC = () => {
  return <Route path="/admin" exact component={AdminDashboard} />;
};
