import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Header from '../components/Header'
import Project from '../components/Project'
import GuestWriting from '../components/GuestWriting'
import Publications from '../components/Publications'

const Home:React.FC = () => {
  return (
    <main className='2xl:container 2xl:mx-auto bg-black font-poppins text-secondary px-2 overflow-x-hidden'>
    <Navbar/>
    <Header/>
    <Skills/>
    <Project/>
    <GuestWriting/>
    <Publications/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default Home