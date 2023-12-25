import App from './App';
import './index.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound404 from './components/NotFound404';
import InvisibleCharacter from './components/InvisibleCharacter';
import InspirePage from './components/Other_Pages/InspirePage';
import ProgrammerPage from './components/Other_Pages/ProgrammerPage';
import RomanticPage from './components/Other_Pages/RomanticPage';
import TimePage from './components/Other_Pages/TimePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>),
  },
  {
    path: "*",
    element: (<NotFound404/>),
  },
  {
    path: "/invisiblecharacter",
    element: (<InvisibleCharacter/>)
  },
  {
    path: "/inspire",
    element: (<InspirePage/>)
  },
  {
    path: "/programmerdefinition",
    element: (<ProgrammerPage/>)
  },
  {
    path: "/romantic",
    element: (<RomanticPage/>)
  },
  {
    path: "/time",
    element: (<TimePage/>)
  }
]);
createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
