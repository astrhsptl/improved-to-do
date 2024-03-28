import { useTimelineArray } from '@/features/calendar/lib';
import { CalendarHeadStyles } from '@/shared';
import { forwardRef } from 'react';

const CalendarDayTimeFc = ({}, ref) => {
  const timelineArray = useTimelineArray();

  return (
    <section className={CalendarHeadStyles.timeline}>
      <div className={CalendarHeadStyles.timelineHead}></div>
      <div className={CalendarHeadStyles.timelineTable} ref={ref}>
        {timelineArray.map((time) => {
          return <p key={time}>{time}</p>;
        })}
      </div>
    </section>
  );
};

export const CalendarDayTime = forwardRef(CalendarDayTimeFc);
