import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Frame from './frame.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calendar from './calendar';
import Subway from './subway';
import Weather from './weather';
import Calculator from './calculator';
import { Landing } from './landing';
import AboutUs from './aboutUs';
import NotFound from './NotFound.jsx'; // 404 컴포넌트를 임포트하세요

// 404화면을 어떻게 꾸밀지?

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <NotFound />, // 404 컴포넌트를 errorElement로 지정합니다.
    children: [
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
    ],
  },
  {
    path: 'frame',
    element: <Frame />,
    children: [
      {
        path: '/frame/calendar',
        element: <Calendar />,
      },
      {
        path: '/frame/subway',
        element: <Subway />,
      },
      {
        path: '/frame/weather',
        element: <Weather />,
      },
      {
        path: '/frame/calculator',
        element: <Calculator />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
