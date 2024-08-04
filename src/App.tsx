import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
   return (
      <div className='text-white bg-gray-800 rounded-3xl main-container'>
         <Header />
         <div className='sidebar-container'>
            <div className='sidebar'>
               <Sidebar />
            </div>
            <Dashboard />
            <div className='mobile-sidebar'>
               <Sidebar />
            </div>
         </div>
      </div>
   )
}

export default App
