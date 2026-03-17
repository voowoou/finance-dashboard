import { Header } from '@/widgets';
import { Outlet } from 'react-router-dom';
import s from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
