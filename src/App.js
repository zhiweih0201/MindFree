import logo from './logo.svg';
import React from "react";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FeedPage from './pages/FeedPage';
import Chat from './pages/Chat';
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
import ProfileOtherView from './pages/ProfileOtherView';
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
    path: "/profileotherview",
    element: <ProfileOtherView />
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
    path: "/chat",
    element: <Chat />
  },
  {
    path: "/setting",
    element: <Setting />
  },
  {
    path: "/general-setting",
    element: <GeneralSetting />
  },
  {
    path: "/segment-setting",
    element: <SegmentSetting />
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
