import { useState } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export default function Keyword() {
  const [country, setCountry] = useState()
  const [resultados, setResultado] = useState([])
  console.log(resultados)
  console.log(country)

  const [dataChart, setDataChart] = useState({});
  console.log(dataChart)


  const send = async () => {
    let date = []
    let value = []
    if (country !== null)
      await axios.get(`http://localhost:3333/interestOverTime`)
        .then((response) => {
          for (let objData of response.data) {
            date.push(objData.formattedAxisTime)
            value.push(objData.value)
          }
        })
    setDataChart({
      labels: date,
      datasets: [{
        label: 'Value',
        data: value
      }]
    });
  }



  return (
    <div className="App">
      <div className="container">
        <h1 className='mt-5 mb-5'>Today Trends</h1>
        <div className='input-group mb-5 form-floating'>
          <input id='sel' name='country' onChange={e => { setCountry(e.target.value) }} />
          <button className="btn btn-dark" onClick={send} type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg></button>
        </div>
        <Line options={options} data={data} />
      </div>
    </div>
  )
}