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
import GuestWriting from '../components/GuestWriting'

const Home:React.FC = () => {
  return (
    <main className='2xl:container 2xl:mx-auto bg-black font-poppins text-secondary px-2 overflow-x-hidden'>
    <Navbar/>
    <Header/>
    {/* <Box/> */}
    <Skills/>
    {/* <Experience/> */}
    <Project/>
    {/* <WritingExperience/> */}
    <GuestWriting/>
    <Publications/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default Home