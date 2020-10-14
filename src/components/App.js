import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateLink from './Link/CreateLink';
import Login from './Link/Login';
import ForgotPassword from './Link/ForgotPassword';
import SearchLinks from './Link/SearchLinks';
import LinkList from './Link/LinkList';
import LinkDetail from './Link/LinkDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path ="/create" component={CreateLink} />
      <Route path ="/login" component={Login} />
      <Route path ="/forgot" component={ForgotPassword} />
      <Route path ="/search" component={SearchLinks} />
      <Route path ="/top" component={LinkList} />
      <Route path ="/new/:page" component={LinkList} />
      <Route path ="/link/:linkid" component={LinkDetail} />





      </Switch>
    </BrowserRouter>
  );
}

export default App;
