import Navbar from './navbar/Navbar'
import Home from './homepage/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Certifications from './certifications/Certifications'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import './App.css'



function App() {
  
  return (
    <>

      <Navbar />
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section> 

      <section id="certifications">
        <Certifications />
      </section>

      <section id="contact">
        <Contact />
      </section>
       <Footer />
    </>
  )
}

export default App;

