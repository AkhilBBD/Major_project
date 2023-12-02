import React from 'react';
import {Route,Routes} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import NotFound from './Screens/NotFound';
import AboutUs from './Screens/AboutUs';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" elememt={<HomeScreen/>}/>
      <Route path="/about-us" elememt={<AboutUs/>}/>
      <Route path="*" elememt={<NotFound/>}/>
    </Routes>
  );
}

export default App;
//  30:38