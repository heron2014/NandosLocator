import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import store from './redux/store';
import { Container } from './common';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
