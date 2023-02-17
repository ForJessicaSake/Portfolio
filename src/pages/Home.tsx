import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Box from '../elements/Box'
import Header from '../elements/Header'

const Home:React.FC = () => {
  return (
    <main className='bg-background font-font text-secondary px-2'>
    <Navbar/>
    <Header/>
    <Box/>
    <Skills/>
    <Footer/>
    </main>
  )
}

export default Home