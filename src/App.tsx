import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import VintageHunter from './pages/VintageHunter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/vintage-hunter"
          element={<VintageHunter />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App