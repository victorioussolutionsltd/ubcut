import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Item({description, number}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
      <View style={styles.cuts}>
        <Text style={styles.text}>{number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cuts: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {color: 'white'},
});
