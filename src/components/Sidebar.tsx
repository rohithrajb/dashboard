import {
   RiBarChartBoxLine,
   RiClipboardLine,
   RiHome4Fill,
   RiShoppingBag4Line,
   RiWallet3Line,
} from '@remixicon/react'

function Sidebar() {
   return (
      <div>
         <div className='px-6 py-3 mt-1 mb-2 border-l-4 border-l-blue-400'>
            <RiHome4Fill className='text-blue-400' />
         </div>
         <div className='ml-1 text-gray-400'>
            <div className='px-6 py-3 mt-1 mb-2'>
               <RiBarChartBoxLine className='' />
            </div>
            <div className='px-6 py-3 mt-1 mb-2'>
               <RiClipboardLine className='' />
            </div>
            <div className='px-6 py-3 mt-1 mb-2'>
               <RiWallet3Line className='' />
            </div>
            <div className='px-6 py-3 mt-1 mb-2'>
               <RiShoppingBag4Line className='' />
            </div>
         </div>
      </div>
   )
}

export default Sidebar
