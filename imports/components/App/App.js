import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../state/reducers';
import OceanBillEditor from '../OceanBillEditor/OceanBillEditor';

export const store = createStore(reducers, {});

const App = () => (
  <Provider store={store}>
    <div>
      <OceanBillEditor />
    </div>
  </Provider>
);

export default App;
