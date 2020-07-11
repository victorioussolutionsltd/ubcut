import React, {useEffect} from 'react';
import {Linking, SafeAreaView} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import Top from '../components/Top';
import Content from '../components/Content';
import {styles} from '../styles';
import {ScrollView} from 'react-native-gesture-handler';
import {readUrl} from '../helpers/youtubeParser';

import Shared from '../components/Shared/Shared';
import {connect} from 'react-redux';
import * as ACTIONS from '../actions';

const Home = ({link, videoChanged}) => {
  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl !== null) {
        let url = initialUrl.replace('u2bcut://open-url?url=', '');

        url = decodeURIComponent(url.replace(/\s/g, ''));
        readUrl(url)
          .then((parsedObject) => {
            videoChanged(parsedObject);
          })
          .catch(() => {
            alert('You are trying to open a non-video resource');
          });
      }
    };

    getUrlAsync();
  });

  const onCancel = () => RNExitApp.exitApp();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {link === null ? (
          <Top onCancel={onCancel} videoChanged={videoChanged} />
        ) : (
          <Content onCancel={onCancel} />
        )}
        {/* <Shared shared={shared} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  link: state.youtube.link,
  videoId: state.youtube.videoId,
});

const mapDispatchToProps = (dispatch) => ({
  videoChanged: (parsedObject) => dispatch(ACTIONS.videoChanged(parsedObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
