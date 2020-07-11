import {Share} from 'react-native';

export const shareText = async (text) => {
  try {
    const result = await Share.share({
      message: text,
      text,
    });

    return new Promise((resolve, reject) => {
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          resolve('Shared');
          // shared with activity type of result.activityType
        } else {
          // shared
          resolve('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        resolve('Dismissed');
      }
    });
  } catch (error) {
    alert('Url is not available. ' + error);
  }
};
