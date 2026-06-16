import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Coasters from "../pages/Coasters";
import Timeline from "../pages/Timeline";
import Records from "../pages/Records";
import Decades from "../pages/Decades";
import CoasterDetail from "../pages/CoasterDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "coasters",
        element: <Coasters />
      },
      {
        path: "coasters/:slug",
        element: <CoasterDetail />
      },
      {
        path: "timeline",
        element: <Timeline />
      },
      {
        path: "records",
        element: <Records />
      },
      {
        path: "decades",
        element: <Decades />
      }
    ]
  }
]);