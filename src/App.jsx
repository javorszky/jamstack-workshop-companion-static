import {
  Switch,
  Route
} from "react-router-dom";

import Nav from "./Nav";

import Home from './Pages/Home';
import AboutGabor from "./Pages/AboutGabor";
import AboutRelational from './Pages/AboutRelational'
import NonRelational from './Pages/NonRelational'
import InitialSetup from './Pages/InitialSetup'

import routes from './routes'

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
            <div className="content">
              <h1 className="title is-spaced">Practical introduction to relational databases</h1>
              <Switch>
                {routes.map((route, i) => {
                  return (
                    <Route key={i} path={route.path} exact={true} render={(props) => {
                      return (<route.component />)
                    }} />
                  )
                })}
              </Switch>
            </div>
          </section>
        </div>
      </section>
      <footer className="footer mt-6 ">
        <section className="container">
          <div className="content columns has-text-centered">
            <p className="column is-four-fifths is-offset-one-fifth">
              <strong>Jamstack Conference - Practical introduction to relational databases companion site</strong> by <a href="https://javorszky.co.uk">Gabor Javorszky</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default App
