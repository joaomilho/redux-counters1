import React from 'react';
import AppContainer from '../views/AppContainer';
import fs from 'fs';
import buildStore from '../store/buildStore';

const index = fs.readFileSync('index.html', {encoding: 'utf-8'});

export default function render() {
  const initialState = {
    count: 0
  };

  let store = buildStore(initialState);
  let componentHtml = React.renderToString(<AppContainer store={store}/>);
  let html = index
    .replace('{{component}}', componentHtml)
    .replace('{count: 0}', JSON.stringify(store.getState()));
  return html;
}
