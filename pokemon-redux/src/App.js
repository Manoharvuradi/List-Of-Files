import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./UserList";
import UserData from "./UserData";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <UserList />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <UserList />,
  //       },
  //       {
  //         path: "/pokemon/:id",
  //         element: <UserData />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/pokemon/:id" element={<UserData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
