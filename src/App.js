import logo from './logo.svg';
import React from "react";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
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
  }
]);

function App() {
  return ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}

export default App;
