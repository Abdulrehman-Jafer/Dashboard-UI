import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, []);
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/myaccount" element={<Dashboard />} />
      <Route path="/mycard" element={<Dashboard />} />
      <Route path="/billpayment" element={<Dashboard />} />
      <Route path="/settings" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
