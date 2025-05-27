import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../pages/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import JobDetails from "../pages/Shared/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "jobDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/singleJobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
    ],
  },
]);
export default router;
