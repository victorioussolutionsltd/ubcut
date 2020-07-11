import React from 'react';
import PressButton from './PressButton';
import {readUrl} from '../helpers/youtubeParser';
import {Clipboard, View} from 'react-native';

export default function Top({onCancel, videoChanged}) {
  const openClipboard = async () => {
    const url = await Clipboard.getString();
    readUrl(url)
      .then((parsedObject) => videoChanged(parsedObject))
      .catch(() => {
        alert('Clipboard does not contain a valid youtube link');
      });
  };
  return (
    <>
      <PressButton text="Close" onPress={onCancel} />
      <View style={{flex: 1, alignItems: 'center'}}>
        <PressButton text="Press to use clipboard" onPress={openClipboard} />
      </View>
    </>
  );
}
