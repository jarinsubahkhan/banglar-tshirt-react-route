import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import LayoutMain from './components/Layout/LayoutMain';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element:<LayoutMain></LayoutMain>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('tshirt.json')   
      },
      {
        path: "review",
        element:<OrderReview></OrderReview>,   
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
