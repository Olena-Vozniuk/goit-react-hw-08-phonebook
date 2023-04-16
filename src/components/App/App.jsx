import { useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from "redux/auth/auth-operations";
import { Layout } from "components/Layout/Layout";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";


const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactPage = lazy(() => import('pages/ContactsPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (   
    <Routes>
        <Route path="/" element={<Layout />}>     
        <Route index element={<HomePage />} />
        <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}/>
        <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}/>
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />} />
            <Route path="*" element={<NotFound />} />     
      </Route>
     </Routes>      
  );
};