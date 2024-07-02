import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import Alert from "../component/Alert";
import { AlertState } from "../context/alert/AlertState";
import FirebaseState from "../context/firebase/FirebaseState";

function Root() {
  return (
    <div>
      <FirebaseState>
        <AlertState>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Outlet />
          </div>
        </AlertState>
      </FirebaseState>
    </div>
  );
}

export default Root;
