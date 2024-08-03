import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
   return (
      <div className='text-white bg-gray-800 rounded-3xl'>
         <Header />
         <div className='flex'>
            <Sidebar />
            <Dashboard />
         </div>
      </div>
   )
}

export default App
