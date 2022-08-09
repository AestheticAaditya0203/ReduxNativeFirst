import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store/index';
import PostList from './src/components/PostList';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <PostList />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
