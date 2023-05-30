import Navbar from './components/Navbar'
import './components/Navbar/Navbar.css'
import Header from './components/Header'
import './components/Header/Header.css'
import Section from './components/Section'
import './components/Section/Section.css'
import Feature from './components/Feature'
import './components/Feature/Feature.css'
import Blog from './components/Blog'
import './components/Blog/Blog.css'
import Footer from './components/Footer'
import './components/Footer/Footer.css'
import Number from './components/Number'
import './components/Number/Number.css'
import About from './Pages/About'
import Add from './Pages/Add'
import Blogs from './Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Price from './Pages/Price'
import Service from './Pages/Service'
import Team from './Pages/Team'
import { Route, Routes } from "react-router-dom"


function App() {
 

  return (
    <>
     

     <Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/price' element={<Price/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/team' element={<Team/>}/>
<Route path='/blog' element={<Blogs/>}/>



</Routes>

     <Header/>
     <Section/>
     <Feature/>
     <Blog/>
     <Footer/>
    </>
  )
}

export default App
