import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CommentList from '../components/CommentList';

const CommentScreen = ({navigation}) => {
  console.log(navigation);
  const id = navigation.getParams('id');
  console.log(id);

  return (
    <View>
      <CommentList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CommentScreen;
