import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
