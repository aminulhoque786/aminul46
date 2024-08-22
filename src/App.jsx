

import Layout from './componenets/root/Layout'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ServicePage from './pages/ServicePage'
function App() {
 let  router= createBrowserRouter (
createRoutesFromElements(
  <Route  path="/"element={<Layout/>}   >
   <Route path="/" element= {<Home/>} />

<Route path='/About'element={<About/>}   />
<Route path='/Service'element={<ServicePage/>}   />


  </Route>


)


 )

  return (
    <>
    <RouterProvider
    router={router}
    
    />





    </>
  )
}

export default App
