import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Results = (props) => {

  const id = props.match.params.id
  // console.log(id)
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${id}`)
      .then(resp => {
        const results = resp.data.events
        setResults(results)

        console.log(results)
      })
  }, [])

  return <div className="container-results-fixtures">

    <div className="resfixheader">
      <h1 className="myteamheader">Upcoming Fixtures</h1>
    </div>

    <div className="resultsfixtures">

      {results.map((result, index) => {

        return <div key={index} className="card text-center">
          <img className="card-img-top" src={result.strThumb} alt="Card image cap" />
          <div className="card-body">
            <h1 className="date"><strong>{result.dateEvent}</strong></h1>
            <h5 className="card-time">{result.strTime}</h5>
            <h4 className="card-text-venue"><strong>{result.strVenue}</strong></h4>
            <h5 className="card-round">Round {result.intRound}</h5>
            <h5 className="card-round">{result.strStatus}</h5>


          </div>
        </div>

      })}
    </div>




  </div >



}

export default Results