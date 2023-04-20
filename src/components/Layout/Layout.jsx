import { Wrapper } from "./Layout.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from "components/Footer/Footer";



export const Layout = () => {
  return <Wrapper>
    <AppBar />
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Outlet/>
    </Suspense>
    <Footer />
  </Wrapper>;
};