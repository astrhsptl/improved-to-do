import { CalendarHeadStyles } from '@/shared';
import clsx from 'clsx';

export const CalendarDay = () => {
  return (
    <div
      className={clsx(CalendarHeadStyles.calendarCard, CalendarHeadStyles.day)}
    >
      <div className={clsx(CalendarHeadStyles.calendarCardHead)}>
        {new Date().toLocaleDateString('ru')}
      </div>
      <div className={CalendarHeadStyles.calendarDayBody}></div>
    </div>
  );
};
