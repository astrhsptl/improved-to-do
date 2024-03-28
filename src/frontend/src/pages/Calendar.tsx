import { CalendarStyles } from '@/shared';
import { CalendarHead, Navbar } from '@/widgets';
import { CalendarBody } from '@/widgets/calendar/calendar.tsx';

export const Calendar = () => {
  return (
    <div className={CalendarStyles.gridLayout}>
      <Navbar />
      <div>
        <CalendarHead />
        <CalendarBody />
      </div>
    </div>
  );
};
