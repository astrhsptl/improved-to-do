import { CalendarDay } from '@/features';
import { CalendarHeadStyles } from '@/shared';
import { forwardRef } from 'react';

const CalendarDayBodyFc = ({}, ref) => {
  return (
    <section ref={ref} className={CalendarHeadStyles.calendarDateContainer}>
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
    </section>
  );
};

export const CalendarDayBody = forwardRef(CalendarDayBodyFc);
