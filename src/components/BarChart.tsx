import { Bar } from 'react-chartjs-2'

function BarChart({ chartData }) {
   return (
      <div className='chart-container mt-4 h-52'>
         <Bar
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
               scales: {
                  x: {
                     grid: {
                        display: false
                     }
                  }
               },
               maintainAspectRatio: false
            }}
         />
      </div>
   )
}

export default BarChart
