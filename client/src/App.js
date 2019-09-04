import React, { useState } from 'react';
import Home from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component ={Home}/>
      <Route path='/:id' component={Movie}/>
    </div>
  );
};

export default App;
