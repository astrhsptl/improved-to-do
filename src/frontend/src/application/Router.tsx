import { Calendar, Login, SignUp, Some } from '@/pages';
import { Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Routes>
      <Route key={'home page'} element={<Some />} path='/' />
      <Route key={'login'} element={<Login />} path='/login' />
      <Route key={'sign-up'} element={<SignUp />} path='/sign-up' />

      <Route key={'calendar'} element={<Calendar />} path='/calendar' />
      <Route key={'to-do list'} element={<Some />} path='/to-do' />
    </Routes>
  );
}
