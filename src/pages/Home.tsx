import Navbar from '../components/Navbar'
import Header from '../elements/Header'

const Home:React.FC = () => {
  return (
    <main className='bg-background font-font text-secondary px-2'>
    <Navbar/>
    <Header/>
    </main>
  )
}

export default Home