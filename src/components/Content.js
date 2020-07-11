import React, {useRef} from 'react';
import StepIndicator from 'react-native-step-indicator';
import customStyles from './../customStyles';
import {getLabels} from '../helpers/getLabels';
import Cuts from '../components/Cuts';
import PressButton from '../components/PressButton';
import PlayerScreen from './PlayerScreen';
import {View} from 'react-native';
import {styles} from '../styles';
import {shareText} from '../helpers/shareText';
import {getLinks} from '../helpers/youtubeParser';
import {connect} from 'react-redux';

import * as ACTIONS from '../actions';

const Content = ({
  currentTime,
  currentTimeChanged,
  cuts,
  removeLast,
  videoId,
  link,
  playButtonName,
  addCutCallback,
  playingStatusChanged,
  onCancel,
  onShared,
  startTime,
}) => {
  const player = useRef();

  const pressedTimeline = (number) => {
    if (number < cuts.length) {
      const secondTimeStamp = cuts[number].key;
      player.current.seekTo(secondTimeStamp).then(() => {
        player.current.playVideo();
      });
    }
  };

  const shareCuts = (cuts) => {
    const text = getLinks({
      videoId,
      secondsArr: cuts.map((item) => item.key),
    });

    player.current.pauseVideo();
    shareText(text).then((status) => {
      status === 'Dismissed' && cuts.length === 1
        ? removeLast()
        : onShared({sharedVideo: {videoId, link, cuts}});
    });
  };

  const onShare = async () => {
    cuts.length === 0 ? saveCut(shareCuts) : shareCuts(cuts);
  };

  const saveCut = (callback = (nothing) => {}) => {
    addCutCallback(currentTime, callback);
  };

  const addCut = () => {
    saveCut();
  };

  const updateControls = () => {
    if (playButtonName === 'Play') {
      player.current.playVideo();
      playingStatusChanged('Pause');
    } else {
      player.current.pauseVideo();
      playingStatusChanged('Play');
    }
  };

  const onStateChange = (status) => {
    console.log('Changed' + JSON.stringify(status));
  };

  return (
    <>
      <View style={styles.buttonsContainer}>
        <PressButton text="Cancel" onPress={onCancel} />
        <PressButton text="Share" onPress={onShare} />
      </View>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={cuts.length}
        labels={getLabels(cuts)}
        onPress={pressedTimeline}
      />
      <PlayerScreen
        videoId={videoId}
        link={link}
        player={player}
        onTimeChanged={currentTimeChanged}
        onStateChange={onStateChange}
        startTime={startTime}
      />
      <View style={styles.cuts}>
        <Cuts
          data={cuts}
          onClear={removeLast}
          addCut={addCut}
          playButtonName={playButtonName}
          playPressed={updateControls}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  cuts: state.cuts,
  link: state.youtube.link,
  videoId: state.youtube.videoId,
  currentTime: state.youtube.currentTime,
  playButtonName: state.youtube.playButtonName,
  startTime: state.youtube.startTime,
});

const mapDispatchToProps = (dispatch) => ({
  addCutCallback: (time, callback) =>
    dispatch(ACTIONS.addCutCallback(time, callback)),
  removeLast: () => dispatch(ACTIONS.removeLast()),
  currentTimeChanged: (time) => dispatch(ACTIONS.currentTimeChanged(time)),
  playingStatusChanged: (name) => dispatch(ACTIONS.playingStatusChanged(name)),
  onShared: ({sharedVideo}) => dispatch(ACTIONS.onShared({sharedVideo})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
