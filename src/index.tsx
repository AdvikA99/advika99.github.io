import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PortfolioApp from './components/Portfolio/PortfolioApp';
import CalendarApp from './components/FactsCalendar/CalendarApp';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CraigslistApp from './components/CraigslistRedesign/CraigslistApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioApp/>,
  },
  {
    path: "calendar",
    element: <CalendarApp/>,
  },
  {
    path: "craigslist",
    element: <CraigslistApp/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
