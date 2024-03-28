import { CalendarHeadStyles } from '@/shared';
import { clsx } from 'clsx';
import { useState } from 'react';

export const CalendarHead = () => {
  const [active, setActive] = useState(0);
  const some = ['Day', 'Week', 'Month', 'Year'];

  return (
    <section className={CalendarHeadStyles.headLayout}>
      <div className={CalendarHeadStyles.swiper}>
        {some.map((name, index) => (
          <span
            key={name}
            className={clsx(
              CalendarHeadStyles.swiperItem,
              active === index ? CalendarHeadStyles.active : '',
            )}
            onClick={() => setActive(index)}
          >
            {name}
          </span>
        ))}
      </div>

      <div className={CalendarHeadStyles.avatar}>U</div>
    </section>
  );
};
