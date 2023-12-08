import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateCar from "./pages/CreateCar";
import Dashboard from "./pages/Dashboard";
import ListCars from "./pages/ListCars";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-car" element={<CreateCar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listcars" element={<ListCars />} />
      </Routes>
    </>
  );
}

export default App;
