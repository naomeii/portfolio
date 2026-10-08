import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import VintageHunter from './pages/VintageHunter'
import XDMoD from './pages/XDMoD'
import InstagramDegrees from './pages/InstagramDegrees'
import GuessTheSong from './pages/GuessTheSong'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/vintage-hunter"
          element={<VintageHunter />}
        />

        <Route
          path="/projects/xdmod"
          element={<XDMoD />}
        />

        <Route
          path="/projects/instagram-degrees"
          element={<InstagramDegrees />}
        />

        <Route
          path="/projects/guess-the-song"
          element={<GuessTheSong />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App