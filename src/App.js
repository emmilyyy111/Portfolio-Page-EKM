import Main from './components/Main'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
   <div className='App'>
      <Navbar /> 
     <Main />
       <About />
       <br/>
       <Skills />
       <br/>
       <Projects />
       <br/>
       <Contact />
       </div>
  )
}
 export default App;
