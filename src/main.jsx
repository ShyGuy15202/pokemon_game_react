import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


// const router= createBrowserRouter([
//     {
//         path:'/',
//         element:<App/>,
//         children:[
//         {path:'',
//          element:<Home/> },
//         {path:'pokedex',
//         element:<Pokedex/>}]
//     }
// ])



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

    )
