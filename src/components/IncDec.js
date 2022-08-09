import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {incNumber, decNumber} from '../actions/CountActions';

const IncDec = () => {
  const dispatch = useDispatch();

  const myState = useSelector(state => state.count);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(incNumber());
        }}>
        <Text>Increase</Text>
      </TouchableOpacity>

      <Text>{myState}</Text>

      <TouchableOpacity
        onPress={() => {
          dispatch(decNumber());
        }}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IncDec;
