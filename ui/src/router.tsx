import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.tsx";
import SearchView from "./views/SearchView.tsx";
import ResultsView from "./views/ResultsView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <SearchView />,
      },
      {
        path: "results",
        element: <ResultsView />,
      },
    ],
  },
]);

export default router;
