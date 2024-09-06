import './index.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage/>),
  },
]);
createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
