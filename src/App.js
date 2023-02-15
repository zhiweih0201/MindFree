import logo from './logo.svg';
import React from "react";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import TherapistPage from './pages/TherapistPage';
import { store } from './redux/store';
// import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/homepage",
    element: <HomePage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/therapist",
    element: <TherapistPage />
  }
]);

function App() {
  return ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
   
        <RouterProvider router={router} />
  
    </Provider>
  );

}

export default App;
