import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import TicTacToe from './games/TicTacToe';
import GameNotFound404 from './games/404GameNotFound/GameNotFound404';
import SelectGamePage from './games/SelectGamePage/SelectGamePage';

const router = createBrowserRouter([
  {
    path: "/TicTacToe",
    element: (<TicTacToe/>),
  },
  {
    path: "/",
    element: (<SelectGamePage/>),
  },
  {
    path: "*",
    element: (<GameNotFound404/>),
  },
]);
createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
