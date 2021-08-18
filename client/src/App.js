
import './App.css';
import Registration from './Component/Registration';
import Home from './Component/Home';

import {

  Switch,
  Route,


} from "react-router-dom";
import Welcome from './Component/Welcome';
import Login from './Component/Login';
import AddMeal from './Component/AddMeal';
import GetUsersMeal from './Component/GetUsersMeal';
import Logout from './Component/Logout';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path ="/">
      <Welcome/>
      </Route>
      <Route path ="/Register">
      <Registration/>
      </Route>
      <Route path ="/Login">
      <Login/>
      </Route>
      <Route path ="/home">
      <Home/>
      </Route>
      <Route path ="/addmeals">
      <AddMeal/>
      </Route>
      <Route path ="/getUsersMeal">
      <GetUsersMeal/>
      </Route>
      <Route path ="/Logout">
      <Logout/>
      </Route>
    </Switch> 


    

    </div>
  );
}

export default App;
