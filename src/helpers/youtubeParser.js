import urlParser from 'js-video-url-parser';

export const getYTObject = (url) => {
  const link = url;
  let videoId = null;
  let startTime = 0;
  const parsedUrl = urlParser.parse(url);

  if (parsedUrl !== undefined && parsedUrl.provider === 'youtube') {
    videoId = parsedUrl.id;
    if (parsedUrl.params !== undefined) {
      const {start} = parsedUrl.params;
      startTime = start !== undefined ? start : 0;
    }
  }
  return {link, videoId, startTime};
};

export const convertToTime = (seconds) => {
  let measuredTime = new Date(null);
  measuredTime.setSeconds(seconds); // specify value of SECONDS
  const MHSTime = measuredTime.toISOString().substr(11, 8);
  return MHSTime;
};

export const getLink = ({videoId, seconds}) =>
  'https://youtu.be/' + videoId + '?t=' + seconds;

export const getLinks = ({videoId, secondsArr}) =>
  secondsArr.reduce((acc, interval) => {
    acc += 'https://youtu.be/' + videoId;
    interval !== null ? (acc += '?t=' + interval + '\n') : null;
    return acc;
  }, '');

export const readUrl = (url) => {
  const {link, videoId, startTime} = getYTObject(url);

  return new Promise((resolve, reject) => {
    videoId === null ? reject() : resolve({link, videoId, startTime});
  });
};
