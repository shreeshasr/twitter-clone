import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home';
import LeftNavbar from './LeftNavbar/LeftNavbar';
import {store} from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LeftNavbar/>
          <Routes>
            <Route path="/home" exact element={<Home/>}/>
          </Routes>
      </Provider>
    </div>
  );
}

export default App;
