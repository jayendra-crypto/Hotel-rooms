import {Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Room from './pages/Room';
import Error from './pages/Error';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/rooms" component={Room} />
       <Route exact path="/rooms/:slug" component={SingleRoom} />
       <Route component={Error} />
     </Switch>
     </>

  );
}

export default App;
