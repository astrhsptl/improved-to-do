import { Login, Some } from '@/pages';
import { Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Routes>
      <Route key={'home page'} element={<Some />} path='/' />
      <Route key={'login'} element={<Login />} path='/login' />
    </Routes>
  );
}
