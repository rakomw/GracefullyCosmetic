import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Services from './pages/services';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import Appointment from './pages/appointment';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/faq' component={FAQ} />
          <Route path='/contact' component={Contact} />
          <Route path='/appointment' component={Appointment} />
          <Route component={About} />
        </Switch>
      </Router>
  );
}

export default App;
