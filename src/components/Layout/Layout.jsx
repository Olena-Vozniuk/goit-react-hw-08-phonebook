import { Wrapper } from "./Layout.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return <Wrapper>
    <AppBar />
    <Suspense fallback={null}>
      <Outlet/>
    </Suspense>
  </Wrapper>;
};