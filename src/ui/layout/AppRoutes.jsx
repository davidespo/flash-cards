import { Route, Routes } from "react-router-dom";

import { ComingSoon, NotFound } from "../components/Content";
import ListPage from "../pages/ListPage";
import CardHome from "../pages/cards/CardHome";
import SettingsHome from "../pages/settings/SettingsHome";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/lists/:_i/*" element={<CardHome />} />
      <Route path="/settings/*" element={<SettingsHome />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Layout;
