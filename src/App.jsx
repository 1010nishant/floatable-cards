// import './inde.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='relative w-full h-screen'>
    <Navbar/>
    <Foreground />
    <Background />
    </div>
  )
}

export default App
