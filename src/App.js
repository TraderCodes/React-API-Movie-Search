import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
   return ( 
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="movies/:id" element={<Movie />} />
      </Routes>
      // <Switch>
      //    <Route path="/" exact>
      //       <Home />
      //    </Route>
      //    <Route path="movies/:id" element={<Movie />} />
      // </Switch>
   );
}

export default App;
