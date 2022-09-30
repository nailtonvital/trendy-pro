import { useState } from 'react'
import './TodayTrends.css'
import axios from 'axios'



function TodayTrends() {
    const [country, setCountry] = useState()
    const [resultados, setResultado] = useState([])
    console.log(resultados)
    console.log(country)




    const send = async () => {
        if (country !== null)
            await axios.get(`http://localhost:3333/dailyTrends?geo=${country}`)
                .then((response) => {
                    setResultado(response.data)
                })
                .catch((err) => {
                    console.log(err);
                });
    }



    return (
        <div className="App">
            <div className="container">
                <h1 className='mt-5 mb-5'>Today Trends</h1>
                <div className='input-group mb-5 form-floating'>
                    <select className="form-select" id='sel' name='country' onChange={e => { setCountry(e.target.value) }}>
                        <option selected>Select a Country</option>
                        <option value="AU">Australia</option>
                        <option value="BR">Brazil</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IN">India</option>
                        <option value="JP">Japan</option>
                        <option value="US">United States</option>
                    </select>
                    <label for="sel">Country</label>
                    <button class="btn btn-dark" onClick={send} type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Query</th>
                            <th scope="col">Traffic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultados ? resultados.map((item, index) => {

                            return (<tr>
                                <th scope="row">{index + 1}</th>
                                <td >{item.query}</td>
                                <td>{item.traffic}</td>
                            </tr>)
                        }) : null}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TodayTrends