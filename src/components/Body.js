import React from 'react';
import Indoor from '../routes/indoor/Indoor';
import Outdoor from '../routes/outdoor/Outdoor';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Body = () => (
  <Router>
    <div>
      <ul className="navbar">
        <li>
          <NavLink className="link" activeStyle={{ borderBottom: '3px dotted #fff' }} to="/indoor">Indoor T&F</NavLink>
        </li>
        <li>
          <NavLink className="link" activeStyle={{ borderBottom: '3px dotted #fff' }} to="/outdoor">Outdoor T&F</NavLink>
        </li>
      </ul>
      <hr />
      <Route path="/indoor" component={Indoor} />
      <Route path="/outdoor" component={Outdoor} />
    </div>
  </Router>
);

export default Body;
