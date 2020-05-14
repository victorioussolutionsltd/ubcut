import React, {Component} from 'react';
import {Share, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Player from 'react-native-yt-player';
import urlParser from 'js-video-url-parser';

class PlayerScreen extends Component {
  constructor(props) {
    super(props);

    // const parsedUrl = youtube.parse(props.link);

    const parsedUrl = urlParser.parse('https://youtu.be/wmMwRubEE_A');

    if (parsedUrl.provider === 'youtube') {
      this.state = {
        link: props.link,
        videoId: parsedUrl.id,
      };
    }
  }

  timeChanged = (time) => {
    this.setState({
      link: 'https://youtu.be/' + this.state.videoId + '?t=' + Math.round(time),
    });
  };

  pauseVideo = () => {
    this.player.pauseVideo();
  };

  onFullScreen = (fullScreen) => {
    console.log('fullscreen ', fullScreen);
  };

  onShare = async () => {
    const {link} = this.state;

    this.pauseVideo();

    try {
      const result = await Share.share({
        message: link,
        link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert('Url is not available. ' + error);
    }
  };

  render() {
    const {link, videoId} = this.state;
    const {onCancel} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight onPress={onCancel}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onShare}>
            <Text style={styles.button}>Share</Text>
          </TouchableHighlight>
        </View>
        <Player
          ref={(ref) => {
            this.player = ref;
          }}
          loop
          topBar={TopBar}
          videoId={videoId}
          autoPlay={false}
          onFullScreen={this.onFullScreen}
          onStart={() => console.log('onStart')}
          onPlaying={this.timeChanged}
          onEnd={() => alert('on End')}
        />
        <Text style={styles.link}>{link}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'black',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
    fontSize: 20,
    color: 'white',
  },
  link: {
    textAlign: 'center',
    padding: 15,
    fontSize: 17,
    color: 'white',
  },
});

const TopBar = ({play, fullScreen}) => (
  <View
    style={{
      alignSelf: 'center',
      position: 'absolute',
      top: 0,
    }}>
    <Text style={{color: '#FFF'}}>Share the timestamp</Text>
  </View>
);

export default PlayerScreen;
