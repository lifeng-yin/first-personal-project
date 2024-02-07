import { Switch, Route, Redirect } from 'wouter'
import Landing from './pages/Landing/Landing'
import { ThemeProvider } from './contexts/theme-provider'
import useAppStateStore from './contexts/appstate'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'

import "@fontsource-variable/inter";


function App() {
  const { user } = useAppStateStore()
  return (
    <ThemeProvider>
      <div className="dark:bg-slate-950 w-screen min-h-screen text-white/95">
        <Switch>
          <Route path="/">
            { user ? <Landing /> : <Redirect to="/app/dashboard" />}
          </Route>
          <Route path="/login">
            { user ? <Redirect to="/app/dashboard" /> : <Login />}
          </Route>
          <Route path="/signup">
            { user ? <Redirect to="/app/dashboard" /> : <Signup />}
          </Route>
          <Route path="/app" nest>
            { user 
            ? <Switch>
                <Route path="/"><Redirect to="/dashboard" /></Route>
                <Route path="/dashboard">Dashboard</Route>
                <Route>404</Route>
              </Switch>
            : <Redirect to="~/login" />
            }
          </Route>
          <Route>404</Route>
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
