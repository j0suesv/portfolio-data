import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import TechStack   from './components/TechStack'
import Projects    from './components/Projects'
import Architecture from './components/Architecture'
import Experience  from './components/Experience'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import CaseStudy   from './pages/CaseStudy'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Architecture />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}
