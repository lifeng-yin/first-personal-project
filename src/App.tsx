import { Switch, Route, Redirect } from 'wouter'
import Landing from './pages/Landing/Landing'
import { ThemeProvider } from './contexts/theme-provider'
import useAppStateStore from './contexts/app-state'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Edit from './pages/Edit/Edit'

import "@fontsource-variable/inter";
import Dashboard from './pages/Dashboard/Dashboard'


function App() {
  const { pocketbase } = useAppStateStore()
  const isLoggedIn = pocketbase.authStore.isValid
  return (
    <ThemeProvider>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/login">
            { isLoggedIn ? <Redirect to="/app/dashboard" /> : <Login />}
          </Route>
          <Route path="/signup">
            { isLoggedIn ? <Redirect to="/app/dashboard" /> : <Signup />}
          </Route>
          <Route path="/app" nest>
            { isLoggedIn 
            ? <Switch>
                <Route path="/"><Redirect to="/dashboard" /></Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/edit/:id">
                  <Edit />
                </Route>
                <Route>404</Route>
              </Switch>
            : <Redirect to="~/login" />
            }
          </Route>
          <Route>404</Route>
        </Switch>
    </ThemeProvider>
  )
}

export default App
