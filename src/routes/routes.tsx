import { Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { SignIn } from "../sign-in";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
