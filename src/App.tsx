import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app/i18n";
import store from "./app/store";
import HomeView from "./views/HomeView";

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback="Loading...">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};

export default App;
