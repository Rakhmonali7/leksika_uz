import "./App.css";
import NavBar from "../NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { About } from "../../Pages/About/About";
import Articles from "../../Pages/Articles/";
import Article from "../../Pages/Articles/Article";
import RuUz from "../../Pages/RuUz/RuUz";
import { NotFound } from "../../components/404/NotFound";
import Grammar from "../../Pages/Grammar1/Grammar/Grammar";
import GrammarInUse from "../../Pages/Grammar1/InUse/InUse";
import Search1 from "../../Pages/RuUz/Search.js";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import { readEngUzb } from "../../lib/fetchData.js";
import { useEffect } from "react";
import AdsComponent from "../../lib/AdSense";

function App() {
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await readEngUzb();
      response = await response.json();
      console.log(response);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className="pages">
          <Switch>
            <Route exact path="/">
              <Redirect to="/en-uz" />
            </Route>
            <Route path="/en-uz">
              <Search />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/articles/search/:text">
              <Articles />
            </Route>
            <Route path="/articles/tag/:tag">
              <Articles />
            </Route>
            <Route path="/article/:id">
              <Article />
            </Route>

            <Route path="/ru-uz" component={Search1} />
            <Route path="/grammar/:id" component={GrammarInUse} />
            <Route path="/grammar" component={Grammar} />
            <Route path="/grammar1" component={GrammarInUse} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <AdsComponent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
