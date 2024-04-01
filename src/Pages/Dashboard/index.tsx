import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase";
const Dashboard = () => {
  const db = getDatabase(app);

  return <div>Dashboard</div>;
};

export default Dashboard;
