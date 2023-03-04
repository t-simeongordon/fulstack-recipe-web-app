import './App.css'
import { Routes, Route} from "react-router-dom"
import Navigation from "./Routes/Navigation"
import Home from "./Routes/Home"
import AddRecipe from './Routes/AddRecipe'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='addrecipe' element={<AddRecipe/>} />
      </Route>
    </Routes>
  )
}

export default App
