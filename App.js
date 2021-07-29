/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import MainView from './src/views/MainView'
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return (
      <Provider store={store}>
        <MainView />
      </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
