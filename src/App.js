import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navibar from "./components/Navibar";
import CompanyPage from "./pages/CompanyPage";
import CandidatePage from "./pages/CandidatePage";
import CandidatesPage from "./pages/CandidatesPage";

import store from "./redux/store";

import "./App.css";

function App() {
  const [currentUser, setCurrentuser] = useState({});

  const onSubmit = (email, password) => {
    setCurrentuser({ email, password });
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Navibar currentUser={currentUser} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <LoginPage onSubmit={onSubmit} />}
          />
          <Route
            path="/company"
            exact
            render={() => <CompanyPage currentUser={currentUser} />}
          />
          <Route path={`/candidates/:id`} exact component={CandidatePage} />
          <Route path="/candidates" exact component={CandidatesPage} />
          <Route
            path={`/login`}
            exact
            render={() => <LoginPage onSubmit={onSubmit} />}
          />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
