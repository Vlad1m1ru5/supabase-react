import { Suspense } from "react";
import "./app/i18n";
import logo from "./assets/logo.svg";
import HomeView from "./views/HomeView";

const App = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <HomeView logo={logo} />
    </Suspense>
  );
};

export default App;
