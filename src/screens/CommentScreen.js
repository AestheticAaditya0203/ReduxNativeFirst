import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import PostApi from '../api/PostApi';
import {useDispatch} from 'react-redux';
import {TestScheduler} from 'jest';

const CommentScreen = ({route}) => {
  const [results, setResults] = useState([]);
  const {id} = route.params;

  const getResultAPI = async () => {
    const response = await PostApi.get(`posts/${id}/comments`);
    setResults(response.data);
  };

  useEffect(() => {
    getResultAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{results.postId}</Text>
      <FlatList
        data={results}
        keyExtractor={result => {
          result.id;
        }}
        renderItem={({item}) => {
          return (
            <>
              <Text style={styles.text}>
                {item.name}-{item.email}
              </Text>
              <Text>{item.body}</Text>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 2,
  },
  text: {
    fontSize: 25,
  },
});

export default CommentScreen;
