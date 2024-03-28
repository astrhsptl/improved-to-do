import { CalendarHeadStyles } from '@/shared';
import { MouseEvent as ReactMouseEvent, useRef } from 'react';
import { CalendarDayBody, CalendarDayTime } from './ui';

export const CalendarBody = () => {
  const calendarContainer = useRef<HTMLDivElement>(null);
  const timelineContainer = useRef<HTMLDivElement>(null);

  let pos = { left: 0, top: 0, x: 0, y: 0 };

  const mouseMoveEL = (e: MouseEvent) => {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    (calendarContainer.current as HTMLDivElement).scrollLeft = pos.left - dx;
    (timelineContainer.current as HTMLDivElement).scrollTop = pos.top - dy;
  };

  const grabScroll = (e: ReactMouseEvent) => {
    pos = {
      left: (calendarContainer.current as HTMLDivElement).scrollLeft,
      top: (timelineContainer.current as HTMLDivElement).scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener('mouseup', () => {
      calendarContainer.current?.removeEventListener('mousemove', mouseMoveEL);
    });
    calendarContainer.current?.addEventListener('mousemove', mouseMoveEL);
  };

  return (
    <article
      className={CalendarHeadStyles.calendarBodyLayout}
      onMouseDown={grabScroll}
    >
      <CalendarDayTime ref={timelineContainer} />
      <CalendarDayBody ref={calendarContainer} />
    </article>
  );
};
