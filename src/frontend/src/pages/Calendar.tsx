import { CalendarStyles } from '@/shared';
import { Navbar } from '@/widgets';
import { CalendarHead } from '@/widgets';
import { CalendarHeadddd } from '@/widgets/calendar/calendar.tsx';

export const Calendar = () => {
  return (
    <div className={CalendarStyles.gridLayout}>
      <Navbar />
      <div>
        <CalendarHead />
        <CalendarHeadddd />
      </div>
    </div>
  );
};
