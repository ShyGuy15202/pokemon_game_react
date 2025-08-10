import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Routes,Route, useLocation } from 'react-router'
import Loader from '../components/Loader'
const Home=lazy(()=>import('../pages/Home'))
const Pokedex=lazy(()=>import('../pages/Pokedex'))

const MainRoutes = () => {


      const [loading,setLoading]=useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)

    },1000)
  }, []);

  if (loading) {
    return <Loader/>; // Only loader until ready
  }


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


  // const [pageReady,setPageReady]=useState(false)
  // const location=useLocation()
  // useEffect(()=>{
  //   setPageReady(false)
  //   const handleReady=()=>setPageReady(true)
  //   if(document.readyState==='complete'){handleReady()}
  //   else{
  //     window.addEventListener('load',handleReady)
  //    return ()=> window.removeEventListener('load',handleReady)
  //   }
    
  // },[location.pathname])

  // if(!pageReady) return <Loader/>