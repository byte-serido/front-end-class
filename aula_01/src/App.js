import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
