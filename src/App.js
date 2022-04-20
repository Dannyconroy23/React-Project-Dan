import {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom';

import SneakerCollection from './Components/SneakerCollection';
import Header from './Components/Header'
import WishList from "./Components/WishList";
import SneakerContainer from './Components/SneakersContainer';
import SneakerDetails from './Components/SneakerDetails';
import Home from './Components/Home';


function App() {
  const [sneakers, setSneakers] = useState([])

  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
        'X-RapidAPI-Key': '15be2472c4msha5d892b01c078c1p17a401jsn46f8bcdaa99e'
      }
    };
    
    fetch('https://the-sneaker-database.p.rapidapi.com/sneakers?limit=20', options)
      .then(response => response.json())
      .then(response => setSneakers(response.results))
      .catch(err => console.error(err));
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
    //     'X-RapidAPI-Key': '114304eb3bmshd241e59ec60bb79p1a3acbjsne5e39a45f3af'
    //   }
    // };

    // fetch('https://the-sneaker-database.p.rapidapi.com/sneakers?limit=25', options)
    
    // .then(response => response.json())
    // .then(response => setSneakers(response.results))
    // .catch(err => console.error(err));
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
    //     'X-RapidAPI-Key': '15be2472c4msha5d892b01c078c1p17a401jsn46f8bcdaa99e'
    //   }
    // };
    
    // fetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20', options)
    //   .then(response => response.json())
    //   .then(data=>setSneakers(data.results))
    //   .then(response=>console.log(response))
    //   .catch(err => console.error(err));
  }, []) 


  return (
    <div className="App">
      
      <Header className="App-header">
        Sneaker App
      </Header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/sneakers" >
          <SneakerContainer sneakers={sneakers} />
        </Route>
        <Route path="/sneakers/:id" >
          <SneakerDetails />
        </Route>
        <Route path='/sneakercollection' >
          <SneakerCollection />
        </Route>
        <Route path="/wishlist" >
          <WishList />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;