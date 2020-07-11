import {convertToTime} from './youtubeParser';

export const MAX_CUTS = 5;

export const getLabels = (data) => {
  let keys = data.map((item) => convertToTime(item.key));
  if (keys.length < MAX_CUTS) {
    for (let i = keys.length; i < MAX_CUTS; i++) {
      keys = [...keys, ''];
    }
  }
  return keys;
};
