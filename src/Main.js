import React from "react";
import { Switch, Route } from "react-router-dom";

import Facade from "./pages/Facade";
import Starlove from "./pages/Starlove";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profil from "./pages/Profil";
import Choose from "./pages/Choose";
import Filters from "./pages/Filters";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Facade} />
      <Route path="/starlove" component={Starlove} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profil" component={Profil} />
      <Route path="/choose" component={Choose} />
      <Route path="/filters" component={Filters} />
    </Switch>
  </main>
);

export default Main;
