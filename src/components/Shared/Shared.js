import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
export default class Shared extends Component {
  render() {
    const {shared} = this.props;
    return (
      <FlatList
        style={{height: 700}}
        data={shared}
        renderItem={({item}) => <Item description="wowowowo" number={5} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
