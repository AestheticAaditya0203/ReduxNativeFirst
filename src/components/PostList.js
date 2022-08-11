import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fetchPosts} from '../actions/CountActions';

const PostList = () => {
  const dispatch = useDispatch();
  const results = useSelector(state => state.posts.postList);
  //console.log(results);
  //console.log('nav',navigation);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Comment', {id: item.id});
                }}>
                <Text style={styles.text}>
                  {item.title}
                </Text>
              </TouchableOpacity>
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

export default PostList;
