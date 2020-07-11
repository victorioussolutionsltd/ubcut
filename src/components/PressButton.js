import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import PropTypes from 'prop-types';

class PressButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {text, disabled, fontSize, onLongPress} = this.props;

    if (disabled) {
      return (
        <TouchableOpacity
          disabled
          onPress={this.props.onPress}
          onLongPress={onLongPress}>
          <Text style={[styles.button, {color: 'grey'}, {fontSize}]}>
            {text}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={[styles.button, {fontSize}]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

PressButton.defaultProps = {
  fontSize: 18,
};

PressButton.propTypes = {
  fontSize: PropTypes.number,
  onLongPress: PropTypes.func,
};
export default PressButton;
