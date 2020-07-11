export const VIDEO_LINK_UPDATED = 'VIDEO_LINK_UPDATED';
export const CURRENT_TIME_CHANGED = 'CURRENT_TIME_CHANGED';
export const PLAYING_STATUS_CHANGED = 'PLAYING_STATUS_CHANGED';

export const videoChanged = ({videoId, link, startTime}) => ({
  type: VIDEO_LINK_UPDATED,
  videoId,
  link,
  startTime,
});

export const currentTimeChanged = (currentTime) => ({
  type: CURRENT_TIME_CHANGED,
  currentTime,
});

export const playingStatusChanged = (playButtonName) => ({
  type: PLAYING_STATUS_CHANGED,
  playButtonName,
});
