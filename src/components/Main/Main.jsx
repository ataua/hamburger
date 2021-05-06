import { Route, Switch } from 'react-router-dom'
import { Home, Placeholder } from '../'

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu'>
          <Placeholder />
        </Route>
        <Route path='/about'>
          <Placeholder />
        </Route>
        <Route path='/main'>
          <Placeholder />
        </Route>
      </Switch>
    </main>
  )
}