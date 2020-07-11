import React, {Component} from 'react';
import {View} from 'react-native';
import PressButton from './PressButton';
import PropTypes from 'prop-types';
import {MAX_CUTS} from '../helpers/getLabels';

const BUTTONS_FONT_SIZE = 15;

class Cuts extends Component {
  render() {
    const {data, onClear, addCut, playButtonName, playPressed} = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <PressButton
            disabled={data.length === 0}
            text="Clear"
            fontSize={BUTTONS_FONT_SIZE}
            onPress={onClear}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {/* <View style={{textAlign: 'center'}}>
              <PressButton text={playButtonName} onPress={playPressed} />
            </View> */}
            <PressButton
              disabled={data.length === MAX_CUTS}
              fontSize={BUTTONS_FONT_SIZE}
              text="Add cut"
              onPress={addCut}
            />
          </View>
        </View>
      </View>
    );
  }
}

Cuts.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func,
  onClear: PropTypes.func,
  onShare: PropTypes.func,
};

export default Cuts;
