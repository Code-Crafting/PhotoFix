import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./assets/Components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
