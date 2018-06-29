import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import StaticRouter from 'react-router-dom/StaticRouter';
import './client.css';
import routes from './routes';
import store from './store';

const App = ({ data }) => (
  <Provider store={store()}>
    <BrowserRouter>
      <After data={data} routes={routes} />
    </BrowserRouter>
  </Provider>
);


ensureReady(routes).then(afterData => {
  return hydrate(
    <App data={afterData} />,
    document.getElementById('root')
  )
})

// for ssr
export const AppStatic = ({ data }) => (
  <Provider store={store()}>
    <StaticRouter>
      <After data={data} routes={routes} />
    </StaticRouter>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}
