import React, { lazy, Suspense } from 'react'
import { Routes,Route } from 'react-router'
import Loader from '../components/Loader'
const Home=lazy(()=>import('../pages/Home'))
const Pokedex=lazy(()=>import('../pages/Pokedex'))




const MainRoutes = () => {

  return (
    <Suspense fallback={<Loader/>}>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/pokedex' element={<Pokedex/>}/>
   </Routes>
   </Suspense>
  )
}

export default MainRoutes