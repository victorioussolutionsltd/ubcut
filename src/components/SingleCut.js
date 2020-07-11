import React from 'react';
import {Text, View} from 'react-native';

import {convertToTime} from '../helpers/youtubeParser';

class SingleCut extends React.Component {
  onTap = () => {
    const {item, onPress} = this.props;
    onPress(item);
  };

  render() {
    const {item, onPress} = this.props;
    const {key} = item;

    return (
      <View style={{flex: 1}}>
        <Text style={{color: 'red'}}>{key}</Text>
      </View>
    );
  }
}

export default SingleCut;
