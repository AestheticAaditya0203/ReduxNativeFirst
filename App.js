import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from './src/screens/PostScreen';
import CommentScreen from './src/screens/CommentScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Post" component={PostScreen} />
          <Stack.Screen name="Comment" component={CommentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
