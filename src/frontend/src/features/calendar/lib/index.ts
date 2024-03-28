export const useTimelineArray = () => {
  const time = new Date();
  const timelineArray = [];
  time.setHours(0);
  time.setMinutes(0);
  time.setSeconds(0);

  for (let i = 0; i < 48; i++) {
    timelineArray.push(
      `${time.getHours()}:${time.getMinutes() == 0 ? '00' : time.getMinutes()}`,
    );
    time.setMinutes(time.getMinutes() + 30);
  }

  return timelineArray;
};
