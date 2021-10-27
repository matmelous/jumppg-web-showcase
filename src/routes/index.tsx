import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import StudentDashboard from '../Pages/StudentDashboard/index.js';
import { RoutesCadastroAluno } from './RoutesCadastroAluno';
import AdminDashboard from '../Pages/AdminDashboard';

import SendRecoveryEmail from '../Pages/SendRecoveryEmail';
import CheckRecoveryToken from '../Pages/CheckRecoveryToken/index.js';
import CompanyDashboard from '../Pages/CompanyDashboard';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/estudante" exact component={StudentDashboard} />
        <Route
          path="/recuperar-senha/enviar"
          exact
          component={SendRecoveryEmail}
        />
        <Route path="/recuperar-senha/" exact component={CheckRecoveryToken} />
        <Route path="/admin" exact component={AdminDashboard} />;
        <Route path="/empresa" exact component={CompanyDashboard} />;
        <RoutesCadastroAluno />
      </Switch>
    </BrowserRouter>
  );
};
