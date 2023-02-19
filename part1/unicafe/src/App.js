import {useState} from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, statistic}) => (
  <tr>
    <td>{text}</td> 
    <td>{statistic}</td>
  </tr>
  
)


const Statistics = ({good, neutral, bad}) => {
  if (good===0 && neutral===0 && bad===0) return (
    <p>No feedback given</p>
  )
  
  else return (
    <table>
      <StatisticLine text="good" statistic={good}/>
      <StatisticLine text="neutral" statistic={neutral}/>
      <StatisticLine text="bad" statistic={bad}/>
      <StatisticLine text="average" statistic={good-bad}/>
      <StatisticLine text="positive" statistic={(good/(good+neutral+bad))*100 + "%"}/>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
