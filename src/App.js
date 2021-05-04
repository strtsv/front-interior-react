import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
import About from "./pages/About";
// import Products from "./pages/Products";
// import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Massage from "./pages/Massage";
import GiftVouchers from "./pages/GiftVouchers";

function App() {
  return (
    <Switch>
      <Route exact path="/about.html" component={About} />
      <Route exact path="/massage.html" component={Massage} />
      <Route exact path="/contacts.html" component={Contacts} />
      {/* <Route exact path="/index-3.html" component={News} />
      <Route exact path="/index-4.html" component={Products} /> */}
      <Route exact path="/gift-vouchers.html" component={GiftVouchers} />
      <Route exact path="/" component={Home} />
      <Route exact path="/index.html" component={Home} />
    </Switch>
  );
}

export default App;
