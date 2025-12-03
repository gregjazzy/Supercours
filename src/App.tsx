import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchPage from './pages/Search'
import Profile from './pages/Profile'
import BecomeTeacher from './pages/BecomeTeacher'
import Legal from './pages/Legal'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recherche" element={<SearchPage />} />
            <Route path="/recherche/:subject" element={<SearchPage />} />
            <Route path="/profil/:id" element={<Profile />} />
            <Route path="/devenir-professeur" element={<BecomeTeacher />} />
            <Route path="/mentions-legales" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
