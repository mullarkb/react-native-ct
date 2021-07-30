/**
 *  Just some notes on the stucture of the app.
 *
 *  I've tried to emulate how I would structure a larger app,
 *  touching on reusable components, redux, utility functions etc.
 *
 *  If an app has multiple screens I would consider another "pages" or "screens" directory
 *  In that case "views" would manage the categories of those screens i.e. before and after login
 *  I felt that was overkill for the purpose of this, and that a modal was sufficient for the product info screen.
 *
 *  I hope navigating the code is fairly self explanatory! Any questions feel free to ask :)
 *
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
