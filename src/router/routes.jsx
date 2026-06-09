import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Records from "../pages/Records";
import Decades from "../pages/Decades";
import CoasterDetail from "../pages/CoasterDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/timeline",
    element: <Timeline />
  },
  {
    path: "/records",
    element: <Records />
  },
  {
    path: "/decades",
    element: <Decades />
  },
  {
    path: "/coaster/:slug",
    element: <CoasterDetail />
  }
]);