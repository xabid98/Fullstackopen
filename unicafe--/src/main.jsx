import  React,  { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Statistics = (props) => {
  <>
<h1>statistics</h1>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {(props.good-props.bad)/(props.bad+props.good+props.neutral)}</p>
      <p>Positive {props.good/(props.bad+props.good+props.neutral)}</p>
      
      </>
      }
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

  const handleClickGood=()=> {
    setGood(good+1)
  }
  const handleClickNeutral=()=> {
    setNeutral(neutral+1)
  }
  const handleClickBad=()=> {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
      </div>
      <h1>statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {(good-bad)/(bad+good+neutral)}</p>
      <p>Positive {good/(bad+good+neutral)}</p>
      
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Statistics/>
  </React.StrictMode>,
)
