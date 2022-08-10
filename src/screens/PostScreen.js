import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Provider} from 'react-redux';
import store from '../store/index';
import PostList from '../components/PostList';
import Header from '../components/Header';

const PostScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <Provider store={store}>
        <PostList />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostScreen;
