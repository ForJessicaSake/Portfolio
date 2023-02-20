import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Guestposts from '../components/Experience'
import Navbar from '../components/Navbar'
import Publications from '../components/Publications'
import Skills from '../components/Skills'
import Box from '../elements/Box'
import Header from '../components/Header'
import Project from '../components/Project'

const Home:React.FC = () => {
  return (
    <main className='bg-background font-font text-secondary px-2 overflow-x-hidden'>
    <Navbar/>
    <Header/>
    <Box/>
    <Skills/>
    <Guestposts/>
    <Project/>
    <Publications/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default Home