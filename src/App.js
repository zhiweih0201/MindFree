
import logo from './logo.svg';
import React, {useEffect} from "react";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FeedPage from './pages/FeedPage';
import Setting from './pages/Setting';
import GeneralSetting from './pages/GeneralSetting';
import SegmentSetting from './pages/SegmentSetting';
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
    path: "/forums",
    element: <FeedPage />
  },
  {
    path: "/therapist",
    element: <TherapistPage />
  },
  {
    path: "/setting",
    element: <Setting />
  },
  {
    path: "/general-setting",
    element: <GeneralSetting />
  }
]);

function App() {
  useEffect(() => {
    document.title = "MindFree"
  }, []);


  return <Provider store={store}>
   
        <RouterProvider router={router} />
  
    </Provider>


}

export default App;
