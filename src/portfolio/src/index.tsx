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
import TimeToSilvester from './components/Other_Pages/TimeToSilvester';
import NavigateToPage from './components/Other_Pages/NavigateToPage';

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
  },
  {
    path: "/timeleft",
    element: (<TimeToSilvester/>)
  },
  {
    path: "/git",
    element: (<NavigateToPage url='https://github.com/frozenassassine'/>)
  },
  
  {
    path: "/insta",
    element: (<NavigateToPage url='https://instagram.com/frozenassassine'/>)
  }
]);
createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
