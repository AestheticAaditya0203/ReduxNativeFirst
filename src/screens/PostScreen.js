import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from '../store/index'

const PostScreen = () => {
  return (
    <View>
      <Provider store={store}>
        <PostList />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostScreen;
