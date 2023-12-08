import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateCar from "./pages/CreateCar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-car" element={<CreateCar />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
