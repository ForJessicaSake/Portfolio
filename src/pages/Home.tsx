import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Publications from '../components/Publications'
import Skills from '../components/Skills'
import Box from '../elements/Box'
import Header from '../components/Header'
import Project from '../components/Project'
import WritingExperience from '../components/Writing'
import Experience from '../components/Experience'

const Home:React.FC = () => {
  return (
    <main className='bg-background font-font text-secondary px-2 overflow-x-hidden scroll-smooth'>
    <Navbar/>
    <Header/>
    <Box/>
    <Skills/>
    <Experience/>
    <WritingExperience/>
    <Project/>
    <Publications/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default Home