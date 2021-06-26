import "./App.css";
import HomePage from "./views/pages/home";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./views/pages/404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={NotFoundPage} />
        <Route exact path="/:id" component={HomePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
