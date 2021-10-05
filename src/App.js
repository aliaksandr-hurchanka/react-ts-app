import React from "react";
import { store } from './store';
import { Provider } from 'react-redux';
import { ComponentContainer } from './container';

const App = () => (
    <Provider store={store}>
        <ComponentContainer />
    </Provider>
);

export default App;
