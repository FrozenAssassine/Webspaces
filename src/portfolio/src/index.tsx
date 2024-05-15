import App from './App';
import './index.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound404 from './pages/NotFound404Page/NotFound404';
import InvisibleCharacter from './pages/Other_Pages/InvisibleCharacterPage/InvisibleCharacter';
import InspirePage from './pages/Other_Pages/InspirePage/InspirePage';
import ProgrammerPage from './pages/Other_Pages/ProgrammerPage/ProgrammerPage';
import RomanticPage from './pages/Other_Pages/RomanticPage/RomanticPage';
import ExternalNavPage from './pages/Other_Pages/ExternalNavPage/ExternalNavPage';
import TimePage from './pages/Other_Pages/TimePage/TimePage';
import TimeToSilvester from './pages/Other_Pages/TimeToSilvesterPage/TimeToSilvester';
import NavigateToPage from './pages/Other_Pages/NavigateToPage/NavigateToPage';
import HowToCenterDivPage from './pages/Other_Pages/HowToCenterDivPage/HowToCenterDivPage';
import SocialPage from './pages/Other_Pages/SocialPage/SocialPage';

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
    path: "/git",
    element: (<ExternalNavPage page='https://github.com/frozenassassine'/>)
  },
  {
    path: "/insta",
    element: (<ExternalNavPage page='https://instagram.com/frozenassassine'/>)
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
  },
  
  {
    path: "/centerdiv",
    element: (<HowToCenterDivPage/>)
  },
  {
    path: "/social",
    element: (<SocialPage/>)
  }
]);
createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
