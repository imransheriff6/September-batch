import Card from "./components/card/card"
import './App.css'
import StateExample from "./components/state/state"
import Cart from "./components/cart/cart"
import UseEffectExample from "./components/useEffect/useEffectExample"
import Demo from "./components/classComponent/demo"
import Home from "./components/pages/home"
import Contact from "./components/pages/contact"
import About from "./components/pages/about"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import SingleUser from "./components/pages/singleUser"

function App() {
  // <StateExample/> <Cart /> <UseEffectExample /> <Demo title='User'/>
  return <>
  <BrowserRouter>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
    <Routes>
      <Route path="/" element={<UseEffectExample />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/user/:id" element={<SingleUser />}/>
    </Routes>
  </BrowserRouter>
  </>
}
export default App 