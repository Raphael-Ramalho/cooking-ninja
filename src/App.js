import {BrowserRouter, Switch, Route} from 'react-router-dom'


//components
import {Home} from './pages/home'
import {Create} from './pages/create'
import {Search} from './pages/search'
import {Recipe} from './pages/recipe'

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/recipes/:id">
            <Recipe/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
