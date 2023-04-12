import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
// import { fetchContacts } from "redux/operations";
// import { selectError, selectIsLoading } from "redux/selectors";
import { Layout } from "components/Layout/Layout";
// import { ContactForm } from "components/ContactForm/ContactForm";
// import { ContactList } from "components/ContactList/ContactList";
// import { Filter } from "components/Filter/Filter";
// import ClipLoader from "react-spinners/ClipLoader";

const HomePage = lazy(() => import('../../pages/HomeView'));
const RegisterPage = lazy(() => import('../../pages/RegisterView'));
const LoginPage = lazy(() => import('../../pages/LoginView'));
const ContactPage = lazy(() => import('../../pages/ContactsView'));
const NotFound = lazy(() => import('../../pages/NotFoundView'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};