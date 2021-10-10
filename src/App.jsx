import {
  Switch,
  Route
} from "react-router-dom";

import Home from './Home';
import Nav from "./Nav";
import AboutGabor from "./Pages/AboutGabor";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <section className="container is-widescreen mt-6">
        <div className="columns ">
          <aside className="menu column is-one-fifth level-item">
            <Nav />
          </aside>
          <section aria-roledescription="main" className="column level-item container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about-gabor">
                <AboutGabor />
              </Route>
            </Switch>
          </section>
        </div>
      </section>
    </>
  )
}

export default App
