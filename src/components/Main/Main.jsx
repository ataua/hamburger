import { Route, Switch } from 'react-router-dom'
import { Home } from '../'

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </main>
  )
}