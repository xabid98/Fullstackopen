import  React,  { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import PropTypes from 'prop-types';

const Statistics = ({good,neutral,bad,all,average,positive}) => {

  


return <>
    <p>Good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive} %</p>
    
</>

}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  all: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
  const handleClickGood=()=> setGood(good+1)
  const handleClickNeutral=()=> setNeutral(neutral+1)
  const handleClickBad=()=> setBad(bad+1)
  const all = good+neutral+bad
  const average = ((good - bad)/all)*100
  const positive = (good/all)*100


  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
      </div>
      <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>

      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
