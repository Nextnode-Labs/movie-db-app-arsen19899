import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Up from './components/Up';
import Top from './components/Top';
// Context
import UserProvider from './context';


const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/up' element={<Up />} />
        <Route path='/top' element={<Top />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movie/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </UserProvider>
  </Router>
);

export default App;
