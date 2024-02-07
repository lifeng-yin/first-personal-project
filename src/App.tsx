import { Switch, Route, Redirect } from 'wouter'
import Landing from './pages/Landing/Landing'
import { ThemeProvider } from './contexts/theme-provider'
import useAppStateStore from './contexts/app-state'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'

import "@fontsource-variable/inter";


function App() {
  const { pocketbase } = useAppStateStore()
  const isLoggedIn = pocketbase.authStore.isValid
  return (
    <ThemeProvider>
      <div className="dark:bg-slate-950 w-screen min-h-screen text-white/95">
        <Switch>
          <Route path="/">
            { isLoggedIn ? <Landing /> : <Redirect to="/app/dashboard" />}
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
