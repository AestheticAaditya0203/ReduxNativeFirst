import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.container}> Welcome to Posts.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    color: 'black',
  },
});

export default Header;
