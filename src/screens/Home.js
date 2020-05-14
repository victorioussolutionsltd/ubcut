import React, {Component} from 'react';
import {Modal, TouchableHighlight, Text, StyleSheet, View} from 'react-native';
import PlayerScreen from './PlayerScreen';
import RNExitApp from 'react-native-exit-app';

class ModalExample extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onCancel = () => {
    RNExitApp.exitApp();
  };

  render() {
    return (
      <View>
        <Modal
          presentationStyle="pageSheet"
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onDismiss={() => {
            alert('wow');
          }}
          onRequestClose={this.onCancel}>
          <PlayerScreen onCancel={this.onCancel} />
        </Modal>
      </View>
    );
  }
}

export default ModalExample;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 60,
    backgroundColor: 'black',
  },
});
