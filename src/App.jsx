import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import ErrorPage from './ErrorPage';
import HomePage from './pages/homePage/HomePage';
import PokeList from './pages/pokelist/PokeList';
import PokeDetail from './pages/pokelist/pokeDetail/PokeDetail';

const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/poke-list',
        element: <PokeList />,
      },
      {
        path: '/poke-list/:name',
        element: <PokeDetail />
      }
    ]
  }
])

class App extends Component {
  render(){
    return(
      <React.StrictMode>
        <RouterProvider router={mainRouter} />
      </React.StrictMode>
    )
  }
}

export default App;
