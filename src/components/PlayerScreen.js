import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Player from 'react-native-yt-player';
import {styles} from '../styles';
class PlayerScreen extends Component {
  timeChanged = (time) => {
    this.props.onTimeChanged(Math.floor(time));
  };

  pauseVideo = () => {
    this.props.player.current.pauseVideo();
  };

  onStart = () => {
    const {player, startTime} = this.props;
    player.current.seekTo(startTime);
  };

  render() {
    const {player, link, videoId, onStateChange} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Player
            ref={player}
            loop
            videoId={videoId}
            autoPlay={true}
            onFullScreen={this.onFullScreen}
            onStateChange={onStateChange}
            onPlaying={this.timeChanged}
            showFullScreenButton={false}
            onStart={this.onStart}
          />
        </View>

        <Text style={styles.link}>{link}</Text>
      </View>
    );
  }
}
export default React.forwardRef((props, ref) => (
  <PlayerScreen player={ref} {...props} />
));
