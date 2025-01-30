//react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import { Home, About, Plan } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/plan",
          element: <Plan />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
