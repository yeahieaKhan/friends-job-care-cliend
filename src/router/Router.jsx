import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../pages/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import JobDetails from "../pages/Shared/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/Shared/MyApplications";
import AddJobs from "../pages/jobPushlisher/AddJobs";

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
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>{" "}
          </PrivateRouter>
        ),
      },
      {
        path: "jobsApply/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/singleJobs/${params.id}`),
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "/addjobs",
        element: (
          <PrivateRouter>
            <AddJobs></AddJobs>
          </PrivateRouter>
        ),
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "my-applications",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
