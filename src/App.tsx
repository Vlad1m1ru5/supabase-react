import { Suspense } from "react";
import { Provider } from "react-redux";
import { LOADING_STUB } from "./app/constants";
import "./app/i18n";
import Router from "./app/Router";
import store from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={LOADING_STUB}>
        <Router />
      </Suspense>
    </Provider>
  );
};

export default App;
