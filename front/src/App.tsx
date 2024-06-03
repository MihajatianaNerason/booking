import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/User/User";
import CardDetails from "./pages/CardDetails/CardDetails";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}
        <Route path="/card" element={<User />} />
        <Route path="/card-details/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}
