import { RiStarFill } from '@remixicon/react'
import myImage from '../assets/rohith.jpg'

function FeedbackCard({ feedback }) {
   return (
      <div className='mt-3 pt-3 border-t border-gray-700'>
         <div className='flex items-center'>
            <img src={myImage} alt='' width={32} className='rounded-full' />
            <p className='font-semibold ml-2'>{feedback.name}</p>
         </div>
         <div className='flex mt-2'>
            {[...Array(feedback.stars)].map(() => (
               <RiStarFill size={20} className='text-yellow-300' />
            ))}
            {[...Array(5 - feedback.stars)].map(() => (
               <RiStarFill size={20} className='text-white' />
            ))}
         </div>
         <p className='mt-2 text-xs text-zinc-400'>{feedback.review}</p>
      </div>
   )
}

export default FeedbackCard
