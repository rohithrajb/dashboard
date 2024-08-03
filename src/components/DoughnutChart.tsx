import { Doughnut } from 'react-chartjs-2'

function DoughnutChart({ chartData }) {
   return (
      <div className='h-20'>
         <Doughnut
            data={chartData}
            options={{
               plugins: {
                  title: {
                     display: false,
                  },
                  legend: {
                     display: false,
                  },
               },
               // maintainAspectRatio: false,
            }}
         />
      </div>
   )
}

export default DoughnutChart
