import React from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Movies, Series, Search, Layout, Trending } from './index.js';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Trending />} />
      <Route path='movies' element={<Movies />} />
      <Route path='series' element={<Series />} />
      <Route path='search' element={<Search />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
