// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './Tabs';

const App = () => {
  return (
    <Router>
      <div>
        <Tabs />
      </div>
    </Router>
  );
};

export default App;
