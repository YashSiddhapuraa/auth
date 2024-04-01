import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
