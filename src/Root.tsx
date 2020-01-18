import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from '@/components/GlobalStyle';
import App from '@/containers/App';

const Root = () => (
  <>
    <GlobalStyle />
    <HashRouter>
      <Switch>
        <Route exact path={'/'} component={App} />
      </Switch>
    </HashRouter>
  </>
);

export default Root;