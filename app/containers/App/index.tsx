import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
import Home from 'containers/Home';
import { isLogin } from './utils';
import history from 'utils/history';

function App() {
  useEffect(() => {
    if (isLogin()) {
      history.push('/game-of-thrones');
    } else {
      history.push('/login');
    }
  }, []);

  return (
    <>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/game-of-thrones" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </>
  );
}
export default hot(App);
