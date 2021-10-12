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

            <Switch>
              {routes.map((route, i) => {
                console.log(route.path, route.component, 'get yer route')
                const shadowedRoute = route
                return (
                  <Route key={i} path={shadowedRoute.path} exact={true} render={(props) => {
                    return (<route.component />)
                  }} />
                )
              })}
            </Switch>
          </section>
        </div>
      </section>
    </>
  )
}

export default App
