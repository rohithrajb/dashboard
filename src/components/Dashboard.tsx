import {
   RiArrowUpSFill,
   RiShoppingBasket2Fill,
   RiShoppingBag4Fill,
   RiArrowDownSFill,
   RiCrosshair2Line,
   RiArrowRightSLine,
   RiBowlLine,
   RiRestaurantFill,
} from '@remixicon/react'
import myImage from '../assets/rohith.jpg'
import { Data } from '../utils/Data'
import BarChart from './BarChart'
import { Chart } from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import FeedbackCard from './FeedbackCard'
import DoughnutChart from './DoughnutChart'

Chart.register(CategoryScale)

function Dashboard() {
   const barChartData = {
      labels: Data.map((data) => data.x),
      datasets: [
         {
            label: 'Users Gained ',
            data: Data.map((data) => data.userGain),
            backgroundColor: ['rgba(54, 162, 235)'],
            borderRadius: 20,
         },
      ],
   }

   const doughnutChartData = {
      labels: ['Red', 'Blue'],
      datasets: [
         {
            label: 'My First Dataset',
            data: [280, 105],
            backgroundColor: ['rgb(54, 162, 235)', 'rgb(36, 72, 130)'],
            hoverOffset: 0,
            borderWidth: 0,
            cutout: '75%',
         },
      ],
   }

   const orderDetails = [
      {
         name: 'Wade Warren',
         orderNo: 15478256,
         amount: 124.0,
         status: 'Delivered',
      },
      {
         name: 'Jane Cooper',
         orderNo: 48965786,
         amount: 365.02,
         status: 'Delivered',
      },
      {
         name: 'Guy Hawkins',
         orderNo: 78958215,
         amount: 45.88,
         status: 'Cancelled',
      },
      {
         name: 'Jane Cooper',
         orderNo: 48965786,
         amount: 365.02,
         status: 'Pending',
      },
      {
         name: 'Guy Hawkins',
         orderNo: 78958215,
         amount: 45.88,
         status: 'Cancelled',
      },
      {
         name: 'Jane Cooper',
         orderNo: 48965786,
         amount: 365.02,
         status: 'Pending',
      },
   ]

   const feedbackDetails = [
      {
         name: 'Jenny Wilson',
         stars: 4,
         review:
            'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      },
      {
         name: 'Diane Russell',
         stars: 3,
         review:
            'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
      },
      {
         name: 'Devon Lane',
         stars: 5,
         review:
            'Normaly wings are wings, but theirs are lean, meaty and tender, and so fresh. Would definitely recommend to my friends and family. Must try!',
      },
      {
         name: 'John Doe',
         stars: 1,
         review:
            'The food was not special. I order a french toast and got something else. Had to wait 15 more minutes because of their mistake.',
      },
      {
         name: 'Jenny Wilson',
         stars: 4,
         review:
            'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      },
      {
         name: 'Diane Russell',
         stars: 3,
         review:
            'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
      },
      {
         name: 'Devon Lane',
         stars: 5,
         review:
            'Normaly wings are wings, but theirs are lean, meaty and tender, and so fresh. Would definitely recommend to my friends and family. Must try!',
      },
      {
         name: 'John Doe',
         stars: 1,
         review:
            'The food was not special. I order a french toast and got something else. Had to wait 15 more minutes because of their mistake.',
      },
      {
         name: 'Jenny Wilson',
         stars: 4,
         review:
            'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      },
      {
         name: 'Diane Russell',
         stars: 3,
         review:
            'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
      },
      {
         name: 'Devon Lane',
         stars: 5,
         review:
            'Normaly wings are wings, but theirs are lean, meaty and tender, and so fresh. Would definitely recommend to my friends and family. Must try!',
      },
      {
         name: 'John Doe',
         stars: 1,
         review:
            'The food was not special. I order a french toast and got something else. Had to wait 15 more minutes because of their mistake.',
      },
   ]

   return (
      <div className='px-6 py-6 bg-black w-full overflow-x-auto dashboard'>
         <p className='text-start font-bold text-2xl'>Dashboard</p>
         <div className='grid-container mt-8 text-start'>
            <div className='cards'>
               <div className='basis-1/4 bg-gray-800 p-3 rounded-md'>
                  <RiShoppingBasket2Fill
                     size={36}
                     className='text-blue-500 bg-blue-900 p-1 rounded-md'
                  />
                  <p className='text-xs mt-2'>Total Orders</p>
                  <div className='flex justify-between mt-2'>
                     <p className='text-3xl font-bold'>75</p>
                     <div className='flex text-green-400 items-end'>
                        <RiArrowUpSFill size={16} />
                        <p className='text-xs font-bold'>3%</p>
                     </div>
                  </div>
               </div>
               <div className='basis-1/4 bg-gray-800 p-3 rounded-md'>
                  <RiShoppingBag4Fill size={36} className='text-green-400 bg-green-700 p-1 rounded-md' />
                  <p className='text-xs mt-2'>Total Delivered</p>
                  <div className='flex justify-between mt-2'>
                     <p className='text-3xl font-bold'>70</p>
                     <div className='flex text-red-400 items-end'>
                        <RiArrowDownSFill size={16} />
                        <p className='text-xs font-bold'>3%</p>
                     </div>
                  </div>
               </div>
               <div className='basis-1/4 bg-gray-800 p-3 rounded-md'>
                  <RiShoppingBag4Fill size={36} className='text-red-400 bg-red-700 p-1 rounded-md' />
                  <p className='text-xs mt-2'>Total Cancelled</p>
                  <div className='flex justify-between mt-2'>
                     <p className='text-3xl font-bold'>05</p>
                     <div className='flex text-green-400 items-end'>
                        <RiArrowUpSFill size={16} />
                        <p className='text-xs font-bold'>3%</p>
                     </div>
                  </div>
               </div>
               <div className='basis-1/4 bg-gray-800 p-3 rounded-md'>
                  <RiShoppingBasket2Fill
                     size={36}
                     className='text-pink-500 bg-pink-900 p-1 rounded-md'
                  />
                  <p className='text-xs mt-2'>Total Revenue</p>
                  <div className='flex justify-between mt-2'>
                     <p className='text-3xl font-bold'>$12k</p>
                     <div className='flex text-red-400 items-end'>
                        <RiArrowDownSFill size={16} />
                        <p className='text-xs font-bold'>3%</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className='bg-gray-800 rounded-md p-3 flex '>
               <div className='flex flex-col justify-between basis-8/12'>
                  <p className='text-xs'>Net profit</p>
                  <p className='font-bold text-4xl'>$ 6759.25</p>
                  <div className='flex text-green-400 items-end'>
                     <RiArrowUpSFill size={16} />
                     <p className='text-xs font-bold'>3%</p>
                  </div>
               </div>
               <div className='content-center basis-4/12 text-center'>
                  <div className='flex justify-center relative'>
                     <div className='font-bold absolute m-6'>
                        <p>70%</p>
                        <p className='text-[6px] font-normal'>Goal completed</p>
                     </div>
                     <DoughnutChart chartData={doughnutChartData} />
                  </div>
                  <p className='text-[6px] mt-1'>* The values here have been rounded off</p>
               </div>
            </div>
            <div className='bg-gray-800 rounded-md p-4'>
               <div className='flex justify-between'>
                  <p className='font-bold text-xl'>Activity</p>
                  <button className='flex bg-zinc-600 text-[10px] h-6 items-center p-3 rounded-full border border-zinc-500'>
                     <p>Weekly</p>
                     <RiArrowDownSFill size={12} />
                  </button>
               </div>
               <BarChart chartData={barChartData} />
            </div>
            <div className='bg-gray-800 rounded-md p-6'>
               <div className='flex'>
                  <div>
                     <RiCrosshair2Line
                        size={64}
                        className='text-orange-600 bg-orange-900 p-4 rounded-full'
                     />
                  </div>
                  <div className='flex justify-between w-full items-center pl-4'>
                     <p>Goals</p>
                     <RiArrowRightSLine size={28} className='bg-zinc-600 p-1 rounded-full' />
                  </div>
               </div>
               <div className='flex mt-4'>
                  <div>
                     <RiBowlLine size={64} className='text-blue-600 bg-blue-900 p-4 rounded-full' />
                  </div>
                  <div className='flex justify-between w-full items-center pl-4'>
                     <p>Popular Dishes</p>
                     <RiArrowRightSLine size={28} className='bg-zinc-600 p-1 rounded-full' />
                  </div>
               </div>
               <div className='flex mt-4'>
                  <div>
                     <RiRestaurantFill
                        size={64}
                        className='text-emerald-600 bg-emerald-900 p-4 rounded-full'
                     />
                  </div>
                  <div className='flex justify-between w-full items-center pl-4'>
                     <p>Menus</p>
                     <RiArrowRightSLine size={28} className='bg-zinc-600 p-1 rounded-full' />
                  </div>
               </div>
            </div>
            <div className='bg-gray-800 rounded-md p-4'>
               <p className='font-bold text-xl'>Recent Orders</p>
               <div className='flex mt-4 mx-1 text-xs font-semibold'>
                  <p className='basis-5/12'>Customer</p>
                  <p className='basis-3/12'>Order No.</p>
                  <p className='basis-3/12'>Amount</p>
                  <p className='basis-2/12'>Status</p>
               </div>
               {orderDetails.map((order) => (
                  <div className='flex mt-2 pt-2 mx-1 border-t border-t-gray-700 text-xs items-center'>
                     <div className='basis-5/12 flex items-center'>
                        <img src={myImage} alt='' width={32} className='rounded-full' />
                        <p className='ml-3'>{order.name}</p>
                     </div>
                     <p className='basis-3/12'>{order.orderNo}</p>
                     <p className='basis-3/12'>${order.amount}</p>
                     <div className='basis-2/12'>
                        <span
                           className={
                              order.status === 'Delivered'
                                 ? 'text-green-500 bg-emerald-800 px-2 rounded-full'
                                 : order.status === 'Cancelled'
                                 ? 'text-red-400 bg-rose-900 px-2 rounded-full'
                                 : order.status === 'Pending'
                                 ? 'text-yellow-500 bg-yellow-700 px-2 rounded-full'
                                 : ''
                           }>
                           {order.status}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
            <div className='bg-gray-800 rounded-md p-4'>
               <p className='font-bold text-xl mb-4'>Customer's Feedback</p>
               <div className='overflow-x-auto max-h-80 feedback-list'>
                  {feedbackDetails.map((feedback) => (
                     <FeedbackCard feedback={feedback} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dashboard
