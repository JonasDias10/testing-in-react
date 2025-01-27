import { Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { fetchUsers } from "../services/user-service";
import { SignIn } from "../sign-in";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home fetchUsers={fetchUsers} />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
