import { Route, Routes } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { ComingSoon, NotFound } from "../components/Content";
import Demo from "../pages/Demo";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<ComingSoon />} />
      <Route path="/settings" element={<ComingSoon />} />
      <Route path="/demo/*" element={<Demo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Layout;
