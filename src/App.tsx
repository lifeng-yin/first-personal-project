import { Switch, Route, Redirect } from 'wouter'
import Landing from './pages/Landing/Landing'



function App() {
  return (
    <Switch>
      <Route path="/"><Landing /></Route>
      <Route path="/login">Login Page</Route>
      <Route path="/signup">Signup Page</Route>
      <Route path="/app" nest>
        <Switch>
          <Route path="/"><Redirect to="/dashboard" /></Route>
          <Route path="/dashboard">Dashboard</Route>
          <Route>404</Route>
        </Switch>
      </Route>
      <Route>404</Route>
    </Switch>
  )
}

export default App
