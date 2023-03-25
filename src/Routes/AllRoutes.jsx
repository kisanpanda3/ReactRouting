import { Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import SingleUserPage from "./SingleUserPage";
import UsersPage from "./UsersPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<SingleUserPage />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
