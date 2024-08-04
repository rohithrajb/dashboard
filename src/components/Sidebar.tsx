import {
   RiBarChartBoxLine,
   RiClipboardLine,
   RiHome4Fill,
   RiShoppingBag4Line,
   RiWallet3Line,
} from '@remixicon/react'

function Sidebar() {
   return (
      <>
         <div className='selected'>
            <RiHome4Fill className='text-blue-400' />
         </div>
         <div className='unselected'>
            <RiBarChartBoxLine />
         </div>
         <div className='unselected'>
            <RiClipboardLine />
         </div>
         <div className='unselected'>
            <RiWallet3Line />
         </div>
         <div className='unselected'>
            <RiShoppingBag4Line />
         </div>
      </>
   )
}

export default Sidebar
