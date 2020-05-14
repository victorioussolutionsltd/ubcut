import React from 'react';
import {View, Button} from 'react-native';

export default ShareButton = (props) => {
  return (
    <View style={{marginTop: 50}}>
      <Button onPress={props.onPress} title="Share" />
    </View>
  );
};
