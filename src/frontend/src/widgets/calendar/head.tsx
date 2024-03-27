import { CalendarHeadStyles } from '@/shared';
import { clsx } from 'clsx';
import { useState } from 'react';

export const CalendarHead = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={CalendarHeadStyles.headLayout}>
      <div className={CalendarHeadStyles.swiper}>
        <span
          className={clsx(
            CalendarHeadStyles.swiperItem,
            CalendarHeadStyles.active,
          )}
        >
          Day
        </span>
        <span>Week</span>
        <span>Month</span>
        <span>Year</span>
      </div>

      <div>U</div>
    </section>
  );
};
