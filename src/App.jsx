import React from 'react'
import One from './One'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home'
import Form from './form'
import About from './about' 
import RecipeLst from './data'
import RecipeDetail from './RecipeDetail'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <One /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<RecipeLst />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
