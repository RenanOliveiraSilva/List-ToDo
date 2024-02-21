import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

//Páginas
import AddTask from "./AddTask/AddTask.jsx";
import AllTasks from "./AllTasks/AllTasks.jsx";
import CompletedTasks from "./CompletedTasks/CompletedTasks.jsx";
import PendingTasks from "./PendingTasks/PendingTasks.jsx";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [

      {
        path: "/",
        element: <AllTasks />
      },
      {
        path: "/AddTask",
        element: <AddTask />
      },
      {
        path: "/CompletedTasks",
        element: <CompletedTasks />
      },
      {
        path: "/PendingTasks",
        element: <PendingTasks />
      }
      
    ]
  }
]);

export default router;

