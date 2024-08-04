import react from '../assets/react.svg'
import myImage from '../assets/rohith.jpg'
import { RiSearchLine, RiMailLine, RiSettings3Line, RiNotification2Line } from '@remixicon/react'

function Header() {
   return (
      <div className='flex justify-between sticky py-5'>
         <div className='flex pl-5 content-center'>
            <img src={react} alt='' width={33} className='cursor-pointer' />
            <div className='px-9'>
               <div className='border border-gray-700 rounded-md bg-zinc-800 text-sm px-2 flex items-center searchbar'>
                  <RiSearchLine size={16} className='text-gray-300' />
                  <input
                     type='search'
                     size={40}
                     name='search'
                     placeholder='Search'
                     className='bg-transparent py-2 pl-2 placeholder:text-gray-300 focus:outline-none'
                  />
               </div>
            </div>
         </div>
         <div className='flex items-center pr-7'>
            <RiMailLine
               size={32}
               className='text-gray-300 rounded-full p-1.5 bg-zinc-600 cursor-pointer'
            />
            <RiSettings3Line
               size={32}
               className='text-gray-300 rounded-full p-1.5 bg-zinc-600 ml-3 cursor-pointer'
            />
            <RiNotification2Line
               size={32}
               className='text-gray-300 rounded-full p-1.5 bg-zinc-600 ml-3 cursor-pointer'
            />
            <img src={myImage} alt='' width={36} className='rounded-full ml-6 cursor-pointer' />
         </div>
      </div>
   )
}

export default Header
