import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default Layout;
