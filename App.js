import {  Button }  from "@material-ui/core";

import { useState  } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from "react-router-dom";
import LandingPage from './LandingPage';
import Home from './Home'
import RegisterUser from './RegisterUser'

const App = () => {

const modal =   
<div id="welcome"> 
   <h3>Welcome to my test project</h3>

    <Link to="/"> <Button
       type='submit'
       variant='contained'
       color='primary'
       fullWidth
       onClick={ () => (hide())}
       >
        Okay
       </Button> 
  </Link> 

</div>;

const { welcomeCard, setWelcomeCard } = useState(true);

const hide = () =>{
  setWelcomeCard(false);
}
  return (
   
  <div className="App">
        <Router>


    <Link to="/"> 
       <h1 className="header">Crowns Bank</h1> 
    </Link>   

{
welcomeCard ? modal : null
}

   
          <Switch>

              <Route exact path='/'>
              <LandingPage />
              </Route>

              <Route exact path='/RegisterUser'>
              <RegisterUser/>
              </Route>

              <Route exact path='/Home'>
              <Home />
              </Route>

          </Switch>
      </Router>
</div>

  );
}

export default App;
