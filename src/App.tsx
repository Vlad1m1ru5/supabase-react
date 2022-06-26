import { Suspense } from "react";
import "./app/i18n";
import Router from "./app/Router";

const App = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Router />
    </Suspense>
  );
};

export default App;
