import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "../routes/HomeRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
